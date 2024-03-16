require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.24',
  networks: {
    dojima: {
      url: 'https://api-dev.d11k.dojima.network/',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
