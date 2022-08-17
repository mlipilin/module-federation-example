const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'moduleWorkspace',
        // library: { type: 'var', name: 'cpWorkspace' },
        // filename: 'remoteEntry.js',
        remotes: {
          moduleAuth: 'moduleAuth@http://localhost:3301/remoteEntry.js',
          moduleDeal: 'moduleDeal@http://localhost:3302/remoteEntry.js',
          moduleDocument: 'moduleDocument@http://localhost:3303/remoteEntry.js',
          moduleRequest: 'moduleRequest@http://localhost:3304/remoteEntry.js',
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
