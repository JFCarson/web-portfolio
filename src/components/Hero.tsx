'use client'

import { motion } from 'framer-motion'

function yearsExperience(): number {
    const startDate = new Date(2019, 6) // Months are 0-indexed, so 6 = July
    const today = new Date()

    let years = today.getFullYear() - startDate.getFullYear()

    return years
}

export default function Hero() {
    return (
        <section className="text-center">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold"
            >
                Hi, I’m <span className="text-green-500">Jack</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg text-gray-500 mt-4 max-w-xl mx-auto"
            >
                Front-end web developer and software engineer with over <span className="text-green-500">{yearsExperience()} years</span> experience working on modern and legacy software solutions.
            </motion.p>

            <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-8 px-6 py-3 bg-green-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
            >
                View My Work
            </motion.a>
        </section>
    )
}
