import eslint from '@eslint/js';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    ignores: [
        "**/dist/**/*",
        "**/node_modules/**/*",
        "**/coverage/**/*",
        "**/*config*"
    ],
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        sonarjs.configs.recommended,
        react.configs.recommended,
        reactHooks.configs.recommended
    ],
    languageOptions: {
        parser: tsparser
    },
    plugins: {
        'react': react,
        'react-hooks': reactHooks,
        'sonarjs': sonarjs,
        '@typescript-eslint': tseslint.plugin
    },
    rules: {
        "@typescript-eslint/no-unsafe-function-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "no-return-await": "error",
        "semi": ["error", "always"],
        "eol-last": ["error", "always"],
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    }
});