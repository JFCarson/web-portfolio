import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import SocialAside from '@/components/SocialAside'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Jack Carson | Software Engineer',
    description: 'Portfolio website for Jack Carson, software engineer and web developer.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                <SocialAside />
                <main className="pt-16 md:pt-24 pb-12 flex flex-col items-center px-6 w-full max-w-6xl mx-auto">
                  {children}
                </main>
            </body>
        </html>
    )
}
