import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import path from 'path';
import ViteComponents, {VantResolver} from 'vite-plugin-components';
import {viteMockServe} from 'vite-plugin-mock';

export default defineConfig(({command}) => ({
    plugins: [
        vue(),
        viteMockServe({mockPath: 'mock', localEnabled: command === 'serve'}),
        ViteComponents({
            customComponentResolvers: [VantResolver()],
        }),
    ],
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
}));
