const path = require('path');
const fs = require('fs');

const requireRegex = /#pragma require\(('|")(.*)('|")\)/gi;
const moduleExportsRegex = /module\.exports = "(.*)"/gi;

/**
 * @param {string} source
 */
module.exports = function loader(source) {
  requireRegex.lastIndex = 0;
  const callback = this.async();
  let dependencies = 0;
  let completedDependencies = 0;
  let completed = false;

  while (true) {
    const matches = requireRegex.exec(source);

    if (!matches) {
      break;
    }

    const dependencyPath = matches[2];
    this.addDependency(dependencyPath);
    dependencies++;

    this.loadModule(dependencyPath, (err, dependencySource) => {
      if (completed) {
        return;
      }

      if (err) {
        completed = true;
        return callback(err);
      }

      moduleExportsRegex.lastIndex = 0;
      dependencySource = moduleExportsRegex.exec(dependencySource)[1];
      dependencySource = dependencySource.replace(/\\n/g, '\n').replace(/\\r/g, '\r');
      source = source.replace(matches[0], dependencySource);
      completedDependencies++;

      if (completedDependencies === dependencies) {
        completed = true;
        callback(null, source);
      }
    });
  }

  if (dependencies === 0) {
    callback(null, source);
  }
}
