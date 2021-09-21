import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import path from 'path';
import ViteComponents, {VantResolver} from 'vite-plugin-components';

export default defineConfig(() => ({
    plugins: [
        vue(),
        ViteComponents({
            customComponentResolvers: [VantResolver()],
        }),
    ],
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
}));
