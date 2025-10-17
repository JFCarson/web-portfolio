'use client'

import { motion } from 'framer-motion'

import employmentHistory from '@/lib/employment'
import educationHistory from '@/lib/education'
import RoleCard from '@/components/RoleCard'

const sortedJobs = [...employmentHistory].sort((a, b) => {
    const dateA = new Date(a.start)
    const dateB = new Date(b.start)
    return dateB.getTime() - dateA.getTime()
})

const sortedEducation = [...educationHistory].sort((a, b) => {
    const dateA = new Date(a.start)
    const dateB = new Date(b.start)
    return dateB.getTime() - dateA.getTime()
})

export default function AboutPage() {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left"
            >
                About Me
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center"
            >
                Hi, I'm <span className="text-green-500">Jack</span>, an innovative software engineer specialising in front-end web development, who can
                confidently produce industry-standard systems within tight deadlines. I have meticulous
                eye for producing not only the best functioning, but the best looking solutions in
                order to leave a desirable impression upon your clients.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap justify-center content-center gap-4"
            >
                {[
                    'HTML',
                    'XML',
                    'CSS',
                    'LESS',
                    'Bootstrap',
                    'Tailwind CSS',
                    'JavaScript',
                    'TypeScript',
                    'JQuery',
                    'Node.js',
                    'Express',
                    'EJS',
                    'React.js',
                    'React Native',
                    'Next.js',
                    'JSON',
                    'JSP',
                    'JSTL',
                    'PHP',
                    'Python',
                    'Flask',
                    'Django',
                ].map((tech) => (
                    <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, opacity: 0.85 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full text-sm md:text-base font-medium"
                    >
                        {tech}
                    </motion.span>
                ))}
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 mt-12"
            >
                Employment History
            </motion.h2>
            <motion.div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {sortedJobs.map((job, i) => (
                    <RoleCard key={i} job={job} index={i} />
                ))}
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 mt-12"
            >
                Educational History
            </motion.h2>
            <motion.div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {sortedEducation.map((job, i) => (
                    <RoleCard key={i} job={job} index={i} />
                ))}
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 mt-12"
            >
                Hobbies
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap justify-center content-center gap-4 mb-12"
            >
                <p>
                    I have always enjoyed tinkering with things, especially in the realm of computing. In
                    recent days, this has manifested as a fascination with AI technologies, but in the past
                    has been anything from VR, to coding random ideas that may pop into my head, to
                    sitting down and enjoying a video game.
                </p>
                <p>
                    I would also consider myself a somewhat proficient musician; I spend a lot of my free
                    time singing, as well as playing several instruments at varying skill levels, including
                    guitar, bass, mandolin, drums, and whistles.
                </p>
                <p>
                    My degree also qualifies me as a videographer, which is something else I enjoy doing
                    in my spare time; I mostly enjoy post-production as it is in front of a computer screen,
                    where I feel the most comfortable.
                </p>
                <p>
                    When I do manage to get away from being behind my desk, I love spending time with
                    close friends, and socializing to make new ones! I enjoy attending gigs and festivals,
                    trying new foods, hiking, and even the odd shopping spree on the rare occasion that
                    temptation gets the better of me.
                </p>
            </motion.div>
        </>
    )
}
