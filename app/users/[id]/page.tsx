import React from 'react';
import { UserDetailsProps } from '@/app/types';

const UserDetails = ({ params }: UserDetailsProps) => {
  return <h2>Details User ID: {params.id}</h2>;
};

export default UserDetails;
