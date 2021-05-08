const path = require('path')

module.exports = {
  extends: ['prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        project: path.join(__dirname, './tsconfig.json'),
      },
    },
  },
  overrides: [
    {
      files: ['*.tsx'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      rules: {
        'import/default': 'off',
      },
    },
  ],
}
