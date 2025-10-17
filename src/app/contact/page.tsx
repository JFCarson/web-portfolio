'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState<
        'idle' | 'loading' | 'success' | 'error'
    >('idle')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('https://formspree.io/f/xgvndrby', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error('Submission failed')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section className="w-full max-w-3xl mx-autos text-center md:text-left">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
            >
                Get in Touch
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10"
            >
                Have a project, question, or just want to say hello? Drop me a
                message below and I’ll get back to you as soon as possible.
            </motion.p>

            {status === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-green-600 font-medium text-lg mt-8"
                >
                    Thanks for reaching out! I’ll get back to you soon.
                </motion.div>
            ) : (
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="space-y-6"
                >
                    <div>
                        <label
                            className="block text-left text-gray-700 font-medium mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label
                            className="block text-left text-gray-700 font-medium mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label
                            className="block text-left text-gray-700 font-medium mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
                        whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
                        className={`bg-green-500 text-white px-8 py-3 rounded-lg font-medium shadow transition ${
                            status === 'loading'
                                ? 'opacity-70 cursor-not-allowed'
                                : 'hover:bg-green-600'
                        }`}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </motion.button>

                    {status === 'error' && (
                        <p className="text-red-500 text-sm mt-2">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </motion.form>
            )}
        </section>
    )
}
