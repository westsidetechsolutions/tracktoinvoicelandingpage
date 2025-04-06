'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Removed FontAwesome imports as emojis will be used in titles
import styles from './FeatureHighlightsSection.module.css';

const FeatureHighlightsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const features = [
    {
      // icon: faUsersCog, // Replaced with emoji in title
      title: '🧠 Smart Client & Project Matching',
      description: 'Never manually match hours again. We automatically detect and organize your tracked hours by client, project, hourly rates, retainers, and notes.',
    },
    {
      // icon: faBolt, // Replaced with emoji in title
      title: '📥 Instant, Professional, Branded Invoices',
      description: 'Impress clients with clean, branded invoices—without touching a spreadsheet.',
    },
    {
      // icon: faEnvelopeOpenText, // Replaced with emoji in title
      title: '📧 Pre-Written Emails & Automatic Delivery',
      description: 'Save time and hassle. Send auto-generated invoice summaries instantly or schedule weekly invoicing in seconds.',
    },
  ];

  return (
    <motion.section
      id="features"
      className={`${styles.featuresSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`${styles.container} container`}>
        <h2 className={styles.sectionTitle}>Built Specifically for Busy Freelancers & Consultants</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' }} // Hover effect
              transition={{ duration: 0.2 }} // Smooth hover transition
            >
              {/* Removed icon wrapper - emoji is in the title */}
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureHighlightsSection;
