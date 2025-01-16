import { notFound } from 'next/navigation'

interface IconData {
  body: string
  width?: number
  height?: number
  viewBox?: string
}

interface IconsJson {
  info: {
    name: string
    total?: number
    height?: number
  }
  icons: Record<string, IconData>
}

interface CollectionMeta {
  id: string
  name: string
  icons: Record<string, IconData>
}

async function getCollectionMeta(id: string): Promise<CollectionMeta> {
  try {
    const response = await fetch(`https://api.iconify.design/${id}.json`)
    if (!response.ok) throw new Error(`Failed to fetch collection: ${id}`)
    const data: IconsJson = await response.json()
    
    return {
      id,
      name: data.info.name,
      icons: data.icons
    }
  } catch (error) {
    notFound()
  }
}

interface IconProps {
  iconId: string
  icon: IconData
}

const Icon = ({ iconId, icon }: IconProps) => {
  const viewBox = icon.viewBox || '0 0 24 24'
  const hasFill = icon.body.includes('fill=')
  const hasStroke = icon.body.includes('stroke=')

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg p-4 hover:bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className="h-8 w-8 text-foreground"
        style={{
          fill: hasFill ? 'currentColor' : 'none',
          stroke: hasStroke ? 'currentColor' : 'none',
          strokeWidth: hasStroke ? '2' : undefined,
        }}
        dangerouslySetInnerHTML={{ __html: icon.body }}
      />
      <span className="text-sm text-gray-600">{iconId}</span>
    </div>
  )
}

export default async function IconsPage({ params }: { params: { id: string } }) {
  const collection = await getCollectionMeta(params.id)
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-2xl font-bold">{collection.name}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {Object.entries(collection.icons).map(([iconId, icon]) => (
          <Icon key={iconId} iconId={iconId} icon={icon} />
        ))}
      </div>
    </div>
  )
}
