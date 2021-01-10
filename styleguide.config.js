const path = require('path')

module.exports = {
  ignore: [
    '**/App.js',
    '**/*.test.js',
    '**/GlobalStyle.js',
    '**/OverlayMenu.js',
    '**/OverlayNavigation.js',
    '**/PageOverview.js',
    '**/PageShop.js',
    '**/Scanner.js',
    '**/PageScanner.js',
    '**/Page*.js',
  ],
  defaultExample: true,
  exampleMode: 'collapse',
  usageMode: 'collapse',
  components: [
    'src/00.SharedComponents/**/**/[A-Z]*.js',
    'src/01.Overview/**/**/[A-Z]*.js',
    'src/02.Shop/**/**/[A-Z]*.js',
    'src/03.Scanner/**/**/[A-Z]*.js',
    'src/04.Feedback/**/**/[A-Z]*.js',
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
