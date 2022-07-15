/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Ep Digital Design (https://sketchfab.com/Epdigitaldesign)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/wireframe-3d-globe-20adb20e73ee4b68bc1207e1675b8891
title: Wireframe 3D Globe
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')