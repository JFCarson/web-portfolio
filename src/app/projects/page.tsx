'use client'

import { motion } from 'framer-motion'
import projects from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

const personalProjects: Project[] = projects.filter(
    (project) => project.type === 'personal',
)
const commercialProjects: Project[] = projects.filter(
    (project) => project.type === 'commercial',
)

export default function ProjectsPage() {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left"
            >
                Projects
            </motion.h1>

            {personalProjects.length > 0 && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-12"
                    >
                        Personal Projects
                    </motion.h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
                        {personalProjects.map((project, i) => (
                            <ProjectCard key={i} project={project} index={i} />
                        ))}
                    </div>
                </>
            )}

            {commercialProjects.length > 0 && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl font-bold mb-12 ${personalProjects.length > 0 ? 'mt-12' : ''}`}
                    >
                        Commercial Projects
                    </motion.h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
                        {commercialProjects.map((project, i) => (
                            <ProjectCard key={i} project={project} index={i} />
                        ))}
                    </div>
                </>
            )}
        </>
    )
}
