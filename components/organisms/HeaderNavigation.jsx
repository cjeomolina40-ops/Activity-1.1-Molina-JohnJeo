'use client';

import { useState } from 'react';
import NavigationItem from '../molecules/NavigationItem';

export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen((current) => !current);
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="/" onClick={closeMenu}>
          Pangasinan Heritage
        </a>

        
      </div>
    </header>
  );
}
