const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'workspace',
        // library: { type: 'var', name: 'host5001' },
        // filename: 'remoteEntry.js',
        remotes: {
          auth: 'auth@http://localhost:3301/remoteEntry.js',
          deal: 'deal@http://localhost:3303/remoteEntry.js',
          request: 'request@http://localhost:3302/remoteEntry.js',
        },
        shared: {
          react: { singleton: true },
          'react-router-dom': { singleton: true },
          // 'react-dom': { singleton: true },
        },
      }),
    ],
    // configure: {
    //   output: {
    //     publicPath: 'auto',
    //   },
    // },
  },
}
