module.exports = {
    plugins: [
        // eslint-disable-next-line import/no-extraneous-dependencies,global-require
        require('autoprefixer'),
        // eslint-disable-next-line global-require,import/no-extraneous-dependencies
        require('postcss-px-to-viewport')({
            viewportWidth: 375,
        }),
    ],
};
