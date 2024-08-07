import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'
export * from 'three/examples/jsm/controls/TransformControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TransformControls: typeof TransformControls
    }
}

Three.TransformControls = TransformControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            transformControls: TransformControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        transformControls: string[]
        transformControlsEventMap: string[]
        transformControlsGizmo: string[]
        transformControlsPlane: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        transformControls: string[]
        transformControlsEventMap: string[]
        transformControlsGizmo: string[]
        transformControlsPlane: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TransformControls.d.ts

consParams.transformControlsEventMap = [
    'change',
    'mouseDown',
    'mouseUp',
    'objectChange',
    "camera-changed",
    "object-changed",
    "enabled-changed",
    "axis-changed",
    "mode-changed",
    "translationSnap-changed",
    "rotationSnap-changed",
    "scaleSnap-changed",
    "space-changed",
    "size-changed",
    "dragging-changed",
    "showX-changed",
    "showY-changed",
    "showZ-changed",
    "worldPosition-changed",
    "worldPositionStart-changed",
    "worldQuaternion-changed",
    "worldQuaternionStart-changed",
    "cameraPosition-changed",
    "cameraQuaternion-changed",
    "pointStart-changed",
    "pointEnd-changed",
    "rotationAxis-changed",
    "rotationAngle-changed",
    "eye-changed",
].distinct()

consParams.transformControls = [
    'object',
    'domElement',
].distinct()

consParams.transformControlsGizmo = [
].distinct()

consParams.transformControlsPlane = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TransformControls.d.ts    

objParams.transformControlsEventMap = [...objParams.object3dEventMap,
    'change',
    'mouseDown',
    'mouseUp',
    'objectChange',
    "camera-changed",
    "object-changed",
    "enabled-changed",
    "axis-changed",
    "mode-changed",
    "translationSnap-changed",
    "rotationSnap-changed",
    "scaleSnap-changed",
    "space-changed",
    "size-changed",
    "dragging-changed",
    "showX-changed",
    "showY-changed",
    "showZ-changed",
    "worldPosition-changed",
    "worldPositionStart-changed",
    "worldQuaternion-changed",
    "worldQuaternionStart-changed",
    "cameraPosition-changed",
    "cameraQuaternion-changed",
    "pointStart-changed",
    "pointEnd-changed",
    "rotationAxis-changed",
    "rotationAngle-changed",
    "eye-changed",
].distinct()

objParams.transformControls = [...objParams.object3d,
    'domElement',
    // API
    'camera',
    'object',
    'enabled',
    'axis',
    'mode',
    'translationSnap',
    'rotationSnap',
    'space',
    'size',
    'dragging',
    'showX',
    'showY',
    'showZ',

    'mouseButtons',
].distinct()

objParams.transformControlsGizmo = [...objParams.object3d,
    'isTransformControlsGizmo',
    'gizmo',
    'helper',
    'picker',
].distinct()

objParams.transformControlsPlane = [...objParams.mesh,
    'isTransformControlsPlane',
    'mode',
    'axis',
    'space',
    'eye',
    'worldPosition',
    'worldQuaternion',
].distinct()

export type TransformControlsProps = Node<TransformControls, typeof TransformControls, { object: Camera; domElement: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        transformControls: Partial<{ object: Camera; domElement: HTMLElement; }>
    }
}

defaults.transformControls = {}

