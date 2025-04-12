'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ResultsSection.module.css';

const ResultsSection = () => {
  // Animation variants
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
      id="results"
      className={`${styles.resultsSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>From Hours to Minutes</h2>
          <p className={styles.subheadline}>
            See how much time you’re saving by ditching the manual approach.
          </p>
        </div>
        <motion.div
          className={styles.imageWrapper}
          variants={imageVariants}
        >
          <Image
            src="/images/time-comparison.png"
            alt="Comparison graphic showing time saved using TrackToInvoice versus manual invoicing"
            width={500} // Adjust as needed
            height={350} // Adjust as needed
            className={styles.resultsImage}
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResultsSection;
