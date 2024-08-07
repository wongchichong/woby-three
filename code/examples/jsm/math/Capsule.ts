import { Node, Vector3 } from '../../../three-types'
import { Capsule } from 'three/examples/jsm/math/Capsule.js'
export * from 'three/examples/jsm/math/Capsule.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Capsule: typeof Capsule
    }
}

Three.Capsule = Capsule

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            capsule: CapsuleProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        capsule: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        capsule: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Capsule.d.ts

consParams.capsule = [
    'start',
    'end',
    'radius',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Capsule.d.ts

objParams.capsule = [
    'start',
    'end',
    'radius',
].distinct()

export type CapsuleProps = Node<Capsule, typeof Capsule, { start?: Vector3; end?: Vector3; radius?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        capsule: Partial<{ start?: Vector3; end?: Vector3; radius?: number; }>
    }
}

defaults.capsule = {}

