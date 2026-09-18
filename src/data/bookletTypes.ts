export type BookletTextStatus = 'recovered' | 'needs-review'

export type BookletPageText = {
  heading: string
  alt: string
  paragraphs: string[]
  captions: string[]
  status: BookletTextStatus
  reviewNote?: string
}

export type BookletPage = BookletPageText & {
  src: string
}

export type EducationBooklet = {
  slug: string
  title: string
  description: string
  pages: BookletPage[]
}

export function attachBookletImages(
  folder: string,
  fileName: (index: number) => string,
  pages: BookletPageText[],
): BookletPage[] {
  return pages.map((page, index) => {
    const pageNumber = index + 1
    return {
      ...page,
      heading: page.heading.trim() || `Booklet page ${pageNumber}`,
      alt: page.alt.trim() || `Original booklet scan, page ${pageNumber}.`,
      src: `/education/booklets/${folder}/${fileName(pageNumber)}`,
    }
  })
}
