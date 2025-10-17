'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
    project: Project
    index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white"
        >
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xl text-green-500 hover:underline"
              >
                {project.title}
              </a>
            ) : (
              <h2 className="font-semibold text-xl">{project.title}</h2>
            )}
            {project.for && (
                <h3 className="text-gray-500"><b>{project.for}</b></h3>
            )}
            <p className="text-sm text-gray-500 mt-2">
                {project.tech.join(` ${String.fromCharCode(8226)} `)}
            </p>

            {project.description && (
                <p className="text-sm text-gray-600 mt-4">
                    {project.description}
                </p>
            )}

            <div className="mt-6 flex gap-4">
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 text-sm hover:underline"
                    >
                        View &rarr;
                    </a>
                )}
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 text-sm hover:underline"
                    >
                        GitHub &#8599;
                    </a>
                )}
            </div>
        </motion.div>
    )
}
