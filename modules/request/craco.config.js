const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'moduleRequest',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.tsx',
        },
        remotes: {
          moduleDocument:
            'moduleDocument@http://localhost:3304/document/remoteEntry.js',
        },
        shared: {
          react: { singleton: true },
          'react-router-dom': { singleton: true },
        },
      }),
    ],
    configure: {
      output: {
        publicPath: 'http://localhost:3305/request/',
      },
    },
  },
}
