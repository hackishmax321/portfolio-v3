import React, { useState } from 'react'
import { AiOutlineCopy, AiOutlineFilePdf, AiOutlineDownload } from 'react-icons/ai'
import { AnimatePresence, motion } from 'motion/react'

function CVButton() {
    const [downloading, setDownloading] = useState(false);
    const cvPath = "/docs/IshanGayanthaCV.pdf";
    const cvFileName = "Ishan_Gayantha_CV.pdf"; // You can customize the download filename

    const downloadCV = () => {
        setDownloading(true);
        
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = cvFileName; // Set the download filename
        link.target = '_blank'; // Open in new tab for safety
        
        // Append to body, trigger click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset downloading state after 3 seconds
        setTimeout(() => {
            setDownloading(false);
        }, 3000);
    }

    return (
        <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCV} 
            className='relative px-1 py-4 text-sm rounded-full text-center font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden disabled:opacity-70'
            disabled={downloading}
        >
            <AnimatePresence mode='wait'>
                {downloading ? (
                    <motion.p 
                        key={'downloading'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className='flex items-center justify-center gap-2'
                    >
                        <AiOutlineFilePdf className='animate-pulse' />
                        Downloading...
                    </motion.p>
                ) : (
                    <motion.p 
                        key={'download'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className='flex items-center justify-center gap-2'
                    >
                        <AiOutlineDownload />
                        Download CV
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default CVButton