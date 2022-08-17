const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'moduleRequest',
        // library: { type: 'var', name: 'moduleRequest' },
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.tsx',
        },
        remotes: {
          moduleDocument: 'moduleDocument@http://localhost:3303/remoteEntry.js',
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
