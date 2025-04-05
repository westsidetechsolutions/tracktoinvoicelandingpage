'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faEnvelopeOpenText, faUsersCog } from '@fortawesome/free-solid-svg-icons'; // Example icons
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
      icon: faBolt,
      title: 'Instant Invoices from Time Logs',
      description: 'Automatically convert your tracked time into branded invoices — no copy/paste needed.',
    },
    {
      icon: faEnvelopeOpenText,
      title: 'Pre-Written Emails & Auto-Send',
      description: 'Send invoices with auto-generated summaries and subject lines. Or schedule them weekly.',
    },
    {
      icon: faUsersCog, // Example icon for client/project matching
      title: 'Client & Project Matching',
      description: 'Smartly detect which hours belong to which client. Supports hourly rates, retainers, and notes.',
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
        <h2 className={styles.sectionTitle}>Designed for Freelancers. Built for Speed.</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' }} // Hover effect
              transition={{ duration: 0.2 }} // Smooth hover transition
            >
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={feature.icon} className={styles.featureIcon} />
              </div>
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
