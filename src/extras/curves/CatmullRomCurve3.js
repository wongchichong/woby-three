import { CatmullRomCurve3 } from 'three/src/extras/curves/CatmullRomCurve3.js';
export { CatmullRomCurve3 } from 'three/src/extras/curves/CatmullRomCurve3.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/CurvePath';
Three.CatmullRomCurve3 = CatmullRomCurve3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CatmullRomCurve3.d.ts
/**
 * Create a smooth **3d** spline curve from a series of points using the {@link https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline-Rom} algorithm.
 * @example
 * ```typescript
 * //Create a closed wavey loop
 * const curve = new THREE.CatmullRomCurve3([
 * new THREE.Vector3(-10, 0, 10),
 * new THREE.Vector3(-5, 5, 5),
 * new THREE.Vector3(0, 0, 0),
 * new THREE.Vector3(5,
-5, 5),
 * new THREE.Vector3(10, 0, 10)].distinct()
 * const points = curve.getPoints(50,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({
 * color
 *
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines / geometry / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CatmullRomCurve3.js}
 */
consParams.catmullRomCurve3 = [
    /**
     * This constructor creates a new {@link CatmullRomCurve3}.
     * @param points An array of {@link THREE.Vector3} points
     * @param closed Whether the curve is closed. Default `false`
     * @param curveType Type of the curve. Default `centripetal`
     * @param tension Tension of the curve. Expects a `Float`. Default `0.5`
     */
    'points',
    'closed',
    'curveType',
    'tension',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CatmullRomCurve3.d.ts
/**
 * Create a smooth **3d** spline curve from a series of points using the {@link https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline | Catmull-Rom} algorithm.
 * @example
 * ```typescript
 * //Create a closed wavey loop
 * const curve = new THREE.CatmullRomCurve3([
 * new THREE.Vector3(-10, 0, 10),
 * new THREE.Vector3(-5, 5, 5),
 * new THREE.Vector3(0, 0, 0),
 * new THREE.Vector3(5, -5, 5),
 * new THREE.Vector3(10, 0, 10)].distinct())
 * const points = curve.getPoints(50)
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * })
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGl / geometry / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CatmullRomCurve3.js | Source}
 */
objParams.catmullRomCurve3 = [...objParams.curve,
    /**
     * The curve will loop back onto itself when this is true.
     * @defaultValue `false`
     */
    'closed',
    /**
     * The array of {@link THREE.Vector3 | Vector3} points that define the curve.
     * @remarks It needs at least two entries.
     * @defaultValue `[].distinct()`
     */
    'points',
    /**
     * Possible values are `centripetal`, `chordal` and `catmullrom`.
     * @defaultValue `centripetal`
     */
    'curveType',
    /**
     * When {@link .curveType} is `catmullrom`, defines catmullrom's tension.
     * @remarks Expects a `Float`
     */
    'tension',
].distinct();
defaults.catmullRomCurve3 = { closed: false, curveType: 'centripetal', tension: 0.5, };
