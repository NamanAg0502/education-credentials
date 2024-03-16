// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract EducationalCredential is Ownable {

    struct Certificate {
        address issuer;
        bytes32 studentNameHash;
        bytes32 degree; // Use bytes32 for efficiency
        uint256 issueDate;
        Status status; // Enum to represent certificate status
    }

    enum Status { None, Verified, Revoked }

    mapping(address => Certificate[]) public certificates;

    event CertificateIssued(address indexed studentAddress, bytes32 studentNameHash, bytes32 degree, uint256 issueDate);
    event CertificateStatusUpdated(address indexed studentAddress, uint256 certificateIndex, Status status);

    constructor() Ownable(msg.sender) {}

    // Function to issue a new certificate (only owner can call)
    function issueCertificate(address _studentAddress, bytes32 _studentNameHash, bytes32 _degree) external onlyOwner {
        require(_degree != bytes32(0), "Degree name cannot be empty");

        certificates[_studentAddress].push(Certificate(msg.sender, _studentNameHash, _degree, block.timestamp, Status.None));
        emit CertificateIssued(_studentAddress, _studentNameHash, _degree, block.timestamp);
    }

    // Function to update certificate status (only owner can call)
    function updateCertificateStatus(address _studentAddress, uint256 _certificateIndex, Status _status) external onlyOwner {
        require(_certificateIndex < certificates[_studentAddress].length, "Certificate index out of range");

        certificates[_studentAddress][_certificateIndex].status = _status;
        emit CertificateStatusUpdated(_studentAddress, _certificateIndex, _status);
    }

    // Function to get the total number of certificates for a student
    function getCertificateCount(address _studentAddress) external view returns (uint256) {
        return certificates[_studentAddress].length;
    }

    // Function to get certificate details by index for a student
    function getCertificateDetails(address _studentAddress, uint256 _certificateIndex) external view returns (
        address issuer,
        bytes32 studentNameHash,
        bytes32 degree,
        uint256 issueDate,
        Status status
    ) {
        require(_certificateIndex < certificates[_studentAddress].length, "Certificate index out of range");

        Certificate memory cert = certificates[_studentAddress][_certificateIndex];
        return (cert.issuer, cert.studentNameHash, cert.degree, cert.issueDate, cert.status);
    }
}
