module.exports = {
  publicPath: './',
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);

  },
  devServer: {
    open: true
  }
}
