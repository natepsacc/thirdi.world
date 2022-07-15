import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useGLTF, softShadows, ScrollControls, useScroll, useTexture } from '@react-three/drei';

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  const scroll = useScroll()
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <>
    <mesh ref={boxRef} rotation-z={Math.PI * Math.random()} rotation-x={Math.PI * Math.random()} rotation-y={Math.PI * 0.5}>

      <primitive object={gltf.scene} scale={0.015} />
      </mesh>
    </>
  );
};

export default function ThreeDL() {

  return (
    <div className='threedl' >

      <Canvas>
          <Model />

      </Canvas>
    </div>
  );
}
