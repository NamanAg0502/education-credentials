'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getIssuedCertificates } from '@/lib/web3'; // Assuming getIssuedCertificates function exists
import { ethers } from 'ethers';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  const [studentAddress, setStudentAddress] = useState('');
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState('');

  const handleFetchCertificates = async () => {
    try {
      if (!studentAddress) {
        setError('Please enter a valid student address.');
        return;
      }

      const issuedCertificates = await getIssuedCertificates(studentAddress);
      setCertificates(issuedCertificates);
      setError('');
    } catch (error) {
      setError('Error fetching certificates. Please try again later.');
      console.error(error);
    }
  };

  console.log(certificates);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="max-w-7xl mx-auto my-5">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-4xl font-semibold">Student Certificates</h1>
          <div className="w-1/2 flex flex-col justify-start items-start gap-2">
            <Label htmlFor="studentAddress">
              Enter contract address of student:
            </Label>
            <Input
              id="studentAddress"
              type="text"
              value={studentAddress}
              onChange={(e) => setStudentAddress(e.target.value)}
              className=""
              placeholder="0x0a125ds....adsa"
            />
            <Button onClick={handleFetchCertificates}>Submit</Button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="my-5 w-full">
            <h2 className="text-4xl font-semibold text-center mb-5">
              Certificates
            </h2>
            <Table className="w-full">
              <TableHeader className="">
                <TableRow>
                  <TableHead>Issuer</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Degree</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Verified</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificates.length > 0 &&
                  certificates.map((certificate, index) => (
                    <TableRow key={index}>
                      <TableCell className="">{certificate.issuer}</TableCell>
                      <TableCell className="">
                        {ethers.decodeBytes32String(
                          certificate.studentNameHash
                        )}
                      </TableCell>
                      <TableCell className="">
                        {ethers.decodeBytes32String(certificate.degree)}
                      </TableCell>
                      <TableCell>
                        {new Date(
                          Number(certificate.issueDate) * 1000
                        ).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {certificate.status === 1 ? 'Verified' : 'Unverified'}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}
