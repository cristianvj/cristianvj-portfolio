'use client';

import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Me from './Me';
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';


const HeroCanvas = () => {

  const [position, setPosition] = useState<[number, number, number]>([1, -0.3, 0.2]);

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth <= 768) {
        // Mobile
        setPosition([0.3, -0.5, -1]);
      } else if (window.innerWidth <= 1024) {
        // Tablet
        setPosition([0.5, -1, -1.5]);
      } else {
        // Desktop
        setPosition([0.7, -0.3, 0]);
      }
    };

    window.addEventListener('resize', updatePosition);
    updatePosition(); // Call the function to set initial position based on current window size

    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2.3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Me position={position} rotation={[0, 0.5, 0]}/>
        <OrbitControls
          enableZoom={false}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default HeroCanvas