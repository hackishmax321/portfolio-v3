import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

function Card({text, styles, image, containerRef}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)
  
  const springRotate = useSpring(rotate, {
    damping: 25,
    stiffness: 200
  })
  
  const prevX = useRef(0)
  const prevY = useRef(0)
  const rotationMultiplier = 0.5 // Adjust this to control spin sensitivity

  const handleDrag = (event, info) => {
    // Calculate delta from previous position
    const deltaX = info.point.x - prevX.current
    const deltaY = info.point.y - prevY.current
    
    // Store current position for next calculation
    prevX.current = info.point.x
    prevY.current = info.point.y
    
    // Calculate rotation based on movement direction
    // More horizontal movement = more rotation
    const rotationChange = (deltaX * rotationMultiplier) + (deltaY * rotationMultiplier * 0.5)
    
    // Apply rotation
    if (Math.abs(rotationChange) > 0.1) {
      rotate.set(rotate.get() + rotationChange)
    }
  }
  
  const handleDragStart = (event, info) => {
    prevX.current = info.point.x
    prevY.current = info.point.y
  }
  
  const handleDragEnd = () => {
    // Add some momentum rotation based on final velocity
    // You can access info.velocity here if needed
  }

  const commonProps = {
    style: {
      ...styles,
      rotate: springRotate,
      x,
      y
    },
    whileHover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    },
    whileTap: { scale: 0.95 },
    drag: true,
    dragConstraints: containerRef,
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    dragElastic: 0.2,
    dragTransition: { 
      power: 0.2,
      timeConstant: 300 
    }
  }

  return image && !text ? (
    <motion.img 
      src={image} 
      className='absolute w-15 rounded-full ring ring-gray-700 font-extralight bg-storm m-[12rem] cursor-grab active:cursor-grabbing select-none'
      {...commonProps}
      dragPropagation={false}
    />
  ) : (
    <motion.div 
      className='absolute px-1 py-4 text-center text-sm rounded-full ring ring-gray-700 font-extralight bg-storm m-[12rem] cursor-grab active:cursor-grabbing select-none'
      {...commonProps}
      dragPropagation={false}
    >
      {text}
    </motion.div>
  )
}

export default Card