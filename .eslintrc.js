module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:vue/base',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'airbnb-base',
        'prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                // 指定 eslint-plugin-import 解析的后缀名
                extensions: ['.ts', '.js', '.json', '.vue'],
            },
            typescript: {
                // 配置 eslint-import-resolver-typescript 读取 tsconfig.json 的路径
                // directory: [resolve('./tsconfig.json')],
            },
        },
    },
    rules: {
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-console': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
