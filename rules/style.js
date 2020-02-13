module.exports = {
    rules: {
        'array-bracket-newline': 'off',

        'array-element-newline': 'off',

        'brace-style': ['error', 'stroustrup'],

        // require camel case names
        camelcase: [
            'warn',
            {
                properties: 'never',
                ignoreDestructuring: true
            }
        ],

        // Stop dangling commas
        // http://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'never'],

        'dot-location': ['error', 'property'],

        'global-require': 'off',

        'function-call-argument-newline': 'off',

        // enforces spacing between keys and values in object literal properties
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'minimum'
            }
        ],

        'linebreak-style': ['error', 'unix'],

        'lines-around-comments': 'off',

        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 'first',
                MemberExpression: 'off',
                // CallExpression: {
                // parameters: null,
                // },
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                }
            }
        ],

        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        'max-len': [
            'error',
            {
                code: 200,
                tabWidth: 4,
                comments: 80,
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],

        'max-lines-per-function': 'off',

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // http://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 4
            }
        ],

        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': [
            'error',
            {
                max: 4
            }
        ],

        'no-tabs': 'error',

        // Allow use of unary operators, ++ and --
        // http://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'off',

        'object-curly-spacing': ['error', 'always'],

        // allow single or multiple var statements per function
        'one-var': 'off',

        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': ['error', 'before'],

        'padding-line-between-statements': 'off',

        'prefer-object-spread': 'error',

        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],

        // require or disallow space before function opening parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],

        'semi-style': ['error', 'last'],

        // require or disallow a space immediately following
        // the // or /* in a comment
        // http://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '*']
                },
                block: {
                    exceptions: ['-', '*'],
                    balanced: false
                }
            }
        ],

        'switch-colon-spacing': ['error', { after: true, before: false }],

        yoda: [
            'error',
            'never',
            {
                exceptRange: true
            }
        ]
    }
};
