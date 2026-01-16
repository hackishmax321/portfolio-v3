import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

function ParallaxBackground() {
    const { scrollYProgress } = useScroll()
    const x = useSpring(scrollYProgress, { damping: 50 })
    const mountain1Y = useTransform(x, [0, 0.5], ['0%', "70%"])
    const planet1Y = useTransform(x, [0, 0.5], ['0%', "-20%"])
  return (
    <section className='absolute inset-0 bg-black/40 overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 w-full h-screen -z-50' style={{
            backgroundImage: "url(/images/background-2.png)",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
        }}>
        </div>

        {/* Clouds layer - positioned from 40% height to bottom */}
        <motion.div className='absolute inset-x-0 bottom-0 top-[-12%] -z-40' style={{
            backgroundImage: "url(/images/clouds.png)",
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            y: mountain1Y
        }}>
        </motion.div>

        {/* Planets */}
        <motion.div className='absolute inset-x-0 bottom-0 -z-30 flex items-center justify-center' style={{
            y: planet1Y
        }}>
            {/* Orange gradient mask */}
            {/* <div className='absolute inset-0 bg-gradient-to-t from-orange-500/30 via-orange-400/20 to-transparent'></div> */}
            
            {/* Planet image */}
            <div 
                className='relative w-8 h-8 mt-20 bottom-90 left-40' // w-48 = 12rem, adjust as needed
                style={{
                backgroundImage: "url(/images/moon-planets.png)",
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Orange overlay on just the planet */}
                <div className='absolute inset-0 bg-gradient-to-b from-orange-500/40 to-transparent mix-blend-color'></div>
            </div>
        </motion.div>
    </section>
  )
}

export default ParallaxBackground