module.exports = {
    rules: {
        'import/extensions': ['error', 'never'],

        'import/no-dynamic-require': 'off',

        'import/no-extraneous-dependencies': 'error',

        'import/no-named-export': 'off',

        'import/no-relative-parent-imports': 'warn',

        'import/no-unresolved': [
            'error',
            {
                commonjs: true,
                caseSensitive: false
            }
        ],

        'import/no-unused-modules': 'off',

        'import/prefer-default-export': 'warn'
    },
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.json', '.vue'] }
        }
    }
};
