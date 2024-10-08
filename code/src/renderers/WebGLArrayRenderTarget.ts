import { Node } from '../../three-types'
import { WebGLArrayRenderTarget } from 'three/src/renderers/WebGLArrayRenderTarget.js'
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js'
export { WebGLArrayRenderTarget } from 'three/src/renderers/WebGLArrayRenderTarget.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './WebGLRenderTarget'

declare module '../../lib/3/three'
{
    interface Three {
        WebGLArrayRenderTarget: typeof WebGLArrayRenderTarget
    }
}

Three.WebGLArrayRenderTarget = WebGLArrayRenderTarget

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglArrayRenderTarget: WebGLArrayRenderTargetProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        webglArrayRenderTarget: typeof webglArrayRenderTarget
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        webglArrayRenderTarget: typeof _webglArrayRenderTarget
    }
}


/**
 * This type of render target represents an array of textures.
 */

const webglArrayRenderTarget = ([
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
] as const).distinct()
consParams.webglArrayRenderTarget = webglArrayRenderTarget


/**
 * This type of render target represents an array of textures.
 */

const _webglArrayRenderTarget = ([...objProps.webglRenderTarget,
    /**
     * Creates a new WebGlArrayRenderTarget.
     *
     * @param width the width of the render target, in pixels. Default is `1`.
     * @param height the height of the render target, in pixels. Default is `1`.
     * @param depth the depth/layer count of the render target. Default is `1`.
     * @param options optional object that holds texture parameters for an auto-generated target texture and
     * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
     */
    'textures',
    /**
     * The texture property is overwritten with an instance of {@link DataArrayTexture}.
     */
    'texture',
] as const).distinct()
objProps.webglArrayRenderTarget = _webglArrayRenderTarget

export type WebGLArrayRenderTargetProps = Node<WebGLArrayRenderTarget, typeof WebGLArrayRenderTarget, { width?: number; height?: number; depth?: number; options?: RenderTargetOptions; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        webglArrayRenderTarget: { width?: number; height?: number; depth?: number; options?: RenderTargetOptions; }
    }
}

defaults.webglArrayRenderTarget = { width: 1, height: 1, depth: 1 }