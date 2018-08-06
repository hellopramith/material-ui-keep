const HtmlWebpackPlugin =   require('html-webpack-plugin');
module.exports = {
  entry : './src/index.js',
  output : {
      path : __dirname + '/dist',
      filename : 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
        {
          test: /\.js$/,
          include: __dirname + '/src',
          exclude: __dirname + '/node_modules',
          loader: 'babel-loader'
        }
    ]
  }
};