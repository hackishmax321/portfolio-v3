import React from 'react'
import { FlipWords } from './FlipWord'
import { motion } from 'motion/react'

function HeroText() {
    const words = ["Secure", "Robust"]
    const variants = {
        hidden: {x: -50, opacity:0},
        visible:{ x: -50, opacity:1}
    }
  return (
    <div className='z-10 mt-20 text-center lmd:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* For Desktops */}
        <div className='flex-col hidden md:flex c-space'>
            <motion.h1 
            initial={{x: -50, opacity:0}}
            animate={{x: 0, opacity:1}}
            transition={{delay: 1}}
            className='text-4xl font-medium'>Hi, It's Ishan</motion.h1>
            <div className='flex flex-col items-start'>
                <motion.p 
                variants={variants}
                initial={"hidden"}
                animate={{x: 0, opacity:1}}
                transition={{delay: 1.2}}
                className='text-5xl font-medium text-natural-300'>A Full-Stack Developer <br></br>
                Dedicated for Crafting
                </motion.p>
                <motion.div
                variants={variants}
                initial={"hidden"}
                animate={{x: 0, opacity:1}}
                transition={{delay: 1.3}}
                ><FlipWords className='text-8xl' words={words}/></motion.div>
                <motion.p 
                initial={{x: -50, opacity:0}}
                animate={{x: 0, opacity:1}}
                transition={{delay: 1.4}}
                className='text-4xl font-medium text-neutral-300'>Web & Digital Solutions</motion.p>
            </div>
        </div>

        {/* For Mobile Views */}
        <div className='flex flex-col space-y-6 md:hidden'>
            <motion.h1 
            initial={{x: -50, opacity:0}}
            animate={{x: 0, opacity:1}}
            transition={{delay: 1}}
            className='text-4xl font-medium'>Hi, It's Ishan</motion.h1>
            <div>
                <motion.p 
                initial={{x: -50, opacity:0}}
                animate={{x: 0, opacity:1}}
                transition={{delay: 1.2}}
                className='text-5xl font-black text-neutral-300'>A Full-Stack Developer <br></br>
                Dedicated for Crafting
                </motion.p>
                <motion.div
                variants={variants}
                initial={"hidden"}
                animate={{x: 0, opacity:1}}
                transition={{delay: 1.3}}
                ><FlipWords className='font-bold text-white text-7xl' words={words}/></motion.div>
                <motion.p 
                initial={{x: -50, opacity:0}}
                animate={{x: 0, opacity:1}}
                transition={{delay: 1.4}}
                className='text-4xl font-medium text-neutral-300'>Web & Digital Solutions</motion.p>
            </div>
        </div>

    </div>
  )
}

export default HeroText