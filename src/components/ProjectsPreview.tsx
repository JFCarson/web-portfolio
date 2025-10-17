'use client'

import projects from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

let columnCount = 3
const previewProjects = projects
    .filter((project) => project.featured)
    .slice(0, columnCount)

if (previewProjects.length < columnCount) columnCount = previewProjects.length

const gridCols = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
}[columnCount]

export default function ProjectsPreview() {
    return (
        <section className="py-16 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">
                Featured Projects
            </h2>
            <div className={`grid ${gridCols} gap-6`}>
                {previewProjects.map((project, i) => (
                    <ProjectCard key={i} project={project} index={i} />
                ))}
            </div>
        </section>
    )
}
