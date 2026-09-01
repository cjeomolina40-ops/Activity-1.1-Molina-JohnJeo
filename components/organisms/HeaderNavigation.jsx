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

        <button
          className="menu-btn"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={toggleMenu}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          id="main-navigation"
          className={`nav ${open ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          <NavigationItem href="/" onClick={closeMenu}>
            Home
          </NavigationItem>

          <NavigationItem href="/heritage" onClick={closeMenu}>
            Heritage Sites
          </NavigationItem>

          <NavigationItem href="/about" onClick={closeMenu}>
            About
          </NavigationItem>

          <NavigationItem href="/contact" onClick={closeMenu}>
            Contact
          </NavigationItem>
        </nav>
      </div>
    </header>
  );
}
