import eslint from '@eslint/js';
import tsparser from '@typescript-eslint/parser';
import sonarjs from 'eslint-plugin-sonarjs';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    ignores: [
        "**/dist/**/*",
        "**/node_modules/**/*",
        "**/coverage/**/*",
        "**/templates/**/*",
        "**/test/**/fixtures/**/*",
        "*config*"
    ],
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        sonarjs.configs.recommended,
    ],
    languageOptions: {
        parser: tsparser
    },
    plugins: {},
    rules: {
        "@typescript-eslint/no-unsafe-function-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "no-return-await": "error",
        "semi": ["error", "always"],
        "eol-last": ["error", "always"],
        "brace-style": ["error", "allman", { "allowSingleLine": true }],

        "sonarjs/assertions-in-tests": "off",
        // "sonarjs/slow-regex": "off",
        // "sonarjs/duplicates-in-character-class": "off"
    }
});