const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // 静态资源版本号，必选
  version: 'v0.0.1',
  // 打包后静态资源cdn地址，可选
  publicPath: '',
  // 是否将打包后的目录压缩为zip包，可选
  zip: false,
  // 是否将打包后的文件名加hash值，可选
  filenameHashing: false,
  page: {
    // 将打包后的静态资源自动插入页面中，默认: true
    inject: false,
    // 页面的viewport，开发时打开，打包时关闭
    viewport: isProd ? false : true
  }
};
