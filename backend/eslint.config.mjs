import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config({
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    eslintConfigPrettier,
  ],
  languageOptions: {
    parserOptions: {
      projectService: true, // this is enables s
      tsconfigRootDir: import.meta.dirname,
    },
  },
  files: ['**/*.ts'],
});
