'use client';
import React from 'react';
import Navbar from './_components/Navbar';

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Provider;
