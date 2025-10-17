'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function SocialAside() {
    const socials = [
        {
            name: 'GitHub',
            icon: <FaGithub size={22} />,
            url: 'https://github.com/JFCarson',
            color: 'hover:bg-gray-800 hover:text-white',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size={22} />,
            url: 'https://www.linkedin.com/in/jackfgcarson',
            color: 'hover:bg-blue-600 hover:text-white',
        },
    ]

    return (
        <>
            <aside className="hidden md:flex fixed right-4 bottom-6 flex-col items-center gap-4 z-50">
                {socials.map((social, i) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-200 text-gray-700 ${social.color} transition`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                    >
                        {social.icon}
                    </motion.a>
                ))}
                <motion.div
                    className="w-px h-16 bg-gray-300 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                />
            </aside>

            <aside className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 z-50">
                {socials.map((social, i) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-200 text-gray-700 ${social.color} transition`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </aside>
        </>
    )
}
