import Link from 'next/link'
import { Logo } from './logo'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export const SiteFooter = () => (
    <footer className="pb-16">
        <div className="mx-auto max-w-7xl px-10 lg:px-6">
            <Link href="/" className="hover:bg-muted -m-2 inline-block rounded-full p-2 duration-200">
                <Logo className="size-5" />
            </Link>
            <div className="mt-2 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-gray-700 dark:text-gray-300">
                Designed by Tailus UI in
                <div className="flex items-start justify-center gap-2 text-center font-semibold text-gray-950 sm:gap-1 dark:text-white">
                    <div className="block">
                        <div className="block pb-2">DR Congo</div>
                        <div className="-mt-5 grow overflow-hidden">
                            <svg aria-hidden="true" className="w-16" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" strokeWidth="4"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#facc15"></stop>
                                        <stop offset="1" stopColor="#a855f7"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Button asChild variant="link" className="text-foreground decoration-primary -ml-4 gap-1">
                    <Link href="https://github.com/Meschacirung/cnblocks" target="_blank" className="text-sm">
                        GitHub
                        <ArrowUpRight className="!size-3.5 opacity-50" />
                    </Link>
                </Button>
                <ThemeToggle />
            </div>
        </div>
    </footer>
)
