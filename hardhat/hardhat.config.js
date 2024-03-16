require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: '0.8.24',
  networks: {
    hardhat: {},
    dojima: {
      url: 'https://api-dev.d11k.dojima.network/',
      accounts: [
        '1724651ce596456ebff3e4873d24eeb89e49fd245ef229068709b75d0799f007',
      ],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/NHHbXGb7-fSzWqrYvddWOfdUJJ3HNYLF',
      accounts: [
        '3bfed07f0728a2eaa71f9d093908f7bff413236ee43d5a46ecd710a9a5d31705',
      ],
    },
  },
};
