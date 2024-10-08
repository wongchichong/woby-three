import { MaterialNode } from './MaterialNode'
import { MeshToonMaterial, MeshToonMaterialParameters } from 'three/src/materials/MeshToonMaterial.js'
export { MeshToonMaterial } from 'three/src/materials/MeshToonMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Material'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        MeshToonMaterial: typeof MeshToonMaterial
    }
}

Three.MeshToonMaterial = MeshToonMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshToonMaterial: MeshToonMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshToonMaterial: WrapAsString<MeshToonMaterialParameters>
        meshToonMaterialParameters: WrapAsString<MeshToonMaterialParameters>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        meshToonMaterial: typeof _meshToonMaterial
        meshToonMaterialParameters: typeof _meshToonMaterialParameters
    }
}



consParams.meshToonMaterialParameters = {
    ...consParams.materialParameters,
    /** geometry color in hexadecimal. Default is 0xffffff. */
    ...(['color',
        'opacity',
        'gradientMap',
        'map',
        'lightMap',
        'lightMapIntensity',
        'aoMap',
        'aoMapIntensity',
        'emissive',
        'emissiveIntensity',
        'emissiveMap',
        'bumpMap',
        'bumpScale',
        'normalMap',
        'normalMapType',
        'normalScale',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'alphaMap',
        'wireframe',
        'wireframeLinewidth',
        'wireframeLinecap',
        'wireframeLinejoin',
        'fog',
    ] as const).toObject()
}


consParams.meshToonMaterial = { ...consParams.meshToonMaterialParameters }



const _meshToonMaterialParameters = ([...objProps.materialParameters,
    /** geometry color in hexadecimal. Default is 0xffffff. */
    'color',
    'opacity',
    'gradientMap',
    'map',
    'lightMap',
    'lightMapIntensity',
    'aoMap',
    'aoMapIntensity',
    'emissive',
    'emissiveIntensity',
    'emissiveMap',
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'alphaMap',
    'wireframe',
    'wireframeLinewidth',
    'wireframeLinecap',
    'wireframeLinejoin',
    'fog',
] as const).distinct()
objProps.meshToonMaterialParameters = _meshToonMaterialParameters


const _meshToonMaterial = ([...objProps.material,
    /**
     * @default 'MeshToonMaterial'
     */
    'type',
    /**
     * @default { 'TOON': '' }
     */
    'defines',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default null
     */
    'gradientMap',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'lightMap',
    /**
     * @default 1
     */
    'lightMapIntensity',
    /**
     * @default null
     */
    'aoMap',
    /**
     * @default 1
     */
    'aoMapIntensity',
    /**
     * @default new THREE.Color( 0x000000 )
     */
    'emissive',
    /**
     * @default 1
     */
    'emissiveIntensity',
    /**
     * @default null
     */
    'emissiveMap',
    /**
     * @default null
     */
    'bumpMap',
    /**
     * @default 1
     */
    'bumpScale',
    /**
     * @default null
     */
    'normalMap',
    /**
     * @default THREE.TangentSpaceNormalMap
     */
    'normalMapType',
    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    'normalScale',
    /**
     * @default null
     */
    'displacementMap',
    /**
     * @default 1
     */
    'displacementScale',
    /**
     * @default 0
     */
    'displacementBias',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default false
     */
    'wireframe',
    /**
     * @default 1
     */
    'wireframeLinewidth',
    /**
     * @default 'round'
     */
    'wireframeLinecap',
    /**
     * @default 'round'
     */
    'wireframeLinejoin',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
] as const).distinct()
objProps.meshToonMaterial = _meshToonMaterial

export type MeshToonMaterialProps = MaterialNode<MeshToonMaterial, MeshToonMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshToonMaterial: Partial<MeshToonMaterialParameters>
    }
}

defaults.meshToonMaterial = {}
