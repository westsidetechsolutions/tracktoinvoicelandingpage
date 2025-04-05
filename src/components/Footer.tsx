import React from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // Uncomment if using an image logo
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Preview', href: '#preview' },
    { name: 'Waitlist', href: '#waitlist' },
    // Add other links like Privacy Policy, Terms of Service if needed
    // { name: 'Privacy Policy', href: '/privacy' },
    // { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.footerContent}>
          {/* Footer Top: Logo and Tagline */}
          <div className={styles.footerTop}>
            <Link href="/" className={styles.logo}>
              {/* Replace with actual logo if available */}
              {/* <Image src="/logo-footer.svg" alt="TrackToInvoice Logo" width={150} height={30} /> */}
              <span className={styles.logoText}>TrackToInvoice</span>
            </Link>
            <p className={styles.tagline}>Making invoicing effortless for freelancers.</p>
          </div>

          {/* Footer Links (Optional) */}
          {quickLinks.length > 0 && (
            <nav className={styles.footerLinks}>
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className={styles.footerLink}>
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Footer Bottom: Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} TrackToInvoice. All rights reserved.
          </p>
          {/* Add social media icons or other info here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
