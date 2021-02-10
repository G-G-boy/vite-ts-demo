import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import path from 'path';

import {viteMockServe} from 'vite-plugin-mock';

export default defineConfig(({command}) => ({
    plugins: [vue(), viteMockServe({mockPath: 'mock', localEnabled: command === 'serve'})],
    alias: {
        '@components': path.resolve(__dirname, 'src/components'),
    },
}));
