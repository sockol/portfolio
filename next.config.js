// SASS Support
const webpack = require(`webpack`);

const withSass = require(`@zeit/next-sass`);

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = withSass({
  useFileSystemPublicRoutes: false,

  webpackDevMiddleware: config => {
    // Solve compiling problem via vagrant
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // delay before rebuilding
    };
    return config;
  },
  webpack(config, options) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: [ `@svgr/webpack` ],
    });
    return config;
  },
});
