import { usePlane } from '@react-three/cannon'
import React from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

const InvisibleWall = (props) => {
  const { camera } = useThree()
  const listener = new THREE.AudioListener()
  camera.add(listener)
  const audioLoader1 = new THREE.AudioLoader()
  const audioLoader2 = new THREE.AudioLoader()
  const audioLoader3 = new THREE.AudioLoader()
  const audioLoader4 = new THREE.AudioLoader()
  const audioLoader5 = new THREE.AudioLoader()
  const audioLoader6 = new THREE.AudioLoader()
  const audioLoader7 = new THREE.AudioLoader()
  const sound1 = new THREE.Audio(listener)
  const sound2 = new THREE.Audio(listener)
  const sound3 = new THREE.Audio(listener)
  const sound4 = new THREE.Audio(listener)
  const sound5 = new THREE.Audio(listener)
  const sound6 = new THREE.Audio(listener)
  const sound7 = new THREE.Audio(listener)

  audioLoader1.load('1.mp3', (buffer) => {
    sound1.setBuffer(buffer)
    sound1.setLoop(false)
    sound1.setVolume(1)
  })

  audioLoader2.load('2.mp3', (buffer) => {
    sound2.setBuffer(buffer)
    sound2.setLoop(false)
    sound2.setVolume(1)
  })

  audioLoader3.load('3.mp3', (buffer) => {
    sound3.setBuffer(buffer)
    sound3.setLoop(false)
    sound3.setVolume(1)
  })

  audioLoader4.load('4.mp3', (buffer) => {
    sound4.setBuffer(buffer)
    sound4.setLoop(false)
    sound4.setVolume(1)
  })

  audioLoader5.load('5.mp3', (buffer) => {
    sound5.setBuffer(buffer)
    sound5.setLoop(false)
    sound5.setVolume(1)
  })

  audioLoader6.load('6.mp3', (buffer) => {
    sound6.setBuffer(buffer)
    sound6.setLoop(false)
    sound6.setVolume(1)
  })

  audioLoader7.load('7.mp3', (buffer) => {
    sound7.setBuffer(buffer)
    sound7.setLoop(false)
    sound7.setVolume(1)
  })
  const sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7]

  const [ref] = usePlane(() => ({
    ...props,
    collisionFilterGroup: 1,
    collisionFilterMask: 1,
    onCollide: () => {
      const block = sounds[Math.floor(Math.random() * sounds.length)].play()
      return () => {
        block.stop()
      }
    },
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry {...props} />
      <meshPhongMaterial opacity={0} transparent />
    </mesh>
  )
}

export default InvisibleWall
