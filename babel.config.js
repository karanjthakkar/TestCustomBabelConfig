module.exports = (api) => {
  api.cache(true);
  return {
    comments: false,
    compact: true,
    overrides: [{
      plugins: [
        '@babel/plugin-proposal-optional-catch-binding',
        // the flow strip types plugin must go BEFORE class properties!
        // there'll be a test case that fails if you don't.
        '@babel/plugin-transform-flow-strip-types',
        ['@babel/plugin-proposal-class-properties', {
          loose: true,
        }],
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-export-default-from',
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-transform-unicode-regex',
        '@babel/plugin-proposal-export-default-from',
        ['@babel/plugin-transform-modules-commonjs', {
          strict: false,
          strictMode: false, // prevent "use strict" injections
          lazy: false,
          allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
        }],
        '@babel/plugin-proposal-object-rest-spread',
        'metro-react-native-babel-preset/src/transforms/transform-symbol-member',
        '@babel/plugin-transform-react-display-name',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-transform-react-jsx-source',
        ['@babel/plugin-transform-runtime', {
          helpers: true,
          regenerator: true,
        }],

        'codegen',
        'lodash',
      ],
    }],
  };
};
