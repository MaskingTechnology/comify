
import eslint from '@eslint/js';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        ignores: [
            "**/dist/**/*",
            "**/node_modules/**/*",
            "**/coverage/**/*",
            "**/*config*",
            "docker"
        ]
    },
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            'react': react,
            'react-hooks': reactHooks,
            'import': importPlugin
        },
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/no-unsafe-function-type": "off",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/unified-signatures": "off",

            "semi": ["error", "always"],
            "eol-last": ["error", "always"],
            "brace-style": ["error", "allman", { "allowSingleLine": true }],
            "no-console": "error",

            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/display-name": "off",

            "import/no-duplicates": ["error", { "prefer-inline": true, "considerQueryString": true }],
            "import/consistent-type-specifier-style": ["error", "prefer-inline"],
            "import/prefer-default-export": "off",
            "import/enforce-node-protocol-usage": ["error", "always"],
            "import/newline-after-import": ["error", { count: 1 }],
            'import/order': [
                'error',
                {
                    'groups': [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object'
                    ],
                    'pathGroups': [
                        {
                            pattern: "^/**",
                            group: "internal",
                            position: "after"
                        },
                        {
                            pattern: "~/**",
                            group: "parent",
                            position: "before"
                        }
                    ],
                    'newlines-between': 'always',
                    'alphabetize': { order: 'asc', caseInsensitive: true },
                },
            ],
            "no-undef": "off", // typescript handles this for us
        },
        settings: {
            react: {
                version: 'detect'
            },
            "import/internal-regex": "^@comify/"
        }
    }
);