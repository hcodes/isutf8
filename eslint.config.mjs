import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '.*',
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.mjs',
      'benchmark/**ß',
      'coverage/**'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}']
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];