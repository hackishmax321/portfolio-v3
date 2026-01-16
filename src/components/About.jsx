import React, { useRef } from 'react'
import Card from '../plugins/cards/Card'
import { Globe } from '../plugins/3d/Globe'
import EmailButton from '../plugins/buttons/EmailButton'
import Frameworks from './Frameworks'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { motion } from 'motion/react'
import CVButton from '../plugins/buttons/CVButton'

function About() {
  const grid2Container = useRef()
  return (
    <section className='c-space section-spacing' id='profile'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600'>About Me</h2>
        <p className="text-gray-300 subtext">Personal & Professional details of me</p>
        <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] mt-12 gap-1.5">
            <div className='flex items-end grid-default-color grid-1 relative'>
            {/* Dark overlay container */}
            <div className="absolute inset-0 z-0 bg-black/40"></div>
            
           <img 
              src="/images/my-workspace.png"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
                        md:scale-[3] lg:scale-[2.5] md:inset-y-10 z-0
                        filter brightness-70"
            />

            <div className="z-10 text-left relative">
                <p className='headtext'>
                    Hi. My name is Ishan
                </p>
                <p>
                    A Software Engineering graduate from Plymouth University, hosted by NSBM Green University in Sri Lanka. 
                    With professional experience in both backend and frontend development roles, I specialize in JavaScript and Python frameworks. 
                    My career includes positions at RRD GO and CeylonLabs, where I delivered robust digital solutions. 
                </p>
                <p>
                    Currently, I work as a freelance developer, bringing enterprise-level expertise to independent projects.
                </p>
            </div>
            <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo z-20' />
        </div>

            <div  className='flex items-end grid-default-color grid-2'>
                <div className='flex items-center justify-center w-full h-full' ref={grid2Container}>
                  <p className='flex items-end text-5xl text-gray-500'>CODING IS FUN</p>

                  <Card  
                    text={'Design Patterns'}
                    styles={{top: '2%', left: '1%', rotate: '15deg'}}
                    containerRef={grid2Container}
                  />
                  <Card  
                    text={'Creativity'}
                    styles={{top: '-10%', left: '2%', rotate: '25deg'}}
                    containerRef={grid2Container}
                  />
                  <Card  
                    text={'User Experience'}
                    styles={{top: '-30%', left: '3%', rotate: '25deg'}}
                    contain
                    erRef={grid2Container}
                  />
                  <Card  
                    text={'Deployment & Hosting'}
                    styles={{top: '-60%', left: '7%', rotate: '25deg'}}
                    contain
                  />
                  <Card  
                    text={'Preformance'}
                    styles={{top: '50%', left: '10%', rotate: '35deg'}}
                    containerRef={grid2Container}
                  />
                  <Card  
                    text={'Quality Asuarance'}
                    styles={{top: '20%', left: '30%', rotate: '55deg'}}
                    containerRef={grid2Container}
                  />
                  <Card  
                    image={'/images/react.png'}
                    styles={{top: '10%', left: '20%', rotate: '15deg'}}
                    containerRef={grid2Container}
                  />
                  <Card  
                    image={'/images/node.png'}
                    styles={{top: '0%', left: '10%', rotate: '25deg'}}
                    containerRef={grid2Container}
                  />
                  <Card  
                    image={'/images/three-js.png'}
                    styles={{top: '0%', left: '10%', rotate: '25deg'}}
                    containerRef={grid2Container}
                  />
                  <Card  
                    image={'/images/python.jpg'}
                    styles={{top: '0%', left: '10%', rotate: '25deg'}}
                    containerRef={grid2Container}
                  />
                </div>
            </div>

            <div  className='flex items-start grid-default-color grid-3'>
              <div className='z-10 w-full text-left'>
                <p className="headtext">Locate Me</p>
                <p className='subtext'>
                     Based in Colombo with development services delivered across Sri Lanka. 
                    Click or hover on marked locations to see projects delivered in different regions.
                </p>
              </div>
              <figure className='absolute top-[50%] left-[50%]'><Globe /></figure>

            </div>

            <div  className='flex items-end grid-special-color grid-4'>
              <div className='flex flex-col justify-center items-center size-full gap-4'>
                <p className='headtext text-center'>Do you wish to contact me?</p>
                <EmailButton />
              </div>

            </div>

            <div  className='flex grid-default-color grid-5'>
              <div className='z-10 w-[50%] text-left'>
                <p className='headtext'>
                  My Technology Stack
                </p>
                <p className="subtext">
                  Both Frontend and backend technologies I use for my Projects
                </p>
              </div>
              <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Frameworks />
              </div>

            </div>

            <div  className='flex items-end grid-special-color grid-5'>
              <div className='flex flex-col justify-center items-center size-full gap-4'>
                <p className='headtext text-center'>Or Contact Me using...</p>
                <div className='flex w-full justify-center items-center gap-4'>
                  
                   {/* Facebook */}
                    <motion.div 
                        className='relative flex flex-col items-center'
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.a 
                            href='https://www.facebook.com/profile.php?id=100090402553135' 
                            target='_blank'
                            className='relative z-10 h-[55px] w-[55px] shadow-xl shadow-purple-800 px-0.5 py-0.5 rounded-2xl bg-purple-900 hover:bg-pink-600 transition flex justify-center items-center'
                            animate={{ y: 0 }}
                            whileHover={{
                                y: [0, -20, -15, -20, 0],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        >
                            <AiFillFacebook className='text-2xl' />
                        </motion.a>
                        
                        {/* Pixar-style shadow */}
                        <motion.div 
                            className='absolute w-[40px] h-[10px] bg-black/30 blur-md rounded-full bottom-[-5px]'
                            animate={{ scale: 1, opacity: 0.5 }}
                            whileHover={{
                                scale: [1, 0.8, 0.9, 0.8, 1],
                                opacity: [0.5, 0.3, 0.4, 0.3, 0.5],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        />
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div 
                        className='relative flex flex-col items-center'
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.a 
                            href='https://www.linkedin.com/in/ishan-gayantha-9b2352166/' 
                            target='_blank'
                            className='relative z-10 h-[55px] w-[55px] shadow-xl shadow-purple-800 px-0.5 py-0.5 rounded-2xl bg-purple-900 hover:bg-pink-600 transition flex justify-center items-center'
                            animate={{ y: 0 }}
                            whileHover={{
                                y: [0, -20, -15, -20, 0],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        >
                            <AiFillLinkedin className='text-2xl' />
                        </motion.a>
                        
                        {/* Pixar-style shadow */}
                        <motion.div 
                            className='absolute w-[40px] h-[10px] bg-black/30 blur-md rounded-full bottom-[-5px]'
                            animate={{ scale: 1, opacity: 0.5 }}
                            whileHover={{
                                scale: [1, 0.8, 0.9, 0.8, 1],
                                opacity: [0.5, 0.3, 0.4, 0.3, 0.5],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        />
                    </motion.div>

                    {/* GitHub */}
                    <motion.div 
                        className='relative flex flex-col items-center'
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.a 
                            href='https://github.com/hackishmax321' 
                            target='_blank'
                            className='relative z-10 h-[55px] w-[55px] shadow-xl shadow-purple-800 px-0.5 py-0.5 rounded-2xl bg-purple-900 hover:bg-pink-600 transition flex justify-center items-center'
                            animate={{ y: 0 }}
                            whileHover={{
                                y: [0, -20, -15, -20, 0],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        >
                            <AiFillGithub className='text-2xl' />
                        </motion.a>
                        
                        {/* Pixar-style shadow */}
                        <motion.div 
                            className='absolute w-[40px] h-[10px] bg-black/30 blur-md rounded-full bottom-[-5px]'
                            animate={{ scale: 1, opacity: 0.5 }}
                            whileHover={{
                                scale: [1, 0.8, 0.9, 0.8, 1],
                                opacity: [0.5, 0.3, 0.4, 0.3, 0.5],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div 
                        className='relative flex flex-col items-center'
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.a 
                            href='#' 
                            target='_blank'
                            className='relative z-10 h-[55px] w-[55px] shadow-xl shadow-purple-800 px-0.5 py-0.5 rounded-2xl bg-purple-900 hover:bg-pink-600 transition flex justify-center items-center'
                            animate={{ y: 0 }}
                            whileHover={{
                                y: [0, -20, -15, -20, 0],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        >
                            <AiFillMail className='text-2xl' />
                        </motion.a>
                        
                        {/* Pixar-style shadow */}
                        <motion.div 
                            className='absolute w-[40px] h-[10px] bg-black/30 blur-md rounded-full bottom-[-5px]'
                            animate={{ scale: 1, opacity: 0.5 }}
                            whileHover={{
                                scale: [1, 0.8, 0.9, 0.8, 1],
                                opacity: [0.5, 0.3, 0.4, 0.3, 0.5],
                                transition: {
                                    duration: 0.8,
                                    times: [0, 0.2, 0.4, 0.6, 1],
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                        />
                    </motion.div>

                </div>
              </div>

            </div>

            <div  className='flex grid-default-color grid-4'>
              <img src='/images/avatar.png' className='absolute
               left-1/2 top-1/2
               -translate-x-1/2 -translate-y-1/2
               scale-[1.75] md:scale-[3] lg:scale-[1.5]
               z-0 filter brightness-70' />
               <div className='absolute z-101 bottom-1 inset-x-0 flex justify-center'>
                <CVButton />
               </div>
              <div className='z-10 w-[50%] text-left'>
                <p className='headtext'>
                  My CV
                </p>
                <p className="subtext">
                  Download my CV in here
                </p>
              </div>
              <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                
              </div>

            </div>

            {/* <div  className='flex items-end grid-default-color grid-1'>

            </div>
            <div  className='flex items-end grid-default-color grid-1'>

            </div> */}
        </div>
    
    </section>
  )
}

export default About