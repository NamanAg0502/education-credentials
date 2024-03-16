const { expect } = require('chai');
const { ethers } = require('ethers');

describe('EducationalCredential', function () {
  let contract;
  let deployer;
  let student1;

  beforeEach(async function () {
    // Get signers for deployer and student
    const signers = await ethers;
    deployer = signers[0];
    student1 = signers[1];

    // Deploy the contract
    const Contract = await ethers.getContractFactory('EducationalCredential');
    contract = await Contract.deploy();
    await contract.deployed();
  });

  describe('Deployment', function () {
    it('Should deploy successfully', async function () {
      expect(contract.address).to.not.equal(undefined);
    });
  });
});
