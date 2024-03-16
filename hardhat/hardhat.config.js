require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.24',
  networks: {
    dojima: {
      url: 'https://api-dev.d11k.dojima.network/',
      accounts: [
        '3bfed07f0728a2eaa71f9d093908f7bff413236ee43d5a46ecd710a9a5d31705',
      ],
    },
  },
};
