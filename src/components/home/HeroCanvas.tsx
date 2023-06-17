'use client';

import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import Me from './Me';
import { OrbitControls, Preload } from '@react-three/drei';


const HeroCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Me position={[0, -.3, 0]}/>
        <OrbitControls
          enableZoom={true}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default HeroCanvas