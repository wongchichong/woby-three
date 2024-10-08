import { Node } from '../../three-types'
import { RenderTarget, RenderTargetOptions } from 'three/src/core/RenderTarget.js'
export { RenderTarget } from 'three/src/core/RenderTarget.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        RenderTarget: typeof RenderTarget
    }
}

Three.RenderTarget = RenderTarget

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderTarget: RenderTargetProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        renderTarget: typeof renderTarget
        renderTargetOptions: typeof renderTargetOptions
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        renderTarget: typeof _renderTarget
        renderTargetOptions: typeof _renderTargetOptions
    }
}



const renderTargetOptions = ([
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
] as const).distinct()
consParams.renderTargetOptions = renderTargetOptions

const renderTarget = ([
] as const).distinct()
consParams.renderTarget = renderTarget



const _renderTargetOptions = ([
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'generateMipmaps', // true
    'format', // RGBAFormat
    'type', // UnsignedByteType
    'anisotropy', // 1
    'colorSpace',
    'internalFormat',
    'depthBuffer', // true
    'stencilBuffer', // false
    'resolveDepthBuffer', // true
    'resolveStencilBuffer', // true
    'depthTexture',
    /**
     * Defines the count of MSAA samples. Can only be used with WebGl 2. Default is **0**.
     * @default 0
     */
    'samples',
    'count',
] as const).distinct()
objProps.renderTargetOptions = _renderTargetOptions


const _renderTarget = ([
    'width',
    'height',
    'depth',
    'scissor',
    /**
     * @default false
     */
    'scissorTest',
    'viewport',
    'textures',
    /**
     * @default true
     */
    'depthBuffer',
    /**
     * @default false
     */
    'stencilBuffer',
    /**
     * Defines whether the depth buffer should be resolved when rendering into a multisampled render target.
     * @default true
     */
    'resolveDepthBuffer',
    /**
     * Defines whether the stencil buffer should be resolved when rendering into a multisampled render target.
     * This property has no effect when {@link .resolveDepthBuffer} is set to `false`.
     * @default true
     */
    'resolveStencilBuffer',
    /**
     * @default null
     */
    'depthTexture',
    /**
     * Defines the count of MSAA samples. Can only be used with WebGl 2. Default is **0**.
     * @default 0
     */
    'samples',

    'texture',
] as const).distinct()
objProps.renderTarget = _renderTarget

export type RenderTargetProps = Node<RenderTarget, typeof RenderTarget, { width?: number; height?: number; options?: RenderTargetOptions; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        renderTarget: Partial<{ width?: number; height?: number; options?: RenderTargetOptions; }>
    }
}

defaults.renderTarget = {}

