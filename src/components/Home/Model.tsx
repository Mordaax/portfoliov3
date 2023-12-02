import React, { useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model() {
  const location = window.location.href
  const model = useGLTF("model.glb");
  
  /*const { materials } = useGLTF("http://localhost:3000/model.glb");
  //const scene = Array.isArray(model) ? model[0].scene : model.scene;
   useLayoutEffect(() => {
    Object.values(materials).forEach((material:any) => {
      material.roughness = 0
    })
  }, [])  */
  return (
     <primitive object={model.scene} />
  )
}