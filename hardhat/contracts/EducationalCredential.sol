// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.0;

contract EducationalCredential {
    struct Certificate {
        address issuer;
        bytes32 studentNameHash;
        bytes32 degree;
        uint256 issueDate;
        Status status;
    }

    enum Status { None, Verified }

    mapping(address => Certificate[]) public certificatesByStudent;
    mapping(uint256 => Certificate) public certificatesById;

    uint256 private nextCertificateId = 1;

    address public owner;

    event CertificateIssued(uint256 indexed certificateId, address indexed studentAddress, bytes32 studentNameHash, bytes32 degree, uint256 issueDate);
    event CertificateVerified(uint256 indexed certificateId);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function issueCertificate(address _studentAddress, bytes32 _studentNameHash, bytes32 _degree) external onlyOwner returns(uint256) {
        require(_degree != bytes32(0), "Degree name cannot be empty");

        uint256 certificateId = nextCertificateId;
        nextCertificateId++;

        Certificate memory cert = Certificate(
            msg.sender,
            _studentNameHash,
            _degree,
            block.timestamp,
            Status.None
        );

        certificatesByStudent[_studentAddress].push(cert);
        certificatesById[certificateId] = cert;

        emit CertificateIssued(certificateId, _studentAddress, _studentNameHash, _degree, block.timestamp);
        return certificateId;
    }

    function verifyCertificate(uint256 _certificateId) external {
        Certificate storage cert = certificatesById[_certificateId];
        require(cert.status != Status.Verified, "Certificate already verified");

        cert.status = Status.Verified;
        emit CertificateVerified(_certificateId);
    }

    function getNumberOfCertificates(address _studentAddress) external view returns (uint256) {
        return certificatesByStudent[_studentAddress].length;
    }

    function getCertificateDetails(uint256 _certificateId) external view returns (
        address issuer,
        bytes32 studentNameHash,
        bytes32 degree,
        uint256 issueDate,
        Status status
    ) {
        Certificate memory cert = certificatesById[_certificateId];
        require(cert.issuer != address(0), "Certificate not found");
        return (cert.issuer, cert.studentNameHash, cert.degree, cert.issueDate, cert.status);
    }
}
