import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'esm',
                file: 'dist/mdi-js-to-icon.mjs'
            },
            {
                format: 'cjs',
                file: 'dist/mdi-js-to-icon.js'
            }
        ],
        plugins: [
            vue({ template: { optimizeSSR: true } }), peerDepsExternal(), scss()
        ]
    }

]