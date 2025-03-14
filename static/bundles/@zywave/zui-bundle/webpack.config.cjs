const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = [
  {
    name: 'styles',
    context: __dirname,
    entry: {
      'zui-bundle.fouc': './src/css/zui-bundle.fouc.scss',
      'zui-bundle.app': './src/css/zui-bundle.app.scss'
    },
    devtool: 'source-map',
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require("sass"),
                sassOptions: {
                  importer: function(url, prev, done) {
                    if (url.startsWith('@zywave')) {
                      return done({ file: `../../../../../node_modules/${url}` });
                    }
                    return done({ file: `src/${url}` });
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
];
