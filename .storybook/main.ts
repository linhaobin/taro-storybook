const webpack = require('webpack');
const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-scss',
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: [
              'postcss-flexbugs-fixes',
              [
                'postcss-preset-env',
                {
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                  features: {
                    'custom-properties': false,
                  },
                },
              ],
            ],
          },
        },
      },
    },
  ],
  webpackFinal: async (baseConfig) => {
    return {
      ...baseConfig,
      resolve: {
        ...baseConfig.resolve,
        alias: {
          ...baseConfig.alias,
          ['@tarojs/components$']: '@tarojs/components/dist-h5/react',

          '@': path.resolve(__dirname, '..', 'src'),
        },
        mainFields: ['main:h5', 'browser', 'module', 'main'],
      },
      plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin({
          'process.env.TARO_ENV': JSON.stringify('h5'),
          // ENABLE_ADJACENT_HTML: JSON.stringify(false),
          ENABLE_CLONE_NODE: JSON.stringify(false),
          ENABLE_INNER_HTML: JSON.stringify(false),
          ENABLE_SIZE_APIS: JSON.stringify(false),
          ENABLE_TEMPLATE_CONTENT: JSON.stringify(false),
        }),
      ],
    };
  },
  babel: (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        require('babel-plugin-transform-taroapi'),
        {
          packageName: '@tarojs/taro',
          apis: require('@tarojs/taro-h5/dist/taroApis'),
        },
      ],
    ],
  }),
  reactOptions: {
    fastRefresh: true,
  },
};
