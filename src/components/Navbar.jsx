import React, { useState } from 'react'
import { AiFillCloseSquare, AiOutlineMenu } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

function Navigation() {
  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <a href='#home' className='nav-link'>HOME</a>
      </li>
      <li className='nav-li'>
        <a href='#profile' className='nav-link'>PROFILE</a>
      </li>
      <li className='nav-li'>
        <a href='#experience' className='nav-link'>EXPERIENCE</a>
      </li>
      <li className='nav-li'>
        <a href='#projects' className='nav-link'>PROJECTS</a>
      </li>
      <li className='nav-li'>
        <a href='#contact' className='nav-link'>CONTACT US</a>
      </li>
    </ul>
  )
}

function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='fixed inset-x-0 top-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2'>
          <a href='#' className='text-xl font-bold transition-colors text-neutral-50'>
            ISHAN GAYANTHA
          </a>
          <button
            className='flex sm:hidden cursor-pointer'
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <AiFillCloseSquare className='w-6 h-6 text-neutral-50' />
            ) : (
              <AiOutlineMenu className='w-6 h-6 text-neutral-50' />
            )}
          </button>
          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>

        {/* Use AnimatePresence for exit animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className='block overflow-hidden text-center sm:hidden'
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: {
                  opacity: { duration: 0.2 },
                  height: { duration: 0.4, ease: 'easeInOut' }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: {
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3, ease: 'easeInOut' }
                }
              }}
            >
              <motion.nav
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className='pb-5'
              >
                <Navigation />
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar