import { Node } from '../../three-types'
import { Float32BufferAttribute } from 'three/src/core/BufferAttribute.js'
export { Float32BufferAttribute } from 'three/src/core/BufferAttribute.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './BufferAttribute'

declare module '../../lib/3/three'
{
    interface Three {
        Float32BufferAttribute: typeof Float32BufferAttribute
    }
}

Three.Float32BufferAttribute = Float32BufferAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            float32BufferAttribute: Float32BufferAttributeProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        float32BufferAttribute: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        float32BufferAttribute: string[]
    }
}

/**
 * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
 * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
 */

consParams.float32BufferAttribute = [
    /**
     * This creates a new {@link THREE.Float32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute}
     */

    'array',
    'itemSize',
    'normalized',
].distinct()

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array: Float32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */

objParams.float32BufferAttribute = [...objParams.bufferAttribute,
].distinct()

export type Float32BufferAttributeProps = Node<Float32BufferAttribute, typeof Float32BufferAttribute, { array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number; itemSize: number; normalized?: boolean; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        float32BufferAttribute: Partial<{ array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number; itemSize: number; normalized?: boolean; }>
    }
}

defaults.float32BufferAttribute = {}
