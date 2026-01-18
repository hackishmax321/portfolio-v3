import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function FlashLight({ flashlightOn = true, clickEvent, ...props }) {
  const { nodes, materials } = useGLTF('/models/flash_light.glb')
  
  // Create dynamic materials based on flashlight state
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: flashlightOn ? '#ffcc00' : '#666666',
    metalness: 0.9,
    roughness: 0.2,
    emissive: flashlightOn ? '#ff9900' : '#000000',
    emissiveIntensity: flashlightOn ? 0.3 : 0
  })
  
  const plasticMaterial = new THREE.MeshStandardMaterial({
    color: flashlightOn ? '#333333' : '#222222',
    metalness: 0.1,
    roughness: 0.8,
    emissive: flashlightOn ? '#444444' : '#000000',
    emissiveIntensity: flashlightOn ? 0.1 : 0
  })
  
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: flashlightOn ? '#ffffcc' : '#aaaaaa',
    metalness: 0,
    roughness: 0.1,
    transparent: true,
    opacity: 0.9,
    emissive: flashlightOn ? '#ffff99' : '#000000',
    emissiveIntensity: flashlightOn ? 0.5 : 0
  })

  return (
    <group {...props} dispose={null} onClick={clickEvent}>
      <group rotation={[-Math.PI / 2, -1.528, 0]} scale={0.819}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Metal parts */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={metalMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={metalMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={metalMaterial}
          />
          
          {/* Glass/light part */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={glassMaterial}
          />
          
          {/* Plastic parts */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={plasticMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={plasticMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={plasticMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={plasticMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={plasticMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={plasticMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={plasticMaterial}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/flash_light.glb')