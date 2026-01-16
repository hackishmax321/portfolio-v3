import React, { Suspense } from 'react'
import HeroText from '../plugins/texts/HeroText'
import ParallaxBackground from '../plugins/backgrounds/ParallaxBackground'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { Astronut } from '../plugins/3d/Astronaut'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import Loader from '../plugins/loaders/Loader'

function Hero() {
  const isMobile = useMediaQuery({maxWidth: 853})

  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText />
        <ParallaxBackground />

        <figure className="absolute inset-0" style={{width: "100vw", height: "100vh"}}>
          <Canvas>
            <Suspense fallback={<Loader/>}>
              <Float>
                <Astronut  scale={isMobile ? 0.23 : 0.5} position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}/>
              </Float>
            </Suspense>
            <Wiggle />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              // zoomSpeed={0.6}
              minDistance={3}
              maxDistance={7}
              minZoom={3}
              maxZoom={7}
              makeDefault
            />
          </Canvas>
        </figure>

    </section>
  )
}

const Wiggle = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x/10 , 1+state.mouse.y/10  , 5], // Increased Z position for better initial view
      0.5,
      delta
    )
  })
  return null
}

export default Hero