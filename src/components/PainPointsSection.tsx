'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './PainPointsSection.module.css';

const PainPointsSection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="pain-points"
      className={`${styles.painPointsSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>Tired of Manually Creating Invoices Every Week?</h2>
          <p className={styles.subheadline}>
            You're juggling spreadsheets, chasing formatting, and rewriting the same email over and over. It's tedious, error-prone, and takes time away from paid work.
          </p>
          {/* Removed bullet list */}
        </div>
        <motion.div
          className={styles.imageWrapper}
          variants={imageVariants}
        >
          <Image
            src="/images/freelancer-overwhelmed.png"
            alt="Overwhelmed freelancer surrounded by papers and spreadsheets"
            width={500} // Adjust as needed
            height={400} // Adjust as needed
            className={styles.painImage}
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PainPointsSection;
