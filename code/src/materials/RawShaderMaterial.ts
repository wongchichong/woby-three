import { MaterialNode } from './MaterialNode'
import { ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial.js'
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial.js'
export { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { WrapAsString } from '../../three-types'

import './Material'
import './ShaderMaterial'

declare module '../../lib/3/three'
{
    interface Three {
        RawShaderMaterial: typeof RawShaderMaterial
    }
}

Three.RawShaderMaterial = RawShaderMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rawShaderMaterial: RawShaderMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        rawShaderMaterial: WrapAsString<ShaderMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        rawShaderMaterial: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\RawShaderMaterial.d.ts

consParams.rawShaderMaterial = { ...consParams.shaderMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\RawShaderMaterial.d.ts    

objParams.rawShaderMaterial = [...objParams.shaderMaterial,
].distinct()

export type RawShaderMaterialProps = MaterialNode<RawShaderMaterial, ShaderMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        rawShaderMaterial: Partial<ShaderMaterialParameters>
    }
}

defaults.rawShaderMaterial = {}
