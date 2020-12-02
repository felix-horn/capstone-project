const path = require('path')

module.exports = {
  ignore: ['**/App.js', '**/*.test.js', '**/GlobalStyle.js'],
  defaultExample: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: [
    'src/02.ShopPage/01.UI-Elements/**/[A-Z]*.js',
    'src/02.ShopPage/02.Components/**/[A-Z]*.js',
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
