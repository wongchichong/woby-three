import { CubeReflectionMapping } from 'three/src/constants.js';
import { CubeTexture } from 'three/src/textures/CubeTexture.js';
export { CubeTexture } from 'three/src/textures/CubeTexture.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.CubeTexture = CubeTexture;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CubeTexture.d.ts
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
consParams.cubeTexture = [
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
    'images', // HTMLImageElement or HTMLCanvasElement
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'format',
    'type',
    'anisotropy',
    'colorSpace',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CubeTexture.d.ts
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
objParams.cubeTexture = [...objParams.texture,
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
].distinct();
defaults.cubeTexture = { mapping: CubeReflectionMapping };
