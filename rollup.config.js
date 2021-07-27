import resolve from '@rollup/plugin-node-resolve'

export default {
    input: 'src/mod.js',
    plugins: [
        resolve()
    ],
    output: [
        {
            file: 'dist/mod.min.js',
            format: 'es'
        }
    ]
}