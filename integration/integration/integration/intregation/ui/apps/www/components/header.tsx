import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";

export function Header() {
    return (
        <header className="w-[90%] mx-auto rounded-2xl border mt-4 p-3">
            {/* Logo */}
            <Link href="/" className="mr-4 flex items-center space-x-2 md:mr-6">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold md:inline-block">
                    {siteConfig.name}
                </span>
            </Link>
            {/* Navbar Items */}
            {/* Authentication */}
            {/* Mobile Menu */}
        </header>
    )
}
