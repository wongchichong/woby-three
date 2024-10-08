import { Object3DNode } from '../../three-types'
import { BatchedMesh } from 'three/src/objects/BatchedMesh.js'
export { BatchedMesh } from 'three/src/objects/BatchedMesh.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import { Material } from 'three/src/materials/Material'

declare module '../../lib/3/three'
{
    interface Three {
        BatchedMesh: typeof BatchedMesh
    }
}

Three.BatchedMesh = BatchedMesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            batchedMesh: BatchedMeshProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        batchedMesh: typeof batchedMesh
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        batchedMesh: typeof _batchedMesh
    }
}


/**
 * A special version of {@link Mesh} with multi draw batch rendering support. Use {@link BatchedMesh} if you have to
 * render a large number of objects with the same material but with different world transformations and geometry. The
 * usage of {@link BatchedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering
 * performance in your application.
 *
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/WEBGl_multi_draw WEBGl_multi_draw extension} is not
 * supported then a less performant callback is used.
 *
 * @example
 * const box = new THREE.BoxGeometry( 1, 1, 1 ,
 * const sphere = new THREE.BoxGeometry( 1, 1, 1 ,
 * const material = new THREE.MeshBasicMaterial( { color } ,
 *
 * // initialize and add geometries into the batched mesh
 * const batchedMesh = new BatchedMesh( 10, 5000, 10000, material ,
 * const boxId = batchedMesh.addGeometry( box ,
 * const sphereId = batchedMesh.addGeometry( sphere ,
 *
 * // position the geometries
 * batchedMesh.setMatrixAt( boxId, boxMatrix ,
 * batchedMesh.setMatrixAt( sphereId, sphereMatrix ,
 *
 * scene.add( batchedMesh ,
 *
 * @also Example: {@link https://threejs.org/examples/#webgl_mesh_batch WebGl / mesh / batch}
 */

const batchedMesh = ([
    /**
     * @param maxGeometryCount the max number of individual geometries planned to be added.
     * @param maxVertexCount the max number of vertices to be used by all geometries.
     * @param maxIndexCount the max number of indices to be used by all geometries.
     * @param material an instance of [page:Material]. Default is a new {@link MeshBasicMaterial}.
     */
    'maxGeometryCount',
    'maxVertexCount',
    'maxIndexCount',
    'material',
] as const).distinct()
consParams.batchedMesh = batchedMesh


/**
 * A special version of {@link Mesh} with multi draw batch rendering support. Use {@link BatchedMesh} if you have to
 * render a large number of objects with the same material but with different world transformations and geometry. The
 * usage of {@link BatchedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering
 * performance in your application.
 *
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/WEBGl_multi_draw WEBGl_multi_draw extension} is not
 * supported then a less performant callback is used.
 *
 * @example
 * const box = new THREE.BoxGeometry( 1, 1, 1 )
 * const sphere = new THREE.BoxGeometry( 1, 1, 1 )
 * const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
 *
 * // initialize and add geometries into the batched mesh
 * const batchedMesh = new BatchedMesh( 10, 5000, 10000, material )
 * const boxId = batchedMesh.addGeometry( box )
 * const sphereId = batchedMesh.addGeometry( sphere )
 *
 * // position the geometries
 * batchedMesh.setMatrixAt( boxId, boxMatrix )
 * batchedMesh.setMatrixAt( sphereId, sphereMatrix )
 *
 * scene.add( batchedMesh )
 *
 * @also Example: {@link https://threejs.org/examples/#webgl_mesh_batch WebGl / mesh / batch}
 */

const _batchedMesh = ([...objProps.mesh,
    /**
     * This bounding box encloses all instances of the {@link BatchedMesh}. Can be calculated with
     * {@link .computeBoundingBox()}.
     * @default null
     */
    'boundingBox',
    /**
     * This bounding sphere encloses all instances of the {@link BatchedMesh}. Can be calculated with
     * {@link .computeBoundingSphere()}.
     * @default null
     */
    'boundingSphere',
    'customSort',
    /**
     * If true then the individual objects within the {@link BatchedMesh} are frustum culled.
     * @default true
     */
    'perObjectFrustumCulled',
    /**
     * If true then the individual objects within the {@link BatchedMesh} are sorted to improve overdraw-related
     * artifacts. If the material is marked as "transparent" objects are rendered back to front and if not then they are
     * rendered front to back.
     * @default true
     */
    'sortObjects',
    /**
     * Read-only flag to check if a given object is of type {@link BatchedMesh}.
     */
    'isBatchedMesh',
] as const).distinct()
objProps.batchedMesh = _batchedMesh


export type BatchedMeshProps = Object3DNode<BatchedMesh, typeof BatchedMesh, { maxInstanceCount: number, maxVertexCount: number, maxIndexCount?: number, material?: Material }>

declare module '../../lib/3/defaults' {
    interface defaults {
        batchedMesh: Partial<{ maxInstanceCount: number, maxVertexCount: number, maxIndexCount?: number, material?: Material }>
    }
}

defaults.batchedMesh = {}

