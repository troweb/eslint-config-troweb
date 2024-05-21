/* eslint-disable sonarjs/no-duplicate-string */

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  plugins: ['prefer-arrow', 'unicorn', 'import', 'jsdoc', 'sonarjs', 'mui-path-imports'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended-legacy',
  ],
  rules: {
    // sonarjs rules
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/prefer-immediate-return': 'off',

    // enabled eslint rules
    'unicorn/explicit-length-check': 'error',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'no-useless-return': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'use-isnan': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      { singleReturnOnly: true, classPropertiesAllowed: true },
    ],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-shadow': 'off',
    'no-new-func': 'error',
    'mui-path-imports/mui-path-imports': 'error',
    'no-restricted-imports': ['error', '@mui/material'],
    'spaced-comment': 'error',

    // disabled eslint rules
    'arrow-body-style': 'off', // TODO: this may be improved
    'arrow-parens': ['off', 'as-needed'],
    complexity: 'off',
    'eol-last': 'off',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'one-var': 'off',
    'quote-props': 'off',
    'space-before-function-paren': 'off',
    'valid-typeof': 'off',
    camelcase: ['error', { properties: 'never', allow: ['^UNSAFE_', '^unstable_'] }],
    eqeqeq: ['error', 'smart'],
    'prefer-arrow-callback': 'error',
    'no-param-reassign': 'error',

    // import rules
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': [
      'error',
      { ignore: ['\\$.*$'] }, // all our aliases start with a $ sign
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '$*/**',
            group: 'internal',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-webpack-loader-syntax': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': ['error', { considerQueryString: true }],

    // JSDOC rules
    'jsdoc/require-returns': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',

    // Unsupported TSLint Rules
    // TODO: please refer to https://github.com/typescript-eslint/typescript-eslint/blob/90b36ddac2f6de006fd59f2a9234df1eb2d1606e/packages/eslint-plugin/ROADMAP.md
    // 'object-shorthand-properties-first'
    // 'no-reference-import'
    // 'no-boolean-literal-compare'
    // 'function-name'
  },
  overrides: [
    // typescript rules
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:import/typescript'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        EXPERIMENTAL_useProjectService: {
          maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 20,
        },
        // project: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/typedef': [
          'error',
          {
            arrowParameter: false,
            propertyDeclaration: false,
            memberVariableDeclaration: false,
          },
        ],

        'no-restricted-imports': 'off', // should be disabled per typescript-eslint recommendation
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            paths: [
              { name: '@mui/material' },
              {
                name: '@apollo/client',
                importNames: ['gql'],
                message: 'import gql tag from gql-tag package',
              },
              {
                name: 'remix-validated-form',
                importNames: [
                  'useField',
                  'useControlField',
                  'useFormContext',
                  'useIsSubmitting',
                  'useIsValid',
                ],
                message: 'import remix-validated-form hooks from $remix-validated-form',
              },
            ],
          },
        ],

        // TODO: this rule is a pain as we actually need to "infer" the return type 50% of the times
        // '@typescript-eslint/explicit-function-return-type': [
        //   'warn',
        //   {
        //     allowedNames: ['loader', 'action'],
        //     allowExpressions: true,
        //     allowTypedFunctionExpressions: true,
        //   },
        // ],

        // disabled typescript specific rules
        // '@typescript-eslint/naming-convention': 'warn',
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-declare': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
      },
    },
    // typescript react files
    {
      files: ['*.tsx'],
      extends: ['plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
      plugins: ['react-hooks'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // react propTypes are not needed in a TypeScript only environment
        'react/prop-types': 'off',

        'prefer-arrow-callback': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsdoc/require-returns': 0,
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              'JSX.Element': {
                message: 'use React.ReactNode instead',
                fixWith: 'React.ReactNode',
              },
              FunctionComponent: {
                message: 'use React.FC instead',
                fixWith: 'FC',
              },
            },
          },
        ],
      },
    },
    // storybook files
    {
      files: ['*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off', // it gets buggy so fast in CSF story files
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        // allow triple slash in decleration files
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
      },
    },
    // test files
    {
      files: ['*.test.ts'],
      rules: {
        'max-lines': 'off',
        'import/no-default-export': 'off',
        'no-console': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
