'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
    Comment01Icon,
    AppleIcon,
    SmartPhone01Icon,
    YoutubeIcon,
    Facebook02Icon,
    GithubIcon
} from '@hugeicons/core-free-icons'

export function DashboardHeader() {
    return (
        <header className="h-[52px] w-full bg-[#3b82f6] text-white flex items-center px-4 justify-between z-50 shrink-0">
            {/* Left: Brand + Version */}
            <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo_black.png"
                        alt="Hestia"
                        width={24}
                        height={24}
                        className="h-6 w-auto brightness-200"
                    />
                </Link>
            </div>

            {/* Middle: Social Icons */}
            <div className="hidden lg:flex items-center gap-6">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={Comment01Icon} size={16} className="fill-white" />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={AppleIcon} size={16} className="fill-white" />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={SmartPhone01Icon} size={16} className="fill-white" />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={YoutubeIcon} size={16} className="fill-white" />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={Facebook02Icon} size={16} className="fill-white" />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={GithubIcon} size={16} className="fill-white" />
                </Link>
            </div>

            {/* Right: Nav Links */}
            <div className="flex items-center gap-5 text-[11px] font-medium">
                <Link href="/tutorials" className="hover:text-blue-100 transition-colors hidden sm:block">
                    Tutorials
                </Link>
                <Link href="/api-docs" className="hover:text-blue-100 transition-colors hidden sm:block">
                    API Documentation
                </Link>
                <Link href="/feature-requests" className="hover:text-blue-100 transition-colors hidden md:block">
                    Feature Requests
                </Link>
                <Link href="/feedback" className="hover:text-blue-100 transition-colors">
                    Feedback
                </Link>
            </div>
        </header>
    )
}
