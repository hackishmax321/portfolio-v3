import React, { useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'

function ProjectDetails({
    title,
    description,
    long,
    images,
    features,
    github,
    live,
    year,
    category,
    tags,
    showHidden
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [activeTab, setActiveTab] = useState('content') // 'content', 'features', 'links'

    const handleImageClick = (index) => {
        setCurrentImageIndex(index)
    }

    const handleNextImage = () => {
        if (images && images.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
    }

    const handlePrevImage = () => {
        if (images && images.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
        }
    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm overflow-hidden p-4'>
            <div className='relative w-full max-w-2xl rounded-2xl border shadow-sm bg-linear-to-l from-midnight to-navy border-white/10 overflow-hidden max-h-[90vh] flex flex-col'>
                {/* Close Button */}
                <button onClick={showHidden} className='absolute top-3 right-3 z-20 text-white hover:text-gray-300 bg-red-500'>
                    <AiFillCloseSquare className='w-6 h-6' />
                </button>
                
                {/* Main Image Container */}
                <div className='relative w-full h-64 md:h-80 bg-gray-900 shrink-0'>
                    {images && images.length > 0 && (
                        <>
                            <img 
                                src={'/images/projects/' + images[currentImageIndex]} 
                                className='w-full h-full object-cover'
                                alt={`${title} - ${currentImageIndex + 1}`}
                            />
                            {/* Navigation arrows if multiple images */}
                            {images.length > 1 && (
                                <>
                                    <button 
                                        onClick={handlePrevImage}
                                        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all w-8 h-8 flex items-center justify-center'
                                    >
                                        ‹
                                    </button>
                                    <button 
                                        onClick={handleNextImage}
                                        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all w-8 h-8 flex items-center justify-center'
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>

                {/* Image Preview Tray */}
                {images && images.length > 1 && (
                    <div className='flex gap-2 p-3 bg-gray-900/50 border-t border-white/10 overflow-x-auto shrink-0'>
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => handleImageClick(index)}
                                className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                    index === currentImageIndex 
                                        ? 'border-blue-500 ring-2 ring-blue-500/30' 
                                        : 'border-transparent hover:border-gray-400'
                                }`}
                            >
                                <img 
                                    src={'/images/projects/' + image} 
                                    className='w-full h-full object-cover'
                                    alt={`${title} thumbnail ${index + 1}`}
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Tab Navigation */}
                <div className='flex border-b border-white/10 shrink-0'>
                    <button
                        onClick={() => setActiveTab('content')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                            activeTab === 'content'
                                ? 'text-white border-b-2 border-blue-500 bg-white/5'
                                : 'text-neutral-400 hover:text-white hover:bg-white/2'
                        }`}
                    >
                        Content
                    </button>
                    {features && features.length > 0 && (
                        <button
                            onClick={() => setActiveTab('features')}
                            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                                activeTab === 'features'
                                    ? 'text-white border-b-2 border-blue-500 bg-white/5'
                                    : 'text-neutral-400 hover:text-white hover:bg-white/2'
                            }`}
                        >
                            Features
                        </button>
                    )}
                    {(github || live) && (
                        <button
                            onClick={() => setActiveTab('links')}
                            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                                activeTab === 'links'
                                    ? 'text-white border-b-2 border-blue-500 bg-white/5'
                                    : 'text-neutral-400 hover:text-white hover:bg-white/2'
                            }`}
                        >
                            Links
                        </button>
                    )}
                </div>

                {/* Tab Content - Scrollable Area */}
                <div className='flex-1 overflow-y-auto'>
                    <div className='p-5 min-w-0'> {/* Added min-w-0 to prevent overflow */}
                        {/* Content Tab */}
                        {activeTab === 'content' && (
                            <div className='space-y-4'>
                                <div className='flex flex-wrap items-center justify-between gap-2'>
                                    <h1 className='text-2xl font-bold text-white wrap-break-word'>{title}</h1>
                                    <span className='px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white shrink-0'>
                                        {year}
                                    </span>
                                </div>

                                <div className='space-y-3'>
                                    <p className='text-neutral-400 wrap-break-word'>{description}</p>
                                    {long && <p className='text-neutral-400 wrap-break-word'>{long}</p>}
                                </div>

                                {/* Tags in Content Tab */}
                                {tags && tags.length > 0 && (
                                    <div className='pt-4'>
                                        <h3 className='mb-3 text-lg font-semibold text-white'>Technologies Used</h3>
                                        <div className='flex flex-wrap gap-3'>
                                            {tags.map((tag, index) => (
                                                <img 
                                                    key={index}
                                                    src={tag.path} 
                                                    alt={tag.name} 
                                                    className='rounded-lg size-10 hover:scale-110 transition-transform duration-200 hover:shadow-lg hover:shadow-blue-500/20 shrink-0'
                                                    title={tag.name}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Features Tab */}
                        {activeTab === 'features' && features && features.length > 0 && (
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-bold text-white'>Features</h2>
                                <ul className='space-y-3'>
                                    {features.map((feature, index) => (
                                        <li key={index} className='flex items-start'>
                                            <span className='inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-blue-500 shrink-0'></span>
                                            <span className='text-neutral-300 wrap-break-word'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Links Tab */}
                        {activeTab === 'links' && (github || live) && (
                            <div className='space-y-6'>
                                <h2 className='text-2xl font-bold text-white'>Project Links</h2>
                                
                                <div className='space-y-4'>
                                    {github && (
                                        <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                                            <h3 className='mb-2 font-semibold text-white'>Source Code</h3>
                                            <p className='mb-3 text-sm text-neutral-400'>
                                                View the complete source code and implementation details on GitHub.
                                            </p>
                                            <a 
                                                href={github}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors'
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                                View on GitHub
                                            </a>
                                        </div>
                                    )}

                                    {live && (
                                        <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                                            <h3 className='mb-2 font-semibold text-white'>Live Demo</h3>
                                            <p className='mb-3 text-sm text-neutral-400'>
                                                Experience the live version of this project in action.
                                            </p>
                                            <a 
                                                href={live}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors'
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Visit Live Site
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails