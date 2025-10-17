'use client'

import type { Role } from '@/lib/employment'
import { employmentHistory } from '@/lib/employment'
import { motion } from 'framer-motion'

interface Props {
    job: Job
    index: number
}

export default function JobCard({ job, index }: Props) {
    return (
        <motion.div
            className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
                {job.link ? (
                    <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline"
                    >
                        {job.place}
                    </a>
                ) : (
                    job.place
                )}
            </h3>

            <p className="text-sm text-gray-500 mb-1">{job.title}</p>

            <p className="text-sm text-gray-400 mb-2">
                {job.start} – {job.end ?? 'Present'}
            </p>

            {job.description?.map((item: DescriptionItem, i) =>
                item.type === 'p' ? (
                    <p key={i} className="text-gray-600 text-sm mb-2">
                        {item.content}
                    </p>
                ) : (
                    <ul
                        key={i}
                        className="list-disc ml-5 mb-2 text-gray-600 text-sm"
                    >
                        {item.content.map((bullet, j) => (
                            <li key={j}>{bullet}</li>
                        ))}
                    </ul>
                ),
            )}
        </motion.div>
    )
}
