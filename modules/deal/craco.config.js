const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'moduleDeal',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.tsx',
        },
        shared: {
          react: { singleton: true },
          'react-router-dom': { singleton: true },
        },
      }),
    ],
    configure: {
      output: {
        publicPath: 'http://localhost:3303/deal/',
      },
    },
  },
}
