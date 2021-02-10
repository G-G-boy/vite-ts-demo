// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    alias: {
        '@components': path.resolve(__dirname, 'src/components'),
    },
});
