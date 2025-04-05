'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // Uncomment if using an image logo
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Preview', href: '#preview' },
    { name: 'Waitlist', href: '#waitlist' },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          {/* Replace with actual logo if available */}
          {/* <Image src="/logo.svg" alt="TrackToInvoice Logo" width={150} height={30} /> */}
          <span className={styles.logoText}>TrackToInvoice</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className={styles.mobileNavToggle} onClick={toggleMobileMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            className={styles.navMobile}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Optional: Add exit animation if needed elsewhere
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLinkMobile} onClick={closeMobileMenu}>
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
