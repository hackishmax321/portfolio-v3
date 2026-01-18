import React, { useState } from 'react'
import projects from '../constants/Projects'
import Project from '../plugins/cards/Project'
import { motion, useMotionValue, useSpring } from 'motion/react'

function Projects() {
    const [preview, setPreview] = useState(null)
    const [isMouseInSection, setIsMouseInSection] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Animate window
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x, {damping: 10, stiffness: 50})
    const springY = useSpring(y, {damping: 10, stiffness: 50})

    const handleMousePoint = (e) => {
        if (isMouseInSection) {
            x.set(e.clientX + 20)
            y.set(e.clientY + 20)
        }
    }

    const handleMouseEnter = () => {
        setIsMouseInSection(true)
    }

    const handleMouseLeave = () => {
        setIsMouseInSection(false)
        setPreview(null) // Also clear preview when leaving section
    }

    return (
        <section 
        id='projects'
            className='c-space section-spacing' 
            onMouseMove={handleMousePoint}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600'>My Projects</h2>
            <p className="text-gray-300 subtext">Projects I have done</p>
            <div className='bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 w-full h-[1px]'></div>
            <div className='relative'>
                {projects.map((project) => (
                    <Project 
                        key={project.id} 
                        project={project} 
                        setPreview={setPreview}
                        isMouseInSection={isMouseInSection}
                        setIsModalOpen={setIsModalOpen}
                    />
                ))}
            </div>

            {isMouseInSection && preview && !isModalOpen && (
                <motion.img 
                    className='fixed top-0 left-0 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-88 z-50'
                    src={'/images/projects/' + preview} 
                    style={{
                        x: springX,
                        y: springY,
                        opacity: isMouseInSection ? 1 : 0
                    }}
                    animate={{ opacity: isMouseInSection ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                />
            )}
        </section>
    )
}

export default Projects