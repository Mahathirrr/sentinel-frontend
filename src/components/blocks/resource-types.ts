export interface ResourceImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface ResourceItem {
  title: string
  description: string
  images: ResourceImage[]
  className: string
  fade: string[]
}
