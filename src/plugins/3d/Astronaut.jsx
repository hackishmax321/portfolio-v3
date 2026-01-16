import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Astronut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/tenhun_falling_spaceman_fanart.glb')
  const { actions } = useAnimations(animations, group)

  // Fall animation variables
  const fallStartY = useRef(5); // Start position
  const fallEndY = props.position ? props.position[1] : -1; // Use prop or default
  const fallSpeed = 0.02; // Slower speed (was 0.05)
  const isFalling = useRef(true);
  const fallProgress = useRef(0); // Track progress for easing

  useEffect(() => {
    if(animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations])

  // Fall animation using useFrame
  useFrame((state, delta) => {
    if (isFalling.current && group.current) {
      // Use delta time for frame-rate independent animation
      const deltaTime = Math.min(delta, 0.05); // Cap delta for stability
      
      // Increase progress
      fallProgress.current += deltaTime * 0.3; // Control overall speed
      
      // Easing function for smoother motion (easeOutQuad)
      const easeOut = (t) => t * (2 - t);
      const easedProgress = Math.min(easeOut(fallProgress.current), 1);
      
      // Calculate new position with easing
      const newY = fallStartY.current + (fallEndY - fallStartY.current) * easedProgress;
      group.current.position.y = newY;
      
      // Optional: Add subtle rotation during fall (slower rotation)
      group.current.rotation.z += 0.0005 * deltaTime * 60;
      
      // Check if reached target position
      if (easedProgress >= 0.999) {
        group.current.position.y = fallEndY;
        isFalling.current = false;
        
        // Add slight bounce at the end
        group.current.position.y = fallEndY + 0.05 * Math.sin(state.clock.elapsedTime * 10);
      }
    }
  })

  // Initialize position
  useEffect(() => {
    if (group.current) {
      group.current.position.y = fallStartY.current;
      isFalling.current = true;
      fallProgress.current = 0;
    }
  }, [])

  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]} 
      scale={props.scale || 0.3}
      // Position will be controlled by animation, so remove static position
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                geometry={nodes.Cube001_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube001_0.skeleton}
              />
              <skinnedMesh
                name="Cube005_0"
                geometry={nodes.Cube005_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube005_0.skeleton}
              />
              <skinnedMesh
                name="Cube002_0"
                geometry={nodes.Cube002_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube002_0.skeleton}
              />
              <skinnedMesh
                name="Plane_0"
                geometry={nodes.Plane_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Plane_0.skeleton}
              />
              <skinnedMesh
                name="Cube008_0"
                geometry={nodes.Cube008_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube008_0.skeleton}
              />
              <skinnedMesh
                name="Cube004_0"
                geometry={nodes.Cube004_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube004_0.skeleton}
              />
              <skinnedMesh
                name="Cube003_0"
                geometry={nodes.Cube003_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube003_0.skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                geometry={nodes.Cube_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube_0.skeleton}
              />
              <skinnedMesh
                name="Cube009_0"
                geometry={nodes.Cube009_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube009_0.skeleton}
              />
              <skinnedMesh
                name="Cube011_0"
                geometry={nodes.Cube011_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube011_0.skeleton}
              />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/tenhun_falling_spaceman_fanart.glb')