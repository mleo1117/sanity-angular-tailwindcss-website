const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://y5u5ek13.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;