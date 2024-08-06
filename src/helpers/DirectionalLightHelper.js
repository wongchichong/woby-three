import { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js';
export { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.DirectionalLightHelper = DirectionalLightHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\DirectionalLightHelper.d.ts
/**
 * Helper object to assist with visualizing a {@link THREE.DirectionalLight}'s effect on the scene
 * @remarks
 * This consists of plane and a line representing the light's position and direction.
 * @example
 * ```typescript
 * const light = new THREE.DirectionalLight(0xFFFFFF,
 * scene.add(light,
 *
 * const helper = new THREE.DirectionalLightHelper(light, 5,
 * scene.add(helper,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js}
 */
consParams.directionalLightHelper = [
    /**
     * Create a new instance of {@link DirectionalLightHelper}
     * @param light The light to be visualized.
     * @param size Dimensions of the plane. Default `1`
     * @param color If this.is not the set the helper will take the color of the light. Default `light.color`
     */
    'light',
    'size',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\DirectionalLightHelper.d.ts
/**
 * Helper object to assist with visualizing a {@link THREE.DirectionalLight | DirectionalLight}'s effect on the scene
 * @remarks
 * This consists of plane and a line representing the light's position and direction.
 * @example
 * ```typescript
 * const light = new THREE.DirectionalLight(0xFFFFFF)
 * scene.add(light)
 *
 * const helper = new THREE.DirectionalLightHelper(light, 5)
 * scene.add(helper)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js | Source}
 */
objParams.directionalLightHelper = [...objParams.object3d,
    /**
     * Contains the line mesh showing the location of the directional light.
     */
    'lightPlane',
    /**
     * Reference to the {@link THREE.DirectionalLight | directionalLight} being visualized.
     */
    'light',
    /**
     * Reference to the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     */
    'matrix',
    /**
     * Is set to `false`, as the helper is using the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    'matrixAutoUpdate',
    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    'color',
    'targetLine', // TODO: Double check if this need to be exposed or not.
].distinct();
defaults.directionalLightHelper = { size: 1 };
