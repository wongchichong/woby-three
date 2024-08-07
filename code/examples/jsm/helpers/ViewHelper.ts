import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper.js'
export * from 'three/examples/jsm/helpers/ViewHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ViewHelper: typeof ViewHelper
    }
}

Three.ViewHelper = ViewHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewHelper: ViewHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        viewHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        viewHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\ViewHelper.d.ts

consParams.viewHelper = [
    'camera',
    'domElement',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\ViewHelper.d.ts    

objParams.viewHelper = [...objParams.object3d,
    'animating',
    'center',
].distinct()

export type ViewHelperProps = Node<ViewHelper, typeof ViewHelper, { camera: Camera; domElement: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewHelper: Partial<{ camera: Camera; domElement: HTMLElement; }>
    }
}

defaults.viewHelper = {}

