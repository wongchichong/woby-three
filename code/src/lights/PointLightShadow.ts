import { Node } from '../../three-types'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js'
import { PointLightShadow } from 'three/src/lights/PointLightShadow.js'
export { PointLightShadow } from 'three/src/lights/PointLightShadow.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './LightShadow'

declare module '../../lib/3/three'
{
    interface Three {
        PointLightShadow: typeof PointLightShadow
    }
}

Three.PointLightShadow = PointLightShadow

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightShadow: PointLightShadowProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        pointLightShadow: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        pointLightShadow: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLightShadow.d.ts
/**
 * Shadow for {@link THREE.PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js}
 */

consParams.pointLightShadow = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLightShadow.d.ts
/**
 * Shadow for {@link THREE.PointLight | PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
 */

objParams.pointLightShadow = [...objParams.lightShadow,
].distinct()

export type PointLightShadowProps = Node<PointLightShadow, typeof PointLightShadow, { camera: PerspectiveCamera; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        pointLightShadow: Partial<{ camera: PerspectiveCamera; }>
    }
}

defaults.pointLightShadow = {}

