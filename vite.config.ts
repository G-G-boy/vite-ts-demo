import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig(() => ({
    plugins: [
        vue(),
        Components({
            dirs: ['src/components'],
            dts: true,
            resolvers: [VantResolver()],
        }),
        AutoImport({
            include: [
                /\.vue\??/, // .vue
            ],
            imports: ['vue', 'vue-router'],
        }),
    ],
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
}));
