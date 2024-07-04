import './extensions'

//** Constructor Parameters */
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\constants.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\three.Legacy.d.ts


const p = {
    /**
     * @deprecated THREE.WebGlMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGlRenderTarget and set the "count" parameter to enable MRT.
     */
    get webGlMultipleRenderTargets() {
        return [//...this.webGlRenderTarget,
            /**
             * @deprecated THREE.WebGlMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGlRenderTarget and set the "count" parameter to enable MRT.
             * @param width The width of the render target.
             * @param height The height of the render target.
             * @param count The number of render targets.
             * @param options object that holds texture parameters for an auto-generated target texture and depthBuffer/stencilBuffer booleans.
             * For an explanation of the texture parameters see {@link Texture}.
             */
            'width',
            'height',
            'count',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\utils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationAction.d.ts
    // Animation ////////////////////////////////////////////////////////////////////////////////////////
    animationAction: [
        'mixer',
        'clip',
        'localRoot',
        'blendMode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationClip.d.ts
    animationClip: [
        'name',
        'duration',
        'tracks',
        'blendMode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationMixer.d.ts
    animationMixerEventMap: [
        'loop',
        'finished',
    ].distinct(),
    get animationMixer() {
        return [//...this.eventDispatcher,
            'root',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationObjectGroup.d.ts
    animationObjectGroup: [
        // '...this.args',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\KeyframeTrack.d.ts
    keyframeTrack: [
        /**
         * @param name
         * @param times
         * @param values
         * @param [interpolation=THREE.InterpolateLinear]
         */
        'name',
        'times',
        'values',
        'interpolation',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyBinding.d.ts
    parseTrackNameResults: [
        'nodeName',
        'objectName',
        'objectIndex',
        'propertyName',
        'propertyIndex',
    ].distinct(),
    propertyBinding: [
        'rootNode',
        'path',
        'parsedPath',
    ].distinct(),
    propertyBinding_Composite: [
        'targetGroup',
        'path',
        'parsedPath',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyMixer.d.ts
    propertyMixer: [
        'binding',
        'typeName',
        'valueSize',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\BooleanKeyframeTrack.d.ts
    get booleanKeyframeTrack() {
        return [//...this.keyframeTrack,
            'name',
            'times',
            'values',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\ColorKeyframeTrack.d.ts
    get colorKeyframeTrack() {
        return [//...this.keyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\NumberKeyframeTrack.d.ts
    get numberKeyframeTrack() {
        return [//...this.keyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\QuaternionKeyframeTrack.d.ts
    get quaternionKeyframeTrack() {
        return [//...this.keyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\StringKeyframeTrack.d.ts
    get stringKeyframeTrack() {
        return [//...this.keyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\VectorKeyframeTrack.d.ts
    get vectorKeyframeTrack() {
        return [//...this.keyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\Audio.d.ts
    // Extras / Audio /////////////////////////////////////////////////////////////////////
    /**
     * Create a non-positional ( global ) {@link Audio} object.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API {@link Audio} API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener(,
     * camera.add(listener,
     * // create a global {@link Audio} source
     * const sound = new THREE.Audio(listener,
     * // load a sound and set it as the {@link Audio} object's buffer
     * const audioLoader = new THREE.AudioLoader(,
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     * sound.setBuffer(buffer,
     * sound.setLoop(true,
     * sound.setVolume(0.5,
     * sound.play(,
     * },
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/Audio Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/Audio.js}
     */
    get audio() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link Audio}
             * @param listener (required) {@link AudioListener} instance.
             */
            'listener',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioAnalyser.d.ts
    /**
     * Create a {@link AudioAnalyser} object, which uses an {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode} to analyse audio data.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Audio API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener(,
     * camera.add(listener,
     * // create an Audio source
     * const sound = new THREE.Audio(listener,
     * // load a sound and set it as the Audio object's buffer
     * const audioLoader = new THREE.AudioLoader(,
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     * sound.setBuffer(buffer,
     * sound.setLoop(true,
     * sound.setVolume(0.5,
     * sound.play(,
     * },
     * // create an AudioAnalyser, passing in the sound and desired fftSize
     * const analyser = new THREE.AudioAnalyser(sound, 32,
     * // get the average frequency of the sound
     * const data = analyser.getAverageFrequency(,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioAnalyser Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js}
     */
    audioAnalyser: [
        /**
         * Create a new {@link {@link AudioAnalyser}}.
         * @param audio
         * @param fftSize See {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize.fftSize }. Expects a `unsigned integer`. Default `2048`.
         */
        'audio',
        'fftSize',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioContext.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioListener.d.ts
    /**
     * The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener} of the all positional and non-positional audio effects in the scene.
     * A three.js application usually creates a single instance of {@link AudioListener}  * @remarks
     * It is a mandatory construtor parameter for audios entities like {@link Audio} and {@link PositionalAudio}.
     * In most cases, the listener object is a child of the camera
     * So the 3d transformation of the camera represents the 3d transformation of the listener.
     * @example
     * ```typescript
     * // create an {@link AudioListener} and add it to the camera
     * const listener = new THREE.AudioListener(,
     * camera.add(listener,
     * // create a global audio source
     * const sound = new THREE.Audio(listener,
     * // load a sound and set it as the Audio object's buffer
     * const audioLoader = new THREE.AudioLoader(,
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     * sound.setBuffer(buffer,
     * sound.setLoop(true,
     * sound.setVolume(0.5,
     * sound.play(,
     * },
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_timing / timing }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioListener Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioListener.js}
     */
    get audioListener() {
        return [//...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\PositionalAudio.d.ts
    /**
     * Create a positional audio object.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Audio API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener(,
     * camera.add(listener,
     * // create the {@link PositionalAudio} object (passing in the listener)
     * const sound = new THREE.PositionalAudio(listener,
     * // load a sound and set it as the {@link PositionalAudio} object's buffer
     * const audioLoader = new THREE.AudioLoader(,
     * audioLoader.load('sounds/song.ogg', function (buffer) {
     * sound.setBuffer(buffer,
     * sound.setRefDistance(20,
     * sound.play(,
     * },
     * // create an object for the sound to play from
     * const sphere = new THREE.SphereGeometry(20, 32, 16,
     * const material = new THREE.MeshPhongMaterial({
     * color
     * },
     * const mesh = new THREE.Mesh(sphere, material,
     * scene.add(mesh,
     * // finally add the sound to the mesh
     * mesh.add(sound,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_orientation / orientation }
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_timing / timing }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/PositionalAudio Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/PositionalAudio.js}
     */
    get positionalAudio() {
        return [//...this.audio,
            /**
             * Create a new instance of {@link PositionalAudio}
             * @param listener (required) {@link AudioListener} instance.
             */
            'listener',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\ArrayCamera.d.ts
    /**
     * {@link ArrayCamera} can be used in order to efficiently render a scene with a predefined set of cameras
     * @remarks
     * This is an important performance aspect for rendering VR scenes.
     * An instance of {@link ArrayCamera} always has an array of sub cameras
     * It's mandatory to define for each sub camera the `viewport` property which determines the part of the viewport that is rendered with this.camera.
     * @see Example: {@link https://threejs.org/examples/#webgl_camera_array / array }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/ArrayCamera Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js}
     */
    get arrayCamera() {
        return [//...this.perspectiveCamera,
            /**
             * An array of cameras.
             * @param array. Default `[]`.
             */
            'cameras',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\Camera.d.ts
    /**
     * Abstract base class for cameras
     * @remarks
     * This class should always be inherited when you build a new camera.
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js}
     */
    get camera() {
        return [//...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\CubeCamera.d.ts
    /**
     * Creates **6** {@link THREE.PerspectiveCamera} that render to a {@link THREE.WebGlCubeRenderTarget}.
     * @remarks The cameras are added to the {@link children} array.
     * @example
     * ```typescript
     * // Create cube render target
     * const cubeRenderTarget = new THREE.WebGlCubeRenderTarget( 128,
    { generateMipmaps, minFilter.LinearMipmapLinearFilter } ,
     *
     * // Create cube camera
     * const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget ,
     * scene.add( cubeCamera ,
     *
     * // Create car
     * const chromeMaterial = new THREE.MeshLambertMaterial( { color, envMap.texture } ,
     * const car = new THREE.Mesh( carGeometry, chromeMaterial ,
     * scene.add( car ,
     *
     * // Update the render target cube
     * car.visible = false,
     * cubeCamera.position.copy( car.position ,
     * cubeCamera.update( renderer, scene ,
     *
     * // Render the scene
     * car.visible = true,
     * renderer.render( scene, camera ,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic / cubemap / dynamic }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/CubeCamera Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js}
     */
    get cubeCamera() {
        return [//...this.object3d,
            /**
             * Constructs a {@link CubeCamera} that contains 6 {@link PerspectiveCamera} that render to a {@link THREE.WebGlCubeRenderTarget}.
             * @param near The near clipping distance.
             * @param far The far clipping distance.
             * @param renderTarget The destination cube render target.
             */
            'near',
            'far',
            'renderTarget',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\OrthographicCamera.d.ts
    /**
     * Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection projection}.
     * In this.projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.
     * This can be useful for rendering 2D scenes and UI elements, amongst other things.
     * @example
     * ```typescript
     * const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000,
     * scene.add(camera,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_camera }
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho / cubes / ortho }
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic / cubemap / dynamic }
     * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_advanced / advanced }
     * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_dof2 / dof2 }
     * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_godrays / godrays }
     * @see Example: {@link https://threejs.org/examples/#webgl_rtt }
     * @see Example: {@link https://threejs.org/examples/#webgl_shaders_tonemapping / tonemapping }
     * @see Example: {@link https://threejs.org/examples/#webgl_shadowmap }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js}
     */
    get orthographicCamera() {
        return [//...this.camera,
            /**
             * Creates a new {@link OrthographicCamera}.
             * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum frustum}.
             * @param left Camera frustum left plane. Default `-1`.
             * @param right Camera frustum right plane. Default `1`.
             * @param top Camera frustum top plane. Default `1`.
             * @param bottom Camera frustum bottom plane. Default `-1`.
             * @param near Camera frustum near plane. Default `0.1`.
             * @param far Camera frustum far plane. Default `2000`.
             */
            'left',
            'right',
            'top',
            'bottom',
            'near',
            'far',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\PerspectiveCamera.d.ts
    /**
     * Camera that uses {@link https://en.wikipedia.org/wiki/Perspective_(graphical) projection}.
     * This projection mode is designed to mimic the way the human eye sees
     * @remarks
     * It is the most common projection mode used for rendering a 3d scene.
     * @example
     * ```typescript
     * const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000,
     * scene.add(camera,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending / skinning / blending }
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph / skinning / morph }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo / stereo }
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes / cubes }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_skinning / collada / skinning }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js}
     */
    get perspectiveCamera() {
        return [//...this.camera,
            /**
             * Creates a new {@link PerspectiveCamera}.
             * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum frustum}.
             * @param fov Camera frustum vertical field of view. Default `50`.
             * @param aspect Camera frustum aspect ratio. Default `1`.
             * @param near Camera frustum near plane. Default `0.1`.
             * @param far Camera frustum far plane. Default `2000`.
             */
            'fov',
            'aspect',
            'near',
            'far',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\StereoCamera.d.ts
    /**
     * Dual {@link PerspectiveCamera}s used for effects such as
     * {@link https://en.wikipedia.org/wiki/Anaglyph_3d Anaglyph} or
     * {@link https://en.wikipedia.org/wiki/parallax_barrier Barrier}.
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph / anaglyph }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier / parallaxbarrier }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo / stereo }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/StereoCamera Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js}
     */
    get stereoCamera() {
        return [//...this.camera,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\BufferAttribute.d.ts
    /**
     * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes )
     * associated with a {@link THREE.BufferGeometry}, which allows for more efficient passing of data to the Gpu
     * @remarks
     * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
     * {@link THREE.Vector2.fromBufferAttribute},
     * {@link THREE.Vector3.fromBufferAttribute},
     * {@link THREE.Vector4.fromBufferAttribute}, and
     * {@link THREE.Color.fromBufferAttribute} classes may be helpful.
     * @see {@link THREE.BufferGeometry} for details and a usage examples.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry / BufferGeometry - Clean up Memory}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    bufferAttribute: [
        /**
         * This creates a new {@link THREE.GlBufferAttribute} object.
         * @param array Must be a `TypedArray`. Used to instantiate the buffer.
         * This array should have `itemSize * numVertices` elements, where numVertices is the number of vertices in the associated {@link THREE.BufferGeometry}.
         * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
         * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
         * then itemSize should be `3`.
         * @param normalized Applies to integer data only.
         * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
         * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
         * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
         * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
         * If normalized is false, the values will be converted to floats unmodified,
         * i.e. `32767` becomes `32767.0f`.
         * Default `false`.
         * @throws `TypeError` When the {@link array} is not a `TypedArray`,
         */
        'array',
        'itemSize',
        'normalized',
    ].distinct(),
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get int8BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Int8BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int8Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get uint8BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Uint8BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get uint8ClampedBufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Uint8ClampedBufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8ClampedArray`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get int16BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Int16BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int16Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get uint16BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Uint16BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get int32BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Int32BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int32Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get uint32BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Uint32BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint32Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get float16BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Float16BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
     * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
     */
    get float32BufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * This creates a new {@link THREE.Float32BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float32Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\BufferGeometry.d.ts
    /**
     * A representation of mesh, line, or point geometry
     * Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this.data to the Gpu.
     * @remarks
     * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute} documentation.
     * @example
     * ```typescript
     * const geometry = new THREE.BufferGeometry(,
     *
     * // create a simple square shape. We duplicate the top left and bottom right
     * // vertices because each vertex needs to appear once per triangle.
     * const vertices = new Float32Array( [
     *   -1.0,
    -1.0,
 1.0,
    // v0
     *1.0,
    -1.0,
 1.0,
    // v1
     *1.0,
 1.0,
 1.0,
    // v2
     *
     *1.0,
 1.0,
 1.0,
    // v3
     *   -1.0,
 1.0,
 1.0,
    // v4
     *   -1.0,
    -1.0,
 1.0  // v5
     * ] ,
     *
     * // itemSize = 3 because there are 3 values (components) per vertex
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) ,
     * const material = new THREE.MeshBasicMaterial( { color } ,
     * const mesh = new THREE.Mesh( geometry, material ,
     * ```
     * @example
     * ```typescript
     * const geometry = new THREE.BufferGeometry(,
     *
     * const vertices = new Float32Array( [
     *   -1.0,
    -1.0,
 1.0,
    // v0
     *1.0,
    -1.0,
 1.0,
    // v1
     *1.0,
 1.0,
 1.0,
    // v2
     *   -1.0,
 1.0,
 1.0,
    // v3
     * ] ,
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) ,
     *
     * const indices = [
     *   0, 1, 2,
     *   2, 3, 0,
     * ].distinct(),
     *
     * geometry.setIndex( indices ,
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) ,
     *
     * const material = new THREE.MeshBasicMaterial( { color } ,
     * const mesh = new THREE.Mesh( geometry, material ,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry with non-indexed faces}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_indexed with indexed faces}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines_indexed Lines}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_custom_attributes_particles}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_rawshader Shaders}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js}
     */
    get bufferGeometry() {
        return [//...this.eventDispatcher,
            'points',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Clock.d.ts
    /**
     * Object for keeping track of time
     * @remarks
     * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now.now} if it is available,
     * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now.now}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js}
     */
    clock: [
        /**
         * Create a new instance of {@link THREE.Clock}
         * @param autoStart - Whether to automatically start the clock when {@link getDelta | .getDelta()} is called for the first time. Default `true`
         */
        'autoStart',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\EventDispatcher.d.ts
    /**
     * The minimal basic Event that can be dispatched by a {@link EventDispatcher}.
     */
    baseEvent: [
    ].distinct(),
    /**
     * The minimal expected contract of a fired Event that was dispatched by a {@link EventDispatcher}.
     */
    event: [
    ].distinct(),
    /**
     * JavaScript events for custom objects
     * @example
     * ```typescript
     * // Adding events to a custom object
     * get Car() { return [//...this.eventDispatcher,
     *   start() {
     * this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } ,
     *   }
     * },
     * // Using events with the custom object
     * const car = new Car(,
     * car.addEventListener( 'start',
    ( event ) => {
     *   alert( event.message ,
     * } ,
     * car.start(,
     * ```
     * @see {@link https://github.com/mrdoob/eventdispatcher.js EventDispatcher on GitHub}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/EventDispatcher Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js}
     */
    eventDispatcher: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\GlBufferAttribute.d.ts
    /**
     * This buffer attribute class does not construct a VBO.
     * Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property.
     * @remarks
     * It is required to pass additional params alongside the VBO
     * Those are Gl context, the Gl data type, the number of components per vertex, the number of bytes per component, and the number of vertices.
     * @remarks
     * The most common use case for this.class is when some kind of GPGpu calculation interferes or even produces the VBOs in question.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute / buffergeometry / glbufferattribute}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/GlBufferAttribute Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GlBufferAttribute.js}
     */
    glBufferAttribute: [
        /**
         * This creates a new GlBufferAttribute object.
         * @param buffer Must be a {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlBuffer}. See {@link GlBufferAttribute.buffer | .buffer}
         * @param type One of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGl_API/Constants#Data_types Data Types}. See {@link GlBufferAttribute.type | .type}
         * @param itemSize How many values make up each item (vertex). See {@link GlBufferAttribute.itemSize | .itemSize}
         * @param elementSize `1`,
    `2` or `4`. The corresponding size (in bytes) for the given {@link type} param. See {@link GlBufferAttribute.elementSize | .elementSize}
         * @param count The expected number of vertices in VBO. See {@link GlBufferAttribute.count | .count}
         */
        'buffer',
        'type',
        'itemSize',
        'elementSize',
        'count',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedBufferAttribute.d.ts
    /**
     * An instanced version of {@link THREE.BufferAttribute}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js}
     */
    get instancedBufferAttribute() {
        return [//...this.bufferAttribute,
            /**
             * Create a new instance of {@link THREE.InstancedBufferAttribute}
             * @param array
             * @param itemSize
             * @param normalized
             * @param meshPerAttribute
             */
            'array',
            'itemSize',
            'normalized',
            'meshPerAttribute',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedBufferGeometry.d.ts
    /**
     * An instanced version of {@link THREE.BufferGeometry}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js}
     */
    get instancedBufferGeometry() {
        return [//...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedInterleavedBuffer.d.ts
    /**
     * An instanced version of {@link THREE.InterleavedBuffer}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js}
     */
    get instancedInterleavedBuffer() {
        return [//...this.interleavedBuffer,
            /**
             * Create a new instance of {@link InstancedInterleavedBuffer}
             * @param array
             * @param itemSize
             * @param meshPerAttribute
             */
            'array',
            'stride',
            'meshPerAttribute',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InterleavedBuffer.d.ts
    /**
     * **"Interleaved"** means that multiple attributes, possibly of different types,
    (e.g., _position, normal, uv, color_) are packed into a single array buffer.
     * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html array basics}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved / buffergeometry / points / interleaved}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js}
     */
    interleavedBuffer: [
        /**
         * Create a new instance of {@link InterleavedBuffer}
         * @param array A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray} with a shared buffer. Stores the geometry data.
         * @param stride The number of typed-array elements per vertex. Expects a `Integer`
         */
        'array',
        'stride',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InterleavedBufferAttribute.d.ts
    /**
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js}
     */
    interleavedBufferAttribute: [
        /**
         * Create a new instance of {@link THREE.InterleavedBufferAttribute}.
         * @param interleavedBuffer
         * @param itemSize
         * @param offset
         * @param normalized Default `false`.
         */
        'interleavedBuffer',
        'itemSize',
        'offset',
        'normalized',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Layers.d.ts
    /**
     * A {@link THREE.Layers} object assigns an {@link THREE.Object3d} to 1 or more of 32 layers numbered `0` to `31` - internally the
     * layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) mask}, and
     * by default all Object3ds are a member of layer `0`.
     * @remarks
     * This can be used to control visibility - an object must share a layer with a {@link Camera} to be visible when that camera's view is rendered.
     * @remarks
     * All classes that inherit from {@link THREE.Object3d} have an {@link THREE.Object3d.layers.layers} property which is an instance of this.class.
     * @see Example: {@link https://threejs.org/examples/#webgl_layers / layers}
     * @see Example: {@link https://threejs.org/examples/#webxr_vr_layers / vr / layers}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Layers Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Layers.js}
     */
    layers: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Object3d.d.ts

    object3dEventMap: [
        /**
         * Fires when the object has been added to its parent object.
         */
        'added',
        /**
         * Fires when the object has been removed from its parent object.
         */
        'removed',
        /**
         * Fires when a new child object has been added.
         */
        'childadded',
        /**
         * Fires when a new child object has been removed.
         */
        'childremoved',
    ].distinct(),
    /**
     * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3d space.
     * @remarks Note that this.can be used for grouping objects via the {@link THREE.Object3d.add | .add()} method which adds the object as a child,
     * however it is better to use {@link THREE.Group} for this.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3d Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3d.js}
     */
    get object3d() {
        return [//...this.eventDispatcher,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Raycaster.d.ts
    face: [
        'a',
        'b',
        'c',
        'normal',
        'materialIndex',
    ].distinct(),
    intersection: [
        /** Distance between the origin of the ray and the intersection */
        'distance',
        'distanceToRay',
        /** Point of intersection, in world coordinates */
        'point',
        'index',
        /** Intersected face */
        'face',
        /** Index of the intersected face */
        'faceIndex',
        /** The intersected object */
        'object',
        'uv',
        'uv1',
        'normal',
        /** The index number of the instance where the ray intersects the {@link THREE.InstancedMesh } */
        'instanceId',
        'pointOnLine',
        'batchId',
    ].distinct(),
    raycasterParameters: [
        'Mesh',
        'Line',
        'Line2',
        'LOD',
        'Points',
        'Sprite',
    ].distinct(),
    /**
     * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting}
     * @remarks
     * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
     * @example
     * ```typescript
     * const raycaster = new THREE.Raycaster(,
     * const pointer = new THREE.Vector2(,
     *
     * function onPointerMove(event) {
     *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
     * pointer.x = (event.clientX / window.innerWidth) * 2 - 1,
     * pointer.y = -(event.clientY / window.innerHeight) * 2 + 1,
     * }
     *
     * function render() {
     *     // update the picking ray with the camera and pointer position
     * raycaster.setFromCamera(pointer, camera,
     *     // calculate objects intersecting the picking ray
     * const intersects = raycaster.intersectObjects(scene.children,
     * for (let i = 0, i & lt, intersects.length, i++) {
     *     intersects[i].object.material.color.set(0xff0000,
     *     }
     * renderer.render(scene, camera,
     * }
     * window.addEventListener('pointermove', onPointerMove,
     * window.requestAnimationFrame(render,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes to a Mesh}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho to a Mesh in using an OrthographicCamera}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_buffergeometry to a Mesh with BufferGeometry}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast to a InstancedMesh}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_lines to a Line}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_raycasting_points to Points}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain_raycast raycasting}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_voxelpainter to paint voxels}
     * @see Example: {@link https://threejs.org/examples/#webgl_raycaster_texture to a Texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Raycaster Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js}
     */
    raycaster: [
        /**
         * This creates a new {@link Raycaster} object.
         * @param origin The origin vector where the ray casts from. Default `new Vector3()`
         * @param direction The direction vector that gives direction to the ray. Should be normalized. Default `new Vector3(0, 0,
    -1)`
         * @param near All results returned are further away than near. Near can't be negative. Expects a `Float`. Default `0`
         * @param far All results returned are closer than far. Far can't be lower than near. Expects a `Float`. Default `Infinity`
         */
        'origin',
        'direction',
        'near',
        'far',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\RenderTarget.d.ts
    renderTargetOptions: [
        'wrapS',
        'wrapT',
        'magFilter',
        'minFilter',
        'generateMipmaps',
        // true
        'format',
        // RGBAFormat
        'type',
        // UnsignedByteType
        'anisotropy',
        // 1
        'colorSpace',
        'internalFormat',
        // null
        'depthBuffer',
        // true
        'stencilBuffer',
        // false
        'resolveDepthBuffer',
        // true
        'resolveStencilBuffer',
        // true
        'depthTexture',
        // null
        /**
         * Defines the count of MSAA samples. Can only be used with WebGl 2. Default is **0**.
         * @default 0
         */
        'samples',
        'count',
    ].distinct(),
    renderTarget: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Uniform.d.ts
    /**
     * Uniforms are global GlSL variables.
     * They are passed to shader programs.
     * @example
     * When declaring a uniform of a {@link THREE.ShaderMaterial}, it is declared by value or by object.
     * ```typescript
     * uniforms: {
     * time: {
     *     value.0
     *     },
     * resolution Uniform(new Vector2())
     * },
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform / nodes / materials / instance / uniform}
     * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGpu / instance / uniform}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js}
     */
    uniform: [
        /**
         * Create a new instance of {@link THREE.Uniform}
         * @param value An object containing the value to set up the uniform. It's type must be one of the Uniform Types described above.
         */
        'value',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\UniformsGroup.d.ts
    /**
     * @see Example: {@link https://threejs.org/examples/#webgl2_ubo / UBO}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js}
     */
    get uniformsGroup() {
        return [//...this.eventDispatcher,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\DataUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\Earcut.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\ImageUtils.d.ts
    /**
     * A class containing utility functions for images.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/ImageUtils Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ImageUtils.js}
     */
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\PMREMGenerator.d.ts
    /**
     * This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture.
     * @remarks
     * This allows different levels of blur to be quickly accessed based on material roughness
     * Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution,
     * associated with higher roughness levels
     * In this.way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation.
     * @remarks
     * Note minimum {@link THREE.MeshStandardMaterial}'s roughness depends on the size of the provided texture
     * If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size.
     *
     * size roughness  |
     * |--------------|--------------------|
     *          .21               |
     *          .15               |
     *          .11               |
     *         .076              |
     *         .054              |
     *         .038              |
     *        .027              |
     *
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/PMREMGenerator.js}
     */
    pmremGenerator: [
        /**
         * This constructor creates a new PMREMGenerator.
         * @param renderer
         */
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\ShapeUtils.d.ts
    vec2: [
        'x',
        'y',
    ].distinct(),
    /**
     * A class containing utility functions for shapes.
     * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js}
     */
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Curve.d.ts
    /**
     * An base class for creating a {@link Curve} object that contains methods for interpolation
     * @remarks
     * For an array of Curves see {@link THREE.CurvePath}.
     * @remarks
     * This following curves inherit from THREE.Curve:
     *
     * **2D curves**
     *  - {@link THREE.ArcCurve}
     *  - {@link THREE.CubicBezierCurve}
     *  - {@link THREE.EllipseCurve}
     *  - {@link THREE.LineCurve}
     *  - {@link THREE.QuadraticBezierCurve}
     *  - {@link THREE.SplineCurve}
     *
     * **3d curves**
     *  - {@link THREE.CatmullRomCurve3}
     *  - {@link THREE.CubicBezierCurve3}
     *  - {@link THREE.LineCurve3}
     *  - {@link THREE.QuadraticBezierCurve3}
     *
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Curve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Curve.js}
     */
    curve: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\CurvePath.d.ts
    /**
     * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
     * @remarks
     * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js}
     */
    get curvePath() {
        return [//...this.curve,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Interpolations.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Path.d.ts
    /**
     * A 2D {@link Path} representation.
     * @remarks
     * The class provides methods for creating paths and contours of 2D shapes similar to the 2D Canvas API.
     * @example
     * ```typescript
     * const {@link Path} = new THREE.Path(,
     * path.lineTo(0, 0.8,
     * path.quadraticCurveTo(0, 1, 0.2, 1,
     * path.lineTo(1, 1,
     * const points = path.getPoints(,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * const line = new THREE.Line(geometry, material,
     * scene.add(line,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Path Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Path.js}
     */
    get path() {
        return [//...this.curvePath,
            /**
             * Creates a {@link Path} from the points
             * @remarks
             * The first point defines the offset, then successive points are added to the {@link CurvePath.curves} array as {@link LineCurve}.
             * If no points are specified, an empty {@link Path} is created and the {@link .currentPoint} is set to the origin.
             * @param points Array of {@link Vector2}.
             */
            'points',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Shape.d.ts
    /**
     * Defines an arbitrary 2d {@link Shape} plane using paths with optional holes
     * @remarks
     * It can be used with {@link THREE.ExtrudeGeometry}, {@link THREE.ShapeGeometry}, to get points, or to get triangulated faces.
     * @example
     * ```typescript
     * const heartShape = new THREE.Shape(,
     * heartShape.moveTo(25, 25,
     * heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0,
     * heartShape.bezierCurveTo(-30, 0,
    -30, 35,
    -30, 35,
     * heartShape.bezierCurveTo(-30, 55,
    -10, 77, 25, 95,
     * heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35,
     * heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0,
     * heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25,
     * const extrudeSettings = {
     * depth,
     * bevelEnabled,
     * bevelSegments,
     * steps,
     * bevelSize,
     * bevelThickness
     * },
     * const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings,
     * const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial(),
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_shapes / shapes }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes / extrude / shapes }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes2 / extrude / shapes2 }
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Shape Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Shape.js}
     */
    get shape() {
        return [//...this.path,
            /**
             * Creates a {@link Shape} from the points
             * @remarks
             * The first point defines the offset, then successive points are added to the {@link CurvePath.curves} array as {@link THREE.LineCurve}.
             * If no points are specified, an empty {@link Shape} is created and the {@link .currentPoint} is set to the origin.
             * @param points Array of {@link Vector2}.
             */
            'points',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\ShapePath.d.ts
    /**
     * This class is used to convert a series of shapes to an array of {@link THREE.Path's},
     * for example an svg shape to a path.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js}
     */
    shapePath: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\ArcCurve.d.ts
    /**
     * Alias for {@link THREE.EllipseCurve}.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js}
     */
    get arcCurve() {
        return [//...this.ellipseCurve,
            /**
             * This constructor creates a new {@link ArcCurve}.
             * @param aX The X center of the ellipse. Expects a `Float`. Default is `0`.
             * @param aY The Y center of the ellipse. Expects a `Float`. Default is `0`.
             * @param xradius The radius of the ellipse in the x direction. Expects a `Float`. Default is `1`.
             * @param yRadius The radius of the ellipse in the y direction. Expects a `Float`. Default is `1`.
             * @param aStartAngle The start angle of the curve in radians starting from the positive X axis. Default is `0`.
             * @param aEndAngle The end angle of the curve in radians starting from the positive X axis. Default is `2 x Math.PI`.
             * @param aClockwise Whether the ellipse is drawn clockwise. Default is `false`.
             */

            'aX',
            'aY',
            'aRadius',
            'aStartAngle',
            'aEndAngle',
            'aClockwise',
        ].distinct()
    },
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
     * new THREE.Vector3(10, 0, 10)].distinct(),
     * const points = curve.getPoints(50,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines / geometry / extrude / splines}
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CatmullRomCurve3.js}
     */
    get catmullRomCurve3() {
        return [//...this.curve,
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
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CubicBezierCurve.d.ts
    /**
     * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg bezier curve},
     * defined by a start point, endpoint and two control points.
     * @example
     * ```typescript
     * const curve = new THREE.CubicBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 15),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0),
     * const points = curve.getPoints(50,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js}
     */
    get cubicBezierCurve() {
        return [//...this.curve,
            /**
             * The starting point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v0',
            /**
             * The first control point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v1',
            /**
             * The second control point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v2',
            /**
             * The ending point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v3',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CubicBezierCurve3.d.ts
    /**
     * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg bezier curve},
     * defined by a start point, endpoint and two control points.
     * @example
     * ```typescript
     * const curve = new THREE.CubicBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 15),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0),
     * const points = curve.getPoints(50,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js}
     */
    get cubicBezierCurve3() {
        return [//...this.curve,
            /**
             * The starting point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v0',
            /**
             * The first control point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v1',
            /**
             * The second control point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v2',
            /**
             * The ending point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v3',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\Curves.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\EllipseCurve.d.ts
    /**
     * Creates a 2d curve in the shape of an ellipse
     * @remarks
     * Setting the {@link xradius} equal to the {@link yRadius} will result in a circle.
     * @example
     * ```typescript
     * const curve = new THREE.EllipseCurve(
     *   0,
 0,
     // ax, aY
     *   10, 10,
    // xradius, yRadius
     *   0,
 2 * Math.PI,
    // aStartAngle, aEndAngle
     *   false,
     // aClockwise
     *   0       // aRotation
     *   ,
     * const points = curve.getPoints(50,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({ color },
     * // Create the final object to add to the scene
     * const ellipse = new THREE.Line(geometry, material,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/EllipseCurve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/EllipseCurve.js}
     */
    get ellipseCurve() {
        return [//...this.curve,
            /**
          * The X center of the ellipse.
          * @remarks Expects a `Float`
          * @defaultValue `0`
          */
            'aX',
            /**
             * The Y center of the ellipse.
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'aY',
            /**
             * The radius of the ellipse in the x direction.
             * @defaultValue `1`
             */
            'xradius',
            /**
             * The radius of the ellipse in the y direction.
             * @defaultValue `1`
             */
            'yRadius',
            /**
             * The start angle of the curve in radians starting from the middle right side.
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'aStartAngle',
            /**
             * The end angle of the curve in radians starting from the middle right side.
             * @remarks Expects a `Float`
             * @defaultValue `2 * Math.PI`
             */
            'aEndAngle',
            /**
             * Whether the ellipse is drawn clockwise.
             * @defaultValue `false``
             */
            'aClockwise',
            /**
             * The rotation angle of the ellipse in radians, counterclockwise from the positive X axis (optional).
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'aRotation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve.d.ts
    /**
     * A curve representing a **2D** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js}
     */
    get lineCurve() {
        return [//...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v1',
            /**
             * The end point
             * @defaultValue `new THREE.Vector2()`
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve3.d.ts
    /**
     * A curve representing a **3d** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js}
     */
    get lineCurve3() {
        return [//...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v1',
            /**
             * The end point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve.d.ts
    /**
     * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif bezier curve},
     * defined by a start point, end point and a single control point.
     * @example
     * ```typescript
     * const curve = new THREE.QuadraticBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0),
     * const points = curve.getPoints(50,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve.js}
     */
    get quadraticBezierCurve() {
        return [//...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v0',
            /**
             * The control point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v1',
            /**
             * The end point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve3.d.ts
    /**
     * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif bezier curve},
     * defined by a start point, end point and a single control point.
     * @example
     * ```typescript
     * const curve = new THREE.QuadraticBezierCurve3(
     * new THREE.Vector3(-10, 0, 0),
     * new THREE.Vector3(20, 15, 0),
     * new THREE.Vector3(10, 0, 0),
     * const points = curve.getPoints(50,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js}
     */
    get quadraticBezierCurve3() {
        return [//...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector3()`
             */
            'v0',
            /**
             * The control point.
             * @defaultValue `new THREE.Vector3()`
             */
            'v1',
            /**
             * The end point.
             * @defaultValue `new THREE.Vector3()`
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\SplineCurve.d.ts
    /**
     * Create a smooth **2D** spline curve from a series of points.
     * @example
     * ```typescript
     * // Create a sine-like wave
     * const curve = new THREE.SplineCurve([
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 5),
     * new THREE.Vector2(0, 0),
     * new THREE.Vector2(5,
    -5),
     * new THREE.Vector2(10, 0)].distinct(),
     * const points = curve.getPoints(50,
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * // Create the final object to add to the scene
     * const splineObject = new THREE.Line(geometry, material,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/SplineCurve Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/SplineCurve.js}
     */
    get splineCurve() {
        return [//...this.curve,
            /**
             * The array of {@link THREE.Vector2} points that define the curve.
             * @defaultValue `[]`
             */
            'points',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\BoxGeometry.d.ts
    /**
     * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width',
    'height', and 'depth'
     * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const cube = new THREE.Mesh(geometry, material,
     * scene.add(cube,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js}
     */
    get boxGeometry() {
        return [
            /**
             * Create a new instance of {@link BoxGeometry}
             * @param width Width, that is, the length of the edges parallel to the X axis. Optional, Expects a `Float`. Default `1`
             * @param height Height, that is, the length of the edges parallel to the Y axis. Optional, Expects a `Float`. Default `1`
             * @param depth Depth, that is, the length of the edges parallel to the Z axis. Optional, Expects a `Float`. Default `1`
             * @param widthSegments Number of segmented rectangular faces along the width of the sides. Optional, Expects a `Integer`. Default `1`
             * @param heightSegments Number of segmented rectangular faces along the height of the sides. Optional, Expects a `Integer`. Default `1`
             * @param depthSegments Number of segmented rectangular faces along the depth of the sides. Optional, Expects a `Integer`. Default `1`
             */

            'width',
            'height',
            'depth',
            'widthSegments',
            'heightSegments',
            'depthSegments',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\CapsuleGeometry.d.ts
    /**
     * {@link CapsuleGeometry} is a geometry class for a capsule with given radii and height
     * @remarks It is constructed using a lathe.
     * @example
     * ```typescript
     * const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const capsule = new THREE.Mesh(geometry, material,
     * scene.add(capsule,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CapsuleGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CapsuleGeometry.js}
     */
    get capsuleGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link CapsuleGeometry}
             * @param radius Radius of the capsule. Expects a `Float`. Default `1`
             * @param length Length of the middle section. Expects a `Float`. Default `1`
             * @param capSegments Number of curve segments used to build the caps. Expects a `Integer`. Default `4`
             * @param radialSegments Number of segmented faces around the circumference of the capsule. Expects a `Integer`. Default `8`
             */
            'radius',
            'length',
            'capSegments',
            'radialSegments',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\CircleGeometry.d.ts
    /**
     * {@link CircleGeometry} is a simple shape of Euclidean geometry
     * @remarks
     * It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius
     * It is built counter-clockwise from a start angle and a given central angle
     * It can also be used to create regular polygons, where the number of segments determines the number of sides.
     * @example
     * ```typescript
     * const geometry = new THREE.CircleGeometry(5, 32,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const circle = new THREE.Mesh(geometry, material,
     * scene.add(circle,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CircleGeometry.js}
     */
    get circleGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link CircleGeometry}
             * @param radius Radius of the circle. Expects a `Float`. Default `1`
             * @param segments Number of segments (triangles). Expects a `Integer`. Minimum `3`. Default `32`
             * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
             * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete circle_.
             */
            'radius',
            'segments',
            'thetaStart',
            'thetaLength',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ConeGeometry.d.ts
    /**
     * A class for generating cone geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.ConeGeometry(5, 20, 32,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const cone = new THREE.Mesh(geometry, material,
     * scene.add(cone,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ConeGeometry.js}
     */
    get coneGeometry() {
        return [//...this.cylinderGeometry,
            /**
             * Create a new instance of {@link ConeGeometry}
             * @param radius Radius of the cone base. Expects a `Float`. Default `1`
             * @param height Height of the cone. Expects a `Float`. Default `1`
             * @param radialSegments Number of segmented faces around the circumference of the cone. Expects a `Integer`. Default `32`
             * @param heightSegments Number of rows of faces along the height of the cone. Expects a `Integer`. Default `1`
             * @param openEnded A Boolean indicating whether the base of the cone is open or capped. Default `false`, _meaning capped_.
             * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
             * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete cone_.
             */

            'radius',
            'height',
            'radialSegments',
            'heightSegments',
            'openEnded',
            'thetaStart',
            'thetaLength',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\CylinderGeometry.d.ts
    /**
     * A class for generating cylinder geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.CylinderGeometry(5, 5, 20, 32,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const cylinder = new THREE.Mesh(geometry, material,
     * scene.add(cylinder,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CylinderGeometry.js}
     */
    get cylinderGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link CylinderGeometry}
             * @param radiusTop Radius of the cylinder at the top. Default `1`
             * @param radiusBottom Radius of the cylinder at the bottom. Default `1`
             * @param height Height of the cylinder. Default `1`
             * @param radialSegments Number of segmented faces around the circumference of the cylinder. Default `32`
             * @param heightSegments Number of rows of faces along the height of the cylinder. Expects a `Integer`. Default `1`
             * @param openEnded A Boolean indicating whether the ends of the cylinder are open or capped. Default `false`, _meaning capped_.
             * @param thetaStart Start angle for first segment. Default `0`, _(three o'clock position)_.
             * @param thetaLength The central angle, often called theta, of the circular sector. Default `Math.PI * 2`, _which makes for a complete cylinder.
             */

            'radiusTop',
            'radiusBottom',
            'height',
            'radialSegments',
            'heightSegments',
            'openEnded',
            'thetaStart',
            'thetaLength',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\DodecahedronGeometry.d.ts
    /**
     * A class for generating a dodecahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js}
     */
    get dodecahedronGeometry() {
        return [//...this.polyhedronGeometry,
            /**
             * Create a new instance of {@link DodecahedronGeometry}
             * @param radius Radius of the dodecahedron. Expects a `Float`. Default `1`
             * @param detail Setting this.to a value greater than 0 adds vertices making it no longer a dodecahedron. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\EdgesGeometry.d.ts
    /**
     * This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry}.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(100, 100, 100,
     * const edges = new THREE.EdgesGeometry(geometry,
     * const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
     * color
     * }),
     * scene.add(line,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/EdgesGeometry.js}
     */
    get edgesGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link EdgesGeometry}
             * @param geometry Any geometry object. Default `null`.
             * @param thresholdAngle An edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this.value. Expects a `Integer`. Default `1` _degree_.
             */
            'geometry',
            'thresholdAngle',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ExtrudeGeometry.d.ts
    extrudeGeometryOptions: ([
        /**
         * Number of points on the curves.
         * Expects a `Integer`.
         * @defaultValue `12`
         */
        'curveSegments',
        /**
         * Number of points used for subdividing segments along the depth of the extruded spline.
         * @defaultValue `1`
         */
        'steps',
        /**
         * Depth to extrude the shape.
         * @defaultValue `1`
         */
        'depth',
        /**
         * Turn on bevel. Applying beveling to the shape.
         * @defaultValue `true`
         */
        'bevelEnabled',
        /**
         * How deep into the original shape the bevel goes.
         * Expects a `Float`.
         * @defaultValue `0.2`
         */
        'bevelThickness',
        /**
         * Distance from the shape outline that the bevel extends
         * Expects a `Float`.
         * @defaultValue `bevelThickness - 0.1`
         */
        'bevelSize',
        /**
         * Distance from the shape outline that the bevel starts.
         * Expects a `Float`.
         * @defaultValue `0`
         */
        'bevelOffset',
        /**
         * Number of bevel layers/segments.
         * Expects a `Integer`.
         * @defaultValue `3`
         */
        'bevelSegments',
        /**
         * A 3d spline path along which the shape should be extruded.
         * @remarks Bevels not supported for path extrusion.
         */
        'extrudePath',
        /**
         * A object that provides UV generator functions.
         */
        'UVGenerator',
    ] as const).toObject(),
    uvGenerator: [
    ].distinct(),
    /**
     * Creates extruded geometry from a path shape.
     * @remarks This object extrudes a 2D shape to a 3d geometry.
     * @remarks When creating a Mesh with this.geometry, if you'd like to have a separate material used for its face and its extruded sides, you can use an array of materials
     * @remarks The first material will be applied to the face, the second material will be applied to the sides.
     * @example
     * ```typescript
     * const length = 12, width = 8,
     * const shape = new THREE.Shape(,
     * shape.moveTo(0, 0,
     * shape.lineTo(0, width,
     * shape.lineTo(length, width,
     * shape.lineTo(length, 0,
     * shape.lineTo(0, 0,
     * const extrudeSettings = {
     * steps,
     * depth,
     * bevelEnabled,
     * bevelThickness,
     * bevelSize,
     * bevelOffset,
     * bevelSegments
     * },
     * const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const mesh = new THREE.Mesh(geometry, material,
     * scene.add(mesh,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ExtrudeGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js}
     */
    get extrudeGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link ExtrudeGeometry}
             * @param shapes Shape or an array of shapes. Default `new Shape([new Vector2(0.5, 0.5), new Vector2(-0.5, 0.5), new Vector2(-0.5,
        -0.5), new Vector2(0.5,
        -0.5)])`.
             * @param options Object that can contain the following parameters. @see {@link ExtrudeGeometryOptions} for defaults.
             */
            'shapes',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\Geometries.d.ts

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\IcosahedronGeometry.d.ts
    /**
     * A class for generating an icosahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js}
     */
    get icosahedronGeometry() {
        return [//...this.polyhedronGeometry,
            /**
             * Create a new instance of {@link IcosahedronGeometry}
             * @param radius Expects a `Float`. Default `1`
             * @param detail Setting this.to a value greater than 0 adds more vertices making it no longer an icosahedron.
             *           when detail is greater than 1, it's effectively a sphere. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\LatheGeometry.d.ts
    /**
     * Creates meshes with axial symmetry like vases
     * @remarks
     * The lathe rotates around the Y axis.
     * @example
     * ```typescript
     * const points = ,
     * for (let i = 0, i & lt, 10, i++) {
     * points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5,
    (i - 5) * 2),
     * }
     * const geometry = new THREE.LatheGeometry(points,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const lathe = new THREE.Mesh(geometry, material,
     * scene.add(lathe,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js}
     */
    get latheGeometry() {
        return [//...this.bufferGeometry,
            /**
             * This creates a {@link LatheGeometry} based on the parameters.
             * @param points Array of Vector2s. The x-coordinate of each point must be greater than zero.
             *           default `[new Vector2(0,
        -0.5), new Vector2(0.5, 0), new Vector2(0, 0.5)]` _which creates a simple diamond shape_.
             * @param segments The number of circumference segments to generate. Expects a `Integer`. Default `12`.
             * @param phiStart The starting angle in radians. Expects a `Float`. Default `0`.
             * @param phiLength The radian (0 to 2*PI) range of the lathed section 2*PI is a closed lathe, less than 2PI is a portion. Expects a `Float`. Default `Math.PI * 2`.
             */
            'points',
            'segments',
            'phiStart',
            'phiLength',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\OctahedronGeometry.d.ts
    /**
     * A class for generating an octahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js}
     */
    get octahedronGeometry() {
        return [//...this.polyhedronGeometry,
            /**
             * Create a new instance of {@link OctahedronGeometry}
             * @param radius Radius of the octahedron. Expects a `Float`. Default `1`
             * @param detail Setting this.to a value greater than zero add vertices making it no longer an octahedron. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PlaneGeometry.d.ts
    /**
     * A class for generating plane geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.PlaneGeometry(1, 1,
     * const material = new THREE.MeshBasicMaterial({
     * color,
     * side.DoubleSide
     * },
     * const plane = new THREE.Mesh(geometry, material,
     * scene.add(plane,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js}
     */
    get planeGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link PlaneGeometry}
             * @param width Width along the X axis. Expects a `Float`. Default `1`
             * @param height Height along the Y axis. Expects a `Float`. Default `1`
             * @param widthSegments Number of segmented faces along the width of the sides. Expects a `Integer`. Default `1`
             * @param heightSegments Number of segmented faces along the height of the sides. Expects a `Integer`. Default `1`
             */
            'width',
            'height',
            'widthSegments',
            'heightSegments',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PolyhedronGeometry.d.ts
    /**
     * A polyhedron is a solid in three dimensions with flat faces
     * @remarks
     * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
     * This class is used by {@link THREE.DodecahedronGeometry},
    {@link THREE.IcosahedronGeometry},
     * {@link THREE.OctahedronGeometry}, and {@link THREE.TetrahedronGeometry} to generate their respective geometries.
     * @example
     * ```typescript
     * const verticesOfCube = [-1,
    -1,
    -1, 1,
    -1,
    -1, 1, 1,
    -1,
    -1, 1,
    -1,
    -1,
    -1, 1, 1,
    -1, 1, 1, 1, 1,
    -1, 1, 1,
    ].distinct(),
     * const indicesOfFaces = [
     * 2, 1, 0, 0, 3, 2,
     * 0, 4, 7, 7, 3, 0,
     * 0, 1, 5, 5, 4, 0,
     * 1, 2, 6, 6, 5, 1,
     * 2, 3, 7, 7, 6, 2,
     * 4, 5, 6, 6, 7, 4].distinct(),
     * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js}
     */
    get polyhedronGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link PolyhedronGeometry}
             * @param vertices Array of points of the form [1,1,1,-1,-1,-1,...this. ]. Default `[]`.
             * @param indices Array of indices that make up the faces of the form [0,1,2,2,3,0,...this. ]. Default `[]`.
             * @param radius [page:The radius of the final shape Expects a `Float`. Default `1`
             * @param detail [page:How many levels to subdivide the geometry. The more detail, the smoother the shape. Expects a `Integer`. Default `0`
             */
            'vertices',
            'indices',
            'radius',
            'detail',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\RingGeometry.d.ts
    /**
     * A class for generating a two-dimensional ring geometry.
     * @example
     * ```typescript
     * const geometry = new THREE.RingGeometry(1, 5, 32,
     * const material = new THREE.MeshBasicMaterial({
     * color,
     * side.DoubleSide
     * },
     * const mesh = new THREE.Mesh(geometry, material,
     * scene.add(mesh,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/RingGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/RingGeometry.js}
     */
    get ringGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link RingGeometry}
             * @param innerRadius Expects a `Float`. Default `0.5`.
             * @param outerRadius Expects a `Float`. Default `1`.
             * @param thetaSegments Number of segments. A higher number means the ring will be more round. Minimum is 3. Expects a `Integer`. Default `32`.
             * @param phiSegments Number of segments per ring segment. Minimum is `1`. Expects a `Integer`. Default `1`.
             * @param thetaStart Starting angle. Expects a `Float`. Default `0`.
             * @param thetaLength Central angle. Expects a `Float`. Default `Math.PI * 2`.
             */

            'innerRadius',
            'outerRadius',
            'thetaSegments',
            'phiSegments',
            'thetaStart',
            'thetaLength',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ShapeGeometry.d.ts
    /**
     * Creates an one-sided polygonal geometry from one or more path shapes.
     * @example
     * ```typescript
     * const x = 0, y = 0,
     * const heartShape = new THREE.Shape(,
     * heartShape.moveTo(x + 5, y + 5,
     * heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y,
     * heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7,
     * heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19,
     * heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7,
     * heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y,
     * heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5,
     * const geometry = new THREE.ShapeGeometry(heartShape,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const mesh = new THREE.Mesh(geometry, material,
     * scene.add(mesh,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ShapeGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ShapeGeometry.js}
     */
    get shapeGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link ShapeGeometry}
             * @param shapes Array of shapes or a single {@link THREE.Shape}. Default `new Shape([new Vector2(0, 0.5), new Vector2(-0.5,
        -0.5), new Vector2(0.5,
        -0.5)])`, _a single triangle shape_.
             * @param curveSegments Number of segments per shape. Expects a `Integer`. Default `12`
             */
            'shapes',
            'curveSegments',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\SphereGeometry.d.ts
    /**
     * A class for generating sphere geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.SphereGeometry(15, 32, 16,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const sphere = new THREE.Mesh(geometry, material,
     * scene.add(sphere,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js}
     */
    get sphereGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link SphereGeometry}
             * @remarks
             * The geometry is created by sweeping and calculating vertexes
             * around the **Y** axis (horizontal sweep) and the **Z** axis (vertical sweep)
             * Thus, incomplete spheres (akin to `'sphere slices'`) can be created
             * through the use of different values of {@link phiStart},
        {@link phiLength},
        {@link thetaStart} and {@link thetaLength},
             * in order to define the points in which we start (or end) calculating those vertices.
             * @param radius Sphere radius. Expects a `Float`. Default `1`
             * @param widthSegments Number of horizontal segments. Minimum value is 3, and the Expects a `Integer`. Default `32`
             * @param heightSegments Number of vertical segments. Minimum value is 2, and the Expects a `Integer`. Default `16`
             * @param phiStart Specify horizontal starting angle. Expects a `Float`. Default `0`
             * @param phiLength Specify horizontal sweep angle size. Expects a `Float`. Default `Math.PI * 2`
             * @param thetaStart Specify vertical starting angle. Expects a `Float`. Default `0`
             * @param thetaLength Specify vertical sweep angle size. Expects a `Float`. Default `Math.PI`
             */

            'radius',
            'widthSegments',
            'heightSegments',
            'phiStart',
            'phiLength',
            'thetaStart',
            'thetaLength',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TetrahedronGeometry.d.ts
    /**
     * A class for generating a tetrahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js}
     */
    get tetrahedronGeometry() {
        return [//...this.polyhedronGeometry,
            /**
             * Create a new instance of {@link TetrahedronGeometry}
             * @param radius Radius of the tetrahedron. Expects a `Float`. Default `1`
             * @param detail Setting this.to a value greater than 0 adds vertices making it no longer a tetrahedron. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusGeometry.d.ts
    /**
     * A class for generating torus geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.TorusGeometry(10, 3, 16, 100,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const torus = new THREE.Mesh(geometry, material,
     * scene.add(torus,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js}
     */
    get torusGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link TorusGeometry}
             * @param radius Radius of the torus, from the center of the torus to the center of the tube. Expects a `Float`. Default `1`.
             * @param tube Radius of the tube. Expects a `Float`. Default `0.4`.
             * @param radialSegments Expects a `Integer`.Default is `12`.
             * @param tubularSegments Expects a `Integer`. Default `48`.
             * @param arc Central angle. Expects a `Float`. Default `Math.PI * 2`
             */
            'radius',
            'tube',
            'radialSegments',
            'tubularSegments',
            'arc',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusKnotGeometry.d.ts
    /**
     * Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q
     * If p and q are not coprime, the result will be a torus link.
     * @example
     * ```typescript
     * const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const torusKnot = new THREE.Mesh(geometry, material,
     * scene.add(torusKnot,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusKnotGeometry.js}
     */
    get torusKnotGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link TorusKnotGeometry}
             * @param radius Radius of the torus.. Default `1`.
             * @param tube Expects a `Float`. Default `0.4`.
             * @param tubularSegments Expects a `Integer`. Default `64`.
             * @param radialSegments Expects a `Integer`. Default `8`.
             * @param p This value determines, how many times the geometry winds around its axis of rotational symmetry. Expects a `Integer`. Default `2`.
             * @param q This value determines, how many times the geometry winds around a circle in the interior of the torus. Expects a `Integer`. Default `3`.
             */

            'radius',
            'tube',
            'tubularSegments',
            'radialSegments',
            'p',
            'q',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TubeGeometry.d.ts
    /**
     * Creates a tube that extrudes along a 3d curve.
     * @example
     * ```typescript
     * class CustomSinCurve extends THREE.Curve {
     * scale = 1) {
     *     super(,
     *     this.scale = scale,
     *     }
     * getPoint(t, optionalTarget = new THREE.Vector3()) {
     *     const tx = t * 3 - 1.5,
     *     const ty = Math.sin(2 * Math.PI * t,
     *     const tz = 0,
     *     return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale,
     *     }
     * }
     * const path = new CustomSinCurve(10,
     * const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const mesh = new THREE.Mesh(geometry, material,
     * scene.add(mesh,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TubeGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js}
     */
    get tubeGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link TubeGeometry}
             * @param path A 3d path that inherits from the {@link THREE.Curve} base class.
             *         default {@link THREE.QuadraticBezierCurve3 THREE.QuadraticBezierCurve3(new Vector3(-1,
        -1, 0 ), new Vector3(-1, 1, 0), new Vector3(1, 1, 0))}.
             * @param tubularSegments The number of segments that make up the tube. Expects a `Integer`. Default `64`.
             * @param radius The radius of the tube. Expects a `Float`. Default `1`.
             * @param radialSegments The number of segments that make up the cross-section. Expects a `Integer`. Default `8`.
             * @param closed Is the tube open or closed. Default `false`.
             */

            'path',
            'tubularSegments',
            'radius',
            'radialSegments',
            'closed',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\WireframeGeometry.d.ts
    /**
     * This can be used as a helper object to view a {@link BufferGeometry} as a wireframe.
     * @example
     * ```typescript
     * const geometry = new THREE.SphereGeometry(100, 100, 100,
     * const wireframe = new THREE.WireframeGeometry(geometry,
     * const line = new THREE.LineSegments(wireframe,
     * line.material.depthTest = false,
     * line.material.opacity = 0.25,
     * line.material.transparent = true,
     * scene.add(line,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js}
     */
    get wireframeGeometry() {
        return [//...this.bufferGeometry,
            /**
             * Create a new instance of {@link WireframeGeometry}
             * @param geometry Any geometry object. Default `null`.
             */
            'geometry',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\ArrowHelper.d.ts
    /**
     * An 3d arrow object for visualizing directions.
     * @example
     * ```typescript
     * const dir = new THREE.Vector3(1, 2, 0,
     * //normalize the direction vector (convert to vector of length 1)
     * dir.normalize(,
     * const origin = new THREE.Vector3(0, 0, 0,
     * const length = 1,
     * const hex = 0xffff00,
     * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex,
     * scene.add(arrowHelper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh / shadowmesh}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js}
     */
    get arrowHelper() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link ArrowHelper}
             * @param dir Direction from origin. Must be a unit vector. Default `new THREE.Vector3(0, 0, 1)`
             * @param origin Point at which the arrow starts. Default `new THREE.Vector3(0, 0, 0)`
             * @param length Length of the arrow. Default `1`
             * @param hex Hexadecimal value to define color. Default `0xffff00`
             * @param headLength The length of the head of the arrow. Default `0.2 * length`
             * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
             */

            'dir',
            'origin',
            'length',
            'color',
            'headLength',
            'headWidth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\AxesHelper.d.ts
    /**
     * An axis object to visualize the 3 axes in a simple way.
     * @remarks
     * The X axis is red
     * The Y axis is green
     * The Z axis is blue.
     * @example
     * ```typescript
     * const {@link AxesHelper} = new THREE.AxesHelper(5,
     * scene.add(axesHelper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression / buffergeometry / compression}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex / geometry / convex}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd / loader / nrrd}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js}
     */
    get axesHelper() {
        return [//...this.lineSegments,
            /**
             * Create a new instance of {@link AxesHelper}
             * @param size Size of the lines representing the axes. Default `1`
             */
            'size',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\Box3Helper.d.ts
    /**
     * Helper object to visualize a {@link THREE.Box3}.
     * @example
     * ```typescript
     * const box = new THREE.Box3(,
     * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3),
     * const helper = new THREE.Box3Helper(box, 0xffff00,
     * scene.add(helper,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js}
     */
    get box3Helper() {
        return [//...this.lineSegments,
            /**
             * Creates a new wireframe box that represents the passed Box3.
             * @param box The Box3 to show.
             * @param color The box's color. Default `0xffff00`
             */
            'box',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\BoxHelper.d.ts
    /**
     * Helper object to graphically show the world-axis-aligned bounding box around an object
     * @remarks
     * The actual bounding box is handled with {@link THREE.Box3}, this.is just a visual helper for debugging
     * It can be automatically resized with the {@link THREE.BoxHelper.update.update} method when the object it's created from is transformed
     * Note that the object must have a {@link THREE.BufferGeometry} for this.to work, so it won't work with {@link Sprite}.
     * @example
     * ```typescript
     * const sphere = new THREE.SphereGeometry(,
     * const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000),
     * const box = new THREE.BoxHelper(object, 0xffff00,
     * scene.add(box,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd / loader / nrrd}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_drawrange / buffergeometry / drawrange}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/BoxHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/BoxHelper.js}
     */
    get boxHelper() {
        return [//...this.lineSegments,
            /**
             * Creates a new wireframe box that bounds the passed object
             * @remarks
             * Internally this.uses {@link THREE.Box3.setFromObject.setFromObject} to calculate the dimensions
             * Note that this.includes any children.
             * @param object The object3d to show the world-axis-aligned bounding box.
             * @param color Hexadecimal value that defines the box's color. Default `0xffff00`
             */
            'object',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\CameraHelper.d.ts
    /**
     * This helps with visualizing what a camera contains in its frustum
     * @remarks
     * It visualizes the frustum of a camera using a {@link THREE.LineSegments}.
     * @remarks {@link CameraHelper} must be a child of the scene.
     * @example
     * ```typescript
     * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,
     * const helper = new THREE.CameraHelper(camera,
     * scene.add(helper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_camera / camera}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines / extrude / splines}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/CameraHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/CameraHelper.js}
     */
    get cameraHelper() {
        return [//...this.lineSegments,
            /**
             * The camera being visualized.
             */
            'camera',
        ].distinct()
    },
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
    get directionalLightHelper() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link DirectionalLightHelper}
             * @param light The light to be visualized.
             * @param size Dimensions of the plane. Default `1`
             * @param color If this.is not the set the helper will take the color of the light. Default `light.color`
             */
            'light',
            'size',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\GridHelper.d.ts
    /**
     * The {@link GridHelper} is an object to define grids
     * @remarks
     * Grids are two-dimensional arrays of lines.
     * @example
     * ```typescript
     * const size = 10,
     * const divisions = 10,
     * const {@link GridHelper} = new THREE.GridHelper(size, divisions,
     * scene.add(gridHelper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/GridHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/GridHelper.js}
     */
    get gridHelper() {
        return [//...this.lineSegments,
            /**
             * Creates a new {@link GridHelper} of size 'size' and divided into 'divisions' segments per side
             * @remarks
             * Colors are optional.
             * @param size The size of the grid. Default `10`
             * @param divisions The number of divisions across the grid. Default `10`
             * @param colorCenterLine The color of the centerline. This can be a {@link THREE.Color}, a hexadecimal value and an css-Color name. Default `0x444444`
             * @param colorGrid The color of the lines of the grid. This can be a {@link THREE.Color}, a hexadecimal value and an css-Color name. Default `0x888888`
             */
            'size',
            'divisions',
            'color1',
            'color2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\HemisphereLightHelper.d.ts
    /**
     * Creates a visual aid consisting of a spherical {@link THREE.Mesh} for a {@link THREE.HemisphereLight}.
     * @example
     * ```typescript
     * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1,
     * const helper = new THREE.HemisphereLightHelper(light, 5,
     * scene.add(helper,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/HemisphereLightHelper.js}
     */
    get hemisphereLightHelper() {
        return [//...this.object3d,
            /**
             *  Create a new instance of {@link HemisphereLightHelper}
             * @param light The light being visualized.
             * @param size Thr sphere size
             * @param color If this.is not the set the helper will take the color of the light.
             */
            'light',
            'size',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PlaneHelper.d.ts
    /**
     * Helper object to visualize a {@link THREE.Plane}.
     * @example
     * ```typescript
     * const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3,
     * const helper = new THREE.PlaneHelper(plane, 1, 0xffff00,
     * scene.add(helper,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PlaneHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PlaneHelper.js}
     */
    get planeHelper() {
        return [//...this.lineSegments,
            /**
             * Creates a new wireframe representation of the passed plane.
             * @param plane The plane to visualize.
             * @param size Side length of plane helper. Expects a `Float`. Default `1`
             * @param hex Color. Default `0xffff00`
             */
            'plane',
            'size',
            'hex',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PointLightHelper.d.ts
    /**
     * This displays a helper object consisting of a spherical {@link THREE.Mesh} for visualizing a {@link THREE.PointLight}.
     * @example
     * ```typescript
     * const pointLight = new THREE.PointLight(0xff0000, 1, 100,
     * pointLight.position.set(10, 10, 10,
     * scene.add(pointLight,
     * const sphereSize = 1,
     * const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize,
     * scene.add(pointLightHelper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PointLightHelper.js}
     */
    get pointLightHelper() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link PointLightHelper}
             * @param light The light to be visualized.
             * @param sphereSize The size of the sphere helper. Expects a `Float`. Default `1`
             * @param color If this.is not the set the helper will take the color of the light.
             */
            'light',
            'sphereSize',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PolarGridHelper.d.ts
    /**
     * The {@link PolarGridHelper} is an object to define polar grids
     * @remarks
     * Grids are two-dimensional arrays of lines.
     * @example
     * ```typescript
     * const radius = 10,
     * const sectors = 16,
     * const rings = 8,
     * const divisions = 64,
     * const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions,
     * scene.add(helper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PolarGridHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PolarGridHelper.js}
     */
    get polarGridHelper() {
        return [//...this.lineSegments,
            /**
             * Creates a new {@link PolarGridHelper} of radius 'radius' with 'sectors' number of sectors and 'rings' number of rings, where each circle is smoothed into 'divisions' number of line segments.
             * @remarks Colors are optional.
             * @param radius The radius of the polar grid. This can be any positive number. Default `10`.
             * @param sectors The number of sectors the grid will be divided into. This can be any positive integer. Default `16`.
             * @param rings The number of rings. This can be any positive integer. Default `8`.
             * @param divisions The number of line segments used for each circle. This can be any positive integer that is 3 or greater. Default `64`.
             * @param color1 The first color used for grid elements. This can be a {@link THREE.Color}, a hexadecimal value and an css-Color name. Default `0x444444`.
             * @param color2 The second color used for grid elements. This can be a {@link THREE.Color}, a hexadecimal value and an css-Color name. Default `0x888888`.
             */

            'radius',
            'radials',
            'circles',
            'divisions',
            'color1',
            'color2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SkeletonHelper.d.ts
    /**
     * A helper object to assist with visualizing a {@link Skeleton}
     * @remarks
     * The helper is rendered using a {@link LineBasicMaterial}.
     * @example
     * ```typescript
     * const helper = new THREE.SkeletonHelper(skinnedMesh,
     * scene.add(helper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending / animation / skinning / blending}
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph / animation / skinning / morph}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_bvh / loader / bvh }
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SkeletonHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SkeletonHelper.js}
     */
    get skeletonHelper() {
        return [//...this.lineSegments,
            /**
             * Create a new instance of {@link SkeletonHelper}
             * @param object Usually an instance of {@link THREE.SkinnedMesh}.
             * However, any instance of {@link THREE.Object3d} can be used if it represents a hierarchy of {@link Bone}s (via {@link THREE.Object3d.children.children}).
             */
            'object',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SpotLightHelper.d.ts
    /**
     * This displays a cone shaped helper object for a {@link THREE.SpotLight}.
     * @example
     * ```typescript
     * const spotLight = new THREE.SpotLight(0xffffff,
     * spotLight.position.set(10, 10, 10,
     * scene.add(spotLight,
     * const {@link SpotLightHelper} = new THREE.SpotLightHelper(spotLight,
     * scene.add(spotLightHelper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights/ lights / spotlights }
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SpotLightHelper.js}
     */
    get spotLightHelper() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link SpotLightHelper}
             * @param light The {@link THREE.SpotLight} to be visualized.
             * @param color If this.is not the set the helper will take the color of the light. Default `light.color`
             */
            'light',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\AmbientLight.d.ts
    /**
     * This light globally illuminates all objects in the scene equally.
     * @remarks This light cannot be used to cast shadows as it does not have a direction.
     * @example
     * ```typescript
     * const light = new THREE.AmbientLight(0x404040, // soft white light
     * scene.add(light,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLight Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js}
     */
    get ambientLight() {
        return [//...this.light,
            /**
             * Creates a new {@link AmbientLight}.
             * @param color Numeric value of the rgb component of the color. Default `0xffffff`
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
             */
            'color',
            'intensity',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\DirectionalLight.d.ts
    /**
     * A light that gets emitted in a specific direction
     * @remarks
     * This light will behave as though it is infinitely far away and the rays produced from it are all parallel
     * The common use case for this.is to simulate daylight, the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.
     * A common point of confusion for directional lights is that setting the rotation has no effect
     * @remarks
     * This is because three.js's {@link DirectionalLight} is the equivalent to what is often called a 'Target Direct Light' in other applications.
     * This means that its direction is calculated as pointing from the light's {@link THREE.Object3d.position} to the {@link THREE.DirectionalLight.target}'s
     * position (as opposed to a 'Free Direct Light' that just has a rotation component).
     * See the {@link THREE.DirectionalLight.target} property below for details on updating the target.
     * @example
     * ```typescript
     * // White directional light at half intensity shining from the top.
     * const {@link DirectionalLight} = new THREE.DirectionalLight(0xffffff, 0.5,
     * scene.add(directionalLight,
     * ```
     * @see Example: {@link https://threejs.org/examples/#misc_controls_fly / fly }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier / parallaxbarrier }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo / stereo }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines / extrude / splines }
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_bumpmap / bumpmap }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/DirectionalLight Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js}
     */
    get directionalLight() {
        return [//...this.light,
            /**
             * Creates a new {@link DirectionalLight}.
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
             */
            'color',
            'intensity',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\DirectionalLightShadow.d.ts
    /**
     * This is used internally by {@link DirectionalLight} for calculating shadows.
     * Unlike the other shadow classes, this.uses an {@link THREE.OrthographicCamera} to calculate the shadows,
     * rather than a {@link THREE.PerspectiveCamera}
     * @remarks
     * This is because light rays from a {@link THREE.DirectionalLight} are parallel.
     * @example
     * ```typescript
     * //Create a WebGlRenderer and turn on shadows in the renderer
     * const renderer = new THREE.WebGlRenderer(,
     * renderer.shadowMap.enabled = true,
     * renderer.shadowMap.type = THREE.PCFSoftShadowMap, // default THREE.PCFShadowMap
     * //Create a DirectionalLight and turn on shadows for the light
     * const light = new THREE.DirectionalLight(0xffffff, 1,
     * light.position.set(0, 1, 0, //default, light shining from top
     * light.castShadow = true, // default false
     * scene.add(light,
     * //Set up shadow properties for the light
     * light.shadow.mapSize.width = 512, // default
     * light.shadow.mapSize.height = 512, // default
     * light.shadow.camera.near = 0.5, // default
     * light.shadow.camera.far = 500, // default
     * //Create a sphere that cast shadows (but does not receive them)
     * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32,
     * const sphereMaterial = new THREE.MeshStandardMaterial({
     * color
     * },
     * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial,
     * sphere.castShadow = true, //default is false
     * sphere.receiveShadow = false, //default
     * scene.add(sphere,
     * //Create a plane that receives shadows (but does not cast them)
     * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32,
     * const planeMaterial = new THREE.MeshStandardMaterial({
     * color
     * })
     * const plane = new THREE.Mesh(planeGeometry, planeMaterial,
     * plane.receiveShadow = true,
     * scene.add(plane,
     * //Create a helper for the shadow camera (optional)
     * const helper = new THREE.CameraHelper(light.shadow.camera,
     * scene.add(helper,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/DirectionalLightShadow Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLightShadow.js}
     */
    get directionalLightShadow() {
        return [//...this.lightShadow,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\HemisphereLight.d.ts
    /**
     * A light source positioned directly above the scene, with color fading from the sky color to the ground color.
     * @remarks This light cannot be used to cast shadows.
     * @example
     * ```typescript
     * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1,
     * scene.add(light,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending / skinning / blending }
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_hemisphere / hemisphere }
     * @see Example: {@link https://threejs.org/examples/#misc_controls_pointerlock / pointerlock }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_kinematics / collada / kinematics }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_stl / stl }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLight Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js}
     */
    get hemisphereLight() {
        return [//...this.light,
            /**
             * Creates a new {@link HemisphereLight}.
             * @param skyColor Hexadecimal color of the sky. Expects a `Integer`. Default `0xffffff` _(white)_.
             * @param groundColor Hexadecimal color of the ground. Expects a `Integer`. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
             */
            'skyColor',
            'groundColor',
            'intensity',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\Light.d.ts
    /**
     * Abstract base class for lights.
     * @remarks All other light types inherit the properties and methods described here.
     */
    get light() {
        return [//...this.object3d,
            /**
             * Creates a new {@link Light}
             * @remarks
             * **Note** that this.is not intended to be called directly (use one of derived classes instead).
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
             */
            'color',
            'intensity',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\LightProbe.d.ts
    /**
     * Light probes are an alternative way of adding light to a 3d scene.
     * @remarks
     * Unlike classical light sources (e.g
     * directional, point or spot lights), light probes do not emit light
     * Instead they store information about light passing through 3d space
     * During rendering, the light that hits a 3d object is approximated by using the data from the light probe.
     * Light probes are usually created from (radiance) environment maps
     * The class {@link THREE.LightProbeGenerator} can be used to create light probes from
     * instances of {@link THREE.CubeTexture} or {@link THREE.WebGlCubeRenderTarget}
     * However, light estimation data could also be provided in other forms e.g
     * by WebXR
     * This enables the rendering of augmented reality content that reacts to real world lighting.
     * The current probe implementation in three.js supports so-called diffuse light probes
     * This type of light probe is functionally equivalent to an irradiance environment map.
     * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe / light probe }
     * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe_cubecamera / light probe / cube camera }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/LightProbe Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightProbe.js}
     */
    get lightProbe() {
        return [//...this.light,
            /**
             * Creates a new LightProbe.
             * @param sh An instance of {@link THREE.SphericalHarmonics3}. Default `new THREE.SphericalHarmonics3()``.
             * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`.
             */
            'sh',
            'intensity',
            /**
             * Read-only flag to check if a given object is of type {@link DirectionalLight}.
             * @remarks This is a _constant_ value
             * @defaultValue `true`
             */
            /**
             * A light probe uses spherical harmonics to encode lighting information.
             * @defaultValue `new THREE.SphericalHarmonics3()`
             */
            'sh',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\LightShadow.d.ts
    /**
     * Serves as a base class for the other shadow classes.
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js}
     */
    lightShadow: [
        /**
         * Create a new instance of {@link LightShadow}
         * @param camera The light's view of the world.
         */
        'camera',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLight.d.ts
    /**
     * A light that gets emitted from a single point in all directions
     * @remarks
     * A common use case for this.is to replicate the light emitted from a bare lightbulb.
     * @example
     * ```typescript
     * const light = new THREE.PointLight(0xff0000, 1, 100,
     * light.position.set(50, 50, 50,
     * scene.add(light,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_pointlights / pointlights }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph / anaglyph }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text / text }
     * @see Example: {@link https://threejs.org/examples/#webgl_lensflares }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/PointLight Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js}
     */
    get pointLight() {
        return [//...this.light,
            /**
             * Creates a new PointLight.
             * @param color Hexadecimal color of the light. Default is 0xffffff (white). Expects a `Integer`
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
             * @param distance Maximum range of the light. Default is 0 (no limit).
             * @param decay The amount the light dims along the distance of the light. Expects a `Float`. Default `2`
             */
            'color',
            'intensity',
            'distance',
            'decay',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLightShadow.d.ts
    /**
     * Shadow for {@link THREE.PointLight}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js}
     */
    get pointLightShadow() {
        return [//...this.lightShadow,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\RectAreaLight.d.ts
    /**
     * {@link RectAreaLight} emits light uniformly across the face a rectangular plane
     * @remarks
     * This light type can be used to simulate light sources such as bright windows or strip lighting.
     * Important Notes:
     *  - There is no shadow support.
     *  - Only {@link MeshStandardMaterial} and {@link MeshPhysicalMaterial} are supported.
     *  - You have to include {@link https://threejs.org/examples/jsm/lights/RectAreaLightUniformsLib.js} into your scene and call `init()`.
     * @example
     * ```typescript
     * const width = 10,
     * const height = 10,
     * const intensity = 1,
     * const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height,
     * rectLight.position.set(5, 5, 0,
     * rectLight.lookAt(0, 0, 0,
     * scene.add(rectLight)
     * const rectLightHelper = new RectAreaLightHelper(rectLight,
     * rectLight.add(rectLightHelper,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_rectarealight / {@link RectAreaLight} }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/RectAreaLight Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js}
     */
    get rectAreaLight() {
        return [//...this.light,
            /**
             * Creates a new {@link RectAreaLight}.
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity The light's intensity, or brightness. Expects a `Float`. Default `1`
             * @param width Width of the light. Expects a `Float`. Default `10`
             * @param height Height of the light. Expects a `Float`. Default `10`
             */
            'color',
            'intensity',
            'width',
            'height',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\SpotLight.d.ts
    /**
     * This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.
     * @example
     * ```typescript
     * // white {@link SpotLight} shining from the side, modulated by a texture, casting a shadow
     * const {@link SpotLight} = new THREE.SpotLight(0xffffff,
     * spotLight.position.set(100, 1000, 100,
     * spotLight.map = new THREE.TextureLoader().load(url,
     * spotLight.castShadow = true,
     * spotLight.shadow.mapSize.width = 1024,
     * spotLight.shadow.mapSize.height = 1024,
     * spotLight.shadow.camera.near = 500,
     * spotLight.shadow.camera.far = 4000,
     * spotLight.shadow.camera.fov = 30,
     * scene.add(spotLight,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlight / {@link SpotLight} }
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights / spotlights }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/SpotLight Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLight.js}
     */
    get spotLight() {
        return [//...this.light,
            /**
             * Creates a new SpotLight.
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
             * @param distance Maximum range of the light. Default is 0 (no limit). Expects a `Float`.
             * @param angle Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
             * @param penumbra Percent of the {@link SpotLight} cone that is attenuated due to penumbra. Takes values between zero and 1. Expects a `Float`. Default `0`.
             * @param decay The amount the light dims along the distance of the light. Expects a `Float`. Default `2`.
             */

            'color',
            'intensity',
            'distance',
            'angle',
            'penumbra',
            'decay',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\SpotLightShadow.d.ts
    /**
     * This is used internally by {@link SpotLight} for calculating shadows.
     * @example
     * ```typescript
     * //Create a WebGlRenderer and turn on shadows in the renderer
     * const renderer = new THREE.WebGlRenderer(,
     * renderer.shadowMap.enabled = true,
     * renderer.shadowMap.type = THREE.PCFSoftShadowMap, // default THREE.PCFShadowMap
     * //Create a SpotLight and turn on shadows for the light
     * const light = new THREE.SpotLight(0xffffff,
     * light.castShadow = true, // default false
     * scene.add(light,
     * //Set up shadow properties for the light
     * light.shadow.mapSize.width = 512, // default
     * light.shadow.mapSize.height = 512, // default
     * light.shadow.camera.near = 0.5, // default
     * light.shadow.camera.far = 500, // default
     * light.shadow.focus = 1, // default
     * //Create a sphere that cast shadows (but does not receive them)
     * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32,
     * const sphereMaterial = new THREE.MeshStandardMaterial({
     * color
     * },
     * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial,
     * sphere.castShadow = true, //default is false
     * sphere.receiveShadow = false, //default
     * scene.add(sphere,
     * //Create a plane that receives shadows (but does not cast them)
     * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32,
     * const planeMaterial = new THREE.MeshStandardMaterial({
     * color
     * })
     * const plane = new THREE.Mesh(planeGeometry, planeMaterial,
     * plane.receiveShadow = true,
     * scene.add(plane,
     * //Create a helper for the shadow camera (optional)
     * const helper = new THREE.CameraHelper(light.shadow.camera,
     * scene.add(helper,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/SpotLightShadow Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLightShadow.js}
     */
    get spotLightShadow() {
        return [//...this.lightShadow,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\AnimationLoader.d.ts
    get animationLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\AudioLoader.d.ts
    get audioLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\BufferGeometryLoader.d.ts
    get bufferGeometryLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\Cache.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\CompressedTextureLoader.d.ts
    get compressedTextureLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\CubeTextureLoader.d.ts
    get cubeTextureLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\DataTextureLoader.d.ts
    get dataTextureLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\FileLoader.d.ts
    get fileLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\ImageBitmapLoader.d.ts
    get imageBitmapLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\ImageLoader.d.ts
    /**
     * A loader for loading an image.
     * Unlike other loaders, this.one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    get imageLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\Loader.d.ts
    /**
     * Base class for implementing loaders.
     */
    loader: [
        'manager',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\LoaderUtils.d.ts
    loaderUtils: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\LoadingManager.d.ts
    /**
     * Handles and keeps track of loaded and pending data.
     */
    loadingManager: [

        'onLoad',
        'onProgress',
        'loaded',
        'total',
        'onError',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\MaterialLoader.d.ts
    get materialLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\ObjectLoader.d.ts
    get objectLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\TextureLoader.d.ts
    /**
     * Class for loading a texture.
     * Unlike other loaders, this.one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    get textureLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineBasicMaterial.d.ts
    get lineBasicMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['color',
                'fog',
                'linewidth',
                'linecap',
                'linejoin',
            ] as const).toObject()
        }
    },
    get lineBasicMaterial() {
        return {
            ...this.lineBasicMaterialParameters,
            ...(['color',
                'fog',
                'linewidth',
                'linecap',
                'linejoin',
            ] as const).toObject() //as LineBasicMaterialParameters
        }
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineDashedMaterial.d.ts
    get lineDashedMaterialParameters() {
        return {
            ...this.lineBasicMaterialParameters,
            ...(['scale',
                'dashSize',
                'gapSize',
            ] as const).toObject()
        }
    },
    get lineDashedMaterial() {
        return {
            ...this.lineBasicMaterial,
            ...([
                'scale',
                'dashSize',
                'gapSize',
            ] as const).toObject(),
        }
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\Material.d.ts
    materialParameters: ([
        'alphaHash',
        'alphaTest',
        'alphaToCoverage',
        'blendAlpha',
        'blendColor',
        'blendDst',
        'blendDstAlpha',
        'blendEquation',
        'blendEquationAlpha',
        'blending',
        'blendSrc',
        'blendSrcAlpha',
        'clipIntersection',
        'clippingPlanes',
        'clipShadows',
        'colorWrite',
        'defines',
        'depthFunc',
        'depthTest',
        'depthWrite',
        'name',
        'opacity',
        'polygonOffset',
        'polygonOffsetFactor',
        'polygonOffsetUnits',
        'precision',
        'premultipliedAlpha',
        'forceSinglePass',
        'dithering',
        'side',
        'shadowSide',
        'toneMapped',
        'transparent',
        'vertexColors',
        'visible',
        'format',
        'stencilWrite',
        'stencilFunc',
        'stencilRef',
        'stencilWriteMask',
        'stencilFuncMask',
        'stencilFail',
        'stencilZFail',
        'stencilZPass',
        'userData',
    ] as const).toObject(),
    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
    get material() {
        return this.materialParameters
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\Materials.d.ts

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshBasicMaterial.d.ts
    /**
     * parameters is an object with one or more properties defining the material's appearance.
     */
    get meshBasicMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['color',
                'opacity',
                'map',
                'lightMap',
                'lightMapIntensity',
                'aoMap',
                'aoMapIntensity',
                'specularMap',
                'alphaMap',
                'fog',
                'envMap',
                'envMapRotation',
                'combine',
                'reflectivity',
                'refractionRatio',
                'wireframe',
                'wireframeLinewidth',
                'wireframeLinecap',
                'wireframeLinejoin',
            ] as const).toObject()
        }
    },
    get meshBasicMaterial() {
        return this.meshBasicMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDepthMaterial.d.ts
    get meshDepthMaterialParameters() {
        return {
            ...this.materialParameters,
            ... (['map',
                'alphaMap',
                'depthPacking',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'wireframe',
                'wireframeLinewidth',
            ] as const).toObject()
        }
    },
    get meshDepthMaterial() {
        return this.meshDepthMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDistanceMaterial.d.ts
    get meshDistanceMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['map',
                'alphaMap',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'farDistance',
                'nearDistance',
                'referencePosition',
            ] as const).toObject()
        }
    },
    get meshDistanceMaterial() {
        return this.meshDistanceMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshLambertMaterial.d.ts
    get meshLambertMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['bumpMap',
                'bumpScale',
                'color',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'emissive',
                'emissiveIntensity',
                'emissiveMap',
                'flatShading',
                'map',
                'lightMap',
                'lightMapIntensity',
                'normalMap',
                'normalScale',
                'aoMap',
                'aoMapIntensity',
                'specularMap',
                'alphaMap',
                'envMap',
                'envMapRotation',
                'combine',
                'reflectivity',
                'refractionRatio',
                'wireframe',
                'wireframeLinewidth',
                'wireframeLinecap',
                'wireframeLinejoin',
                'fog',
            ] as const).toObject()
        }
    },
    get meshLambertMaterial() {
        return this.meshLambertMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshMatcapMaterial.d.ts
    get meshMatcapMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['color',
                'matcap',
                'map',
                'bumpMap',
                'bumpScale',
                'normalMap',
                'normalMapType',
                'normalScale',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'alphaMap',
                'fog',
                'flatShading',
            ] as const).toObject()
        }
    },
    get meshMatcapMaterial() {
        return this.meshMatcapMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshNormalMaterial.d.ts
    get meshNormalMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['bumpMap',
                'bumpScale',
                'normalMap',
                'normalMapType',
                'normalScale',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'wireframe',
                'wireframeLinewidth',
                'flatShading',
            ] as const).toObject()
        }
    },
    get meshNormalMaterial() {
        return this.meshNormalMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhongMaterial.d.ts
    get meshPhongMaterialParameters() {
        return {
            ...this.materialParameters,
            /** geometry color in hexadecimal. Default is 0xffffff. */
            ...(['color',
                'specular',
                'shininess',
                'opacity',
                'map',
                'lightMap',
                'lightMapIntensity',
                'aoMap',
                'aoMapIntensity',
                'emissive',
                'emissiveIntensity',
                'emissiveMap',
                'bumpMap',
                'bumpScale',
                'normalMap',
                'normalMapType',
                'normalScale',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'specularMap',
                'alphaMap',
                'envMap',
                'envMapRotation',
                'combine',
                'reflectivity',
                'refractionRatio',
                'wireframe',
                'wireframeLinewidth',
                'wireframeLinecap',
                'wireframeLinejoin',
                'fog',
                'flatShading',
            ] as const).toObject()
        }
    },
    get meshPhongMaterial() {
        return this.meshPhongMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhysicalMaterial.d.ts
    get meshPhysicalMaterialParameters() {
        return {
            ...this.meshStandardMaterialParameters,
            ...(['anisotropyRotation',
                'anisotropyMap',
                'clearcoatMap',
                'clearcoatRoughness',
                'clearcoatRoughnessMap',
                'clearcoatNormalScale',
                'clearcoatNormalMap',
                'ior',
                'reflectivity',
                'iridescenceMap',
                'iridescenceIOR',
                'iridescenceThicknessRange',
                'iridescenceThicknessMap',
                'sheenColor',
                'sheenColorMap',
                'sheenRoughness',
                'sheenRoughnessMap',
                'transmissionMap',
                'thickness',
                'thicknessMap',
                'attenuationDistance',
                'attenuationColor',
                'specularIntensity',
                'specularIntensityMap',
                'specularColor',
                'specularColorMap',
                'anisotropy',
                'clearcoat',
                'iridescence',
                'dispersion',
                'sheen',
                'transmission',
            ] as const).toObject()
        }
    },
    get meshPhysicalMaterial() {
        return this.meshPhysicalMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshStandardMaterial.d.ts
    get meshStandardMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['color',
                'roughness',
                'metalness',
                'map',
                'lightMap',
                'lightMapIntensity',
                'aoMap',
                'aoMapIntensity',
                'emissive',
                'emissiveIntensity',
                'emissiveMap',
                'bumpMap',
                'bumpScale',
                'normalMap',
                'normalMapType',
                'normalScale',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'roughnessMap',
                'metalnessMap',
                'alphaMap',
                'envMap',
                'envMapRotation',
                'envMapIntensity',
                'wireframe',
                'wireframeLinewidth',
                'fog',
                'flatShading',
            ] as const).toObject()
        }
    },
    get meshStandardMaterial() {
        return this.meshStandardMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshToonMaterial.d.ts
    get meshToonMaterialParameters() {
        return {
            ...this.materialParameters,
            /** geometry color in hexadecimal. Default is 0xffffff. */
            ...(['color',
                'opacity',
                'gradientMap',
                'map',
                'lightMap',
                'lightMapIntensity',
                'aoMap',
                'aoMapIntensity',
                'emissive',
                'emissiveIntensity',
                'emissiveMap',
                'bumpMap',
                'bumpScale',
                'normalMap',
                'normalMapType',
                'normalScale',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'alphaMap',
                'wireframe',
                'wireframeLinewidth',
                'wireframeLinecap',
                'wireframeLinejoin',
                'fog',
            ] as const).toObject()
        }
    },
    get meshToonMaterial() {
        return this.meshToonMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\PointsMaterial.d.ts
    get pointsMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['color',
                'map',
                'alphaMap',
                'size',
                'sizeAttenuation',
                'fog',
            ] as const).toObject()
        }
    },
    get pointsMaterial() {
        return this.pointsMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\RawShaderMaterial.d.ts
    get rawShaderMaterial() {
        return this.shaderMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShaderMaterial.d.ts
    get shaderMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['uniforms',
                'uniformsGroups',
                'vertexShader',
                'fragmentShader',
                'linewidth',
                'wireframe',
                'wireframeLinewidth',
                'lights',
                'clipping',
                'fog',
                'extensions',
                'glslVersion',
            ] as const).toObject()
        }
    },
    get shaderMaterial() {
        return this.shaderMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShadowMaterial.d.ts
    get shadowMaterialParameters() {
        return {
            ...this.shaderMaterialParameters,
            ...(['color',
                'fog',
            ] as const).toObject()
        }
    },
    get shadowMaterial() {
        return {
            ...this.shadowMaterialParameters,
            ...([            /**
             * Read-only flag to check if a given object is of type {@link ShadowMaterial}.
             * @remarks This is a _constant_ value
             * @defaultValue `true`
             */
                /**
                 * @default 'ShadowMaterial'
                 */
                'type',
                /**
                 * @default new THREE.Color( 0x000000 )
                 */
                'color',
                /**
                 * @default true
                 */
                'transparent',
                /**
                 * Whether the material is affected by fog. Default is true.
                 * @default fog
                 */
                'fog',
            ] as const).toObject()
        }
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\SpriteMaterial.d.ts
    get spriteMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['color',
                'map',
                'alphaMap',
                'rotation',
                'sizeAttenuation',
                'fog',
            ] as const).toObject()
        }
    },
    get spriteMaterial() {
        return this.spriteMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box2.d.ts
    // Math //////////////////////////////////////////////////////////////////////////////////
    box2: [
        'min',
        'max',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box3.d.ts
    box3: [
        'min',
        'max',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Color.d.ts
    hsl: [
        'h',
        's',
        'l',
    ].distinct(),
    rgb: [
        'r',
        'g',
        'b',
    ].distinct(),
    /**
     * Represents a color. See also {@link ColorUtils}.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
     *
     * @example
     * const color = new THREE.Color( 0xff0000 ,
     */
    color: [
        'color',
        /**
         * Red channel value between 0 and 1. Default is 1.
         * @default 1
         */
        'r',
        /**
         * Green channel value between 0 and 1. Default is 1.
         * @default 1
         */
        'g',
        /**
         * Blue channel value between 0 and 1. Default is 1.
         * @default 1
         */
        'b',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\ColorManagement.d.ts
    colorManagement: [
        /**
         * @default false
         */
        'enabled',
        /**
         * @default LinearSRGBColorSpace
         */
        'workingColorSpace',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Cylindrical.d.ts
    cylindrical: [
        /**
         * @default 1
         */
        'radius',
        /**
         * @default 0
         */
        'theta',
        /**
         * @default 0
         */
        'y',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Euler.d.ts
    euler: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Frustum.d.ts
    /**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     */
    frustum: [
        'p0',
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Interpolant.d.ts
    interpolant: [
        'parameterPositions',
        'sampleValues',
        'sampleSize',
        'resultBuffer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Line3.d.ts
    line3: [
        'start',
        'end',
        /**
         * @default new THREE.Vector3()
         */
        'start',
        /**
         * @default new THREE.Vector3()
         */
        'end',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\MathUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix3.d.ts
    // https://threejs.org/docs/#api/en/math/Matrix3
    /**
     * ( interface Matrix )
     */
    matrix: [
        /**
         * Array with matrix values.
         */
        'elements',
    ].distinct(),
    /**
     * ( class Matrix3 implements Matrix )
     */
    get matrix3() {
        return [//...this.matrix,
            /**
             * Creates an identity matrix.
             */
            /**
             * Creates a 3x3 matrix with the given arguments in row-major order.
             */

            'n11',
            'n12',
            'n13',
            'n21',
            'n22',
            'n23',
            'n31',
            'n32',
            'n33',
            /**
             * Array with matrix values.
             * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
             */
            'elements',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix4.d.ts
    /**
     * A 4x4 Matrix.
     *
     * @example
     * // Simple rig for rotating around 3 axes
     * const m = new THREE.Matrix4(,
     * const m1 = new THREE.Matrix4(,
     * const m2 = new THREE.Matrix4(,
     * const m3 = new THREE.Matrix4(,
     * const alpha = 0,
     * const beta = Math.PI,
     * const gamma = Math.PI/2,
     * m1.makeRotationX( alpha ,
     * m2.makeRotationY( beta ,
     * m3.makeRotationZ( gamma ,
     * m.multiplyMatrices( m1, m2 ,
     * m.multiply( m3 ,
     */
    get matrix4() {
        return [//...this.matrix,
            /**
             * Creates an identity matrix.
             */

            /**
             * Creates a 4x4 matrix with the given arguments in row-major order.
             */
            'n11',
            'n12',
            'n13',
            'n14',
            'n21',
            'n22',
            'n23',
            'n24',
            'n31',
            'n32',
            'n33',
            'n34',
            'n41',
            'n42',
            'n43',
            'n44',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Plane.d.ts
    plane: [
        'normal',
        'constant',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Quaternion.d.ts
    quaternionLike: [
    ].distinct(),
    /**
     * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
     *
     * @example
     * const quaternion = new THREE.Quaternion(,
     * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 ,
     * const vector = new THREE.Vector3( 1, 0, 0 ,
     * vector.applyQuaternion( quaternion ,
     */
    quaternion: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
        /**
         * @default 1
         */
        'w',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Ray.d.ts
    ray: [
        'origin',
        'direction',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Sphere.d.ts
    sphere: [
        'center',
        'radius',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Spherical.d.ts
    spherical: [
        'radius',
        'phi',
        'theta',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\SphericalHarmonics3.d.ts
    sphericalHarmonics3: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Triangle.d.ts
    triangle: [
        'a',
        'b',
        'c',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector2.d.ts
    vector2Like: [
    ].distinct(),
    /**
     * 2D vector.
     */
    vector2: [
        'x',
        'y',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector3.d.ts
    vector3Like: [
    ].distinct(),

    /**
     * 3d vector.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
     *
     * @example
     * const a = new THREE.Vector3( 1, 0, 0 ,
     * const b = new THREE.Vector3( 0, 1, 0 ,
     * const c = new THREE.Vector3(,
     * c.crossVectors( a, b ,
     */
    vector3: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector4.d.ts
    vector4Like: [
    ].distinct(),

    /**
     * 4D vector.
     */
    vector4: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
        /**
         * @default 0
         */
        'w',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\CubicInterpolant.d.ts
    get cubicInterpolant() {
        return [//...this.interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\DiscreteInterpolant.d.ts
    get discreteInterpolant() {
        return [//...this.interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\LinearInterpolant.d.ts
    get linearInterpolant() {
        return [//...this.interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\QuaternionLinearInterpolant.d.ts
    get quaternionLinearInterpolant() {
        return [//...this.interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\BatchedMesh.d.ts
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
    get batchedMesh() {
        return [//...this.mesh,
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
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Bone.d.ts
    /**
     * A {@link Bone} which is part of a {@link THREE.Skeleton}
     * @remarks
     * The skeleton in turn is used by the {@link THREE.SkinnedMesh}
     * Bones are almost identical to a blank {@link THREE.Object3d}.
     * @example
     * ```typescript
     * const root = new THREE.Bone(,
     * const child = new THREE.Bone(,
     * root.add(child,
     * child.position.y = 5,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Bone Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js}
     */
    get bone() {
        return [//...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Group.d.ts
    /**
     * Its purpose is to make working with groups of objects syntactically clearer.
     * @remarks This is almost identical to an {@link Object3d}
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const cubeA = new THREE.Mesh(geometry, material,
     * cubeA.position.set(100, 100, 0,
     * const cubeB = new THREE.Mesh(geometry, material,
     * cubeB.position.set(-100,
    -100, 0,
     * //create a {@link Group} and add the two cubes
     * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group(,
     * group.add(cubeA,
     * group.add(cubeB,
     * scene.add(group,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js}
     */
    get group() {
        return [//...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\InstancedMesh.d.ts
    get instancedMeshEventMap() {
        return [//...this.object3dEventMap,
        ].distinct()
    },
    /**
     * A special version of {@link THREE.Mesh} with instanced rendering support
     * @remarks
     * Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material but with different world transformations
     * @remarks
     * The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_dynamic / instancing / dynamic}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_performance / instancing / performance}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_scatter / instancing / scatter}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast / instancing / raycast}
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/InstancedMesh Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/InstancedMesh.js}
     */
    get instancedMesh() {
        return [//...this.mesh,
            /**
             * Create a new instance of {@link InstancedMesh}
             * @param geometry An instance of {@link THREE.BufferGeometry}.
             * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
             * @param count The **maximum** number of instances of this.mesh. Expects a `Integer`
             */
            'geometry',
            'material',
            'count',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Line.d.ts
    /**
     * A continuous line.
     * @remarks
     * This is nearly the same as {@link THREE.LineSegments},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_STRIP}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINES}
     * @example
     * ```typescript
     * const material = new THREE.LineBasicMaterial({
     * color
     * },
     * const points = ,
     * points.push(new THREE.Vector3(-10, 0, 0),
     * points.push(new THREE.Vector3(0, 10, 0),
     * points.push(new THREE.Vector3(10, 0, 0),
     * const geometry = new THREE.BufferGeometry().setFromPoints(points,
     * const {@link Line} = new THREE.Line(geometry, material,
     * scene.add(line,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Line Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Line.js}
     */
    get line() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link Line}
             * @param geometry Vertices representing the {@link Line} segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
             */
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LineLoop.d.ts
    /**
     * A continuous line that connects back to the start.
     * @remarks
     * This is nearly the same as {@link THREE.Line},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_LOOP}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_STRIP},
     * which draws a straight line to the next vertex, and connects the last vertex back to the first.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js}
     */
    get lineLoop() {
        return [//...this.line,
            /**
             * Create a new instance of {@link LineLoop}
             * @param geometry  List of vertices representing points on the line loop. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
             */
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LineSegments.d.ts
    /**
     * A series of lines drawn between pairs of vertices.
     * @remarks
     * This is nearly the same as {@link THREE.Line},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINES}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_STRIP}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js}
     */
    get lineSegments() {
        return [//...this.line,
            /**
             * Create a new instance of {@link LineSegments}
             * @param geometry Pair(s) of vertices representing each line segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
             */
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LOD.d.ts
    /**
     * Every level is associated with an object, and rendering can be switched between them at the distances specified
     * @remarks
     * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
     * @example
     * ```typescript
     * const {@link LOD} = new THREE.LOD(,
     * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
     * for (let i = 0, i & lt, 3, i++) {
     * const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
     * const mesh = new THREE.Mesh(geometry, material,
     * lod.addLevel(mesh, i * 75,
     * }
     * scene.add(lod,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lod / {@link LOD} }
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LOD Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LOD.js}
     */
    get lod() {
        return [//...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Mesh.d.ts
    /**
     * Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh mesh} based objects.
     * @remarks
     * Also serves as a base for other classes such as {@link THREE.SkinnedMesh},
     {@link THREE.InstancedMesh}.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1,
     * const material = new THREE.MeshBasicMaterial({
     * color
     * },
     * const {@link Mesh} = new THREE.Mesh(geometry, material,
     * scene.add(mesh,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Mesh Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js}
     */
    get mesh() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link Mesh}
             * @param geometry An instance of {@link THREE.BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
             */
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Points.d.ts
    /**
     * A class for displaying {@link Points}
     * @remarks
     * The {@link Points} are rendered by the {@link THREE.WebGlRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.POINTS}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js}
     */
    get points() {
        return [//...this.object3d,
            /**
             * Create a new instance of {@link Points}
             * @param geometry An instance of {@link THREE.BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.PointsMaterial | `new THREE.PointsMaterial()`}.
             */
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Skeleton.d.ts
    /**
     * Use an array of {@link Bone} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh}.
     * @example
     * ```typescript
     * // Create a simple "arm"
     * const bones = ,
     * const shoulder = new THREE.Bone(,
     * const elbow = new THREE.Bone(,
     * const hand = new THREE.Bone(,
     * shoulder.add(elbow,
     * elbow.add(hand,
     * bones.push(shoulder,
     * bones.push(elbow,
     * bones.push(hand,
     * shoulder.position.y = -5,
     * elbow.position.y = 0,
     * hand.position.y = 5,
     * const armSkeleton = new THREE.Skeleton(bones,
     * See the[page] page
     * for an example of usage with standard[page].
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Skeleton Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Skeleton.js}
     */
    skeleton: [
        /**
         * Creates a new Skeleton.
         * @param bones The array of {@link THREE.Bone}. Default `[]`.
         * @param boneInverses An array of {@link THREE.Matrix4}. Default `[]`.
         */
        'bones',
        'boneInverses',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\SkinnedMesh.d.ts
    /**
     * A mesh that has a {@link THREE.Skeleton} with {@link Bone} that can then be used to animate the vertices of the geometry.
     * @example
     * ```typescript
     * const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30,
     * // create the skin indices and skin weights manually
     * // (typically a loader would read this.data from a 3d model for you)
     * const position = geometry.attributes.position,
     * const vertex = new THREE.Vector3(,
     * const skinIndices = ,
     * const skinWeights = ,
     * for (let i = 0, i & lt, position.count, i++) {
     * vertex.fromBufferAttribute(position, i,
     *     // compute skinIndex and skinWeight based on some configuration data
     * const y = (vertex.y + sizing.halfHeight,
     * const skinIndex = Math.floor(y / sizing.segmentHeight,
     * const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight,
     * skinIndices.push(skinIndex, skinIndex + 1, 0, 0,
     * skinWeights.push(1 - skinWeight, skinWeight, 0, 0,
     * }
     * geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4),
     * geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4),
     * // create skinned mesh and skeleton
     * const mesh = new THREE.SkinnedMesh(geometry, material,
     * const skeleton = new THREE.Skeleton(bones,
     * // see example from THREE.Skeleton
     * const rootBone = skeleton.bones[0].distinct(),
     * mesh.add(rootBone,
     * // bind the skeleton to the mesh
     * mesh.bind(skeleton,
     * // move the bones and manipulate the model
     * skeleton.bones[0].rotation.x = -0.1,
     * skeleton.bones[1].rotation.x = 0.2,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/SkinnedMesh Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/SkinnedMesh.js}
     */
    get skinnedMesh() {
        return [//...this.mesh,
            /**
             * Create a new instance of {@link SkinnedMesh}
             * @param geometry An instance of {@link THREE.BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
             */
            'geometry',
            'material',
            'useVertexTexture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Sprite.d.ts
    /**
     * A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied.
     * @remarks Sprites do not cast shadows, setting `castShadow = true` will have no effect.
     * @example
     * ```typescript
     * const map = new THREE.TextureLoader().load('sprite.png',
     * const material = new THREE.SpriteMaterial({
     * map
     * },
     * const {@link Sprite} = new THREE.Sprite(material,
     * scene.add(sprite,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Sprite Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Sprite.js}
     */
    get sprite() {
        return [//...this.object3d,
            /**
             * Creates a new Sprite.
             * @param material An instance of {@link THREE.SpriteMaterial}. Default {@link THREE.SpriteMaterial | `new SpriteMaterial()`}, _with white color_.
             */
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGl3dRenderTarget.d.ts
    /**
     * Represents a three-dimensional render target.
     */
    get webGl3dRenderTarget() {
        return [//...this.webGlRenderTarget,
            /**
             * Creates a new WebGl3dRenderTarget.
             *
             * @param width the width of the render target, in pixels. Default is `1`.
             * @param height the height of the render target, in pixels. Default is `1`.
             * @param depth the depth of the render target. Default is `1`.
             * @param options optional object that holds texture parameters for an auto-generated target texture and
             * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
             */
            'width',
            'height',
            'depth',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlArrayRenderTarget.d.ts
    /**
     * This type of render target represents an array of textures.
     */
    get webGlArrayRenderTarget() {
        return [//...this.webGlRenderTarget,
            /**
             * Creates a new WebGlArrayRenderTarget.
             *
             * @param width the width of the render target, in pixels. Default is `1`.
             * @param height the height of the render target, in pixels. Default is `1`.
             * @param depth the depth/layer count of the render target. Default is `1`.
             * @param options optional object that holds texture parameters for an auto-generated target texture and
             * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
             */
            'width',
            'height',
            'depth',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlCubeRenderTarget.d.ts
    get webGlCubeRenderTarget() {
        return [//...this.webGlRenderTarget,
            'size',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderer.d.ts
    webGlRendererParameters: ([
        /**
         * A Canvas where the renderer draws its output.
         */
        'canvas',

        /**
         * A WebGl Rendering Context.
         * (https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext)
         * Default is null
         */
        'context',

        /**
         * shader precision. Can be "highp", "mediump" or "lowp".
         */
        'precision',

        /**
         * default is false.
         */
        'alpha',

        /**
         * default is true.
         */
        'premultipliedAlpha',

        /**
         * default is false.
         */
        'antialias',

        /**
         * default is false.
         */
        'stencil',

        /**
         * default is false.
         */
        'preserveDrawingBuffer',

        /**
         * Can be "high-performance", "low-power" or "default"
         */
        'powerPreference',

        /**
         * default is true.
         */
        'depth',

        /**
         * default is false.
         */
        'logarithmicDepthBuffer',

        /**
         * default is false.
         */
        'failIfMajorPerformanceCaveat',
    ] as const).toObject(),
    webGlDebug: [
        /**
         * Enables error checking and reporting when shader programs are being compiled.
         */
        'checkShaderErrors',
        /**
         * A callback function that can be used for custom error reporting. The callback receives the WebGl context, an
         * instance of WebGlProgram as well two instances of WebGlShader representing the vertex and fragment shader.
         * Assigning a custom function disables the default error reporting.
         * @default `null`
         */
        'onShaderError',
    ].distinct(),
    /**
     * The WebGl renderer displays your beautifully crafted scenes using WebGl, if your device supports it.
     * This renderer has way better performance than CanvasRenderer.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGlRenderer.js|src/renderers/WebGlRenderer.js}
     */


    get webGlRenderer() {
        return this.webGlRendererParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderTarget.d.ts
    get webGlRenderTarget() {
        return [//...this.renderTarget,
            'width',
            'height',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\ShaderChunk.d.ts
    // Renderers / Shaders /////////////////////////////////////////////////////////////////////
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\ShaderLib.d.ts
    shaderLibShader: [
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\UniformsLib.d.ts
    // eslint-disable-next-line @typescript-eslint/naming-convention
    iUniform: [
        'value',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\UniformsUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlAttributes.d.ts
    webGlAttributes: [
        'gl',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlBindingStates.d.ts
    webGlBindingStates: [
        'gl',
        'attributes',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlBufferRenderer.d.ts
    webGlBufferRenderer: [
        'gl',
        'extensions',
        'info',
        ,
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCapabilities.d.ts
    webGlCapabilitiesParameters: ([
        'precision',
        'logarithmicDepthBuffer',
    ] as const).toObject(),
    webGlCapabilities: [
        'gl',
        'extensions',
        'parameters', //webGlCapabilitiesParameters
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlClipping.d.ts
    webGlClipping: [
        'properties',
        'uniform',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeMaps.d.ts
    webGlCubeMaps: [
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeUVMaps.d.ts
    webGlCubeUvMaps: [
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlExtensions.d.ts
    webGlExtensions: [
        'gl',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlGeometries.d.ts
    webGlGeometries: [
        'gl',
        'attributes',
        'info',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlIndexedBufferRenderer.d.ts
    webGlIndexedBufferRenderer: [
        'gl',
        'extensions',
        'info',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlInfo.d.ts
    /**
     * An object with a series of statistical information about the graphics board memory and the rendering process.
     */
    webGlInfo: [
        'gl',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlLights.d.ts
    webGlLightsState: [
        'version',
        'hash',
        'ambient',
        'probe',
        'directional',
        'directionalShadow',
        'directionalShadowMap',
        'directionalShadowMatrix',
        'spot',
        'spotShadow',
        'spotShadowMap',
        'spotShadowMatrix',
        'rectArea',
        'point',
        'pointShadow',
        'pointShadowMap',
        'pointShadowMatrix',
        'hemi',
        'numSpotLightShadowsWithMaps',
        'numLightProbes',
    ].distinct(),
    webGlLights: [
        'extensions',
        'state',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlObjects.d.ts
    webGlObjects: [
        'gl',
        'geometries',
        'attributes',
        'info',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProgram.d.ts
    webGlProgram: [
        'renderer',
        'cacheKey',
        'parameters',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlPrograms.d.ts
    webGlProgramParameters: [
        'shaderID',
        'shaderType',
        'shaderName',
        'vertexShader',
        'fragmentShader',
        'defines',
        'customVertexShaderID',
        'customFragmentShaderID',
        'isRawShaderMaterial',
        'glslVersion',
        'precision',
        'batching',
        'instancing',
        'instancingColor',
        'instancingMorph',
        'supportsVertexTextures',
        'outputColorSpace',
        'alphaToCoverage',
        'map',
        'matcap',
        'envMap',
        'envMapMode',
        'envMapCubeUVHeight',
        'aoMap',
        'lightMap',
        'bumpMap',
        'normalMap',
        'displacementMap',
        'emissiveMap',
        'normalMapObjectSpace',
        'normalMapTangentSpace',
        'metalnessMap',
        'roughnessMap',
        'anisotropy',
        'anisotropyMap',
        'clearcoat',
        'clearcoatMap',
        'clearcoatNormalMap',
        'clearcoatRoughnessMap',
        'dispersion',
        'iridescence',
        'iridescenceMap',
        'iridescenceThicknessMap',
        'sheen',
        'sheenColorMap',
        'sheenRoughnessMap',
        'specularMap',
        'specularColorMap',
        'specularIntensityMap',
        'transmission',
        'transmissionMap',
        'thicknessMap',
        'gradientMap',
        'opaque',
        'alphaMap',
        'alphaTest',
        'alphaHash',
        'combine',
        //
        'mapUv',
        'aoMapUv',
        'lightMapUv',
        'bumpMapUv',
        'normalMapUv',
        'displacementMapUv',
        'emissiveMapUv',
        'metalnessMapUv',
        'roughnessMapUv',
        'anisotropyMapUv',
        'clearcoatMapUv',
        'clearcoatNormalMapUv',
        'clearcoatRoughnessMapUv',
        'iridescenceMapUv',
        'iridescenceThicknessMapUv',
        'sheenColorMapUv',
        'sheenRoughnessMapUv',
        'specularMapUv',
        'specularColorMapUv',
        'specularIntensityMapUv',
        'transmissionMapUv',
        'thicknessMapUv',
        'alphaMapUv',
        //
        'vertexTangents',
        'vertexColors',
        'vertexAlphas',
        'vertexUv1s',
        'vertexUv2s',
        'vertexUv3s',
        'pointsUvs',
        'fog',
        'useFog',
        'fogExp2',
        'flatShading',
        'sizeAttenuation',
        'logarithmicDepthBuffer',
        'skinning',
        'morphTargets',
        'morphNormals',
        'morphColors',
        'morphTargetsCount',
        'morphTextureStride',
        'numDirLights',
        'numPointLights',
        'numSpotLights',
        'numSpotLightMaps',
        'numRectAreaLights',
        'numHemiLights',
        'numDirLightShadows',
        'numPointLightShadows',
        'numSpotLightShadows',
        'numSpotLightShadowsWithMaps',
        'numLightProbes',
        'numClippingPlanes',
        'numClipIntersection',
        'dithering',
        'shadowMapEnabled',
        'shadowMapType',
        'toneMapping',
        'useLegacyLights',
        'decodeVideoTexture',
        'premultipliedAlpha',
        'doubleSided',
        'flipSided',
        'useDepthPacking',
        'depthPacking',
        'index0AttributeName',
        'extensionClipCullDistance',
        'extensionMultiDraw',
        'rendererExtensionParallelShaderCompile',
        'customProgramCacheKey',
    ].distinct(),
    get webGlProgramParametersWithUniforms() {
        return [//...this.webGlProgramParameters,
            'uniforms',
        ].distinct()
    },
    webGlPrograms: [
        'renderer',
        'cubemaps',
        'extensions',
        'capabilities',
        'bindingStates',
        'clipping',
        ,
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProperties.d.ts
    webGlProperties: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlRenderLists.d.ts
    renderItem: [
        'id',
        'object',
        'geometry',
        'material',
        'program',
        'groupOrder',
        'renderOrder',
        'z',
        'group',
    ].distinct(),
    webGlRenderList: [
        'properties',
    ].distinct(),
    webGlRenderLists: [
        'properties',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShadowMap.d.ts
    webGlShadowMap: [
        '_renderer',
        '_objects',
        '_capabilities',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlState.d.ts
    webGlColorBuffer: [
    ].distinct(),
    webGlDepthBuffer: [
    ].distinct(),
    webGlStencilBuffer: [
    ].distinct(),
    webGlState: [
        'gl',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlTextures.d.ts
    webGlTextures: [

        'gl',
        'extensions',
        'state',
        'properties',
        'capabilities',
        'utils',
        'info',
        ,
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniforms.d.ts
    webGlUniforms: [
        'gl',
        'program',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniformsGroups.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUtils.d.ts
    webGlUtils: [

        'gl',
        'extensions',
        ,
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRController.d.ts
    get xrJointSpace() {
        return [//...this.group,
        ].distinct()
    },
    xrHandInputState: [
        'pinching',
    ].distinct(),
    get webXrSpaceEventMap() {
        return [//...this.object3dEventMap,
            'select',
            'selectstart',
            'selectend',
            'squeeze',
            'squeezestart',
            'squeezeend',
            'connected',
            'disconnected',
            'pinchend',
            'pinchstart',
            'move',
        ].distinct()
    },
    get xrHandSpace() {
        return [//...this.group,
        ].distinct()
    },
    get xrTargetRaySpace() {
        return [//...this.group,
        ].distinct()
    },
    get xrGripSpace() {
        return [//...this.group,
        ].distinct()
    },
    webXrController: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRDepthSensing.d.ts
    // FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr
    xrWebGlDepthInformation: [
    ].distinct(),
    webXrDepthSensing: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRManager.d.ts
    // https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
    /// 
    webXrManagerEventMap: [
        'sessionstart',
        'sessionend',
        'planeadded',
        'planeremoved',
        'planechanged',
        'planesdetected',
    ].distinct(),
    get webXrManager() {
        return [//...this.eventDispatcher,
            'renderer',
            'gl',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\Fog.d.ts
    fogBase: [
        /**
         * Optional name of the `Fog` object
         * @remarks _(doesn't need to be unique)_.
         * @defaultValue `""`
         */
        'name',
        /**
         * Fog color.
         * @remarks If set to black, far away objects will be rendered black.
         */
        'color',
    ].distinct(),
    /**
     * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
     *  @example
     * ```typescript
     * const scene = new THREE.Scene(,
     * scene.fog = new THREE.Fog(0xcccccc, 10, 15,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Fog Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js}
     */
    get fog() {
        return [//...this.fogBase,
            /**
             * The color parameter is passed to the {@link THREE.Color} constructor to set the color property
             * @remarks
             * Color can be a hexadecimal integer or a css-style string.
             * @param color
             * @param near Expects a `Float`
             * @param far Expects a `Float`
             */
            'color',
            'near',
            'far',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\FogExp2.d.ts
    /**
     * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
     * @example
     * ```typescript
     * const scene = new THREE.Scene(,
     * scene.fog = new THREE.FogExp2(0xcccccc, 0.002,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain geometry terrain}
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js}
     */
    get fogExp2() {
        return [//...this.fogBase,
            /**
             * The color parameter is passed to the {@link THREE.Color} constructor to set the color property
             * @remarks Color can be a hexadecimal integer or a css-style string.
             * @param color
             * @param density Expects a `Float`
             */
            'color',
            'density',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\Scene.d.ts
    /**
     * Scenes allow you to set up what and where is to be rendered by three.js
     * @remarks
     * This is where you place objects, lights and cameras.
     * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison multiple scenes comparison}
     * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene a scene}
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js}
     */
    get scene() {
        return [//...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CanvasTexture.d.ts
    /**
     * Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas element}.
     * @remarks
     * This is almost the same as the base {@link Texture} class,
     * except that it sets {@link Texture.needsUpdate} to `true` immediately.
     * @see {@link THREE.Texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CanvasTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CanvasTexture.js}
     */
    get canvasTexture() {
        return [//...this.texture,
            /**
             * This creates a new {@link THREE.CanvasTexture} object.
             * @param canvas The HTML canvas element from which to load the texture.
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             */

            'canvas',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedArrayTexture.d.ts
    /**
     * Creates an texture 2D array based on data in compressed form, for example from a
     * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js}
     */
    get compressedArrayTexture() {
        return [//...this.compressedTexture,
            /**
             * Create a new instance of {@link CompressedArrayTexture}
             * @param mipmaps The mipmaps array should contain objects with data, width and height.
             * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
             * @param width The width of the biggest mipmap.
             * @param height The height of the biggest mipmap.
             * @param depth The number of layers of the 2D array texture
             * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             */

            'mipmaps',
            'width',
            'height',
            'depth',
            'format',
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedCubeTexture.d.ts
    get compressedCubeTexture() {
        return [//...this.compressedTexture,
            'images',
            'format',
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedTexture.d.ts
    /**
     * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js}
     */
    get compressedTexture() {
        return [//...this.texture,
            /**
             * This creates a new {@link THREE.CompressedTexture} object.
             * @param mipmaps The mipmaps array should contain objects with data, width and height.
             * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
             * @param width The width of the biggest mipmap.
             * @param height The height of the biggest mipmap.
             * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace .colorSpace}. Default {@link NoColorSpace}
             */

            'mipmaps',
            'width',
            'height',
            'format',
            'type',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'anisotropy',
            'colorSpace',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CubeTexture.d.ts
    /**
     * Creates a cube texture made up of six images.
     * @remarks
     * {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}.
     * The only differences are that the images are an array of _6_ images as opposed to a single image,
     * and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping}
     * @example
     * ```typescript
     * const loader = new THREE.CubeTextureLoader(,
     * loader.setPath('textures/cube/pisa/',
     * const textureCube = loader.load(['px.png',
    'nx.png',
    'py.png',
    'ny.png',
    'pz.png',
    'nz.png'].distinct(),
     * const material = new THREE.MeshBasicMaterial({
     * color,
     * envMap
     * },
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CubeTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CubeTexture.js}
     */
    get cubeTexture() {
        return [//...this.texture,
            /**
             * This creates a new {@link THREE.CubeTexture} object.
             * @param images
             * @param mapping See {@link CubeTexture.mapping | .mapping}. Default {@link THREE.CubeReflectionMapping}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
             */

            'images',// HTMLImageElement or HTMLCanvasElement
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
            'colorSpace',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Data3dTexture.d.ts
    /**
     * Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth
     * @example
     * ```typescript
     * This creates a[name] with repeating data, 0 to 255
     * // create a buffer with some data
     * const sizeX = 64,
     * const sizeY = 64,
     * const sizeZ = 64,
     * const data = new Uint8Array(sizeX * sizeY * sizeZ,
     * let i = 0,
     * for (let z = 0, z & lt, sizeZ, z++) {
     * for (let y = 0, y & lt, sizeY, y++) {
     *     for (let x = 0, x & lt, sizeX, x++) {
     *         data[i] = i % 256,
     *         i++,
     *         }
     *     }
     * }
     * // use the buffer to create the texture
     * const texture = new THREE.Data3dTexture(data, sizeX, sizeY, sizeZ,
     * texture.needsUpdate = true,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d / materials / texture3d}
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d_partialupdate / materials / texture3d / partialupdate}
     * @see Example: {@link https://threejs.org/examples/#webgl2_volume_cloud / volume / cloud}
     * @see Example: {@link https://threejs.org/examples/#webgl2_volume_perlin / volume / perlin}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Data3dTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Data3dTexture.js}
     */
    get data3dTexture() {
        return [//...this.texture,
            /**
             * Create a new instance of {@link Data3dTexture}
             * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView} of the texture. Default `null`.
             * @param width Width of the texture. Default `1`.
             * @param height Height of the texture. Default `1`.
             * @param depth Depth of the texture. Default `1`.
             */
            'data',
            'width',
            'height',
            'depth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataArrayTexture.d.ts
    /**
     * Creates an array of textures directly from raw data, width and height and depth
     * @example
     * ```typescript
     * This creates a[name] where each texture has a different color.
     * // create a buffer with color data
     * const width = 512,
     * const height = 512,
     * const depth = 100,
     * const size = width * height,
     * const data = new Uint8Array(4 * size * depth,
     * for (let i = 0, i & lt, depth, i++) {
     * const color = new THREE.Color(Math.random(), Math.random(), Math.random(),
     * const r = Math.floor(color.r * 255,
     * const g = Math.floor(color.g * 255,
     * const b = Math.floor(color.b * 255,
     * for (let j = 0, j & lt, size, j++) {
     *     const stride = (i * size + j) * 4,
     *     data[stride] = r,
     *     data[stride + 1] = g,
     *     data[stride + 2] = b,
     *     data[stride + 3] = 255,
     *     }
     * }
     * // used the buffer to create a [name]
     * const texture = new THREE.DataArrayTexture(data, width, height, depth,
     * texture.needsUpdate = true,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture2darray / materials / texture2darray}
     * @see Example: {@link https://threejs.org/examples/#webgl2_rendertarget_texture2darray / rendertarget / texture2darray}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataArrayTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataArrayTexture.js}
     */
    get dataArrayTexture() {
        return [//...this.texture,
            /**
             * This creates a new {@link THREE.DataArrayTexture} object.
             * @remarks The interpretation of the data depends on {@link format} and {@link type}.
             * @remarks If the {@link type} is {@link THREE.UnsignedByteType}, a {@link Uint8Array} will be useful for addressing the texel data
             * @remarks If the {@link format} is {@link THREE.RGBAFormat}, data needs four values for one texel, Red, Green, Blue and Alpha (typically the opacity).
             * @remarks For the packed {@link type},
        {@link THREE.UnsignedShort4444Type} and {@link THREE.UnsignedShort5551Type}
             * all color components of one texel can be addressed as bitfields within an integer element of a {@link Uint16Array}.
             * @remarks In order to use the {@link type} {@link THREE.FloatType} and {@link THREE.HalfFloatType},
             * the WebGl implementation must support the respective extensions _OES_texture_float_ and _OES_texture_half_float_
             * @remarks In order to use {@link THREE.LinearFilter} for component-wise, bilinear interpolation of the texels based on these types,
             * the WebGl extensions _OES_texture_float_linear_ or _OES_texture_half_float_linear_ must also be present.
             * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView} of the texture. Default `null`.
             * @param width Width of the texture. Default `1`.
             * @param height Height of the texture. Default `1`.
             * @param depth Depth of the texture. Default `1`.
             */
            'data',
            'width',
            'height',
            'depth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataTexture.d.ts
    /**
     * Creates a texture directly from raw data, width and height.
     * @example
     * ```typescript
     * // create a buffer with color data
     * const width = 512,
     * const height = 512,
     * const size = width * height,
     * const data = new Uint8Array(4 * size,
     * const color = new THREE.Color(0xffffff,
     * const r = Math.floor(color.r * 255,
     * const g = Math.floor(color.g * 255,
     * const b = Math.floor(color.b * 255,
     * for (let i = 0, i & lt, size, i++) {
     * const stride = i * 4,
     * data[stride] = r,
     * data[stride + 1] = g,
     * data[stride + 2] = b,
     * data[stride + 3] = 255,
     * }
     * // used the buffer to create a [name]
     * const texture = new THREE.DataTexture(data, width, height,
     * texture.needsUpdate = true,
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataTexture.js}
     */
    get dataTexture() {
        return [//...this.texture,
            /**
             * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView} of the texture. Default `null`.
             * @param width Width of the texture. Default `1`.
             * @param height Height of the texture. Default `1`.
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
             */

            'data',
            'width',
            'height',
            'format',
            'type',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'anisotropy',
            'colorSpace',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DepthTexture.d.ts
    /**
     * This class can be used to automatically save the depth information of a rendering into a texture
     * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture / texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js}
     */
    get depthTexture() {
        return [//...this.texture,
            /**
             * Create a new instance of {@link DepthTexture}
             * @param width Width of the texture.
             * @param height Height of the texture.
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType} or {@link THREE.UnsignedInt248Type}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param format See {@link DepthTexture.format | .format}. Default {@link THREE.DepthFormat}
             */

            'width',
            'height',
            'type',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'anisotropy',
            'format',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\FramebufferTexture.d.ts
    /**
     * This class can only be used in combination with {@link THREE.WebGlRenderer.copyFramebufferToTexture.copyFramebufferToTexture()}.
     * @example
     * ```typescript
     * const pixelRatio = window.devicePixelRatio,
     * const textureSize = 128 * pixelRatio,
     *
     * // instantiate a framebuffer texture
     * const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat ,
     *
     * // calculate start position for copying part of the frame data
     * const vector = new Vector2(,
     * vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2 ,
     * vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2 ,
     *
     * // render the scene
     * renderer.clear(,
     * renderer.render( scene, camera ,
     *
     * // copy part of the rendered frame into the framebuffer texture
     * renderer.copyFramebufferToTexture( vector, frameTexture ,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_framebuffer_texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/FramebufferTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/FramebufferTexture.js}
     */
    get framebufferTexture() {
        return [//...this.texture,
            /**
             * Create a new instance of {@link FramebufferTexture}
             * @param width The width of the texture.
             * @param height The height of the texture.
             */
            'width',
            'height',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Source.d.ts
    /**
     * Represents the data {@link Source} of a texture.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js}
     */
    source: [
        /**
         * Create a new instance of {@link Source}
         * @param data The data definition of a texture. Default `null`
         */
        'data',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Texture.d.ts
    eventTarget: [].distinct(),
    /** Shim for OffscreenCanvas. */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    get offscreenCanvas() {
        return [//...this.eventTarget,
        ].distinct()
    },
    /**
     * Create a {@link Texture} to apply to a surface or as a reflection or refraction map.
     * @remarks
     * After the initial use of a texture, its **dimensions**,
    {@link format}, and {@link type} cannot be changed
     * Instead, call {@link dispose | .dispose()} on the {@link Texture} and instantiate a new {@link Texture}.
     * @example
     * ```typescript
     * // load a texture, set wrap mode to repeat
     * const texture = new THREE.TextureLoader().load("textures/water.jpg",
     * texture.wrapS = THREE.RepeatWrapping,
     * texture.wrapT = THREE.RepeatWrapping,
     * texture.repeat.set(4, 4,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_texture_filters materials texture filters}
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures Constants}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Texture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/Textures/Texture.js}
     */
    get texture() {
        return [//...this.eventDispatcher,
            /**
             * This creates a new {@link THREE.Texture} object.
             * @param image See {@link Texture.image | .image}. Default {@link THREE.Texture.DEFAULT_IMAGE}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link THREE.NoColorSpace}
             */

            'image',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
            'colorSpace',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\types.d.ts
    textureImageData: [
        'data',
        'height',
        'width',
    ].distinct(),
    get texture3dImageData() {
        return [//...this.textureImageData,
            'depth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\VideoTexture.d.ts
    /**
     * Creates a texture for use with a video.
     * @remarks
     * Note the initial use of a texture, the video cannot be changed
     * Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one.
     * @example
     * ```typescript
     * // assuming you have created a HTML video element with id="video"
     * const video = document.getElementById('video',
     * const texture = new THREE.VideoTexture(video,
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_video / video}
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_video_webcam / video / webcam}
     * @see Example: {@link https://threejs.org/examples/#webgl_video_kinect / kinect}
     * @see Example: {@link https://threejs.org/examples/#webgl_video_panorama_equirectangular / panorama / equirectangular}
     * @see Example: {@link https://threejs.org/examples/#webxr_vr_video / video}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/VideoTexture Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js}
     */
    get videoTexture() {
        return [//...this.texture,
            /**
             * Create a new instance of {@link VideoTexture}
             * @param video The video element to use as the texture.
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             */

            'video',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\Addons.d.ts


    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\AnimationClipCreator.d.ts
    animationClipCreator: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\CCDIKSolver.d.ts
    // eslint-disable-next-line @typescript-eslint/naming-convention
    iK: [
        'effector',
        'iteration',
        'links',
        'minAngle',
        'maxAngle',
        'target',
    ].distinct(),
    ccdikSolver: [
        'mesh',
        'iks',
    ].distinct(),
    get ccdikHelper() {
        return [//...this.object3d,
            'mesh',
            'iks',
            'sphereSize',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDAnimationHelper.d.ts
    mmdAnimationHelperParameter: [
        'sync',
        'afterglow',
        'resetPhysicsOnLoop',
        'pmxAnimation',
    ].distinct(),
    mmdAnimationHelperAddParameter: [
        'animation',
        'physics',
        'warmup',
        'unitStep',
        'maxStepNum',
        'gravity',
        'delayTime',
    ].distinct(),
    mmdAnimationHelperPoseParameter: [
        'resetPose',
        'ik',
        'grant',
    ].distinct(),
    mmdAnimationHelperMixer: [
        'looped',
        'mixer',
        'ikSolver',
        'grantSolver',
        'physics',
        'duration',
    ].distinct(),
    mmdAnimationHelper: [
        'params',
    ].distinct(),
    audioManagerParameter: [
        'delayTime',
    ].distinct(),
    audioManager: [
        'audio',
        'params',
    ].distinct(),
    grantSolver: [
        'mesh',
        'grants',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDPhysics.d.ts
    mmdPhysicsParameter: [
        'unitStep',
        'maxStepNum',
        'gravity',
    ].distinct(),
    mmdPhysics: [

        'mesh',
        'rigidBodyParams',
        'constraintParams',
        'params',
        ,
    ].distinct(),
    resourceManager: [
    ].distinct(),
    rigidBody: [
        'mesh',
        'world',
        'params',
        'manager',
    ].distinct(),
    constraint: [

        'mesh',
        'world',
        'bodyA',
        'bodyB',
        'params',
        'manager',
        ,
    ].distinct(),
    get mmdPhysicsHelper() {
        return [//...this.object3d, ...this.skinnedMesh,
            'physics',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\cameras\CinematicCamera.d.ts
    get cinematicCamera() {
        return [//...this.perspectiveCamera,
            'fov',
            'aspect',
            'near',
            'far',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGl.d.ts
    // tslint:disable-next-line:no-unnecessary-class
    webGl: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGpu.d.ts
    // tslint:disable-next-line:no-unnecessary-class
    webGpu: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\ArcballControls.d.ts
    get arcballControls() {
        return [//...this.eventDispatcher,
            'camera',
            'domElement',
            'scene',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\DragControls.d.ts
    dragControlsEventMap: [
        /**
         * Fires when the pointer is moved onto a 3d object, or onto one of its children.
         */
        'hoveron',
        /**
         * Fires when the pointer is moved out of a 3d object.
         */
        'hoveroff',
        /**
         * Fires when the user starts to drag a 3d object.
         */
        'dragstart',
        /**
         * Fires when the user drags a 3d object.
         */
        'drag',
        /**
         * Fires when the user has finished dragging a 3d object.
         */
        'dragend',
    ].distinct(),
    get dragControls() {
        return [//...this.eventDispatcher,
            /**
             * Creates a new instance of DragControls.
             * @param objects An array of draggable 3d objects.
             * @param camera The camera of the rendered scene.
             * @param domElement The HTML element used for event listeners.
             */
            'objects',
            'camera',
            'domElement',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FirstPersonControls.d.ts
    firstPersonControls: [
        'object',
        'domElement',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FlyControls.d.ts
    flyControlsEventMap: [
        'change',
    ].distinct(),
    get flyControls() {
        return [//...this.eventDispatcher,
            'object',
            'domElement',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\MapControls.d.ts
    /**
     * MapControls performs orbiting, dollying (zooming), and panning.
     * Unlike TrackballControls, it maintains the "up" direction
     * object.up (+Y by default).
     *
     *orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch:
     *two-finger rotate
     *zoom - middle mouse, or mousewheel / touch-finger spread or squish
     *pan - left mouse, or arrow keys / touch-finger move
     *
     * @param object - The camera to be controlled. The camera must not
     * be a child of another object, unless that object is the scene itself.
     * @param domElement - The HTML element used for
     * event listeners.
     */
    get mapControls() {
        return [//...this.orbitControls,
            'object',
            'domElement',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\OrbitControls.d.ts
    orbitControlsEventMap: [
        'change',
        'start',
        'end',
    ].distinct(),
    /**
     * Orbit controls allow the camera to orbit around a target.
     * @param object - The camera to be controlled. The camera must not
     * be a child of another object, unless that object is the scene itself.
     * @param domElement - The HTML element used for
     * event listeners.
     */
    get orbitControls() {
        return [//...this.eventDispatcher,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\PointerLockControls.d.ts
    get pointerLockControls() {
        return [//...this.eventDispatcher,
            'camera',
            'domElement',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TrackballControls.d.ts
    trackballControlsEventMap: [
        'change',
        'start',
        'end',
    ].distinct(),
    get trackballControls() {
        return [//...this.eventDispatcher,
            'object',
            'domElement',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TransformControls.d.ts
    get transformControlsEventMap() {
        return [//...this.object3dEventMap,
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
    },
    get transformControls() {
        return [//...this.object3d,
            'object',
            'domElement',
        ].distinct()
    },
    get transformControlsGizmo() {
        return [//...this.object3d,
        ].distinct()
    },
    get transformControlsPlane() {
        return [//...this.mesh,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSM.d.ts
    csmParameters: [
        'camera',
        'parent',
        'cascades',
        'maxFar',
        'mode',
        'shadowMapSize',
        'shadowBias',
        'lightDirection',
        'lightIntensity',
        'lightNear',
        'lightFar',
        'lightMargin',
        'customSplitsCallback',
    ].distinct(),
    csm: [
        'data',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMFrustum.d.ts
    csmFrustumVerticies: [
        'near',
        'far',
    ].distinct(),
    csmFrustumParameters: [
        'projectionMatrix',
        'maxFar',
    ].distinct(),
    csmFrustum: [
        'data',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMHelper.d.ts
    get csmHelper() {
        return [//...this.group,
            'csm',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMShader.d.ts
    csmShader: [
        'lights_fragment_begin',
        'lights_pars_begin',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\CurveExtras.d.ts
    get grannyKnot() {
        return [//...this.curve,
        ].distinct()
    },
    get heartCurve() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get vivianiCurve() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get knotCurve() {
        return [//...this.curve,
        ].distinct()
    },
    get helixCurve() {
        return [//...this.curve,
        ].distinct()
    },
    get trefoilKnot() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get torusKnot() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get cinquefoilKnot() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get trefoilPolynomialKnot() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get figureEightPolynomialKnot() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get decoratedTorusKnot4a() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get decoratedTorusKnot4b() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get decoratedTorusKnot5a() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    get decoratedTorusKnot5c() {
        return [//...this.curve,
            'scale',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSCurve.d.ts
    get nurbsCurve() {
        return [//...this.curve,

            'degree',
            'knots',
            'controlPoints',
            'startKnot',
            'endKnot',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSSurface.d.ts
    nurbsSurface: [

        'degree1',
        'degree2',
        'knots1',
        'knots2',
        'controlPoints',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSVolume.d.ts
    nurbsVolume: [
        'degree1',
        'degree2',
        'degree3',
        'knots1',
        'knots2',
        'knots3',
        'controlPoints',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\deprecated\Geometry.d.ts

    /**
     * @deprecated Use Face3 instead.
     */
    morphTarget: [
        'name',
        'vertices',
    ].distinct(),
    morphColor: [
        'name',
        'colors',
    ].distinct(),
    morphNormals: [
        'name',
        'normals',
    ].distinct(),
    /**
     * Base class for geometries
     */
    get geometry() {
        return [//...this.eventDispatcher,
        ].distinct()
    },
    /**
     * Triangle face.
     */
    face3: [
        /**
         * Vertex A index.
         */
        'a',
        /**
         * Vertex B index.
         */
        'b',
        /**
         * Vertex C index.
         */
        'c',
        /**
         * Face normal.
         * @default new THREE.Vector3()
         */
        'normal',
        /**
         * Face color.
         * @default new THREE.Color()
         */
        'color',
        /**
         * Material index (points to {@link Mesh.material}).
         * @default 0
         */
        'materialIndex',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AnaglyphEffect.d.ts
    anaglyphEffect: [
        'renderer',
        'width',
        'height',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AsciiEffect.d.ts
    asciiEffectOptions: [
        'resolution',
        'scale',
        'color',
        'alpha',
        'block',
        'invert',
    ].distinct(),
    asciiEffect: [
        'renderer',
        'charSet',
        'options',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\OutlineEffect.d.ts
    outlineEffectParameters: ([
        'defaultThickness',
        'defaultColor',
        'defaultAlpha',
        'defaultKeepAlive',
    ] as const).toObject(),
    outlineEffect: [
        'renderer',
        'parameters', //outlineEffectParameters
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\ParallaxBarrierEffect.d.ts
    parallaxBarrierEffect: [
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\PeppersGhostEffect.d.ts
    peppersGhostEffect: [
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\StereoEffect.d.ts
    stereoEffect: [
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\DebugEnvironment.d.ts
    get debugEnvironment() {
        return [//...this.scene,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\RoomEnvironment.d.ts
    get roomEnvironment() {
        return [//...this.scene,
            'renderer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\DRACOExporter.d.ts
    dracoExporterOptions: [
        'decodeSpeed',
        'encodeSpeed',
        'encoderMethod',
        'quantization',
        'exportUvs',
        'exportNormals',
        'exportColor',
    ].distinct(),
    dracoExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\EXRExporter.d.ts
    /**
     * @author sciecode / https://github.com/sciecode
     *
     * EXR format references:
     * https://www.openexr.com/documentation/openexrfilelayout.pdf
     */
    exrExporterParseOptions: [
        'compression',
        'type',
    ].distinct(),
    exrExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\gltfExporter.d.ts
    gltfExporterOptions: [
        /**
         * Export position, rotation and scale instead of matrix per node. Default is false
         */
        'trs',
        /**
         * Export only visible objects. Default is true.
         */
        'onlyVisible',
        /**
         * Export just the attributes within the drawRange, if defined, instead of exporting the whole array. Default is true.
         */
        'truncateDrawRange',
        /**
         * Export in binary (.glb) format, returning an ArrayBuffer. Default is false.
         */
        'binary',
        /**
         * Export with images embedded into the gltf asset. Default is true.
         */
        'embedImages',
        /**
         * Restricts the image maximum size (both width and height) to the given value. This option works only if embedImages is true. Default is Infinity.
         */
        'maxTextureSize',
        /**
         * List of animations to be included in the export.
         */
        'animations',
        /**
         * Generate indices for non-index geometry and export with them. Default is false.
         */
        'forceIndices',
        /**
         * Export custom gltf extensions defined on an object's userData.gltfExtensions property. Default is false.
         */
        'includeCustomExtensions',
    ].distinct(),
    gltfExporter: [
    ].distinct(),
    gltfWriter: [
    ].distinct(),
    gltfExporterPlugin: [
        'writeTexture',
        'writeMaterial',
        'writeMesh',
        'writeNode',
        'beforeParse',
        'afterParse',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\KTX2Exporter.d.ts
    ktx2Exporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\MMDExporter.d.ts
    mmdExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\OBJExporter.d.ts
    objExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\plyExporter.d.ts
    plyExporterOptionsBase: [
        'excludeAttributes',
        'littleEndian',
    ].distinct(),
    get plyExporterOptionsBinary() {
        return [//...this.plyExporterOptionsBase,
            'binary',
        ].distinct()
    },
    get plyExporterOptionsString() {
        return [//...this.plyExporterOptionsBase,
            'binary',
        ].distinct()
    },
    get plyExporterOptions() {
        return [//...this.plyExporterOptionsBase,
            'binary',
        ].distinct()
    },
    plyExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\stlExporter.d.ts
    stlExporterOptionsBinary: [
        'binary',
    ].distinct(),
    stlExporterOptionsString: [
        'binary',
    ].distinct(),
    stlExporterOptions: [
        'binary',
    ].distinct(),
    stlExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\usdzExporter.d.ts
    usdzExporterOptions: [
        'quickLookCompatible',
        'maxTextureSize',
    ].distinct(),
    usdzExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\BoxLineGeometry.d.ts
    get boxLineGeometry() {
        return [//...this.bufferGeometry,

            'width',
            'height',
            'depth',
            'widthSegments',
            'heightSegments',
            'depthSegments',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ConvexGeometry.d.ts
    get convexGeometry() {
        return [//...this.bufferGeometry,
            'points',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\DecalGeometry.d.ts
    get decalGeometry() {
        return [//...this.bufferGeometry,
            'mesh',
            'position',
            'orientation',
            'size',
        ].distinct()
    },
    decalVertex: [
        'position',
        'normal',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometries.d.ts
    get parametricGeometries_TubeGeometry() {
        return [//...this.parametricGeometry,

            'path',
            'segments',
            'radius',
            'segmentsRadius',
            'closed',
        ].distinct()
    },
    get parametricGeometries_TorusKnotGeometry() {
        return [//...this.tubeGeometry,
            'radius',
            'tube',
            'segmentsT',
            'segmentsR',
            'p',
            'q',
        ].distinct()
    },
    get parametricGeometries_SphereGeometry() {
        return [//...this.parametricGeometry,
            'size',
            'u',
            'v',
        ].distinct()
    },
    get parametricGeometries_PlaneGeometry() {
        return [//...this.parametricGeometry,
            'width',
            'depth',
            'segmentsWidth',
            'segmentsDepth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometry.d.ts
    get parametricGeometry() {
        return [//...this.bufferGeometry,
            'func',
            'slices',
            'stacks',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\RoundedBoxGeometry.d.ts
    get roundedBoxGeometry() {
        return [//...this.boxGeometry,
            'width',
            'height',
            'depth',
            'segments',
            'radius',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\SDFGeometryGenerator.d.ts
    sdfGeometryGenerator: [
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TeapotGeometry.d.ts
    get teapotGeometry() {
        return [//...this.bufferGeometry,

            'size',
            'segments',
            'bottom',
            'lid',
            'body',
            'fitLid',
            'blinn',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TextGeometry.d.ts
    get textGeometryParameters() {
        return {
            ...this.extrudeGeometryOptions,
            ...(['font',
                /**
                 * Size of the text
                 * Expects a `Float`.
                 * @defaultValue `100`
                 */
                'size',
                /**
                 * Thickness to extrude text.
                 * Expects a `Float`.
                 * @defaultValue `50`
                 * @deprecated THREE.TextGeometry: .height is now deprecated. Please use .depth instead
                 */
                'height',
                /**
                 * Thickness to extrude text.
                 * Expects a `Float`.
                 * @defaultValue `50`
                 */
                'depth',
                /**
                 * @override
                 * @defaultValue `12`
                 */
                'curveSegments',
                /**
                 * @defaultValue `false`
                 */
                'bevelEnabled',
                /**
                 * How deep into text bevel goes.
                 * Expects a `Float`.
                 * @override
                 * @defaultValue `10`
                 */
                'bevelThickness',
                /**
                 * How far from text outline is bevel.
                 * Expects a `Float`.
                 * @override
                 * @defaultValue `8`
                 */
                'bevelSize',
                /**
                 * How far from text outline bevel starts.
                 * Expects a `Float`.
                 * @override
                 * @defaultValue `0`
                 */
                'bevelOffset',
                /**
                 * @override
                 * @defaultValue `3`
                 */
                'bevelSegments',
            ] as const).toObject()
        }
    },
    /**
     * A class for generating text as a single geometry
     * @remarks
     * It is constructed by providing a string of text, and a set of parameters consisting of a loaded font and settings for the geometry's parent {@link THREE.ExtrudeGeometry}
     * See the {@link THREE.FontLoader} page for additional details.
     * @example
     * ```typescript
     * const loader = new FontLoader(,
     * loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
     * const geometry = new TextGeometry('Hello three.js!',
    {
     * 'font',
     * 'size',
     * 'height',
     * 'curveSegments',
     * 'bevelEnabled',
     * 'bevelThickness',
     * 'bevelSize',
     * 'bevelOffset',
     *     bevelSegments
     *     },
     * },
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text / text }
     * @see {@link https://threejs.org/docs/index.html#api/en/C:/rafaelsc/Source/threejs/three.js/docs/examples/en/geometries/TextGeometry Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/examples/jsm/geometries/TextGeometry.js}
     */
    get textGeometry() {
        return [ //...this.extrudeGeometry,
            /**
             * Create a new instance of {@link TextGeometry}
             * @param text The text that needs to be shown.
             * @param parameters Object that can contain the following parameters. @see {@link TextGeometryParameters} for defaults.
             */
            'text',
            'parameters', //textGeometryParameters
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\LightProbeHelper.d.ts
    get lightProbeHelper() {
        return [//...this.mesh,
            'lightProbe',
            'size',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\OctreeHelper.d.ts
    get octreeHelper() {
        return [//...this.lineSegments,
            'octree',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\PositionalAudioHelper.d.ts
    get positionalAudioHelper() {
        return [//...this.line,
            'audio',
            'range',
            'divisionsInnerAngle',
            'divisionsOuterAngle',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\RectAreaLightHelper.d.ts
    get rectAreaLightHelper() {
        return [//...this.line,
            'light',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\TextureHelper.d.ts
    get textureHelper() {
        return [//...this.mesh,
            'texture',
            'width',
            'height',
            'depth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexNormalsHelper.d.ts
    get vertexNormalsHelper() {
        return [//...this.lineSegments,
            'object',
            'size',
            'hex',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexTangentsHelper.d.ts
    get vertexTangentsHelper() {
        return [//...this.lineSegments,
            'object',
            'size',
            'hex',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\ViewHelper.d.ts
    get viewHelper() {
        return [//...this.object3d,
            'camera',
            'domElement',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\HTMLMesh.d.ts
    get htmlMesh() {
        return [//...this.mesh,
            'dom',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\InteractiveGroup.d.ts
    get interactiveObject3dEventMap() {
        return [//...this.object3dEventMap,
            'hoveron',
            'pointerdown',
            'pointerup',
            'pointermove',
            'mousedown',
            'mouseup',
            'mousemove',
            'click',
        ].distinct()
    },
    get interactiveObject3d() {
        return [//...this.object3d,
        ].distinct()
    },
    get interactiveGroup() {
        return [//...this.group,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionBox.d.ts
    selectionBox: [
        'camera',
        'scene',
        'deep',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionHelper.d.ts
    selectionHelper: [
        'renderer',
        'cssClassName',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\fflate.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\lil-gui.module.min.d.ts
    gui: ([
        'autoPlace',
        'container',
        'width',
        'title',
        'injectStyles',
        'touchStyles',
        'parent',
    ] as const).toObject(),
    get booleanController() {
        return [//...this.controller,
            'parent',
            'object',
            'property',
        ].distinct()
    },
    colorController: [
        'parent',
        'object',
        'property',
        'rgbScale',
    ].distinct(),
    /**
     * lil-gui
     * https://lil-gui.georgealways.com
     * @version 0.17.0
     * @author George Michael Brower
     * @license MIT
     */
    /**
     * Base class for all controllers.
     */
    controller: [
        'parent',
        'object',
        'property',
        'className',
        'widgetTag',
    ].distinct(),
    get functionController() {
        return [//...this.controller,
            'parent',
            'object',
            'property',
        ].distinct()
    },
    get numberController() {
        return [//...this.controller,

            'parent',
            'object',
            'property',
            'min',
            'max',
            'step',
        ].distinct()
    },
    optionController: [
        'parent',
        'object',
        'property',
        'options',
    ].distinct(),
    get stringController() {
        return [//...this.controller,
            'parent',
            'object',
            'property',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\meshopt_decoder.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\stats.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\tween.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lights\IESSpotLight.d.ts
    get iesSpotLight() {
        return [//...this.spotLight,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lights\LightProbeGenerator.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lights\RectAreaLightUniformsLib.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Line2.d.ts
    get line2() {
        return [//...this.lineSegments2,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineGeometry.d.ts
    get lineGeometry() {
        return [//...this.lineSegmentsGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineMaterial.d.ts
    get lineMaterialParameters() {
        return {
            ...this.materialParameters,
            ...(['alphaToCoverage',
                'color',
                'dashed',
                'dashScale',
                'dashSize',
                'dashOffset',
                'gapSize',
                'linewidth',
                'resolution',
                'wireframe',
                'worldUnits',
            ] as const).toObject()
        }
    },
    get lineMaterial() {
        return this.lineMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegments2.d.ts
    get lineSegments2() {
        return [//...this.mesh,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegmentsGeometry.d.ts
    get lineSegmentsGeometry() {
        return [//...this.instancedBufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Wireframe.d.ts
    get wireframe() {
        return [//...this.mesh,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\WireframeGeometry2.d.ts
    get wireframeGeometry2() {
        return [//...this.lineSegmentsGeometry,
            'geometry',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3dMLoader.d.ts
    get rhino3dmLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3MFLoader.d.ts
    get threeMfLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\AMFLoader.d.ts
    get amfLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\BVHLoader.d.ts
    bvh: [
        'clip',
        'skeleton',
    ].distinct(),
    get bvhLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\ColladaLoader.d.ts
    collada: [
        'kinematics',
        'library',
        'scene',
    ].distinct(),
    get colladaLoader() {
        return [//...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DDSLoader.d.ts
    dds: [
        'mipmaps',
        'width',
        'height',
        'format',
        'mipmapCount',
        'isCubemap',
    ].distinct(),
    get ddsLoader() {
        return [//...this.compressedTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DRACOLoader.d.ts
    get dracoLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\EXRLoader.d.ts
    exr: [
        'header',
        'width',
        'height',
        'data',
        'format',
        'colorSpace',
        'type',
    ].distinct(),
    get exrLoader() {
        return [//...this.dataTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FBXLoader.d.ts
    get fbxLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FontLoader.d.ts
    fontData: [
        'glyphs',
        'familyName',
        'ascender',
        'descender',
        'underlinePosition',
        'underlineThickness',
        'boundingBox',
        'resolution',
        'original_font_information',
    ].distinct(),
    get fontLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    font: [
        'data',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GCodeLoader.d.ts
    get gCodeLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\gltfLoader.d.ts

    // gltf: [
    //     'path',
    //     // 'animations',
    //     // 'scene',
    //     // 'scenes',
    //     // 'cameras',
    //     // 'asset',
    //     // 'parser',
    //     // 'userData',
    // ].distinct(),
    get gltfLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    }, gltfReference: [
        'materials',
        'nodes',
        'textures',
        'meshes',
    ].distinct(),
    gltfParser: [
    ].distinct(),
    gltfLoaderPlugin: [
        'beforeRoot',
        'afterRoot',
        'loadNode',
        'loadMesh',
        'loadBufferView',
        'loadMaterial',
        'loadTexture',
        'getMaterialType',
        'extendMaterialParams',
        'createNodeMesh',
        'createNodeAttachment',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\HDRCubeTextureLoader.d.ts
    get hdrCubeTextureLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\IESLoader.d.ts
    get iesLoader() {
        return [//...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KMZLoader.d.ts
    get kmzLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTX2Loader.d.ts
    ktx2LoaderWorkerConfig: [
        'astcSupported',
        'etc1Supported',
        'etc2Supported',
        'dxtSupported',
        'bptcSupported',
        'pvrtcSupported',
    ].distinct(),
    get ktx2Loader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTXLoader.d.ts
    ktx: [
        'mipmaps',
        'width',
        'height',
        'format',
        'mipmapCount',
        'isCubemap',
    ].distinct(),
    get ktxLoader() {
        return [//...this.compressedTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LDrawLoader.d.ts
    get lDrawLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LogLuvLoader.d.ts
    logLuv: [
        'width',
        'height',
        'data',
        'format',
        'type',
        'flipY',
    ].distinct(),
    get logLuvLoader() {
        return [//...this.dataTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LottieLoader.d.ts
    get lottieLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUT3dlLoader.d.ts
    lut3dlResult: [
        'size',
        'texture3d',
    ].distinct(),
    /**
     * A 3d LUT loader that supports the .3dl file format.
     *
     * Based on the following references:
     *
     * http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492
     * https://community.foundry.com/discuss/topic/103636/format-spec-for-3dl?mode=Post&postID=895258
     */
    get lut3dlLoader() {
        return [//...this.loader,
            /**
             * Creates a new {@link LUT3dlLoader}.
             * @param manager The LoadingManager to use. Defaults to {@link DefaultLoadingManager}
             */
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUTCubeLoader.d.ts
    lutCubeResult: [
        'title',
        'size',
        'domainMin',
        'domainMax',
        'texture3d',
    ].distinct(),
    /**
     * A 3d LUT loader that supports the .cube file format.
     *
     * Based on the following reference:
     *
     * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
     */
    get lutCubeLoader() {
        return [//...this.loader,
            /**
             * Creates a new {@link LUTCubeLoader}.
             * @param manager The LoadingManager to use. Defaults to {@link DefaultLoadingManager}
             */
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\lwoLoader.d.ts
    lwo: [
        'materials',
        'meshes',
    ].distinct(),
    lwoLoaderParameters: ([
        /**
         * Base content delivery folder path, use when it differs from Lightwave default structure
         */
        'resourcePath',
    ] as const).toObject(),
    get lwoLoader() {
        return [//...this.loader,
            'manager',
            'parameters', //lwoLoaderParameters
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MaterialXLoader.d.ts
    get materialXLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MD2Loader.d.ts
    get md2Loader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MDDLoader.d.ts
    mdd: [
        'morphTargets',
        'clip',
    ].distinct(),
    get mddLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MMDLoader.d.ts
    mmdLoaderAnimationObject: [
        'animation',
        'mesh',
    ].distinct(),
    get mmdLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MTLLoader.d.ts
    materialCreatorOptions: [
        /**
         * side side to apply the material
         * THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
         */
        'side',
        /*
         * wrap type of wrapping to apply for textures
         * THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
         */
        'wrap',
        /*
         * normalizeRGB need to be normalized to 0-1 from 0-255
         * Default, assumed to be already normalized
         */
        'normalizeRGB',
        /*
         * ignoreZeroRGBs values of RGBs (Ka,Kd,Ks) that are all 0's
         * Default
         */
        'ignoreZeroRGBs',
        /*
         * invertTrProperty values 1 of Tr field for fully opaque. This option is useful for obj
         * exported from 3ds MAX, vcglib or meshlab.
         * Default
         */
        'invertTrProperty',
    ].distinct(),
    get mtlLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    materialInfo: [
        'ks',
        'kd',
        'ke',
        'map_kd',
        'map_ks',
        'map_ke',
        'norm',
        'map_bump',
        'bump',
        'map_d',
        'ns',
        'd',
        'tr',
    ].distinct(),
    texParams: [
        'scale',
        'offset',
        'url',
    ].distinct(),
    materialCreator: [
        'baseUrl',
        'options',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\NRRDLoader.d.ts
    get nrrdLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\OBJLoader.d.ts
    get objLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PCDLoader.d.ts
    get pcdLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PDBLoader.d.ts
    pdb: [
        'geometryAtoms',
        'geometryBonds',
        'json',
    ].distinct(),
    get pdbLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\plyLoader.d.ts
    get plyLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PVRLoader.d.ts
    pvr: [
        'mipmaps',
        'width',
        'height',
        'format',
        'mipmapCount',
        'isCubemap',
    ].distinct(),
    get pvrLoader() {
        return [//...this.compressedTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBELoader.d.ts
    rgbe: [
        'width',
        'height',
        'data',
        'header',
        'gamma',
        'exposure',
        'type',
    ].distinct(),
    get rgbeLoader() {
        return [//...this.dataTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBMLoader.d.ts
    rgbm: [
        'width',
        'height',
        'data',
        'header',
        'format',
        'type',
        'flipY',
    ].distinct(),
    get rgbmLoader() {
        return [//...this.dataTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\stlLoader.d.ts
    get stlLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\svgLoader.d.ts
    get svgResultPaths() {
        return [//...this.shapePath,
            'userData',
        ].distinct()
    }, svgResult: [
        'paths',
        'xml',
    ].distinct(),
    strokeStyle: [
        'strokeColor',
        'strokeWidth',
        'strokeLineJoin',
        'strokeLineCap',
        'strokeMiterLimit',
    ].distinct(),
    get svgLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TDSLoader.d.ts
    get tdsLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TGALoader.d.ts
    get tgaLoader() {
        return [//...this.dataTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TIFFLoader.d.ts
    tiffResult: [
        'width',
        'height',
        'data',
        'flipY',
        'magFilter',
        'minFilter',
    ].distinct(),
    get tiffLoader() {
        return [//...this.dataTextureLoader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TiltLoader.d.ts
    get tiltLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TTFLoader.d.ts
    get tftLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\usdzLoader.d.ts
    usdaParser: [
    ].distinct(),

    get usdzLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VOXLoader.d.ts
    chunk: [
        'palette',
        'size',
        'data',
    ].distinct(),
    get voxLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    get voxMesh() {
        return [//...this.mesh,
            'chunk',
        ].distinct()
    },
    get voxData3dTexture() {
        return [//...this.data3dTexture,
            'chunk',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VRMLLoader.d.ts
    get vrmlLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VTKLoader.d.ts
    get vtkLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\XYZLoader.d.ts
    get xyzLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshGouraudMaterial.d.ts
    /**
     * MeshGouraudMaterial
     *
     * Lambert illumination model with Gouraud (per-vertex) shading
     */
    get meshGouraudMaterial() {
        return this.shaderMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshPostProcessingMaterial.d.ts
    get meshPostProcessingMaterialParameters() {
        return this.meshPhysicalMaterialParameters
    },
    get meshPostProcessingMaterial() {
        return this.meshPostProcessingMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Capsule.d.ts
    capsule: [
        'start',
        'end',
        'radius',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ColorConverter.d.ts

    cmyk: [
        'c',
        'm',
        'y',
        'k',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ConvexHull.d.ts
    halfEdge: [
        'vertex',
        'face',
    ].distinct(),
    vertexNode: [
        'point',
    ].distinct(),
    vertexList: [
    ].distinct(),
    convexHull: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ImprovedNoise.d.ts
    improvedNoise: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Lut.d.ts
    lut: [
        'colormap',
        'numberofcolors',
    ].distinct(),
    colorMapKeywords: [
        'rainbow',
        'cooltowarm',
        'blackbody',
        'grayscale',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\MeshSurfaceSampler.d.ts
    meshSurfaceSampler: [
        'mesh',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\OBB.d.ts
    obb: [
        'center',
        'halfSize',
        'rotation',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Octree.d.ts
    octree: [
        'box',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\SimplexNoise.d.ts
    simplexNoise: [
        'r',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ConvexObjectBreaker.d.ts
    cutByPlaneOutput: [
        'object1',
        'object2',
    ].distinct(),
    convexObjectBreaker: [
        'minSizeForBreak',
        'smallDelta',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\GpuComputationRenderer.d.ts
    variable: [
        'name',
        'initialValueTexture',
        'material',
        'dependencies',
        'renderTargets',
        'wrapS',
        'wrapT',
        'minFilter',
        'magFilter',
    ].distinct(),
    gpuComputationRenderer: [
        'sizeX',
        'sizeY',
        'renderer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Gyroscope.d.ts
    get gyroscope() {
        return [//...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2Character.d.ts
    mD2PartsConfig: [
        'baseUrl',
        'body',
        'skins',
        'weapons',
    ].distinct(),
    md2Character: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2CharacterComplex.d.ts
    md2CharacterComplex: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphAnimMesh.d.ts
    get morphAnimMesh() {
        return [//...this.mesh,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphBlendMesh.d.ts
    get morphBlendMesh() {
        return [//...this.mesh,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ProgressiveLightMap.d.ts
    uvBoxes: [
        'w',
        'h',
        'index',
    ].distinct(),
    lightMapContainers: [
        'basicMat',
        'object',
    ].distinct(),
    progressiveLightMap: [
        'renderer',
        'res',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\RollerCoaster.d.ts
    get rollerCoasterGeometry() {
        return [//...this.bufferGeometry,
            'curve',
            'divisions',
        ].distinct()
    },
    get rollerCoasterLiftersGeometry() {
        return [//...this.bufferGeometry,
            'curve',
            'divisions',
        ].distinct()
    },
    get rollerCoasterShadowGeometry() {
        return [//...this.bufferGeometry,
            'curve',
            'divisions',
        ].distinct()
    },
    get skyGeometry() {
        return [//...this.bufferGeometry,
        ].distinct()
    },
    get treesGeometry() {
        return [//...this.bufferGeometry,
            'landscape',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Timer.d.ts
    /**
     * This class is an alternative to {@link THREE.Clock} with a different API design and behavior
     * The goal is to avoid the conceptual flaws that became apparent in {@link THREE.Clock} over time.
     *
     * - {@link Timer} has an {@link .update()} method that updates its internal state. That makes it possible to call
     *   {@link .getDelta()} and {@link .getElapsed()} multiple times per simulation step without getting different values.
     * - The class uses the Page Visibility API to avoid large time delta values when the app is inactive (e.g. tab switched
     *   or browser hidden).
     *
     * @example
     * const timer = new Timer(,
     *
     * function animate(timestamp) {
     *   requestAnimationFrame(animate,
     *   // timestamp is optional
     *   timer.update(timestamp,
     *   const delta = timer.getDelta(,
     *   // do something with delta
     *   renderer.render(scene, camera,
     * }
     *
     * @see https://threejs.org/examples/#webgl_morphtargets_sphere
     */
    timer: [
    ].distinct(),
    /**
     * A timer that uses a fixed delta.
     */
    get fixedTimer() {
        return [//...this.timer,
            /**
             * @param fps The desired fixed delta expressed in frames per second.
             */
            'fps',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\TubePainter.d.ts
    tubePainter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Volume.d.ts
    volume: [
        'xLength',
        'yLength',
        'zLength',
        'type',
        'arrayBuffer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\VolumeSlice.d.ts
    volumeSlice: [
        'volume',
        'index',
        'axis',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\CurveModifier.d.ts
    splineUniform: [
        'spineTexture',
        'pathOffset',
        'pathSegment',
        'spineOffset',
        'flow',
    ].distinct(),
    flow: [
        'mesh',
        'numberOfCurves',
    ].distinct(),
    get instancedFlow() {
        return [//...this.flow,
            'count',
            'curveCount',
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\EdgeSplitModifier.d.ts
    edgeSplitModifier: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\SimplifyModifier.d.ts
    simplifyModifier: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\TessellateModifier.d.ts
    tessellateModifier: [
        'maxEdgeLength',
        'maxIterations',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\Nodes.d.ts
    // code
    // fog
    // geometry
    // gpgpu
    // lighting
    // pmrem
    // procedural
    // loaders
    // materials
    // materialX
    // functions
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\AccessorsUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BatchNode.d.ts
    get batchNode() {
        return [//...this.node,
            'batchMesh',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BitangentNode.d.ts
    get bitangentNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BufferNode.d.ts
    get bufferNode() {
        return [//...this.uniformNode,
            'value',
            'bufferType',
            'bufferCount',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\CameraNode.d.ts
    get cameraNode() {
        return [//...this.object3dNode,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ClippingNode.d.ts
    get clippingNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\CubeTextureNode.d.ts
    get cubeTextureNode() {
        return [//...this.textureNode,
            'value',
            'uvNode',
            'levelNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\InstanceNode.d.ts
    get instanceNode() {
        return [//...this.node,
            'instanceMesh',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialNode.d.ts
    get materialNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialReferenceNode.d.ts
    get materialReferenceNode() {
        return [//...this.referenceNode,
            'property',
            'inputType',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelNode.d.ts
    /**
     * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
     */
    get modelNode() {
        return [//...this.object3dNode,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelViewProjectionNode.d.ts
    get modelViewProjectionNode() {
        return [//...this.node,
            'positionNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\NormalNode.d.ts
    get normalNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\Object3dNode.d.ts
    get object3dNode() {
        return [//...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PointUVNode.d.ts
    get pointUvNode() {
        return [//...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PositionNode.d.ts
    get positionNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReferenceNode.d.ts
    get referenceNode() {
        return [//...this.node,
            'property',
            'uniformType',
            'object',
            'count',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReflectVectorNode.d.ts
    get reflectVectorNode() {
        return [//...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\RendererReferenceNode.d.ts
    get rendererReferenceNode() {
        return [//...this.referenceNode,
            'property',
            'inputType',
            'renderer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\SkinningNode.d.ts
    get skinningNode() {
        return [//...this.node,
            'skinnedMesh',
            'useReference',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\StorageBufferNode.d.ts
    get storageBufferNode() {
        return [//...this.bufferNode,
            'value',
            'bufferType',
            'bufferCount',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TangentNode.d.ts
    get tangentNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureBicubicNode.d.ts
    get textureBicubicNode() {
        return [//...this.tempNode,
            'textureNode',
            'blurNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureNode.d.ts
    get textureNode() {
        return [//...this.uniformNode,
            'value',
            'uvNode',
            'levelNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UniformsNode.d.ts
    get uniformsElementNode() {
        return [//...this.arrayElementNode,
            'arrayBuffer',
            'indexNode',
        ].distinct()
    },
    get uniformsNode() {
        return [//...this.bufferNode,
            'value',
            'elementType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UserDataNode.d.ts
    get userDataNode() {
        return [//...this.referenceNode,
            'property',
            'inputType',
            'userData',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UVNode.d.ts
    get uvNode() {
        return [//...this.attributeNode,
            'index',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\VertexColorNode.d.ts
    get vertexColorNode() {
        return [//...this.attributeNode,
            'index',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\CodeNode.d.ts
    codeNodeInclude: [
    ].distinct(),

    get codeNode() {
        return [//...this.node,
            'code',
            'includes',
            'language',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\ExpressionNode.d.ts
    get expressionNode() {
        return [//...this.tempNode,
            'snipped',
            'nodeType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionCallNode.d.ts
    get functionCallNode() {
        return [//...this.tempNode,
            'functionNode',
            'parameters', //{ [name: string]: Node }
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionNode.d.ts
    get functionNode() {
        return [//...this.codeNode,
            'code',
            'includes',
            'language',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AssignNode.d.ts
    get assignNode() {
        return [//...this.tempNode,
            'targetNode',
            'sourceNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AttributeNode.d.ts
    get attributeNode() {
        return [//...this.node,
            'attributeName',
            'nodeType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\BypassNode.d.ts
    get bypassNode() {
        return [//...this.node,
            'returnNode',
            'callNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\CacheNode.d.ts
    get cacheNode() {
        return [//...this.node,
            'node',
            'cache',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\constants.d.ts
    /** Should be the same type as Object3d.userData */
    /** generic key value type,curretly used by nodes  */
    anyObject: [
    ].distinct(),
    /** a generic JSON type, used by nodes only */
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ConstNode.d.ts
    get constNode() {
        return [//...this.inputNode,
            'value',
            'nodeType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ContextNode.d.ts
    get contextNode() {
        return [//...this.node,
            'node',
            'context',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\IndexNode.d.ts
    get indexNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\InputNode.d.ts
    get inputNode() {
        return [//...this.node,
            'value',
            'nodeType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\LightingModel.d.ts
    lightingModelReflectedLight: [
        'directDiffuse',
        'directSpecular',
        'indirectDiffuse',
        'indirectSpecular',
    ].distinct(),
    lightingModelDirectInput: [
        'lightDirection',
        'lightColor',
        'reflectedLight',
        'shadowMask',
    ].distinct(),
    lightingModelIndirectInput: [
        'radiance',
        'irradiance',
        'iblIrradiance',
        'ambientOcclusion',
        'reflectedLight',
        'backdrop',
        'backdropAlpha',
        'outgoingLight',
    ].distinct(),
    lightingModel: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\Node.d.ts
    node: [
        'nodeType',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeAttribute.d.ts
    nodeAttribute: [
        'name',
        'type',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeBuilder.d.ts

    flowData: [
        'code',
    ].distinct(),
    nodeData: [
        'vertex',
        'fragment',
        'compute',
    ].distinct(),
    nodeBuilder: [

    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCache.d.ts
    nodeCache: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCode.d.ts
    nodeCode: [
        'name',
        'type',
        'code',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFrame.d.ts
    nodeFrame: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunction.d.ts
    nodeFunction: [
        'type',
        'inputs',
        'name',
        'presicion',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunctionInput.d.ts
    nodeFunctionInput: [
        'type',
        'name',
        'count',
        'qualifier',
        'isConst',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeKeywords.d.ts
    nodeKeywords: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeParser.d.ts
    nodeParser: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeUniform.d.ts
    nodeUniform: [
        'name',
        'type',
        'node',
        'needsUpdate',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeUtils.d.ts
    nodeChild: [
        'property',
        'index',
        'childNode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVar.d.ts
    nodeVar: [
        'name',
        'type',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVarying.d.ts
    get nodeVarying() {
        return [//...this.nodeVar,
            'name',
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\OutputStructNode.d.ts
    get outputStructNode() {
        return [//...this.node,
            'members',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\PropertyNode.d.ts
    get propertyNode() {
        return [//...this.node,
            'nodeType',
            'name',
            'varying',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\StackNode.d.ts
    get stackNode() {
        return [//...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\TempNode.d.ts
    get tempNode() {
        return [//...this.node,
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\UniformNode.d.ts
    get uniformNode() {
        return [//...this.inputNode,
            'value',
            'nodeType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VarNode.d.ts
    get varNode() {
        return [//...this.node,
            'node',
            'name',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VaryingNode.d.ts
    get varyingNode() {
        return [//...this.node,
            'node',
            'name',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AfterImageNode.d.ts
    get afterImageNode() {
        return [//...this.tempNode,
            'textureNode',
            'damp',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AnamorphicNode.d.ts
    get anamorphicNode() {
        return [//...this.tempNode,
            'textureNode',
            'thresholdNode',
            'scaleNode',
            'samples',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\BlendModeNode.d.ts
    get blendModeNode() {
        return [//...this.tempNode,
            'blendMode',
            'baseNode',
            'blendNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorAdjustmentNode.d.ts
    get colorAdjustmentNode() {
        return [//...this.tempNode,
            'method',
            'colorNode',
            'adjustmentNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorSpaceNode.d.ts
    get colorSpaceNode() {
        return [//...this.tempNode,
            'method',
            'node',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\FrontFacingNode.d.ts
    get frontFacingNode() {
        return [//...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\GaussianBlurNode.d.ts
    get gaussianBlurNode() {
        return [//...this.tempNode,
            'textureNode',
            'sigma',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\NormalMapNode.d.ts
    get normalMapNode() {
        return [//...this.tempNode,
            'node',
            'scaleNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PassNode.d.ts
    get passTextureNode() {
        return [//...this.textureNode,
            'passNode',
            'texture',
        ].distinct()
    },
    get passNode() {
        return [//...this.tempNode,
            'scope',
            'scene',
            'camera',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PosterizeNode.d.ts
    get posterizeNode() {
        return [//...this.node,
            'sourceNode',
            'stepsNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ToneMappingNode.d.ts
    // exposure only
    get toneMappingNode() {
        return [//...this.tempNode,
            'toneMapping',
            'exposureNode',
            'colorNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthNode.d.ts
    get viewportDepthNode() {
        return [//...this.node,
            'scope',
            'valueNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthTextureNode.d.ts
    get viewportDepthTextureNode() {
        return [//...this.viewportTextureNode,
            'uvNode',
            'levelNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportNode.d.ts
    get viewportNode() {
        return [//...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportSharedTextureNode.d.ts
    get viewportSharedTextureNode() {
        return [//...this.viewportTextureNode,
            'uvNode',
            'levelNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportTextureNode.d.ts
    get viewportTextureNode() {
        return [//...this.textureNode,
            'uvNode',
            'levelNode',
            'framebufferTexture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogExp2Node.d.ts
    get fogExp2Node() {
        return [//...this.fogNode,
            'colorNode',
            'densityNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogNode.d.ts
    get fogNode() {
        return [//...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogRangeNode.d.ts
    get fogRangeNode() {
        return [//...this.fogNode,
            'colorNode',
            'nearNode',
            'farNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhongLightingModel.d.ts
    get phongLightingModel() {
        return [//...this.lightingModel,
            'specular',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhysicalLightingModel.d.ts
    get physicalLightingModel() {
        return [//...this.lightingModel,

            'clearcoat',
            'sheen',
            'iridescence',
            'anisotropy',
            'transmission',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\ShadowMaskModel.d.ts
    get shadowMaskModel() {
        return [//...this.lightingModel,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\BRDF_GGX.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\BRDF_Lambert.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\BRDF_Sheen.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\DFGApprox.d.ts
    // Analytical approximation of the DFG LUT, one half of the
    // split-sum approximation used in indirect specular lighting.
    // via 'environmentBRDF' from "Physically Based Shading on Mobile"
    // https://www.unrealengine.com/blog/physically-based-shading-on-mobile
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\D_GGX.d.ts
    // Microfacet Models for Refraction through Rough Surfaces - equation (33)
    // http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
    // alpha is "roughness squared" in Disney’s reparameterization
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\D_GGX_Anisotropic.d.ts
    // https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\F_Schlick.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\V_GGX_SmithCorrelated.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\V_GGX_SmithCorrelated_Anisotropic.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\material\getGeometryRoughness.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\material\getRoughness.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\geometry\RangeNode.d.ts
    get rangeNode() {
        return [//...this.node,
            'min',
            'max',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\gpgpu\ComputeNode.d.ts
    get computeNode() {
        return [//...this.node,
            'computeNode',
            'count',
            'workgroupSize',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AnalyticLightNode.d.ts
    get analyticLightNode() {
        return [//...this.lightingNode,
            'light',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AONode.d.ts
    get aoNode() {
        return [//...this.lightingNode,
            'aoNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\EnvironmentNode.d.ts
    get environmentNode() {
        return [//...this.lightingNode,
            'envNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\HemisphereLightNode.d.ts
    get hemisphereLightNode() {
        return [//...this.analyticLightNode,
            'light',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\IrradianceNode.d.ts
    get irradianceNode() {
        return [//...this.lightingNode,
            'node',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingContextNode.d.ts
    get lightingContextNode() {
        return [//...this.contextNode,

            'node',
            'lightingModel',
            'backdropNode',
            'backdropAlphaNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingNode.d.ts
    get lightingNode() {
        return [//...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightsNode.d.ts
    get lightsNode() {
        return [//...this.node,
            'lightNodes',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\PointLightNode.d.ts
    get pointLightNode() {
        return [//...this.analyticLightNode,
            'light',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\SpotLightNode.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeLoader.d.ts
    nodeLoaderResult: [
    ].distinct(),
    get nodeLoader() {
        return [//...this.loader,
            'manager',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeMaterialLoader.d.ts
    get nodeMaterialLoader() {
        return [//...this.materialLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeObjectLoader.d.ts
    get nodeObjectLoader() {
        return [//...this.objectLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\LineBasicNodeMaterial.d.ts
    get lineBasicNodeMaterialParameters() {
        return { ...this.nodeMaterialParameters, ...this.lineBasicMaterialParameters }
    },
    get lineBasicNodeMaterial() {
        return this.lineBasicNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\Materials.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshBasicNodeMaterial.d.ts
    get meshBasicNodeMaterialParameters() {
        return { ...this.nodeMaterialParameters, ...this.meshBasicMaterialParameters, ...this.meshNormalMaterialParameters }
    },
    get meshBasicNodeMaterial() {
        return this.meshBasicNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshNormalNodeMaterial.d.ts
    get meshNormalNodeMaterial() {
        return this.meshBasicNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhongNodeMaterial.d.ts
    get meshPhongNodeMaterialParameters() {
        return { ...this.nodeMaterialParameters, ...this.meshPhongMaterialParameters }
    },
    get meshPhongNodeMaterial() {
        return this.meshPhongNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhysicalNodeMaterial.d.ts
    get meshPhysicalNodeMaterialParameters() {
        return { ...this.meshStandardNodeMaterialParameters, ...this.meshPhysicalMaterialParameters }
    },
    get meshPhysicalNodeMaterial() {
        return this.meshPhysicalNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshSSSNodeMaterial.d.ts
    get meshSssNodeMaterial() {
        return this.meshPhysicalNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshStandardNodeMaterial.d.ts
    get meshStandardNodeMaterialParameters() {
        return { ...this.nodeMaterialParameters, ...this.meshStandardMaterialParameters }
    },

    get meshStandardNodeMaterial() {
        return this.meshStandardNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\NodeMaterial.d.ts
    get nodeMaterialParameters() {
        return {
            ...this.shaderMaterialParameters,
            ...(['normals',
                'colorSpaced',
                'lightsNode',
                'envNode',
                'aoNode',
                'colorNode',
                'normalNode',
                'opacityNode',
                'backdropNode',
                'backdropAlphaNode',
                'alphaTestNode',
                'positionNode',
                'depthNode',
                'shadowNode',
                'outputNode',
                'fragmentNode',
                'vertexNode',
            ] as const).toObject()
        }
    },
    get nodeMaterial() {
        return this.shaderMaterial
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\PointsNodeMaterial.d.ts
    get pointsNodeMaterialParameters() {
        return { ...this.nodeMaterialParameters, ...this.pointsMaterialParameters }
    },
    get pointsNodeMaterial() {
        return this.pointsNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\ShadowNodeMaterial.d.ts
    get shadowNodeMaterialParameters() {
        return { ...this.nodeMaterialParameters, ...this.shadowMaterialParameters }
    },
    get shadowNodeMaterial() {
        return this.shadowNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\SpriteNodeMaterial.d.ts
    get spriteNodeMaterialParameters() {
        return { ...this.nodeMaterialParameters, ...this.spriteMaterialParameters }
    },

    get spriteNodeMaterial() {
        return this.spriteNodeMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\MaterialXNodes.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\lib\mx_hsv.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\lib\mx_noise.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\lib\mx_transform_color.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\CondNode.d.ts
    get condNode() {
        return [//...this.node,
            'condNode',
            'ifNode',
            'elseNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\HashNode.d.ts
    get hashNode() {
        return [//...this.node,
            'seedNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathNode.d.ts
    get mathNode() {
        return [//...this.tempNode,
            'method',
            'aNode',
            'bNode',
            'cNode',
        ].distinct()
    },
    nodeElements: [
        'all',
        'any',
        'equals',
        'radians',
        'degrees',
        'exp',
        'exp2',
        'log',
        'log2',
        'sqrt',
        'inverseSqrt',
        'floor',
        'ceil',
        'normalize',
        'fract',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'abs',
        'sign',
        'length',
        'lengthSq',
        'negate',
        'oneMinus',
        'dFdx',
        'dFdy',
        'round',
        'reciprocal',
        'trunc',
        'fwidth',
        'atan2',
        'min',
        'max',
        'mod',
        'step',
        'reflect',
        'distance',
        'dot',
        'cross',
        'pow',
        'pow2',
        'pow3',
        'pow4',
        'transformDirection',
        'mix',
        'clamp',
        'refract',
        'smoothstep',
        'faceForward',
        'difference',
        'saturate',
        'cbrt',

        'lightingContext',
        'cond',
        'hash',
        'parabola',
        'gain',
        'pcurve',
        'sinc',
        'compute',
        'rangeFog',
        'fog',
        'densityFog',
        'viewportSharedTexture',
        'viewportTexture',
        'viewportMipTexture',
        'toneMapping',
        'gaussianBlur',
        'normalMap',
        'posterize',
        'add',
        'sub',
        'mul',
        'div',
        'remainder',
        'equal',
        'lessThan',
        'greaterThan',
        'lessThanEqual',
        'greaterThanEqual',
        'and',
        'or',
        'not',
        'xor',
        'bitAnd',
        'bitNot',
        'bitOr',
        'bitXor',
        'shiftLeft',
        'shiftRight',
        'afterImage',
        'anamorphic',
        'burn',
        'dodge',
        'overlay',
        'screen',
        'saturation',
        'vibrance',
        'hue',
        'threshold',
        'linearTosRGB',
        'sRGBToLinear',
        'linearToColorSpace',
        'colorSpaceToLinear',
        'temp',
        'toVar',
        'context',
        'label',
        'varying',
        'bypass',
        'cache',
        'globalCache',
        'call',
        'assign',
        'bicubic',
        'storageElement',
        'triplanarTexture',
        'cubeTexture',
        'texture',
        'rotateUV',
        'remap',
        'remapClamp',
        'rotate',
        'append',
        'color',
        'float',
        'int',
        'uint',
        'bool',
        'vec2',
        'ivec2',
        'uvec2',
        'bvec2',
        'vec3',
        'ivec3',
        'uvec3',
        'bvec3',
        'vec4',
        'ivec4',
        'uvec4',
        'bvec4',
        'mat2',
        'imat2',
        'umat2',
        'bmat2',
        'mat3',
        'imat3',
        'umat3',
        'bmat3',
        'mat4',
        'imat4',
        'umat4',
        'bmat4',
        'string',
        'arrayBuffer',
        'element',
        'convert',
        'checker',
        'discard',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathUtils.d.ts
    // remapping functions
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\OperatorNode.d.ts
    get operatorNode() {
        return [//...this.tempNode,
            'op',
            '...this.params',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\TriNoise3d.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\pmrem\PMREMNode.d.ts
    get pmremNode() {
        return [//...this.tempNode,
            'value',
            'uvNode',
            'levelNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\procedural\CheckerNode.d.ts
    get checkerNode() {
        return [//...this.tempNode,
            'uvNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\shadernode\ShaderNode.d.ts
    /**
     * Temporary type to save signatures of 4 constructors. Each element may be tuple or undefined.
     *
     * We use an object instead of tuple or union as it makes stuff easier, especially in Typescript 4.0.
     */
    construtors: [
        'a',
        'b',
        'c',
        'd',
    ].distinct(),
    shaderNode: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ArrayElementNode.d.ts
    get arrayElementNode() {
        return [//...this.tempNode,
            'node',
            'indexNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ConvertNode.d.ts
    get convertNode() {
        return [//...this.node,
            'node',
            'convertTo',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\DiscardNode.d.ts
    get discardNode() {
        return [//...this.condNode,
            'condNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\EquirectUVNode.d.ts
    get equirectUvNode() {
        return [//...this.tempNode,
            'dirNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\JoinNode.d.ts
    /**
     * This node constructs given type from elements, like vec3(a,b,c)
     */
    get joinNode() {
        return [//...this.tempNode,
            'nodes',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MatcapUVNode.d.ts
    get matcapUvNode() {
        return [//...this.tempNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MaxMipLevelNode.d.ts
    get maxMipLevelNode() {
        return [//...this.uniformNode,
            'textureNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\OscNode.d.ts
    get oscNode() {
        return [//...this.node,
            'method',
            'timeNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ReflectorNode.d.ts
    reflectorNodeParameters: ([
        'target',
        'resolution',
        'generateMipmaps',
        'bounces',
    ] as const).toObject(),
    get reflectorNode() {
        return this.reflectorNodeParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RemapNode.d.ts
    get remapNode() {
        return [//...this.node,
            'node',
            'inLowNode',
            'inHighNode',
            'outLowNode',
            'outHighNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateNode.d.ts
    get rotateNode() {
        return [//...this.tempNode,
            'positionNode',
            'rotationNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateUVNode.d.ts
    get rotateUvVNode() {
        return [//...this.tempNode,
            'uvNode',
            'rotationNode',
            'centerNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SplitNode.d.ts
    /** swizzle node */
    get splitNode() {
        return [//...this.node,
            /**
             * @param node the input node
             * @param components swizzle like string, default = "x"
             */
            'node',
            'components',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SpriteSheetUVNode.d.ts
    get spriteSheetUvNode() {
        return [//...this.node,
            'countNode',
            'uvNode',
            'frameNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\StoargeArrayElementNode.d.ts
    get storageArrayElementNode() {
        return [//...this.arrayElementNode,
            'storageBufferNode',
            'indexNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TimerNode.d.ts
    get timerNode() {
        return [//...this.uniformNode,
            'scope',
            'scale',
            'value',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TriplanarTexturesNode.d.ts
    get triplanarTexturesNode() {
        return [//...this.node,

            'textureXNode',
            'textureYNode',
            'textureZNode',
            'scaleNode',
            'positionNode',
            'normalNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\GroundedSkybox.d.ts
    get groundedSkybox() {
        return [//...this.mesh,
            'map',
            'height',
            'radius',
            'resolution',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Lensflare.d.ts
    lensflareElement: [
        'texture',
        'size',
        'distance',
        'color',
    ].distinct(),
    get lensflare() {
        return [//...this.mesh,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\MarchingCubes.d.ts
    get marchingCubes() {
        return [//...this.mesh,

            'resolution',
            'material',
            'enableUvs',
            'enableColors',
            'maxPolyCount',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\QuadMesh.d.ts
    get quadMesh() {
        return [//...this.mesh,
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Reflector.d.ts
    reflectorOptions: [
        'color',
        'textureWidth',
        'textureHeight',
        'clipBias',
        'shader',
        'multisample',
    ].distinct(),
    get reflector() {
        return [//...this.mesh,
            'geometry',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ReflectorForSSRPass.d.ts
    reflectorShader: [
        'name',
        'defines',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    reflectorForSsrPassOptions: [
        'clipBias',
        'textureWidth',
        'textureHeight',
        'color',
        'useDepthTexture',
        'shader',
    ].distinct(),
    get reflectorForSsrPass() {
        return [//...this.mesh,
            'geometry',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Refractor.d.ts
    refractorOptions: [
        'color',
        'textureWidth',
        'textureHeight',
        'clipBias',
        'shader',
        'multisample',
    ].distinct(),
    get refractor() {
        return [//...this.mesh,
            'geometry',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ShadowMesh.d.ts
    get shadowMesh() {
        return [//...this.mesh,
            'mesh',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Sky.d.ts
    get sky() {
        return [//...this.mesh,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water.d.ts
    waterOptions: [
        'textureWidth',
        'textureHeight',
        'clipBias',
        'alpha',
        'time',
        'waterNormals',
        'sunDirection',
        'sunColor',
        'waterColor',
        'eye',
        'distortionScale',
        'side',
        'fog',
    ].distinct(),
    get water() {
        return [//...this.mesh,
            'geometry',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water2.d.ts
    water2Options: [
        'color',
        'textureWidth',
        'textureHeight',
        'clipBias',
        'flowDirection',
        'flowSpeed',
        'reflectivity',
        'scale',
        'shader',
        'flowMap',
        'normalMap0',
        'normalMap1',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\physics\AmmoPhysics.d.ts
    ammoPhysicsObject: [
        'addMeshm',
        'setMeshPositionm',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\physics\JoltPhysics.d.ts
    joltPhysicsObject: [
        'addScene',
        'addMesh',
        'setMeshPosition',
        'setMeshVelocity',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\physics\RapierPhysics.d.ts
    rapierPhysicsObject: [
        'addScene',
        'addMesh',
        'setMeshPosition',
        'setMeshVelocity',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\AfterimagePass.d.ts
    get afterimagePass() {
        return [//...this.pass,
            'damp',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BloomPass.d.ts
    get bloomPass() {
        return [//...this.pass,
            'strength',
            'kernelSize',
            'sigma',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BokehPass.d.ts
    bokehPassParamters: [
        'focus',
        'aspect',
        'aperture',
        'maxblur',
    ].distinct(),
    get bokehPass() {
        return [//...this.pass,
            'scene',
            'camera',
            'params',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ClearPass.d.ts
    get clearPass() {
        return [//...this.pass,
            'clearColor',
            'clearAlpha',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\CubeTexturePass.d.ts
    get cubeTexturePass() {
        return [//...this.pass,
            'camera',
            'envMap',
            'opacity',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\DotScreenPass.d.ts
    get dotScreenPass() {
        return [//...this.pass,
            'center',
            'angle',
            'scale',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\EffectComposer.d.ts
    effectComposer: [
        'renderer',
        'renderTarget',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\FilmPass.d.ts
    get filmPass() {
        return [//...this.pass,
            'intensity',
            'grayscale',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GlitchPass.d.ts
    get glitchPass() {
        return [//...this.pass,
            'dt_size',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GTAOPass.d.ts
    get gtaoPass() {
        return [//...this.pass,
            'scene',
            'camera',
            'width',
            'height',
            'parameters', //{ depthTexture?: DepthTexture | undefined; normalTexture?: Texture | undefined } | undefined
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\HalftonePass.d.ts
    halftonePassParameters: [
        'shape',
        'radius',
        'rotateR',
        'rotateB',
        'rotateG',
        'scatter',
        'blending',
        'blendingMode',
        'greyscale',
        'disable',
    ].distinct(),
    get halftonePass() {
        return [//...this.pass,
            'width',
            'height',
            'params',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\LUTPass.d.ts
    lutPassParameters: [
        'lut',
        'intensity',
    ].distinct(),
    get lutPass() {
        return [//...this.shaderPass,
            'params',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\MaskPass.d.ts
    get maskPass() {
        return [//...this.pass,
            'scene',
            'camera',
        ].distinct()
    },
    get clearMaskPass() {
        return [//...this.pass,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutlinePass.d.ts
    get outlinePass() {
        return [//...this.pass,
            'resolution',
            'scene',
            'camera',
            'selectedObjects',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutputPass.d.ts
    get outputPass() {
        return [//...this.pass,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\Pass.d.ts
    pass: [
    ].distinct(),
    fullScreenQuad: [
        'material',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPass.d.ts
    get renderPass() {
        return [//...this.pass,

            'scene',
            'camera',
            'overrideMaterial',
            'clearColor',
            'clearAlpha',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPixelatedPass.d.ts
    renderPixelatedPassParameters: [
        'normalEdgeStrength',
        'depthEdgeStrength',
    ].distinct(),
    get renderPixelatedPass() {
        return [//...this.pass,
            'pixelSize',
            'scene',
            'camera',
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderTransitionPass.d.ts
    get renderTransitionPass() {
        return [//...this.pass,
            'sceneA',
            'cameraA',
            'sceneB',
            'cameraB',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SAOPass.d.ts
    saoPassParams: [
        'output',
        'saoBias',
        'saoIntensity',
        'saoScale',
        'saoKernelRadius',
        'saoMinResolution',
        'saoBlur',
        'saoBlurRadius',
        'saoBlurStdDev',
        'saoBlurDepthCutoff',
    ].distinct(),
    get saoPass() {
        return [//...this.pass,
            'scene',
            'camera',
            'resolution',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SavePass.d.ts
    get savePass() {
        return [//...this.pass,
            'renderTarget',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ShaderPass.d.ts
    get shaderPass() {
        return [//...this.pass,
            'shader',
            'textureID',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SMAAPass.d.ts
    get smaaPass() {
        return [//...this.pass,
            'width',
            'height',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAARenderPass.d.ts
    get ssaaRenderPass() {
        return [//...this.pass,
            'scene',
            'camera',
            'clearColor',
            'clearAlpha',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAOPass.d.ts
    get ssaoPass() {
        return [//...this.pass,
            'scene',
            'camera',
            'width',
            'height',
            'kernelSize',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSRPass.d.ts
    ssrPassParams: [
        'renderer',
        'scene',
        'camera',
        'width',
        'height',
        'selects',
        'isPerspectiveCamera',
        'isBouncing',
        'groundReflector',
    ].distinct(),
    get ssrPass() {
        return [//...this.pass,
            'params',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TAARenderPass.d.ts
    get taaRenderPass() {
        return [//...this.ssaaRenderPass,
            'scene',
            'camera',
            'clearColor',
            'clearAlpha',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TexturePass.d.ts
    get texturePass() {
        return [//...this.pass,
            'map',
            'opacity',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\UnrealBloomPass.d.ts
    get unrealBloomPass() {
        return [//...this.pass,
            'resolution',
            'strength',
            'radius',
            'threshold',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\css2DRenderer.d.ts
    get css2dObject() {
        return [//...this.object3d,
            'element',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\css3dRenderer.d.ts
    get css3dObject() {
        return [//...this.object3d,
            'element',
        ].distinct()
    },
    get css3dSprite() {
        return [//...this.css3dObject,
            'element',
        ].distinct()
    },
    css3dParameters: ([
        'element',
    ] as const).toObject(),
    get css3dRenderer() {
        return this.css3dParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\Projector.d.ts
    renderableObject: [
    ].distinct(),
    renderableFace: [
    ].distinct(),

    renderableVertex: [
    ].distinct(),

    renderableLine: [
    ].distinct(),

    renderableSprite: [
    ].distinct(),

    projector: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\svgRenderer.d.ts
    get svgObject() {
        return [//...this.object3d,
            'node',
        ].distinct()
    },
    svgRenderer: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Backend.d.ts
    backendParameters: ([
        'canvas',
    ] as const).toObject(),
    get backend() {
        return this.backendParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Color4.d.ts
    get color4() {
        return [//...this.color,
            'r',
            'g',
            'b',
            'a',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Info.d.ts
    info: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\PostProcessing.d.ts
    postProcessing: [
        'renderer',
        'outputNode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Renderer.d.ts
    rendererParameters: [
        'logarithmicDepthBuffer',
        'alpha',
    ].distinct(),
    /**
     * Generic Renderer interface containing either a WebGl or WebGpu backend.
     */
    renderer: [
        'backend',
        'parameters', //rendererParameters
        'domElement',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\StorageTexture.d.ts
    get storageTexture() {
        return [//...this.texture,
            'width',
            'height',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\extras\PMREMGenerator.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\WebGlBackend.d.ts
    get webGlBackendParameters() {
        return {
            ...this.backendParameters,
            ...(['trackTimestamp',
            ] as const).toObject()
        }
    },
    get webGlBackend() {
        return this.backendParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\SlotNode.d.ts
    slotNodeParameters: ([
        'node',
        'nodeType',
        'source',
        'target',
    ] as const).toObject(),
    get slotNode() {
        return this.slotNodeParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts
    get webGlNodeBuilder() {
        return [//...this.nodeBuilder,
            'object',
            'renderer',
            'shader',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodes.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuBackend.d.ts
    get webGpuBackendParameters() {
        return {
            ...this.backendParameters,
            ...(['alpha',
                'antialias',
                'sampleCount',
                'trackTimestamp',
            ] as const).toObject()
        }
    },
    get webGpuBackend() {
        return this.webGpuBackendParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuRenderer.d.ts
    get webGpuRendererParameters() {
        return {
            ...this.rendererParameters, ...this.webGpuBackendParameters,
            ...(['forceWebGl',] as const).toObject()
        }
    },
    get webGpuRenderer() {
        return this.webGpuRendererParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ACESFilmicToneMappingShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\AfterimageShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BasicShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BleachBypassShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BlendShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BokehShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BokehShader2.d.ts
    bokehShaderUniforms: [
        'textureWidth',
        'textureHeight',
        'focalDepth',
        'focalLength',
        'fstop',
        'tColor',
        'tDepth',
        'maxblur',
        'showFocus',
        'manualdof',
        'vignetting',
        'depthblur',
        'threshold',
        'gain',
        'bias',
        'fringe',
        'znear',
        'zfar',
        'noise',
        'dithering',
        'pentagon',
        'shaderFocus',
        'focusCoords',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BrightnessContrastShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ColorCorrectionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ColorifyShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ConvolutionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\CopyShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DepthLimitedBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DigitalGlitch.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DOFMipMapShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DotScreenShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ExposureShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FilmShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FocusShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FreiChenShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FXAAShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\GammaCorrectionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\GodRaysShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\GTAOShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HalftoneShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HorizontalBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HorizontalTiltShiftShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HueSaturationShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\KaleidoShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\LuminosityHighPassShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\LuminosityShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\MirrorShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\MMDToonShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\NormalMapShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\OutputShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\PoissonDenoiseShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\RGBShiftShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SAOShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SepiaShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SMAAShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SobelOperatorShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SSAOShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SSRShader.d.ts
    /**
     * References:
     * https://lettier.github.io/3d-game-shaders-for-beginners/screen-space-reflection.html
     */
    ssrShader: [
        'name',
        'defines',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    ssrDepthShader: [
        'name',
        'defines',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    ssrBlurShader: [
        'name',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SubsurfaceScatteringShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\TechnicolorShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ToonShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\TriangleBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\UnpackDepthRGBAShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VelocityShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VerticalBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VerticalTiltShiftShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VignetteShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VolumeShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\WaterRefractionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\textures\FlakesTexture.d.ts
    get flakesTexture() {
        return [///...this.hTMLCanvasElement,
            'width',
            'height',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts
    program: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\GlSLDecoder.d.ts
    glslDecoder: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\ShaderToyDecoder.d.ts
    get shaderToyDecoder() {
        return [//...this.glslDecoder,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\Transpiler.d.ts
    transpiler: [
        'decoder',
        'encoder',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\TSLEncoder.d.ts
    tslEncoder: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\BufferGeometryUtils.d.ts
    // https://threejs.org/docs/?q=buffergeome#examples/en/utils/BufferGeometryUtils

    /**
     * Modifies the supplied geometry if it is non-indexed, otherwise creates a new, non-indexed geometry. Returns the
     * geometry with smooth normals everywhere except faces that meet at an angle greater than the crease angle.
     *
     * @param geometry The input geometry.
     * @param creaseAngle The crease angle in radians.
     */
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\CameraUtils.d.ts

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\GeometryCompressionUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\GeometryUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\GpuStatsPanel.d.ts
    gpuStatsPanel: [ // Stats.Panel 
        'context',
        'name',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\LDrawUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\PackedPhongMaterial.d.ts
    /**
     * `PackedPhongMaterial` inherited from THREE.MeshPhongMaterial
     *
     * @param {Object} parameters
     */
    get packedPhongMaterial() {
        return this.meshPhongMaterialParameters
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\SceneUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\ShadowMapViewer.d.ts
    size: [
        'width',
        'height',
    ].distinct(),
    position: [
        'x',
        'y',
    ].distinct(),
    shadowMapViewer: [
        'light',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\SkeletonUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\SortUtils.d.ts
    radixSortOptions: [
        'aux',
        'get',
        'reversed',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\TextureUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\UVsDebug.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\WorkerPool.d.ts
    /**
     * @author Deepkolos / https://github.com/deepkolos
     */
    workerPool: [
        'pool',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\ARButton.d.ts
    get arButtonSessionInit() {
        return [//...this.xrSessionInit,
            'domOverlay',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandModel.d.ts
    get oculusHandModel() {
        return [//...this.object3d,
            'controller',
            'loader',
            'onLoad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandPointerModel.d.ts
    get oculusHandPointerModel() {
        return [//...this.object3d,
            'hand',
            'controller',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\Text2D.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\VRButton.d.ts
    vrButton: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRButton.d.ts
    xrButton: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRControllerModelFactory.d.ts
    get xrControllerModel() {
        return [//...this.object3d,
        ].distinct()
    },
    xrControllerModelFactory: [
        'gltfLoader',
        'onLoad',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XREstimatedLight.d.ts
    sessionLightProbe: [

        'xrLight',
        'renderer',
        'lightProbe',
        'environmentEstimation',
        'estimationStartCallback',
    ].distinct(),
    get xrEstimatedLightEventMap() {
        return [//...this.object3dEventMap,
            /**
             * Fires when the estimated lighting values start being updated.
             */
            'estimationstart',
            /**
             * Fires when the estimated lighting values stop being updated.
             */
            'estimationend',
        ].distinct()
    },
    /**
     * XREstimatedLight uses WebXR's light estimation to create a light probe, a directional light, and (optionally) an
     * environment map that model the user's real-world environment and lighting.
     * As WebXR updates the light and environment estimation, XREstimatedLight automatically updates the light probe,
     * directional light, and environment map.
     *
     * It's important to specify `light-estimation` as an optional or required feature when creating the WebXR session,
     * otherwise the light estimation can't work.
     *
     * See {@link https://developer.mozilla.org/en-US/docs/Web/API/XRLightProbe#browser_compatibility here} for browser
     * compatibility information, as this.is still an experimental feature in WebXR.
     *
     * To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.
     */
    get xrEstimatedLight() {
        return [//...this.group,
            /**
             * @param renderer The renderer used to render the Scene. Mainly used to interact with WebXRManager.
             * @param environmentEstimation If `true`, use WebXR to estimate an environment map.
             */
            'renderer',
            'environmentEstimation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandMeshModel.d.ts
    xrHandMeshModel: [

        'handModel',
        'controller',
        'path',
        'handedness',
        'loader',
        'onLoad',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandModelFactory.d.ts
    get xrHandModel() {
        return [//...this.object3d,
        ].distinct()
    },
    xrHandModelFactory: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandPrimitiveModel.d.ts
    xrHandPrimitiveModelOptions: [
        'primitive',
    ].distinct(),
    xrHandPrimitiveModel: [
        'handModel',
        'controller',
        'path',
        'handedness',
        'options',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRPlanes.d.ts
    get xrPlanes() {
        return [//...this.object3d,
            'renderer',
        ].distinct()
    },
}

declare global {
    interface Window {
        __$$consParams$$__: typeof p
    }
}

if (!window.__$$consParams$$__)
    window.__$$consParams$$__ = p

export const consParams = window.__$$consParams$$__