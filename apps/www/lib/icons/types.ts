export interface IconData {
    body: string
    width?: number
    height?: number
    viewBox?: string
  }
  
  export interface CollectionMeta {
    id: string
    name: string
    icons: string[]
    categories?: Record<string, string[]>
  }
  
  export interface IconsJson {
    prefix: string
    info: {
      name: string
      total: number
      version: string
      height: number
      category: string
    }
    icons: Record<string, IconData>
  }