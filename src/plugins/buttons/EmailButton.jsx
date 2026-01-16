import React, { useState } from 'react'
import { AiOutlineCopy, AiOutlineMail } from 'react-icons/ai'
import { AnimatePresence, motion } from 'motion/react'

function EmailButton() {
    const [copied, setCopied ] = useState(false);
    const email = "Your Email";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)

        setTimeout(() => setCopied(false), 5000)
    }
  return (
    <motion.button 
        whileHover={{y: -5}}
        whileTap={{scale: 1.05}}
        onClick={copyToClipboard} 
        className='relative px-1 py-4 text-sm rounded-full text-center font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>
        <AnimatePresence mode='wait'>
            {copied?<motion.p 
                key={'copied'}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.2, ease: 'easeInOut'}}
                className='flex items-center justify-center gap-2'>
                <AiOutlineMail />
                Copied Email
            </motion.p>
            :<motion.p 
                key={'copy'}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.2, ease: 'easeInOut'}}
                className='flex items-center justify-center gap-2'>
                <AiOutlineCopy />
                Copy Email
            </motion.p>}
        </AnimatePresence>
    </motion.button>
  )
}

export default EmailButton