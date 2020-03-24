const baseConfig = require('./base');
const typescriptConfig = require('./typescript');
const typescriptTestConfig = require('./typescript-test');

module.exports = {
  base: baseConfig,
  typescript: typescriptConfig,
  'typescript-test': typescriptTestConfig,
};
