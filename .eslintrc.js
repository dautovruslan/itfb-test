module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
                moduleDirectory: ['src', 'node_modules'],
            },
        },
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
            2,
            {
                useTabs: false,
                tabWidth: 4,
                singleQuote: true,
                printWidth: 120,
                trailingComma: 'all',
                proseWrap: 'never',
                semi: false,
            },
        ],
        curly: 1,
        'no-console': [1, { allow: ['warn', 'error'] }],
        'no-unused-vars': [2, { ignoreRestSiblings: true }],
        'react/jsx-props-no-spreading': 0,
        'no-nested-ternary': 0,
        'react/prop-types': 0,
        'react/no-children-prop': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
        'react/function-component-definition': [
            2,
            {
                namedComponents: ['function-declaration', 'arrow-function'],
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/camelcase': 0,
            },
        },
        {
            files: ['**/*.ts?(x)'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:@typescript-eslint/eslint-recommended',
            ],
            rules: {
                '@typescript-eslint/no-extra-semi': 0,
                '@typescript-eslint/no-use-before-define': [2, { functions: false }],
                'no-unused-vars': 0,
                '@typescript-eslint/explicit-module-boundary-types': 0,
            },
        },
    ],
}
