import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { Raycaster, Vector2, MeshStandardMaterial } from 'three'

export function Model(props) {
  const { nodes } = useGLTF('/ball.glb')
  const { gl, camera } = useThree()
  const raycaster = useRef(new Raycaster())
  const mouse = useRef(new Vector2())

  const handleClick = (event) => {
    const { clientX, clientY } = event
    const canvasBounds = gl.domElement.getBoundingClientRect()

    mouse.current.x = ((clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1
    mouse.current.y = -((clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1

    raycaster.current.setFromCamera(mouse.current, camera)

    const intersects = raycaster.current.intersectObject(nodes.Sphere)
    if (intersects.length > 0) {
      const faceIndex = intersects[0].faceIndex
      console.log(`Clicked face index: ${faceIndex}`)
    }
  }

  useFrame(() => {
    gl.domElement.addEventListener('click', handleClick)
    return () => gl.domElement.removeEventListener('click', handleClick)
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.05}>
        <OrthographicCamera 
          makeDefault={false} 
          far={100000} 
          near={0} 
          position={[-135.088, -223.122, 935.26]} 
          rotation={[0.247, -0.145, 0.036]} 
        />
        
        <mesh
          geometry={nodes.Sphere.geometry}
          position={[7.529, 17.767, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.33}
        >
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/ball.glb')
