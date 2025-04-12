'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhoItsForSection.module.css';

const WhoItsForSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const targetAudience = [
    'Freelancers',
    'Consultants',
    'Solopreneurs',
    'Contract Developers & Designers',
  ];

  return (
    <motion.section
      id="who-its-for"
      className={`${styles.whoItsForSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${styles.container} container`}>
        <h2 className={styles.sectionTitle}>Perfect For:</h2>
        <ul className={styles.audienceList}>
          {targetAudience.map((item, index) => (
            <motion.li key={index} className={styles.audienceItem} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </ul>
        <p className={styles.subheadline}>
          If you're billing clients based on tracked time, TrackToInvoice was built for you.
        </p>
      </div>
    </motion.section>
  );
};

export default WhoItsForSection;
