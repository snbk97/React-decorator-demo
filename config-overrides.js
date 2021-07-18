const {
    override,
    addLessLoader,
    // disableChunk,
    // addBabelPlugins,
    // removeModuleScopePlugin,
    // addBabelPresets
    addDecoratorsLegacy,

  } = require("customize-cra");
  
  module.exports = override(
    addDecoratorsLegacy(),
    addLessLoader({
        javascriptEnabled: true,
        importLoaders: true,
        modifyVars: {}
      }),
  )