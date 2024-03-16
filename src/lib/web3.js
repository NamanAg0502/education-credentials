'use client';
import { abi } from '@/config/abi';
import { ethers } from 'ethers';
import { toast } from 'sonner';

const contractAddress = '0x7AAf21e959D24AF45ec986A8EA71A838A1eaCFD1';

export const avlNetwork = {
  1001: {
    chainId: `0x${Number(1001).toString(16)}`,
    rpcUrls: ['https://api-dev.d11k.dojima.network/'],
    chainName: 'Dojima Chain',
    nativeCurrency: {
      name: 'DOJ',
      symbol: 'DOJ',
      decimals: 18,
    },
    blockExplorerUrls: ['https://doj-bex-test.dojima.network/'],
  },
};

export const checkMetaMask = async () => {
  if (ethereum) {
    try {
      const { chainId, name } = await ethereum.request({
        method: 'eth_chainId',
      });
      return { chainId, name };
    } catch (error) {
      console.error('Error checking initial connection:', error);
      throw new Error('An error occurred while connecting to your wallet.');
    }
  } else {
    throw new Error('Please install MetaMask to connect your wallet.');
  }
};

export const connectWallet = async () => {
  if (!ethereum) {
    throw new Error('Please install MetaMask to connect your wallet.');
  }

  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error.message === 'User rejected request'
      ? new Error('Wallet connection rejected.')
      : new Error('An error occurred while connecting your wallet.');
  }
};

export const switchNetwork = async (chainId) => {
  try {
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [avlNetwork[chainId]],
    });
    const newNetwork = await ethereum.request({ method: 'eth_chainId' });
    return { chainId: newNetwork, name: avlNetwork[chainId].chainName };
  } catch (error) {
    console.error('Error switching network:', error);
    throw error.message === 'User rejected request'
      ? new Error('Network switching rejected.')
      : new Error('An error occurred while switching the network.');
  }
};

async function connectToContract() {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer); // Replace abi with your contract ABI
    return contract;
  } catch (error) {
    console.error(error);
  }
}

export async function getIssuedCertificates(studentAddress) {
  try {
    const contract = await connectToContract();
    const numberOfCertificates = await contract.getNumberOfCertificates(
      studentAddress
    );

    const issuedCertificates = [];
    for (let i = 0; i < numberOfCertificates; i++) {
      const certificateId = i + 1;
      const certificateDetails = await contract.getCertificateDetails(
        certificateId
      );
      issuedCertificates.push(certificateDetails);
    }
    return issuedCertificates;
  } catch (error) {
    console.error(error);
  }
}

export async function issueCertificate(studentAddress, studentName, degree) {
  try {
    const contract = await connectToContract();
    const certificate = await contract.issueCertificate(
      studentAddress,
      studentName,
      degree
    );
    console.log(certificate);
  } catch (error) {
    console.error(error);
  }
}

export async function verifyCertificate(certificateId) {
  try {
    const contract = await connectToContract();
    await contract.verifyCertificate(certificateId).then((res) => {
      toast.success('Certificate verified');
      return res.hash;
    });
  } catch (error) {
    console.error('Error verifying certificate:', error);
    throw error;
  }
}
