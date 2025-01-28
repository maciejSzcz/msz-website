'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="bg-neutral-900 p-6 rounded-lg overflow-hidden relative"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs bg-neutral-800 px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
      <motion.div 
        className="flex gap-4 absolute bottom-6 right-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
          <Github size={20} />
        </a>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
            <ExternalLink size={20} />
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}

