import { useBox } from '@react-three/cannon'
import React from 'react'
import { useTexture } from '@react-three/drei'
import dots1texture from './images/dots1.png'
import dots2texture from './images/dots2.png'
import dots3texture from './images/dots3.png'
import dots4texture from './images/dots4.png'
import dots5texture from './images/dots5.png'
import dots6texture from './images/dots6.png'

const Cube = () => {
  const boxWidth = 0.5
  const [dots1, dots2, dots3, dots4, dots5, dots6] = useTexture([
    dots1texture,
    dots2texture,
    dots3texture,
    dots4texture,
    dots5texture,
    dots6texture,
  ])
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 3, 0],
    args: [0.5, 0.5, 0.5],
    collisionFilterGroup: 1,
    collisionFilterMask: 1,
  }))

  return (
    <mesh
      onClick={() => {
        api.applyImpulse(
          [
            Math.random() < 0.5 ? Math.random() * -2 : Math.random() * 2,
            5,
            Math.random() < 0.5 ? Math.random() * -2 : Math.random() * 2,
          ],
          [0, 2, 0]
        )
      }}
      ref={ref}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[boxWidth, boxWidth, boxWidth]} />
      <meshStandardMaterial attach='material-0' map={dots1} color='#fcfad2' />
      <meshStandardMaterial attach='material-1' map={dots2} color='#fcfad2' />
      <meshStandardMaterial attach='material-2' map={dots3} color='#fcfad2' />
      <meshStandardMaterial attach='material-3' map={dots4} color='#fcfad2' />
      <meshStandardMaterial attach='material-4' map={dots5} color='#fcfad2' />
      <meshStandardMaterial attach='material-5' map={dots6} color='#fcfad2' />
    </mesh>
  )
}

export default Cube
