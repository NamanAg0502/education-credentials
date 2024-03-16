const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('EducationalCredential', (m) => {
  const educationalCredential = m.contract('EducationalCredential', []);

  return { educationalCredential };
});
