'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { NavigationItem } from '../types';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navigation: NavigationItem[] = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Users', path: '/users' },
    { id: 3, title: 'Posts', path: '/posts' },
    { id: 4, title: 'Todos', path: '/todos' },
    { id: 5, title: 'Dashboard', path: '/dashboard' }
  ];

  return (
    <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Image src='/images/logo.jpg' width={275} height={58} alt='logo' priority className='responsive-logo' />
          </div>
          <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </div>
          <div className={menuOpen ? 'navbar_links active' : 'navbar_links'}>
            {navigation.map(({ id, title, path }) => (
              <Link key={id} href={path}>
                <div className={pathname === path ? 'active' : ''}>{title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
