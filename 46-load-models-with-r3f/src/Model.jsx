import { Clone, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useLoader } from '@react-three/fiber'

export default function Model() {

    // useLoader(
    //     GLTFLoader,
    //     './hamburger.glb',
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader()
    //         dracoLoader.setDecoderPath('./draco/')
    //         loader.setDRACOLoader(dracoLoader)
    //     })

    //UseGLTF uses gets draco from CDN
    const model = useGLTF('./hamburger-draco.glb')

    return <>
    <Clone object={model.scene} scale={0.35} position-x={-4}/>
    <Clone object={model.scene} scale={0.35} position-x={0}/>
    <Clone object={model.scene} scale={0.35} position-x={4}/>

    </>
}

//Will try to load the model as soon as model.jsx tries to load
useGLTF.preload('./hamburger-draco.glb')