module.exports = {
    extends: 'vazco',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module'
    },
    rules: {
      'linebreak-style': 0,
      'react/react-in-jsx-scope': 0,
      'no-void': 0,
      'react/prop-types': 0,
      'eslint-comments/require-description': 0,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          semi: true
        },
        {
          trailingComma: 'none'
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'import/order': [
        'error',
        {
          groups: [
            'external',
            'builtin',
            'internal',
            'sibling',
            'parent',
            'index'
          ],
          pathGroups: [
            {
              pattern: 'src/**/*',
              group: 'internal'
            },
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['internal'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'comma-dangle': 'off',
      semi: 1
    },
    ignorePatterns: ['.eslintrc.js']
  };
  