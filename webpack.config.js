const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');

module.exports = {
  entry: './index.js',
  output: { filename: './compiled.js' },
  devtool: 'source-map',
  module: { rules: [{ test: /\.js$/, loader: 'babel-loader' }] },
  plugins: [
    new WebpackSynchronizableShellPlugin({ onBuildStart: { scripts: ['mix compile'], blocking: true } })
  ]
}
