import { TetrahedronGeometry } from 'three/src/geometries/TetrahedronGeometry.js';
export { TetrahedronGeometry } from 'three/src/geometries/TetrahedronGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.TetrahedronGeometry = TetrahedronGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TetrahedronGeometry.d.ts
/**
 * A class for generating a tetrahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js}
 */
consParams.tetrahedronGeometry = [
    /**
     * Create a new instance of {@link TetrahedronGeometry}
     * @param radius Radius of the tetrahedron. Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than 0 adds vertices making it no longer a tetrahedron. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TetrahedronGeometry.d.ts
/**
 * A class for generating a tetrahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js | Source}
 */
objParams.tetrahedronGeometry = [...objParams.polyhedronGeometry,
].distinct();
defaults.tetrahedronGeometry = { radius: 1, detail: 0 };
