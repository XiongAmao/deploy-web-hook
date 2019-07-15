const shell = require('shelljs');
const path = require('path');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const testPath = path.resolve(__dirname, './shell-scripts/deploy.sh');

shell.chmod('+x', testPath);

shell.exec(`bash ${testPath}`, (code, stdout, stderr) => {
  console.log(code);
  // console.log(stdout);
  // console.log(stderr);
});
