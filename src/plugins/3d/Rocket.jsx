import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Rocket(props) {
  const { nodes, materials } = useGLTF('/models/rocket.glb')
  const groupRef = useRef()

  // Add subtle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05
    }
  })

  return (
    <>
      {/* Front lighting to illuminate the rocket */}
      <spotLight
        position={[5, 5, 5]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      {/* Fill light from the opposite side */}
      <pointLight position={[-5, 0, -5]} intensity={0.5} />
      
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.4} />
      
      <group ref={groupRef} {...props} dispose={null}>
        <group scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_white_0.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_red_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_metal_0.geometry}
              material={materials.metal}
            />
          </group>
          <group position={[20.443, 20.34, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_metal_0.geometry}
              material={materials.metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_window_glass_0.geometry}
              material={materials.window_glass}
            />
          </group>
          <group position={[0, -41.747, 0.146]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008_metal_0.geometry}
              material={materials.metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008_metal_0_1.geometry}
              material={materials.metal}
            />
          </group>
          <group position={[0.159, -52.228, 8.568]} rotation={[-Math.PI / 2, 0, 0]} scale={9.636}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_whiteSmoke_0.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_whiteSmoke_0_1.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_whiteSmoke_0_2.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_whiteSmoke_0_3.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_whiteSmoke_0_4.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_whiteSmoke_0_5.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_whiteSmoke_0_6.geometry}
              material={materials['white.Smoke']}
            />
          </group>
          <group
            position={[0.219, -51.549, -7.501]}
            rotation={[-Math.PI / 2, 0, 2.009]}
            scale={8.725}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_whiteSmoke_0.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_whiteSmoke_0_1.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_whiteSmoke_0_2.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_whiteSmoke_0_3.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_whiteSmoke_0_4.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_whiteSmoke_0_5.geometry}
              material={materials['white.Smoke']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_whiteSmoke_0_6.geometry}
              material={materials['white.Smoke']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_metal2_0.geometry}
            material={materials['metal.2']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_red_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={98.354}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_metal2_0.geometry}
            material={materials['metal.2']}
            position={[28.921, 21.844, 0]}
            rotation={[-Math.PI / 2, -0.175, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[9.242, -68.265, 16.27]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.779}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-6.108, -63.366, 1.602]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.806}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[8.037, -71.258, 9.053]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.61}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-1.58, -74.123, 13.925]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.654}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-3.675, -65.488, 21.601]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.654}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[2.853, -60.517, 17.388]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.61}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[1.753, -67.551, 4.538]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.963}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-11.382, -69.535, -1.107]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.654}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-2.944, -67.551, 10.181]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-8.111, -65.444, 11.311]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.779}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[4.149, -63.128, -17.658]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={3.422}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-8.898, -61.633, -12.242]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={2.54}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[3.62, -70.157, -19.141]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={2.363}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[2.893, -71.372, -8.462]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={1.497}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[9.203, -62.402, -2.603]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={1.497}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[6.953, -59.053, -11.119]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={2.363}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-3.138, -66.907, -15.13]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={1.777}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-13.386, -67.219, -10.598]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={1.497}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-1.542, -65.422, -8.982]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={0.969}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-2.721, -65.323, -4.149]}
            rotation={[0.738, 0, 2.252]}
            scale={[-3.422, 3.422, 3.422]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[4.802, -74.393, 0.81]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={1.497}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[2.893, -78.144, -2.732]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={0.682}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_whiteSmoke_0.geometry}
            material={materials['white.Smoke']}
            position={[-13.564, -70.157, 5.362]}
            rotation={[-Math.PI / 2, 0, 0.89]}
            scale={2.363}
          />
        </group>
      </group>
    </>
  )
}

// Make sure the path matches your actual model location
useGLTF.preload('/models/rocket.glb')