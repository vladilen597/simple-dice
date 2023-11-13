import { useBox } from '@react-three/cannon'
import { Box } from '@react-three/drei'
import React from 'react'

const Plane = () => {
  const [ref] = useBox(() => ({
    rotation: [Math.PI * 1.5, 0, Math.PI * 0.25],
    args: [6, 6, 0.5],
    mass: 0,
    collisionFilterGroup: 1,
    collisionFilterMask: 1,
  }))

  return (
    <Box ref={ref} args={[6, 6, 0.5]} receiveShadow>
      <meshStandardMaterial color='springgreen' />
    </Box>
  )
}

export default Plane
