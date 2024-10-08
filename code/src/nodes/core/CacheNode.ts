import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NodeCache from 'three/src/nodes/core/NodeCache.js'
import CacheNode from 'three/src/nodes/core/CacheNode.js'
export { CacheNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CacheNode: typeof CacheNode
    }
}

Three.CacheNode = CacheNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cacheNode: CacheNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cacheNode: typeof cacheNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        cacheNode: typeof _cacheNode
    }
}



const cacheNode = ([
    'node',
    'cache',
] as const).distinct()
consParams.cacheNode = cacheNode



const _cacheNode = ([...objProps.node,
    'isCacheNode',
    'node',
    'cache',
] as const).distinct()
objProps.cacheNode = _cacheNode

export type CacheNodeProps = Node<CacheNode, typeof CacheNode, { node: ENode; cache?: NodeCache; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cacheNode: Partial<{ node: ENode; cache?: NodeCache; }>
    }
}

defaults.cacheNode = {}

