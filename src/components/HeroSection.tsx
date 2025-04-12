'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="hero" // Added ID for potential navigation
      className={`${styles.heroSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible, only once
    >
      <div className={`${styles.container} container`}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.headline}>
            Invoicing for Freelancers Who Don’t Want to Waste Time
          </h1>
          <p className={styles.subheadline}>
            Stop wasting hours formatting spreadsheets or rewriting emails. TrackToInvoice turns your time logs into professional invoices — branded, calculated, and ready to send.
          </p>
          <div className={styles.ctaContainer}>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join the Waitlist
            </motion.button>
            <p className={styles.ctaSubtext}>Get early access + exclusive launch perks!</p>
          </div>
        </div>
        <motion.div
          className={styles.imageWrapper}
          variants={imageVariants}
          // No need for initial/whileInView here as the parent section handles it
        >
          <Image
            src="/images/hero.png" // Path relative to the 'public' directory
            alt="TrackToInvoice application interface showing time tracking and invoicing"
            width={550} // Adjust width as needed
            height={450} // Adjust height as needed
            className={styles.heroImage}
            priority // Load hero image faster
            sizes="(max-width: 768px) 100vw, 550px" // Responsive image sizing
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
