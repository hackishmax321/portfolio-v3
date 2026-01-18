import React, { useState } from 'react'
import { AiOutlineRightSquare } from 'react-icons/ai'
import ProjectDetails from './ProjectDetails'


function Project({ project, setPreview, isMouseInSection, setIsModalOpen }) {
  const [hideModal, setHideModal] = useState(false)
  
  
  // Check if project and tags exist
  const hasTags = project && project.tags && project.tags.length > 0
  const showModel = () => {
    setHideModal(!hideModal)
    setIsModalOpen(!hideModal)
  }

  return (
    <>
      <div className='flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0' 
        onMouseEnter={() => {
            if(isMouseInSection&&project&&project.images&&project.images&&project.images.length>0)setPreview(project.images[1]);
        }}
        onMouseLeave={() => {if(isMouseInSection){setPreview('no-image-available-icon-vector.jpg')}}}
        >
        <div className='text-left'>
          <h1 className='text-2xl'>{project.title || 'Project Name'}</h1>

          <p className='subtext mb-6'>{project.description|| 'No Details'}</p>
          
          {/* Fixed the map function */}
          <div className='flex flex-wrap gap-3 mt-2 text-sand'>
            {hasTags && project.tags.map((tag) => (
              <span 
                key={tag.id} 
                className='px-3 py-1 text-sm rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors'
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        
        <button className='flex items-center gap-1 cursor-pointer hover-animation group' onClick={showModel}>
          More Details
          <AiOutlineRightSquare className='w-5 transition-transform group-hover:translate-x-1' />
        </button>
      </div>
      
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 w-full h-[1px]' />

      {hideModal&&<ProjectDetails 
        title={project.title}
        description={project.description}
        long={project.longdescription}
        live={project.live}
        github={project.github}
        features={project.features}
        images={project.images}
        year={project.year}
        category={project.category}
        tags={project.tags}
        showHidden={() => showModel(false)}
      />}
    </>
  )
}

export default Project