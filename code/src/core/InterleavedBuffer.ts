import { TypedArray } from 'three/src/core/BufferAttribute.js'
import { Node } from '../../three-types'
import { InterleavedBuffer } from 'three/src/core/InterleavedBuffer.js'
export { InterleavedBuffer } from 'three/src/core/InterleavedBuffer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        InterleavedBuffer: typeof InterleavedBuffer
    }
}

Three.InterleavedBuffer = InterleavedBuffer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interleavedBuffer: InterleavedBufferProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        interleavedBuffer: typeof interleavedBuffer
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        interleavedBuffer: typeof _interleavedBuffer
    }
}


/**
 * **"Interleaved"** means that multiple attributes, possibly of different types,
(e.g., _position, normal, uv, color_) are packed into a single array buffer.
 * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html array basics}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved / buffergeometry / points / interleaved}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js}
 */

const interleavedBuffer = ([
    /**
     * Create a new instance of {@link InterleavedBuffer}
     * @param array A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray} with a shared buffer. Stores the geometry data.
     * @param stride The number of typed-array elements per vertex. Expects a `Integer`
     */
    'array',
    'stride',
] as const).distinct()
consParams.interleavedBuffer = interleavedBuffer


/**
 * **"Interleaved"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer.
 * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved | webgl / buffergeometry / points / interleaved}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js | Source}
 */

const _interleavedBuffer = ([
    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
     */
    'array',
    /**
     * The number of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} elements per vertex.
     * @remarks Expects a `Integer`
     */
    'stride',
    /**
     * Defines the intended usage pattern of the data store for optimization purposes.
     * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/bufferData | WebGlRenderingContext.bufferData}.
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.setUsage | setUsage}
     * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
     */
    'usage',
    /**
     * Object containing offset and count.
     * @defaultValue `{ offset: number = 0; count: number = -1 }`
     * @deprecated Will be removed in r169. Use "addUpdateRange()" instead.
     */
    'updateRange',
    /**
     * This can be used to only update some components of stored data. Use the {@link .addUpdateRange} function to add
     * ranges to this array.
     */
    'updateRanges',
    /**
     * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    'version',
    /**
     * Gives the total number of elements in the array.
     * @remarks Expects a `Integer`
     * @defaultValue 0
     */
    'count',
    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    'uuid',
] as const).distinct()
objProps.interleavedBuffer = _interleavedBuffer

export type InterleavedBufferProps = Node<InterleavedBuffer, typeof InterleavedBuffer, { array: TypedArray; stride: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        interleavedBuffer: Partial<{ array: TypedArray; stride: number; }>
    }
}

defaults.interleavedBuffer = {}

