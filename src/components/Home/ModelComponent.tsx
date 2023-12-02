import { lazy, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'


import React, {  useRef, useState } from 'react'
import { Backdrop, ContactShadows, OrbitControls, Stage } from '@react-three/drei'

/* import { PerspectiveCamera } from 'three'; */


const ModelComponent = lazy(() => import("./Model"));

export default function Spinner({ ...props }) {
    return (
    
    <>
    <div style={{width:'100%', height:'420px', marginBottom:'20px',backgroundColor: 'transparent', margin: 'auto' }} >
        <color attach="background" args={['#15151a']} />
        <Canvas shadows dpr={[1, 2]} /* camera={camera} */>
          {/* <directionalLight position={[-1, 0, -5]} intensity={1} color="red" /> */}
          <directionalLight position={[-1, -2, -5]} intensity={0.2} color="#0c8cbf" />
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            {/* <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" /> */}
            <Stage /* controls={ref} */ preset="rembrandt" intensity={1} environment="city">

            <ModelComponent/>

            </Stage>
          </Suspense>
          <OrbitControls /* ref={ref}  */ target={[0,0,0]} autoRotate enablePan={false} minDistance={3} maxDistance={5} />
          
        </Canvas>
      </div>
    </>
  )
}
{/* <div style={{width:'100%', height:'420px', backgroundColor: 'transparent', margin: 'auto' }} >
    <Suspense fallback={"loading"}>
      <Canvas
        camera={{ position: [1, 1, 1] }}
      >
        <ModelComponent />
    
      </Canvas>
      <OrbitControls  target={[0,3,0]} autoRotate enablePan={false} minDistance={2} maxDistance={4} />

    </Suspense>
    </div> */}