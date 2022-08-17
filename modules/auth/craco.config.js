const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'moduleAuth',
        library: { type: 'var', name: 'moduleAuth' },
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.tsx',
          // Components
          './Profile': './src/components/Profile/index.tsx',
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
