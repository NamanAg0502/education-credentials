export const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'studentAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'studentNameHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'degree',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'issueDate',
        type: 'uint256',
      },
    ],
    name: 'CertificateIssued',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'studentAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'certificateIndex',
        type: 'uint256',
      },
    ],
    name: 'CertificateRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'studentAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'certificateIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'verifiedDate',
        type: 'uint256',
      },
    ],
    name: 'CertificateVerified',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'certificates',
    outputs: [
      {
        internalType: 'address',
        name: 'issuer',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'studentNameHash',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'degree',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'issueDate',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isVerified',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'isRevoked',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentAddress',
        type: 'address',
      },
    ],
    name: 'getCertificateCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_certificateIndex',
        type: 'uint256',
      },
    ],
    name: 'getCertificateDetails',
    outputs: [
      {
        internalType: 'address',
        name: 'issuer',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'studentNameHash',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'degree',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'issueDate',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isVerified',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'isRevoked',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentAddress',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_studentNameHash',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: '_degree',
        type: 'string',
      },
    ],
    name: 'issueCertificate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_certificateIndex',
        type: 'uint256',
      },
    ],
    name: 'revokeCertificate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_certificateIndex',
        type: 'uint256',
      },
    ],
    name: 'verifyCertificate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
