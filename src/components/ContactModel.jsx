import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { FlashLight } from '../plugins/3d/FlashLight'
import { FaPowerOff, FaSun, FaMoon } from 'react-icons/fa'
import { motion, AnimatePresence } from 'motion/react'
import { db } from '../db/Firebase.config' // Adjust the import path as needed
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { Notify } from 'notiflix'

function ContactModel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [isFlashlightOn, setIsFlashlightOn] = useState(true)
  const [lightIntensity, setLightIntensity] = useState(3)
  const [flashlightColor, setFlashlightColor] = useState('#ffffcc') // Default yellow

  const handleFormChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, 'contact-queries'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'unread',
        userAgent: navigator.userAgent,
        pageUrl: window.location.href
      });

      // Success - Change flashlight to green
      setFlashlightColor('#00ff88');
      setIsFlashlightOn(true);
      
      // Show success message
      Notify.success('Message sent successfully!', {
        position: 'right-bottom',
        timeout: 4000,
        cssAnimationStyle: 'from-right',
        showOnlyTheLastOne: true,
        fontSize: '16px',
        borderRadius: '8px',
        background: '#10b981',
        textColor: '#ffffff',
        cssAnimation: true,
        cssAnimationDuration: 400,
        useIcon: true,
        useFontAwesome: true,
        fontAwesomeIconStyle: 'solid',
        fontAwesomeIcon: 'fa-check-circle'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset flashlight color after 3 seconds
      setTimeout(() => {
        setFlashlightColor('#ffffcc');
      }, 3000);

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Error - Change flashlight to red
      setFlashlightColor('#ff4444');
      setIsFlashlightOn(true);
      
      // Show error message
      Notify.failure('Failed to send message. Please try again.', {
        position: 'right-bottom',
        timeout: 5000,
        cssAnimationStyle: 'from-right',
        showOnlyTheLastOne: true,
        fontSize: '16px',
        borderRadius: '8px',
        background: '#ef4444',
        textColor: '#ffffff',
        cssAnimation: true,
        cssAnimationDuration: 400,
        useIcon: true,
        useFontAwesome: true,
        fontAwesomeIconStyle: 'solid',
        fontAwesomeIcon: 'fa-exclamation-circle'
      });

      // Reset flashlight color after 3 seconds
      setTimeout(() => {
        setFlashlightColor('#ffffcc');
      }, 3000);

    } finally {
      setLoading(false);
    }
  }

  const toggleFlashlight = () => {
    setIsFlashlightOn(!isFlashlightOn)
    // Reset to yellow when toggling manually
    if (!isFlashlightOn) {
      setFlashlightColor('#ffffcc');
    }
  }

  const adjustLightIntensity = (increment) => {
    const newIntensity = Math.max(0.1, Math.min(10, lightIntensity + increment))
    setLightIntensity(newIntensity)
  }

  return (
    <section className={`relative c-spacing sector-spacing transition-all duration-500 `} id='contact'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600'>
                  {isFlashlightOn ? "Let's Talk" : "Let's Talk in Dark"}
        </h2>
        <p className="text-gray-300 subtext">Send queries and other using form below</p>
        <div className='flex justify-center items-center'>
          <div className={`light transition-all duration-500`}>
            <div className='flex items-center justify-between mb-6'>
              <div>
                
              </div>
              
              {/* Flashlight Controls */}
              {/* <div className='flex flex-col items-center gap-3'>
                
              </div> */}
            </div>
            
            <div className={`flex items-center justify-center p-5 mx-auto border rounded-2xl transition-all duration-500 ${isFlashlightOn 
              ? 'border-yellow-500/30 bg-gradient-to-r from-gray-800/40 to-gray-900/40' 
              : 'border-gray-700/50 bg-gradient-to-r from-gray-900/60 to-gray-950/60'}`}>
              
              <div className='flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl'>
                {/* Form Section */}
                <div className='w-full lg:w-1/2'>
                  <form className='w-full text-left' onSubmit={handleSubmit}>
                    <div className='mb-5'>
                      <label htmlFor='name' className={`field-label transition-colors ${isFlashlightOn ? 'text-gray-200' : 'text-gray-400'}`}>
                        Full Name
                      </label>
                      <input  
                        name='name'
                        id='name'
                        type='text'
                        className={`field-input transition-all duration-300 ${isFlashlightOn 
                          ? 'field-input-focus bg-gray-800/50 border-gray-600' 
                          : 'bg-gray-900/70 border-gray-700'}`}
                        placeholder='eg: Ishan Gayantha'
                        autoComplete='name'
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className='mb-5'>
                      <label htmlFor='email' className={`field-label transition-colors ${isFlashlightOn ? 'text-gray-200' : 'text-gray-400'}`}>
                        Email
                      </label>
                      <input  
                        name='email'
                        id='email'
                        type='email'
                        className={`field-input transition-all duration-300 ${isFlashlightOn 
                          ? 'field-input-focus bg-gray-800/50 border-gray-600' 
                          : 'bg-gray-900/70 border-gray-700'}`}
                        placeholder='eg: your.email@mail.com'
                        autoComplete='email'
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className='mb-5'>
                      <label htmlFor='message' className={`field-label transition-colors ${isFlashlightOn ? 'text-gray-200' : 'text-gray-400'}`}>
                        Message in Detail
                      </label>
                      <textarea  
                        name='message'
                        id='message'
                        rows={5}
                        className={`field-input transition-all duration-300 ${isFlashlightOn 
                          ? 'field-input-focus bg-gray-800/50 border-gray-600' 
                          : 'bg-gray-900/70 border-gray-700'}`}
                        placeholder='Type your message here...'
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        disabled={loading}
                      />
                    </div>
                    <button 
                      className={`w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer transition-all duration-300 ${isFlashlightOn 
                        ? 'bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400' 
                        : 'bg-gradient-to-r from-purple-700 to-royal hover:from-purple-600 hover:to-royal/80'} text-white hover:scale-[1.02] active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          SENDING...
                        </span>
                      ) : 'SEND MESSAGE'}
                    </button>
                  </form>
                </div>

                {/* Flashlight Model Section */}
                <div className='w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-gray-700/50 bg-gradient-to-b from-gray-900/80 to-black/80'>
                  <div className='relative w-full h-full'>
                    <Canvas shadows>
                      {/* Camera */}
                      <PerspectiveCamera 
                        makeDefault 
                        position={[5, 3, 5]} 
                        fov={50}
                      />
                      
                      {/* Lighting based on flashlight state */}
                      {isFlashlightOn ? (
                        <>
                          {/* Flashlight beam effect with dynamic color */}
                          <spotLight
                            position={[0, 2, 0]}
                            angle={0.5}
                            penumbra={0.5}
                            intensity={lightIntensity * 3}
                            color={flashlightColor}
                            castShadow
                          />
                          
                          {/* Additional fill light with dynamic color */}
                          <pointLight 
                            position={[5, 5, 5]} 
                            intensity={lightIntensity * 0.5} 
                            color={flashlightColor}
                          />
                          
                          {/* Ambient light for flashlight mode */}
                          <ambientLight intensity={lightIntensity * 0.1} color="#ffeedd" />
                        </>
                      ) : (
                        <>
                          {/* Dim ambient light for dark mode */}
                          <ambientLight intensity={0.1} color="#333344" />
                          <pointLight 
                            position={[5, 5, 5]} 
                            intensity={0.2} 
                            color="#334488"
                          />
                        </>
                      )}
                      
                      {/* Flashlight Model */}
                      <Float
                        speed={2}
                        rotationIntensity={1}
                        floatIntensity={0.5}
                      >
                        <FlashLight 
                          position={[0, 0, 0]}
                          scale={0.8}
                          rotation={[0.2, 0.5, 0]}
                          flashlightOn={isFlashlightOn}
                          flashlightColor={flashlightColor}
                          clickEvent={() => {
                            setIsFlashlightOn(!isFlashlightOn)
                          }}
                        />
                      </Float>
                      
                      {/* Controls */}
                      <OrbitControls 
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={3}
                        maxDistance={15}
                        autoRotate={!isFlashlightOn}
                        autoRotateSpeed={1}
                      />
                      
                      {/* Environment */}
                      <Environment preset="city" />
                      
                      {/* Simple floor for shadows */}
                      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
                        <planeGeometry args={[10, 10]} />
                        <meshStandardMaterial 
                          color={isFlashlightOn ? "#444444" : "#222222"} 
                          roughness={0.8}
                        />
                      </mesh>
                    </Canvas>
                    
                    {/* Overlay label */}
                    <div className={`absolute flex flex-col justify-center items-center bottom-4 left-4 px-4 py-3 rounded-lg backdrop-blur-sm gap-2 ${isFlashlightOn 
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                      : 'bg-gray-800/50 text-gray-400 border border-gray-700/50'}`}>
                      
                      <motion.button 
                        onClick={toggleFlashlight}
                        className={`relative flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${isFlashlightOn 
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
                          : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        disabled={loading}
                      >
                        {/* Animated icon transition */}
                        <motion.div
                          key={isFlashlightOn ? "on" : "off"}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                        >
                          {isFlashlightOn ? (
                            <FaSun size={20} className='animate-pulse' />
                          ) : (
                            <FaMoon size={20} />
                          )}
                        </motion.div>
                        
                        <motion.div
                          animate={{ 
                            rotate: isFlashlightOn ? [0, 10, -10, 0] : 0 
                          }}
                          transition={{ 
                            duration: 0.5,
                            times: [0, 0.2, 0.4, 0.6]
                          }}
                        >
                          <FaPowerOff size={18} />
                        </motion.div>
                        
                        <motion.span
                          key={isFlashlightOn ? "off-text" : "on-text"}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className='ml-1 font-medium'
                        >
                          {isFlashlightOn ? 'Turn Off' : 'Turn On'}
                        </motion.span>
                        
                        {/* Background glow animation with dynamic color */}
                        {isFlashlightOn && (
                          <motion.div
                            className="absolute inset-0 rounded-lg -z-10"
                            style={{ 
                              backgroundColor: flashlightColor,
                              opacity: 0.3
                            }}
                            animate={{ 
                              opacity: [0.3, 0.6, 0.3],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                        )}
                      </motion.button>
                      
                      {/* Brightness controls with animation */}
                      <AnimatePresence>
                        {isFlashlightOn && (
                          <motion.div 
                            className='flex flex-col items-center gap-2 w-full'
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className='text-xs text-gray-300 font-medium'>
                              Brightness Control
                            </span>
                            <div className='flex items-center justify-center gap-2 w-full'>
                              <motion.button 
                                onClick={() => adjustLightIntensity(-0.5)}
                                className='px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50'
                                disabled={lightIntensity <= 0.1 || loading}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                -
                              </motion.button>
                              
                              <motion.div 
                                className="relative w-32 h-2 bg-gray-700 rounded-full overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                              >
                                <motion.div 
                                  className="absolute top-0 left-0 h-full"
                                  style={{ 
                                    background: `linear-gradient(to right, ${flashlightColor}, #ffaa00)`
                                  }}
                                  initial={{ width: '0%' }}
                                  animate={{ width: `${(lightIntensity / 10) * 100}%` }}
                                  transition={{ type: "spring", stiffness: 200 }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className='text-xs text-gray-300 font-medium z-10'>
                                    {lightIntensity.toFixed(1)}
                                  </span>
                                </div>
                              </motion.div>
                              
                              <motion.button 
                                onClick={() => adjustLightIntensity(0.5)}
                                className='px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50'
                                disabled={lightIntensity >= 10 || loading}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                +
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Status indicator with dynamic color */}
                      <motion.div 
                        className="flex items-center gap-1.5 mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full`}
                          style={{ 
                            backgroundColor: isFlashlightOn ? flashlightColor : '#6b7280'
                          }}
                          animate={{ 
                            scale: isFlashlightOn ? [1, 1.2, 1] : 1,
                            boxShadow: isFlashlightOn ? `0 0 8px ${flashlightColor}` : 'none'
                          }}
                          transition={{ 
                            duration: isFlashlightOn ? 1.5 : 0.3,
                            repeat: isFlashlightOn ? Infinity : 0
                          }}
                        />
                        <span className="text-xs font-medium">
                          {isFlashlightOn ? 'Flashlight Active' : 'Flashlight Inactive'}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background light effect when flashlight is on */}
        {/* {isFlashlightOn && (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none'>
            <div className='absolute inset-0 bg-gradient-radial from-yellow-500/5 via-transparent to-transparent'></div>
          </div>
        )} */}
    </section>
  )
}

export default ContactModel