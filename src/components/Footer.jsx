import React from 'react'
import { Link, Links } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { Rocket } from '../plugins/3d/Rocket'

function Footer() {
  return (
    <footer className='w-full mt-6 bg-gradient-to-br from-purple-900 to-indigo-800 text-white py-10 px-10 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
          
          {/* Links Section */}
          <div className='flex flex-col md:flex-row md:w-2/3 gap-8 md:gap-16'>
            
            {/* Important Links Column */}
            <div className='flex-1'>
              <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-purple-400">
                Important Links
              </h2>
              <div className='flex flex-col gap-3'>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/'}
                >
                  Home
                </Link>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/about'}
                >
                  About Us
                </Link>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/services'}
                >
                  Services
                </Link>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/contact'}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Other Links Column */}
            <div className='flex-1'>
              <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-purple-400">
                Other Links
              </h2>
              <div className='flex flex-col gap-3'>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/privacy'}
                >
                  Privacy Policy
                </Link>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/terms'}
                >
                  Terms of Service
                </Link>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/faq'}
                >
                  FAQ
                </Link>
                <Link 
                  className='text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-300'
                  to={'/blog'}
                >
                  Blog
                </Link>
              </div>
            </div>

          </div>

          {/* Logo/Graphics Section */}
          <div className='md:w-1/3'>
            <div className='rounded-2xl p-6 '>
              <div className='flex flex-col items-center justify-center h-full'>
                
                {/* Canvas/Graphics Section */}
                <div className='text-center w-full'>
                  <h3 className='text-2xl font-bold mb-4'>Explore More on Us</h3>
                  <div className='relative w-full h-50 md:h-45 rounded-xl overflow-hidden'>
                    <Canvas
                      camera={{ 
                        position: [10, 10, 5],
                        fov: 50 
                      }}
                    >
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} intensity={1} />
                      <Float
                        speed={2}
                        rotationIntensity={1}
                        floatIntensity={2}
                      >
                        <Rocket 
                          position={[0, -1, 0]}
                          scale={9}
                          rotation={[0.2, 0.5, 0]}
                        />
                      </Float>
                      <OrbitControls 
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                      />
                    </Canvas>
                  </div>
                  <p className='subtext'>Visit Us</p>
                  <Link to={'https://software-tech-solutions.onrender.com/'} target='_blank'>Official Website</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer