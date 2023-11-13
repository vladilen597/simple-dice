import { Canvas, useThree } from '@react-three/fiber'
import Plane from './Plane/Plane'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube/Cube'
import { Physics } from '@react-three/cannon'
import React, { Suspense, useRef, useState } from 'react'
import InvisibleWall from './InvisibleWall/InvisibleWall'
import './App.css'

const cameraPositions = [
  [-10, 7, 0],
  [0, 0, 0],
]

function App() {
  const cameraRef = useRef()
  const [cameraPosition, setCameraPosition] = useState(0)

  const click = () => {
    setCameraPosition(1)
    cameraRef.current.target.set(0, 0, 0)
  }

  return (
    <div className='App'>
      <button
        style={{ position: 'absolute', zIndex: 999, right: 0 }}
        onClick={click}
      >
        Change camera
      </button>
      <Suspense fallback={null}>
        <Canvas
          camera={{
            position: cameraPositions[cameraPosition],
            rotateX: Math.PI / 2,
            fov: 40,
          }}
          shadows
        >
          <OrbitControls ref={cameraRef} />
          <ambientLight intensity={1} color='#ffb' />
          <directionalLight
            position={[8, 5, 8]}
            intensity={1}
            castShadow
            color='white'
          />
          <directionalLight
            position={[0, 5, 0]}
            intensity={0.5}
            penumbra={1}
            angle={0.5}
            color='white'
          />

          <color attach='background' args={['#e2eeff']} />
          {/* <OrbitControls
            fov='30'
            enableRotate={false}
            enablePan={false}
            enableZoom={false}
          /> */}
          <Physics>
            <group>
              <InvisibleWall
                args={[6, 10, 6]}
                rotation={[0, Math.PI * 0.25, 0]}
                position={[-2.1, 5, -2.1]}
              />
              <InvisibleWall
                args={[6, 10, 6]}
                rotation={[0, Math.PI * -0.75, 0]}
                position={[2.1, 5, 2.1]}
              />
              <InvisibleWall
                args={[6, 10, 6]}
                rotation={[0, Math.PI * -0.25, 0]}
                position={[2.1, 5, -2.1]}
              />
              <InvisibleWall
                args={[6, 10, 6]}
                rotation={[0, Math.PI * 0.75, 0]}
                position={[-2.1, 5, 2.1]}
              />
              <Plane />
            </group>
            <Cube />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
