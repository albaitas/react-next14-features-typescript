'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '../types';

const DashboardNavLinks = () => {
  const pathname = usePathname();
  const navigation: NavigationItem[] = [
    { id: 1, title: 'Analitics', path: '/dashboard/analitics' },
    { id: 2, title: 'Settings', path: '/dashboard/settings' }
  ];

  return (
    <div className='dashboard-nav'>
      {navigation.map(({ id, title, path }) => (
        <Link key={id} href={path}>
          <div className={pathname === path ? 'active' : ''}>{title}</div>
        </Link>
      ))}
    </div>
  );
};

export default DashboardNavLinks;
