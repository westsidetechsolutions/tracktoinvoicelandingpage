'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './InvoicePreviewSection.module.css';

const InvoicePreviewSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="preview"
      className={`${styles.previewSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionTitle}>Your Invoice, Your Brand</h2>
          <p className={styles.subheadline}>
            Customize your invoice template, upload your logo, and send professional-looking invoices in seconds.
          </p>
        </div>
        <motion.div
          className={styles.imageWrapper}
          variants={imageVariants}
          // Parent section handles initial/whileInView trigger
        >
          <Image
            src="/images/Invoice-preview.png" // Path relative to 'public'
            alt="Preview of a customized invoice generated by TrackToInvoice"
            width={800} // Adjust as needed
            height={600} // Adjust as needed
            className={styles.previewImage}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InvoicePreviewSection;
