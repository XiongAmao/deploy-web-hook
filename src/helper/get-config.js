const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const getConfig = () => {
  try {
    const config = yaml.safeLoad(
      fs.readFileSync(path.resolve(__dirname, '../../config/deploy.yaml'), 'utf8')
    );
    // console.log(config);
    return config;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getConfig;
