'use client';

import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { issueCertificate } from '@/lib/web3'; // Import your contract interaction function
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { stringToBytes32 } from '@/lib/utils';
import Navbar from '@/components/common/navbar';

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(async (data) => {
    try {
      const tx = await issueCertificate(
        data.studentAddress,
        stringToBytes32(data.studentName),
        stringToBytes32(data.degree)
      );
      tx.wait();
      console.log(tx);
      toast.success('Certificate Issued Successfully');
    } catch (error) {
      console.error('Error issuing certificate:', error);
      toast.error('Failed to issue certificate. Please try again later.');
    } finally {
    }
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Navbar component */}
      <Navbar />
      <main className="max-w-7xl mx-auto my-5">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-4xl font-semibold">Verify Certificates</h1>
          <div className="w-1/2 flex flex-col justify-start items-start gap-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col justify-center items-start gap-6"
            >
              <div className="w-full flex flex-col gap-1">
                <Label>Student Address</Label>
                <Input
                  className="w-full"
                  type="text"
                  placeholder="0x0aeR23........a08"
                  {...register('studentAddress', {
                    required: 'Student Address is required',
                  })}
                />
                {errors.studentAddress && (
                  <span className="text-red-500">
                    {errors.studentAddress.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label>Student Name</Label>
                <Input
                  type="text"
                  placeholder="Kunal Gupta"
                  {...register('studentName', {
                    required: 'Student Name is required',
                  })}
                />
                {errors.studentName && (
                  <span className="text-red-500">
                    {errors.studentName.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label>Degree</Label>
                <Input
                  type="text"
                  placeholder="Bachelor degree"
                  {...register('degree', { required: 'Degree is required' })}
                />
                {errors.degree && (
                  <span className="text-red-500">{errors.degree.message}</span>
                )}
              </div>
              <Button type="submit">Issue Certificate</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
