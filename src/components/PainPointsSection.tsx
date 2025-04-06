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
          <h2 className={styles.sectionTitle}>Does Creating Invoices Eat Up Your Time?</h2>
          <p className={styles.subheadline}>
            Manual invoicing is slow, error-prone, and tedious. You should spend your time doing billable work—not juggling spreadsheets.
          </p>
          <br />
          <motion.ul className={styles.bulletList}>
            <motion.li variants={itemVariants}>
              ⏳ Hours wasted copying hours from Toggl, Everhour, or Clockify.
            </motion.li>
            <motion.li variants={itemVariants}>
              ❌ Errors and typos delaying payments and confusing clients.
            </motion.li>
            <motion.li variants={itemVariants}>
              📧 Manual emails causing slow communication and late payments.
            </motion.li>
          </motion.ul>
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
