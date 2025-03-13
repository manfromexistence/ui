'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const BlocksNav = ({ categories }: { categories: string[] }) => {
    const pathname = usePathname()

    return (
        <div className="dark:border-border/50 relative z-50 border-b">
            <div className="mx-auto max-w-7xl">
                <nav className="flex items-center lg:-mx-3">
                    <ul className="relative -mb-px flex h-11 snap-x snap-proximity scroll-px-6 items-center gap-6 overflow-x-auto overflow-y-hidden px-6 lg:scroll-px-2 lg:gap-5">
                        {categories.map((category) => (
                            <li key={category} className={cn('flex h-full snap-start items-center border-b border-b-transparent', pathname === `/${category}` && 'border-primary')}>
                                <Link href={`/${category}`} prefetch={true} className={cn(pathname === `/${category}` && 'text-foreground!', 'hover:bg-muted dark:text-muted-foreground hover:text-foreground flex h-7 w-fit items-center text-nowrap rounded-full px-1 text-sm text-zinc-700 lg:-mx-2 lg:px-3')}>
                                    <span className="block w-max text-nowrap capitalize">{category}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default BlocksNav
