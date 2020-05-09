module.exports = {
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
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always'],
        'no-var': 1,
        'prefer-const': 1,
        'vars-on-top': 0,
        'space-before-function-paren': 0,
        'object-shorthand': 0,
        'prefer-template': 0,
        'spaced-comment': 0,
        'prefer-rest-params': 0,
        'prefer-arrow-callback': 1,
        'no-mixed-operators': 0,
        'no-underscore-dangle': 0,
        'no-shadow-restricted-names': 0,
        'max-len': ['error', 170],
        quotes: ['error', 'single', { avoidEscape: true }],
        'func-names': ['error', 'never'],
        'comma-dangle': 0,
        'operator-linebreak': 0,
        'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
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
