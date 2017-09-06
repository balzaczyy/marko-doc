const path = require('path');

module.exports = function (markoCli) {
  markoCli.config.testMatcher = function (file) {
    const testRegExp = /^(?:(.+?)[-.])?(?:spec|test)(?:[-.](server|browser))?[.]/i;
    const basename = path.basename(file);
    const testMatches = testRegExp.exec(basename);

    console.log(basename)
    if (!testMatches) {
      // The file is not a test file
      return false;
    }

    const componentDirectory = path.dirname(file);
    const componentName = path.basename(componentDirectory); // header

    // /components/header.marko
    const rendererPath = `${componentDirectory}/${componentName}.marko`;

    return {
      groupName: testMatches[1],
      env: testMatches[2] || 'browser',
      componentName: componentName,
      rendererPath: rendererPath
    };
  };
};