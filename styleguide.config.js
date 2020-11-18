const path = require('path')

module.exports = {
  ignore: ['**/App.js', '**/*.test.js', '**/GlobalStyle.js'],
  defaultExample: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: 'src/01.UI-Elements/**/[A-Z]*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
