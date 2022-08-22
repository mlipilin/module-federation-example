const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'moduleWorkspace',
        // library: { type: 'var', name: 'cpWorkspace' },
        // filename: 'remoteEntry.js',
        remotes: {
          moduleAuth: 'moduleAuth@http://localhost:3302/auth/remoteEntry.js',
          moduleDeal: 'moduleDeal@http://localhost:3303/deal/remoteEntry.js',
          moduleDocument:
            'moduleDocument@http://localhost:3304/document/remoteEntry.js',
          moduleRequest:
            'moduleRequest@http://localhost:3305/request/remoteEntry.js',
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
