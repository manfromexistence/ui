import { CollectionMeta, IconsJson } from './types'

export async function fetchCollection(id: string): Promise<IconsJson> {
  const response = await fetch(`https://api.iconify.design/${id}.json`)
  if (!response.ok) throw new Error('Failed to fetch collection')
  return response.json()
}

export async function getCollectionMeta(id: string): Promise<CollectionMeta> {
  const data = await fetchCollection(id)
  return {
    id,
    name: data.info?.name || id,
    icons: Object.keys(data.icons || {}),
    categories: {}
  }
}