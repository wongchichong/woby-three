import { Node } from '../../three-types'
import { Matrix3 } from 'three/src/math/Matrix3.js'
export * from 'three/src/math/Matrix3.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Matrix3: typeof Matrix3
    }
}

Three.Matrix3 = Matrix3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            matrix3: Matrix3Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        matrix3: string[]
        matrix: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        matrix3: string[]
        matrix: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\MathUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix3.d.ts
// https://threejs.org/docs/#api/en/math/Matrix3
/**
 * ( interface Matrix )
 */

consParams.matrix = [
    /**
     * Array with matrix values.
     */
    'elements',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\MathUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix3.d.ts
// https://threejs.org/docs/#api/en/math/Matrix3
/**
 * ( interface Matrix )
 */

objParams.matrix = [
    /**
     * Array with matrix values.
     */
    'elements',
].distinct()

/**
 * ( class Matrix3 implements Matrix )
 */

consParams.matrix3 = [
    /**
     * Creates an identity matrix.
     */
    /**
     * Creates a 3x3 matrix with the given arguments in row-major order.
     */

    'n11',
    'n12',
    'n13',
    'n21',
    'n22',
    'n23',
    'n31',
    'n32',
    'n33',
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    'elements',
].distinct()

/**
 * ( class Matrix3 implements Matrix )
 */

objParams.matrix3 = [...objParams.matrix,
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1].distinct()

     */
    'elements',
].distinct()

export type Matrix3Props = Node<Matrix3, typeof Matrix3, { n11: number; n12: number; n13: number; n21: number; n22: number; n23: number; n31: number; n32: number; n33: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        matrix3: Partial<{ n11: number; n12: number; n13: number; n21: number; n22: number; n23: number; n31: number; n32: number; n33: number; }>
    }
}

defaults.matrix3 = {}

