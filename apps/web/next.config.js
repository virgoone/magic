const withTM = require('next-transpile-modules')(['@lark/monaco-editor'])

module.exports = withTM({
  reactStrictMode: true,
})
