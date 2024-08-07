import { LightNode } from './LightNode'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { AmbientLight } from 'three/src/lights/AmbientLight.js'
export { AmbientLight } from 'three/src/lights/AmbientLight.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Light'
import './Light'

declare module '../../lib/3/three'
{
    interface Three {
        AmbientLight: typeof AmbientLight
    }
}

Three.AmbientLight = AmbientLight

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ambientLight: AmbientLightProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        ambientLight: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        ambientLight: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\AmbientLight.d.ts
/**
 * This light globally illuminates all objects in the scene equally.
 * @remarks This light cannot be used to cast shadows as it does not have a direction.
 * @example
 * ```typescript
 * const light = new THREE.AmbientLight(0x404040, // soft white light
 * scene.add(light,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLight Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js}
 */

consParams.ambientLight = [
    /**
     * Creates a new {@link AmbientLight}.
     * @param color Numeric value of the rgb component of the color. Default `0xffffff`
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
     */
    'color',
    'intensity',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\AmbientLight.d.ts
/**
 * This light globally illuminates all objects in the scene equally.
 * @remarks This light cannot be used to cast shadows as it does not have a direction.
 * @example
 * ```typescript
 * const light = new THREE.AmbientLight(0x404040); // soft white light
 * scene.add(light)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js | Source}
 */

objParams.ambientLight = [...objParams.light,
].distinct()

export type AmbientLightProps = LightNode<AmbientLight, typeof AmbientLight, { color?: ColorRepresentation; intensity?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        ambientLight: { color?: ColorRepresentation; intensity?: number; }
    }
}

defaults.ambientLight = { color: 16777215, intensity: 1 }
