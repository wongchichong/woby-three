// / <reference path="../jsx-runtime" />
/** @jsxImportSource ../jsx-runtime */

import { $$, setRef, getMeta, isObservable, useEffect, type JSX, SYMBOL_UNTRACKED_UNWRAPPED, untrack } from "woby"
import { params, paramTypes } from './params. xts'
import { ConstructorParam } from "./ConstructorParam"
import { isFunction, isPromise, toUpper } from "./utils"
import { Three } from "../three"
import "../orbitControls"
import "../gltf"
import "../Text"

const fixReactiveProps = (props: any, component: JSX.Element) => {
    for (const key in props) {
        if (key.startsWith("on")) {
            //event listeners
            component[key] = props[key]
            continue
        }

        if (key == "ref") {
            if (isObservable(component))
                useEffect(() => {
                    setRef($$(component), props.ref)
                })
            else
                // used to assign ref
                setRef(component, props.ref)

            continue
        }

        try {
            useEffect(() => {
                if (!$$(component)) return

                if (Array.isArray($$(props[key]) || typeof $$(props[key]) === "object"))
                    try {
                        if (typeof $$(component)[key]?.set === 'function')
                            $$(component)[key]?.set(...$$(props[key]))
                    }
                    catch (ex) {
                        console.error(ex, component, key, 'set', props)
                    }
                else
                    try {
                        $$(component)[key]?.set($$(props[key]))
                    }
                    catch {
                        $$(component)[key] = ($$(props[key]))

                    }
            })
        }

        catch (ex) {
            console.error(ex)
        }
    }
}

export const createElement = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements & { children?: JSX.Child[], ref: JSX.Refs<JSX.IntrinsicElements[K]> }>
    (component: K, props: P & { args: [] }, key?: string) => {
    const wrapElement = <T extends Function>(element: T): T => {
        element[SYMBOL_UNTRACKED_UNWRAPPED] = true
        return element
    }

    if (isFunction(component)) {
        return wrapElement(() => {

            return untrack(() => {
                return component.call(component, props as P)
            })
        })
    }

    //get children from props
    const meta = [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))

    if (Object.values(props).some(k => isPromise(k))) {
        // console.log("promise", component)
        return new Promise((resolve, reject) => {
            (async () => {
                const ps = { ...props }

                const all = Object.values(ps).filter(k => isPromise($$(k))).map((k) => $$(k) as Promise<any>)
                await Promise.all(all)

                const key = Object.keys(ps)
                for (let i = 0; i < key.length; i++) {
                    const k = key[i]
                    if (isPromise($$(ps[k]))) {
                        const properties = Object.values(ps[k])
                        const keys = Object.keys(ps[k])

                        //iterate over all properties inside an object 
                        for (let j = 0; j < properties.length; j++) {
                            ps[k][keys[j]] = await $$(properties[j])
                        }
                    }
                }

                const p = Object.values(ConstructorParam(params[component as any], paramTypes[component as any], meta, ps, component))
                const r = new Three[toUpper(component as any)](...p)

                //set readonly variables to component
                fixReactiveProps(props, r)

                const { children, args, ...remainingProps } = ps
                    ; (params[component as any] as string[]).map(paramName => delete remainingProps[paramName])
                Object.keys(remainingProps).forEach((k) => {
                    if (k.startsWith("on") || k == "dispose") {
                        r[k] = remainingProps[k]
                    }
                })

                resolve(r)
            })()

        })
    }

    else {
        return wrapElement(() => {
            const p = Object.values(ConstructorParam(params[component as any], paramTypes[component as any], meta, props, component))
            const r = new Three[toUpper(component as any)](...p)

            //set readonly variables to component
            fixReactiveProps(props, r)

            const excludedProps = ["position", "scale", "color", "rotation"]
            const { children, args, ...remainingProps } = props
                ; (params[component as any] as string[]).map(paramName => delete remainingProps[paramName])
            Object.keys(remainingProps).forEach((k) => {
                if (excludedProps.includes(k)) {
                }
                else
                    r[k] = remainingProps[k]

                if (k.includes("shadow-camera")) {
                    const cameraVar = k.split("-")
                    if (r.castShadow)
                        r.shadow.camera[cameraVar[2]] = remainingProps[k]
                }
            })

            untrack(r)

            return r
        })
    }
}
