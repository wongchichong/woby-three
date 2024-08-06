import { Node } from '../../../three-types'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Object3D } from 'three/src/core/Object3D.js'
import { Loader } from 'three/src/loaders/Loader.js'
import { XRHandMeshModel } from 'three/examples/jsm/webxr/XRHandMeshModel.js'
export * from 'three/examples/jsm/webxr/XRHandMeshModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRHandMeshModel: typeof XRHandMeshModel
    }
}

Three.XRHandMeshModel = XRHandMeshModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrHandMeshModel: XRHandMeshModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrHandMeshModel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        xrHandMeshModel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandMeshModel.d.ts

consParams.xrHandMeshModel = [

    'handModel',
    'controller',
    'path',
    'handedness',
    'loader',
    'onLoad',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandMeshModel.d.ts

objParams.xrHandMeshModel = [
    'controller',
    'handModel',
    'bones',
].distinct()

export type XRHandMeshModelProps = Node<XRHandMeshModel, typeof XRHandMeshModel, { handModel: Object3D; controller: Object3D; path: string; handedness: string; loader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrHandMeshModel: Partial<{ handModel: Object3D; controller: Object3D; path: string; handedness: string; loader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>
    }
}

defaults.xrHandMeshModel = {}
