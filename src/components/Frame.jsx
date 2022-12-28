import React, { useEffect, useRef, Suspense, useMemo } from "react";
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { Canvas, extend, useThree, useFrame, useLoader  } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import img from '../assets/wednesday.png';
import moonTexture from '../assets/moonTextureSmall.png';
import { Water } from 'three-stdlib';

extend({ Water })




const CameraController = () => {
  const { camera, gl } = useThree();


  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null; 
};



export function Ocean() { 
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
} 




function Scene() {
    const texture = useLoader(THREE.TextureLoader, img)
    const colorMap = useLoader(TextureLoader, moonTexture)
    const ref = useRef();
  
    useFrame(() => {
      ref.current.rotation.y += 0.01
    })



    return (
    <>
      <mesh 
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.9}
      position={[0,2,0]}
      >
        <CameraController />
        <ambientLight />
        <spotLight intensity={0.3} position={[5, 10, 50]} />
        <boxGeometry attach="geometry" args={[4, 4, 4]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <mesh 
        ref={ref}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
        position={[4.4, 4.5, 0]}
      >
        <CameraController />
        <ambientLight />
        <spotLight intensity={0.1} position={[5, 10, 50]} />
        <sphereGeometry attach="geometry"  args={[1, 62, 55]} />
        <meshStandardMaterial attach="material" map={colorMap} />
      </mesh>
      <Ocean />
    </>
    )
} 


function Portrait () {

  return (
    <Canvas camera={{ position: [0, 8, 40], fov: 35, near: 1, far: 20000 }} style={{zIndex: 999}}>
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
        <React.Suspense fallback={<></>}>
          <Scene />
        </React.Suspense>
    </Canvas>
  );
};

export default Portrait;