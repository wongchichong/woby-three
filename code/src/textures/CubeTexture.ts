import { Node } from '../../three-types'
import {
    ColorSpace, CubeReflectionMapping, CubeTextureMapping, MagnificationTextureFilter,
    MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping
} from 'three/src/constants.js'
import { CubeTexture } from 'three/src/textures/CubeTexture.js'
export { CubeTexture } from 'three/src/textures/CubeTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        CubeTexture: typeof CubeTexture
    }
}

Three.CubeTexture = CubeTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTexture: CubeTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        cubeTexture: typeof cubeTexture
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        cubeTexture: typeof _cubeTexture
    }
}


/**
 * Creates a cube texture made up of six images.
 * @remarks
 * {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}.
 * The only differences are that the images are an array of _6_ images as opposed to a single image,
 * and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping}
 * @example
 * ```typescript
 * const loader = new THREE.CubeTextureLoader(,
 * loader.setPath('textures/cube/pisa/',
 * const textureCube = loader.load(['px.png',
'nx.png',
'py.png',
'ny.png',
'pz.png',
'nz.png'].distinct()
 * const material = new THREE.MeshBasicMaterial({
 * color,
 * envMap
 * 
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CubeTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CubeTexture.js}
 */

const cubeTexture = ([
    /**
     * This creates a new {@link THREE.CubeTexture} object.
     * @param images
     * @param mapping See {@link CubeTexture.mapping | .mapping}. Default {@link THREE.CubeReflectionMapping}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
     */

    'images',// HTMLImageElement or HTMLCanvasElement
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'format',
    'type',
    'anisotropy',
    'colorSpace',
] as const).distinct()
consParams.cubeTexture = cubeTexture


/**
 * Creates a cube texture made up of six images.
 * @remarks
 * {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}.
 * The only differences are that the images are an array of _6_ images as opposed to a single image,
 * and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping}
 * @example
 * ```typescript
 * const loader = new THREE.CubeTextureLoader()
 * loader.setPath('textures/cube/pisa/')
 * const textureCube = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'].distinct()
)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffffff,
 *     envMap: textureCube
 * })
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CubeTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CubeTexture.js | Source}
 */

const _cubeTexture = ([...objProps.texture,
    /**
     * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
     * @see {@link Texture.image}
     */
    'image',
    /**
     * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
     * @see {@link Texture.image}
     */
    'images',
    /**
     * @inheritDoc
     * @defaultValue {@link THREE.CubeReflectionMapping}
     */
    'mapping',
    /**
     * @inheritDoc
     * @defaultValue `false`
     */
    'flipY',
] as const).distinct()
objProps.cubeTexture = _cubeTexture

export type CubeTextureProps = Node<CubeTexture, typeof CubeTexture, { images?: any[]; mapping?: CubeTextureMapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; colorSpace?: ColorSpace; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        cubeTexture: { images?: any[]; mapping?: CubeTextureMapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; colorSpace?: ColorSpace; }
    }
}

defaults.cubeTexture = { mapping: CubeReflectionMapping }
