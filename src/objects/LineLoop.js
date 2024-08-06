import { LineLoop } from 'three/src/objects/LineLoop.js';
export { LineLoop } from 'three/src/objects/LineLoop.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.LineLoop = LineLoop;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LineLoop.d.ts
/**
 * A continuous line that connects back to the start.
 * @remarks
 * This is nearly the same as {@link THREE.Line
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_LOOP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_STRIP
 * which draws a straight line to the next vertex, and connects the last vertex back to the first.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js}
 */
consParams.lineLoop = [
    /**
     * Create a new instance of {@link LineLoop}
     * @param geometry  List of vertices representing points on the line loop. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    'geometry',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LineLoop.d.ts
/**
 * A continuous line that connects back to the start.
 * @remarks
 * This is nearly the same as {@link THREE.Line | Line
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_LOOP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_STRIP
 * which draws a straight line to the next vertex, and connects the last vertex back to the first.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js | Source}
 */
objParams.lineLoop = [...objParams.line,
].distinct();
defaults.lineLoop = {};
