import { defineConfig } from 'vite'
import path from 'path'
// import dts from 'vite-plugin-dts'

const config = defineConfig({
    build: {
        minify: false,
        lib: {
            entry: ["./src/index.tsx"],
            name: "woby-three",
            formats: [/* 'cjs',  */'es'/* , 'umd' */],
            fileName: (format: string, entryName: string) => `${entryName}.${format}.js`
        },
        sourcemap: true,
        rollupOptions: {
            external: ['woby', 'oby', "woby/jsx-runtime", /^three/,],
            output: {
                globals: {
                    'woby': 'woby',
                    'oby': 'oby',
                    'three': "three",
                }
            }
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
    plugins: [
        // dts({ entryRoot: './src', outputDir: './dist/types', exclude: './nodes_modules' })
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            // 'woby/jsx-dev-runtime': process.argv.includes('dev') ? path.resolve('../woby/src/jsx/runtime') : 'woby/jsx-runtime',
            // 'woby/jsx-runtime': process.argv.includes('dev') ? path.resolve('../woby/src/jsx/runtime') : 'woby/jsx-runtime',
            // 'woby': process.argv.includes('dev') ? path.resolve('../woby/src') : 'woby'
        },
    },
})



export default config
