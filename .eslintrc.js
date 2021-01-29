module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        jquery: true,
    },

    globals: {
        Ext: true,
    },

    extends: ['eslint:recommended', 'airbnb'],
    plugins: ['extjs', 'html', 'flowtype'],
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'comma-dangle': 0,
        'func-names': ['error', 'never'],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', 170],
        'no-mixed-operators': 0,
        'no-shadow-restricted-names': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
        'no-var': 1,
        'object-shorthand': 0,
        'operator-linebreak': 0,
        'prefer-arrow-callback': 1,
        'prefer-const': 1,
        'prefer-rest-params': 0,
        'prefer-template': 0,
        'space-before-function-paren': 0,
        'spaced-comment': 0,
        'vars-on-top': 0,
        indent: ['error', 4],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
    },

    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
        react: {
            version: '999.999.999',
        },
    },
};
