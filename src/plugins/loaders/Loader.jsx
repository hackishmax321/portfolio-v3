import { Html, useProgress } from '@react-three/drei'
import React from 'react'

function Loader() {
    const { progress } = useProgress()
  return (
    <Html className='text-xl text center font-normal'>
        {progress} % LOADING
    </Html>
  )
}

export default Loader