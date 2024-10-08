import { Object3DNode } from '../../three-types'
import { Plane } from 'three/src/math/Plane.js'
import { PlaneHelper } from 'three/src/helpers/PlaneHelper.js'
export { PlaneHelper } from 'three/src/helpers/PlaneHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        PlaneHelper: typeof PlaneHelper
    }
}

Three.PlaneHelper = PlaneHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            planeHelper: PlaneHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        planeHelper: typeof planeHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        planeHelper: typeof _planeHelper
    }
}


/**
 * Helper object to visualize a {@link THREE.Plane}.
 * @example
 * ```typescript
 * const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3,
 * const helper = new THREE.PlaneHelper(plane, 1, 0xffff00,
 * scene.add(helper,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PlaneHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PlaneHelper.js}
 */

const planeHelper = ([
    /**
     * Creates a new wireframe representation of the passed plane.
     * @param plane The plane to visualize.
     * @param size Side length of plane helper. Expects a `Float`. Default `1`
     * @param hex Color. Default `0xffff00`
     */
    'plane',
    'size',
    'color',
] as const).distinct()
consParams.planeHelper = planeHelper


/**
 * Helper object to visualize a {@link THREE.Plane | Plane}.
 * @example
 * ```typescript
 * const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3)
 * const helper = new THREE.PlaneHelper(plane, 1, 0xffff00)
 * scene.add(helper)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PlaneHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PlaneHelper.js | Source}
 */

const _planeHelper = ([...objProps.lineSegments,
    /**
     * The {@link Plane | plane} being visualized.
     */
    'plane',
    /**
     * The side lengths of plane helper.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    'size',
] as const).distinct()
objProps.planeHelper = _planeHelper

export type PlaneHelperProps = Object3DNode<PlaneHelper, typeof PlaneHelper, { plane: Plane; size?: number; color?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        planeHelper: Partial<{ plane: Plane; size?: number; color?: number; }>
    }
}

defaults.planeHelper = { size: 1, color: 16776960 }
