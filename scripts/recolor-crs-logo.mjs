import fs from 'node:fs'
import zlib from 'node:zlib'
import path from 'node:path'

const ORIGINAL = path.resolve(
  'C:/Users/donmoneymaker/.cursor/projects/c-Users-donmoneymaker-cardiac-rhythm-specialists/assets/CRSLOGO-296ac8da-d75a-4ff4-bcf9-eded1393373f.png',
)
const DEST = path.resolve('public/crs-logo.png')
const NAVY = { r: 0x14, g: 0x20, b: 0x33 }
const RED = { r: 0x9b, g: 0x1b, b: 0x32 }

const ADAM7 = [
  { x0: 0, y0: 0, dx: 8, dy: 8 },
  { x0: 4, y0: 0, dx: 8, dy: 8 },
  { x0: 0, y0: 4, dx: 4, dy: 8 },
  { x0: 2, y0: 0, dx: 4, dy: 4 },
  { x0: 0, y0: 2, dx: 2, dy: 4 },
  { x0: 1, y0: 0, dx: 2, dy: 2 },
  { x0: 0, y0: 1, dx: 1, dy: 2 },
]

function paeth(a, b, c) {
  const p = a + b - c
  const pa = Math.abs(p - a)
  const pb = Math.abs(p - b)
  const pc = Math.abs(p - c)
  if (pa <= pb && pa <= pc) return a
  if (pb <= pc) return b
  return c
}

function unfilter(inflated, width, height, bpp) {
  const stride = width * bpp
  const raw = Buffer.alloc(height * stride)
  let i = 0
  const prev = Buffer.alloc(stride)
  for (let y = 0; y < height; y += 1) {
    const filter = inflated[i]
    i += 1
    const row = inflated.subarray(i, i + stride)
    i += stride
    const out = raw.subarray(y * stride, (y + 1) * stride)
    if (filter === 0) {
      row.copy(out)
    } else if (filter === 1) {
      for (let x = 0; x < stride; x += 1) {
        const left = x >= bpp ? out[x - bpp] : 0
        out[x] = (row[x] + left) & 255
      }
    } else if (filter === 2) {
      for (let x = 0; x < stride; x += 1) out[x] = (row[x] + prev[x]) & 255
    } else if (filter === 3) {
      for (let x = 0; x < stride; x += 1) {
        const left = x >= bpp ? out[x - bpp] : 0
        out[x] = (row[x] + Math.floor((left + prev[x]) / 2)) & 255
      }
    } else if (filter === 4) {
      for (let x = 0; x < stride; x += 1) {
        const a = x >= bpp ? out[x - bpp] : 0
        const b = prev[x]
        const c = x >= bpp ? prev[x - bpp] : 0
        out[x] = (row[x] + paeth(a, b, c)) & 255
      }
    } else {
      throw new Error(`Unsupported PNG filter ${filter}`)
    }
    out.copy(prev)
  }
  if (i !== inflated.length) {
    throw new Error(`Scanline parse leftover ${inflated.length - i}`)
  }
  return raw
}

function crc32(data) {
  let c = ~0
  for (let i = 0; i < data.length; i += 1) {
    c ^= data[i]
    for (let k = 0; k < 8; k += 1) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return (~c) >>> 0
}

function chunk(type, data) {
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const out = Buffer.alloc(12 + data.length)
  out.writeUInt32BE(data.length, 0)
  body.copy(out, 4)
  out.writeUInt32BE(crc32(body), 8 + data.length)
  return out
}

function hue(r, g, b) {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  if (max === min) return 0
  const d = max - min
  let h
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4
  return h * 60
}

function isLettering(r, g, b, a, x) {
  if (x < 148) return false
  if (a < 12) return false
  if (r < 80) return false
  if (g >= 60) return false
  if (r <= g + 40) return false
  if (r <= b + 20) return false
  const h = hue(r, g, b)
  if (h > 12 && h < 330) return false
  return true
}

function isRedLetter(x, y) {
  if (y <= 140 && x >= 475 && x <= 695) return true
  if (y >= 148 && x >= 176 && x <= 219) return true
  if (y >= 148 && x >= 384 && x <= 431) return true
  if (y >= 148 && x >= 605 && x <= 638) return true
  return false
}

const buf = fs.readFileSync(ORIGINAL)
let offset = 8
const idats = []
let w
let h
let interlace = 0
while (offset < buf.length) {
  const len = buf.readUInt32BE(offset)
  const type = buf.subarray(offset + 4, offset + 8).toString('ascii')
  const data = buf.subarray(offset + 8, offset + 8 + len)
  if (type === 'IHDR') {
    w = data.readUInt32BE(0)
    h = data.readUInt32BE(4)
    interlace = data[12]
  }
  if (type === 'IDAT') idats.push(data)
  offset += 12 + len
  if (type === 'IEND') break
}

const inflated = zlib.inflateSync(Buffer.concat(idats))
const bpp = 4
const pixels = Buffer.alloc(w * h * bpp)
let srcOff = 0

if (interlace === 1) {
  for (const pass of ADAM7) {
    const passW = pass.x0 < w ? Math.ceil((w - pass.x0) / pass.dx) : 0
    const passH = pass.y0 < h ? Math.ceil((h - pass.y0) / pass.dy) : 0
    if (passW === 0 || passH === 0) continue
    const passBytes = passH * (1 + passW * bpp)
    const passRaw = unfilter(inflated.subarray(srcOff, srcOff + passBytes), passW, passH, bpp)
    srcOff += passBytes
    for (let py = 0; py < passH; py += 1) {
      for (let px = 0; px < passW; px += 1) {
        const x = pass.x0 + px * pass.dx
        const y = pass.y0 + py * pass.dy
        passRaw.copy(pixels, (y * w + x) * bpp, (py * passW + px) * bpp, (py * passW + px) * bpp + bpp)
      }
    }
  }
} else {
  unfilter(inflated, w, h, bpp).copy(pixels)
}

let red = 0
let navy = 0
for (let y = 0; y < h; y += 1) {
  for (let x = 0; x < w; x += 1) {
    const o = (y * w + x) * 4
    const r = pixels[o]
    const g = pixels[o + 1]
    const b = pixels[o + 2]
    const a = pixels[o + 3]
    if (!isLettering(r, g, b, a, x)) continue
    const color = isRedLetter(x, y) ? RED : NAVY
    pixels[o] = color.r
    pixels[o + 1] = color.g
    pixels[o + 2] = color.b
    if (color === RED) red += 1
    else navy += 1
  }
}

const stride = w * bpp
const filtered = Buffer.alloc(h * (1 + stride))
for (let y = 0; y < h; y += 1) {
  const dest = y * (1 + stride)
  filtered[dest] = 0
  pixels.copy(filtered, dest + 1, y * stride, (y + 1) * stride)
}

const ihdr = Buffer.alloc(13)
ihdr.writeUInt32BE(w, 0)
ihdr.writeUInt32BE(h, 4)
ihdr[8] = 8
ihdr[9] = 6
ihdr[10] = 0
ihdr[11] = 0
ihdr[12] = 0

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(filtered, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
])

fs.writeFileSync(DEST, png)
console.log(`Red #9B1B32: ${red} pixels; navy #142033: ${navy} pixels`)
console.log(`Wrote ${DEST} (${png.length} bytes)`)
