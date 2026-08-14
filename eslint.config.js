import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    // Couvre aussi .ts/.tsx : c'est tout le code source de ce projet.
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
      '@typescript-eslint': tsPlugin,
    },
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^',
          args: 'after-used',
          argsIgnorePattern: '^',
        },
      ],
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'react/jsx-key': 'error',
      'react/react-in-jsx-scope': 'off',
      // TypeScript type-checks props ; la règle React équivalente est redondante.
      'react/prop-types': 'off',
    },
  },
  {
    // react-three-fiber : ces composants passent des props Three.js (position,
    // rotation, intensity...) sur des éléments JSX intrinsèques que le plugin
    // React ne connaît pas, et pilotent l'AnimationMixer de Three.js de façon
    // impérative (mutation volontaire des actions renvoyées par useAnimations).
    // Ce sont de faux positifs pour ces deux règles, pas des bugs.
    files: ['src/components/Wyvern.tsx', 'src/components/HeroScene3D.tsx'],
    rules: {
      'react/no-unknown-property': 'off',
      'react-hooks/immutability': 'off',
    },
  },
]);
