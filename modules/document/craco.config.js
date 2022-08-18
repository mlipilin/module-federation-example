const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'moduleDocument',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.tsx',
          // Components
          './Documents': './src/components/Documents/index.tsx',
        },
        shared: {
          react: { singleton: true },
          'react-router-dom': { singleton: true },
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
