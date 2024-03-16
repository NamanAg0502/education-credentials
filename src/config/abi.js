export const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'certificateId',
        type: 'uint256',
      },
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
        internalType: 'bytes32',
        name: 'degree',
        type: 'bytes32',
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
        internalType: 'uint256',
        name: 'certificateId',
        type: 'uint256',
      },
    ],
    name: 'CertificateVerified',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'certificatesById',
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
        internalType: 'bytes32',
        name: 'degree',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'issueDate',
        type: 'uint256',
      },
      {
        internalType: 'enum EducationalCredential.Status',
        name: 'status',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
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
    name: 'certificatesByStudent',
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
        internalType: 'bytes32',
        name: 'degree',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'issueDate',
        type: 'uint256',
      },
      {
        internalType: 'enum EducationalCredential.Status',
        name: 'status',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_certificateId',
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
        internalType: 'bytes32',
        name: 'degree',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'issueDate',
        type: 'uint256',
      },
      {
        internalType: 'enum EducationalCredential.Status',
        name: 'status',
        type: 'uint8',
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
    name: 'getNumberOfCertificates',
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
        internalType: 'bytes32',
        name: '_studentNameHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_degree',
        type: 'bytes32',
      },
    ],
    name: 'issueCertificate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_certificateId',
        type: 'uint256',
      },
    ],
    name: 'verifyCertificate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
