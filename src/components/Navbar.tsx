'use client'

import { useState } from 'react'
import NavLinks from '@/components/NavLinks'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const menuContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
}

const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full sticky top-0 left-0 bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-8">
                <Link href="/" className="text-xl font-bold">
                    Jack Carson
                </Link>

                <div className="hidden md:flex space-x-6 text-gray-600">
                    <NavLinks />
                </div>

                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden fixed top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex flex-col space-y-4 overflow-hidden origin-top z-40"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.25,
                                    when: 'beforeChildren',
                                    staggerChildren: 0.08,
                                },
                            },
                        }}
                    >
                        <NavLinks onClick={() => setIsOpen(false)} className="text-gray-600" />
                    </motion.div>
                )}
            </AnimatePresence>



        </nav>
    )
}
