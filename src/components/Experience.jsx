import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { experienceData } from '../constants/ExperienceData';

function Experience() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to index for highlighting
  const activeProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, experienceData.length - 1]
  );

  useEffect(() => {
    const unsubscribe = activeProgress.on("change", (latest) => {
      const index = Math.round(latest);
      if (index >= 0 && index < experienceData.length && index !== activeIndex) {
        setActiveIndex(index);
      }
    });
    return () => unsubscribe();
  }, [activeProgress, activeIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    initial: { scale: 1 },
    active: { 
      scale: 1.3,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    hover: { scale: 1.2 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <section id='experience' className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
            Professional Journey
          </h2>
          <p className="text-gray-300 subtext">My career timeline and milestones</p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 hidden md:block"
          />
          
          {/* Mobile vertical line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 md:hidden"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative space-y-12"
          >
            {experienceData.map((experience, index) => {
              const isActive = index === activeIndex;
              const isLeftSide = index % 2 === 0;
              
              return (
                <motion.div
                  key={experience.title}
                  variants={itemVariants}
                  className={`relative flex items-center md:items-start md:justify-between ${
                    isLeftSide ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    variants={dotVariants}
                    initial="initial"
                    animate={isActive ? "active" : "initial"}
                    whileHover="hover"
                    className={`relative z-10 w-6 h-6 rounded-full border-4 ${
                      isActive 
                        ? 'border-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50' 
                        : 'border-gray-700 bg-gray-800'
                    }`}
                    style={{
                      left: '32px',
                      transform: 'translateX(-50%)',
                      marginTop: '6px'
                    }}
                  />

                  {/* Year/Milestone Title */}
                  <div className={`md:w-5/12 ${
                    isLeftSide 
                      ? 'md:text-right md:pr-12 ml-16 md:ml-0' 
                      : 'md:text-left md:pl-12 ml-16 md:mr-0'
                  }`}>
                    <motion.div
                      animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                      className="inline-block"
                    >
                      <span className={`text-2xl font-bold px-4 py-2 rounded-lg ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                          : 'text-gray-300'
                      }`}>
                        {experience.title}
                      </span>
                    </motion.div>
                  </div>

                  {/* Experience Content */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={`content-${index}`}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`md:w-5/12 mt-6 md:mt-0 ${
                          isLeftSide 
                            ? 'md:text-left md:pl-12 ml-16 md:ml-0' 
                            : 'md:text-right md:pr-12 ml-16 md:mr-0'
                        }`}
                      >
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                              <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-500/10 rounded-full">
                                {experience.date}
                              </span>
                            </div>
                            <p className="text-gray-300 font-medium">{experience.company}</p>
                          </div>

                          {/* Responsibilities */}
                          <ul className="space-y-2">
                            {experience.contents.map((content, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start"
                              >
                                <span className="text-blue-400 mr-2 mt-1">▸</span>
                                <span className="text-gray-300">{content}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll to explore timeline</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
            >
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;