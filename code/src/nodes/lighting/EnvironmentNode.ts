import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import EnvironmentNode from 'three/src/nodes/lighting/EnvironmentNode.js'
export { EnvironmentNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        EnvironmentNode: typeof EnvironmentNode
    }
}

Three.EnvironmentNode = EnvironmentNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            environmentNode: EnvironmentNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        environmentNode: typeof environmentNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        environmentNode: typeof _environmentNode
    }
}



const environmentNode = ([
    'envNode',
] as const).distinct()
consParams.environmentNode = environmentNode



const _environmentNode = ([...objProps.lightingNode,
    'envNode',
] as const).distinct()
objProps.environmentNode = _environmentNode

export type EnvironmentNodeProps = Node<EnvironmentNode, typeof EnvironmentNode, { envNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        environmentNode: { envNode?: ENode | null; }
    }
}

defaults.environmentNode = {}

