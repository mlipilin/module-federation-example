const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'request',
        library: { type: 'var', name: 'request' },
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.tsx',
        },
        shared: {
          react: { singleton: true },
          'react-router-dom': { singleton: true },
          // 'react-dom': { singleton: true },
        },
      }),
    ],
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
  },
}
