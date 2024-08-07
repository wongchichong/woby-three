import { OutlineEffectParameters, OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js'
export * from 'three/examples/jsm/effects/OutlineEffect.js'
import { Node, WrapAsString } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        OutlineEffect: typeof OutlineEffect
    }
}

Three.OutlineEffect = OutlineEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outlineEffect: OutlineEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        outlineEffect: string[]
        outlineEffectParameters: WrapAsString<OutlineEffectParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        outlineEffect: string[]
        outlineEffectParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\OutlineEffect.d.ts

consParams.outlineEffectParameters = ([
    'defaultThickness',
    'defaultColor',
    'defaultAlpha',
    'defaultKeepAlive',
] as const).toObject()


consParams.outlineEffect = [
    'renderer',
    'parameters', //outlineEffectParameters
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\OutlineEffect.d.ts

objParams.outlineEffectParameters = [
    'defaultThickness',
    'defaultColor',
    'defaultAlpha',
    'defaultKeepAlive',
].distinct()


objParams.outlineEffect = [
    'enabled',
    'autoClear',
    'domElement',
    'shadowMap',
].distinct()

export type OutlineEffectProps = Node<OutlineEffect, typeof OutlineEffect, { renderer: WebGLRenderer; parameters?: OutlineEffectParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        outlineEffect: Partial<{ renderer: WebGLRenderer; parameters?: OutlineEffectParameters; }>
    }
}

defaults.outlineEffect = {}

