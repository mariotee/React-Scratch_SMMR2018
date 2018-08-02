module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  rules: {
    'no-console': 'off',
    'max-len': ['warn', {
      code: 100,
      ignoreComments: true,
      ignoreUrls: true,
    }],
    'wrap-regex': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'brace-style': ['error', '1tbs', { 
      allowSingleLine: true,
    }],
    'no-multi-spaces': 'error',
    'quotes': ['error', 'single', { 
      avoidEscape: true, 
      allowTemplateLiterals: true 
    }],
    'semi': ['warn','always'],
    'space-before-function-paren': ['warn','never'],
    'space-in-parens': ['warn','never'],
    'space-infix-ops': 'warn',
    'arrow-parens': ['warn', 'always'],
    'no-lonely-if': ['warn'],
    'operator-linebreak': ['warn', 'before', {
      overrides: {
        '=': 'after',
      },
    }],
    'block-spacing': ['warn','always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'multiline-comment-style': ['warn','starred-block'],
    'no-floating-decimal': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'lines-between-class-members': ['warn','always'],
    'no-multiple-empty-lines': ['warn', { 
      max: 1 
    }],
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'array-bracket-newline': ['warn', { 
      multiline: true 
    }],
    'array-element-newline': ['warn',{
      multiline: true,
      minItems: 5,
    }],
    'object-curly-spacing': ['warn','always'],
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ObjectPattern: {
        minProperties: 5,
      },
      ImportDeclaration: {
        multiline: true,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 5,
      },
    }],
  },
  env: {
    jest: true,
    node: true,
    browser: true
  }
};
