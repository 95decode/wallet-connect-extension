module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/'
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }

    return config
  }
}
