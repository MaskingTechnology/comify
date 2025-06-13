
import eslint from '@eslint/js';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        ignores: [
            "**/dist/**/*",
            "**/node_modules/**/*",
            "**/coverage/**/*",
            "**/*config*"
        ]
    },
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            'react': react,
            'react-hooks': reactHooks,
            'sonarjs': sonarjs,
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
            ...sonarjs.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/no-unsafe-function-type": "off",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/consistent-type-imports": "error",
            "semi": ["error", "always"],
            "eol-last": ["error", "always"],
            "brace-style": ["error", "allman", { "allowSingleLine": true }],
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "sonarjs/assertions-in-tests": "off",
            "no-console": "error",

            "no-undef": "off", // typescript handles this for us
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    }
);