/**
 * webpack自定义插件
 * 将打包后的文件夹压缩为zip包
 */

const fs = require("fs");
const archiver = require("archiver");

/**
 * 压缩打包后的文件
 * @param {Object} options
 */
function CompressToZipPlugin(options) {
  this.options = options;
}

CompressToZipPlugin.prototype.apply = function(compiler) {
  compiler.hooks.done.tap('CompressToZipPlugin', compilation => {
    let {
      from,
      to
    } = this.options;

    // create a file to stream archive data to.
    const output = fs.createWriteStream(to);
    const archive = archiver('zip');

    archive.pipe(output);
    archive.directory(from, false);
    archive.finalize();
  });
}

module.exports = CompressToZipPlugin;
