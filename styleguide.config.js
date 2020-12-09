const path = require('path')

module.exports = {
  ignore: [
    '**/App.js',
    '**/*.test.js',
    '**/GlobalStyle.js',
    '**/MenuWrapped.js',
  ],
  defaultExample: true,
  exampleMode: 'collapse',
  usageMode: 'collapse',
  components: [
    'src/01.OverviewPage/01.UI-Elements/**/[A-Z]*.js',
    'src/01.OverviewPage/02.Components/**/[A-Z]*.js',
    'src/02.ShopPage/01.UI-Elements/**/[A-Z]*.js',
    'src/02.ShopPage/02.Components/**/[A-Z]*.js',
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
