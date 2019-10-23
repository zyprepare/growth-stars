const starsConfig = require('../../../star.json');
const star = starsConfig.star;
const baseDir = `./stars/${star}`;

module.exports = {
  '^/test': `${baseDir}/mock/test.json`
};
