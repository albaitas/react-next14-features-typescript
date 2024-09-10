import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';
import { UsersProps, SortProps } from '../types';

const Users = async ({ sortOrder }: SortProps) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  const users: UsersProps[] = await res.json();

  let sortedUsers = users;
  if (sortOrder) {
    const orderKey = sortOrder === 'email' ? (user: UsersProps) => user.email : (user: UsersProps) => user.name;
    sortedUsers = sort(users).asc(orderKey);
  }

  return (
    <>
      <table className='users-table'>
        <thead>
          <tr>
            <th>
              <Link href='/users?sortOrder=name'>Name(sort)</Link>
            </th>
            <th>
              <Link href='/users?sortOrder=email'>Email(sort)</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>
                {user.id}. {user.name}
              </td>
              <td>
                {user.id}. {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className='reset'>
        <Link href='/users'>Reset</Link>
      </h3>
    </>
  );
};

export default Users;
