const fs = require('fs');
const child_process = require('child_process');
const args = process.argv.splice(2);
const star = args[0];
const isBlock = args[1] && args[1] === '--block';
let baseDir = `./stars/base/`;
let starDir = `./stars/${star}`;

if (isBlock) {
  baseDir = `./stars/block/`;
}

function copy(from, to) {
  if (!fs.existsSync(starDir)) {
    child_process.spawn('cp', ['-r', from, to]);
  }
}

/**
 * 创建star.json文件，该文件中配置了当前要操作的子项目名
 */
function createStarJsonFile() {
  let filePath = './star.json';

  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, JSON.stringify({
      "star": `${star}`
    }), function (err) {
      if (err) {
        console.log('error: create star.json file error.');
      }
    })
  }
}

copy(baseDir, starDir);
createStarJsonFile();
