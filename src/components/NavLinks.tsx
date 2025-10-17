'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavLinksProps {
    onClick?: () => void
    className?: string
}

const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function NavLinks({ onClick, className = '' }: NavLinksProps) {
    return (
        <>
            {links.map((link) => (
                <motion.div key={link.href} variants={menuItemVariants}>
                    <Link
                        href={link.href}
                        className={`${className} hover:text-green-600 font-medium block`}
                        onClick={onClick}
                    >
                        {link.label}
                    </Link>
                </motion.div>
            ))}
        </>
    )
}
