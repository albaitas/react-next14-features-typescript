import Users from '../components/Users';
import type { Metadata } from 'next';
import { SearchProps } from '../types';

export const metadata: Metadata = {
  title: 'Users Page',
  description: 'Users names and emails'
};

const UsersPage = ({ searchParams: { sortOrder } }: SearchProps) => {
  return (
    <div className='container'>
      <Users sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
