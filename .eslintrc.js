module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
      'node': true
    },
    'extends': ['eslint:recommended', 'plugin:jest/recommended'],
    'plugins': ['jest'],
    'overrides': [
        {
            'files': ['**/*/*.test.js'],
            'rules': { 'jest/prefer-expect-assertions': 'off' }
          }
    ],
    'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
    },
    'rules': {
        "jest/expect-expect": "warn",
    }
  }