// / <reference path="../jsx-runtime" />
/** @jsxImportSource ../jsx-runtime */

import { $, $$, useEffect, useMemo } from "voby"
import { useFrame, useThree } from "../canvas3D"
import { render } from "../jsx-runtime/jsx-dev-runtime"
import { TextureLoader } from "three"
import "../orbitControls"


function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = $()
    const texture = new TextureLoader().load('../textures/usedSteel.png');
    // Hold state for hovered and clicked events
    const hovered = $(false)
    const clicked = $(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame(() => (ref().rotation.x += 0.01))


    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={() => $$(clicked) ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(event) => clicked(!clicked())}
            onPointerOver={(event) => hovered(true)}
            onPointerOut={(event) => hovered(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={() => $$(hovered) ? 'hotpink' : 'orange'}  />
        </mesh>
    )
}

export default function App() {
    const visible = $(true)    

    return (
        <canvas3D>
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 0, 0]} angle={0.15} penumbra={1} />
            <pointLight position={[0, 0, 0]}  />
            <Box position={[-1.2, 0, 0]} onClick={() => { visible(!visible()) }} />
            {/* {useMemo(() => visible() ? box : null)} */}
            <Box position={[1.2, 0, 0]} /> 
            <orbitControls enableDamping />
        </canvas3D>
    )
}
render(App, document.body)