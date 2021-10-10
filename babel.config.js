module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@api': './src/api',
          '@assets': './src/assets',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@animation': './src/common/animation',
          '@components': './src/common/components',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
