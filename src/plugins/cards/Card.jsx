import React from 'react'
import {motion} from 'motion/react'

function Card({text, styles, image, containerRef}) {
  return image && !text ? (<motion.img src={image} className='absolute w-15 rounded-full ring ring-gray-700 font-extralight bg-storm m-[12rem] cursor-grab' style={styles}
    whileHover={{scale:1.05}}
    drag
    dragConstraints={containerRef}

  />):(
    <motion.div className='absolute px-1 py-4 text-center text-sm rounded-full ring ring-gray-700 font-extralight bg-storm m-[12rem] cursor-grab'
        style={styles}
        whileHover={{scale:1.05}}
        drag
        dragConstraints={containerRef}

    >

        {text}
    </motion.div>
  )
}

export default Card