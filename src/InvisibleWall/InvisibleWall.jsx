import { usePlane } from '@react-three/cannon'
import React from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

const InvisibleWall = (props) => {
  const { camera } = useThree()
  const listener = new THREE.AudioListener()
  camera.add(listener)
  const audioLoader1 = new THREE.AudioLoader()
  const tapSound = new THREE.Audio(listener)

  audioLoader1.load('tap.mp3', (buffer) => {
    tapSound.setBuffer(buffer)
    tapSound.setLoop(false)
    tapSound.setVolume(1)
  })

  const [ref] = usePlane(() => ({
    ...props,
    collisionFilterGroup: 1,
    collisionFilterMask: 1,
    onCollide: () => {},
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry {...props} />
      <meshPhongMaterial opacity={0} transparent />
    </mesh>
  )
}

export default InvisibleWall
