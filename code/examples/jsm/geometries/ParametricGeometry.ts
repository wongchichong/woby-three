import { Vector3 } from '../../../three-types'
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js'
export * from 'three/examples/jsm/geometries/ParametricGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ParametricGeometry: typeof ParametricGeometry
    }
}

Three.ParametricGeometry = ParametricGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parametricGeometry: ParametricGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        parametricGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        parametricGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometry.d.ts

consParams.parametricGeometry = [
    'func',
    'slices',
    'stacks',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometries.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometry.d.ts    

objParams.parametricGeometry = [...objParams.bufferGeometry,
    /**
     * @default 'ParametricGeometry'
     */
    'type',
    'parameters',
].distinct()

export type ParametricGeometryProps = BufferGeometryNode<ParametricGeometry, typeof ParametricGeometry, { func?: (u: number, v: number, target: Vector3) => void; slices?: number; stacks?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        parametricGeometry: Partial<{ func?: (u: number, v: number, target: Vector3) => void; slices?: number; stacks?: number; }>
    }
}

defaults.parametricGeometry = {}