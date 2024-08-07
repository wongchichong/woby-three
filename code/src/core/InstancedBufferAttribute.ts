import { Node } from '../../three-types'
import { TypedArray } from 'three/src/core/BufferAttribute.js'
import { InstancedBufferAttribute } from 'three/src/core/InstancedBufferAttribute.js'
export { InstancedBufferAttribute } from 'three/src/core/InstancedBufferAttribute.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './BufferAttribute'

declare module '../../lib/3/three'
{
    interface Three {
        InstancedBufferAttribute: typeof InstancedBufferAttribute
    }
}

Three.InstancedBufferAttribute = InstancedBufferAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedBufferAttribute: InstancedBufferAttributeProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        instancedBufferAttribute: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        instancedBufferAttribute: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedBufferAttribute.d.ts
/**
 * An instanced version of {@link THREE.BufferAttribute}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js}
 */

consParams.instancedBufferAttribute = [
    /**
     * Create a new instance of {@link THREE.InstancedBufferAttribute}
     * @param array
     * @param itemSize
     * @param normalized
     * @param meshPerAttribute
     */
    'array',
    'itemSize',
    'normalized',
    'meshPerAttribute',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedBufferAttribute.d.ts
/**
 * An instanced version of {@link THREE.BufferAttribute | BufferAttribute}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js | Source}
 */

objParams.instancedBufferAttribute = [...objParams.bufferAttribute,
    /**
     * Defines how often a value of this buffer attribute should be repeated.
     * A value of one means that each value of the instanced attribute is used for a single instance.
     * A value of two means that each value is used for two consecutive instances (and so on).
     * @defaultValue `1`
     */
    'meshPerAttribute',
].distinct()

export type InstancedBufferAttributeProps = Node<InstancedBufferAttribute, typeof InstancedBufferAttribute, { array: TypedArray; itemSize: number; normalized?: boolean; meshPerAttribute?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        instancedBufferAttribute: Partial<{ array: TypedArray; itemSize: number; normalized?: boolean; meshPerAttribute?: number; }>
    }
}

defaults.instancedBufferAttribute = { meshPerAttribute: 1 }
