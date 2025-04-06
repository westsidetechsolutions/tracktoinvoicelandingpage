'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorksSection.module.css';
import Image from 'next/image';
// Import icons if using FontAwesome, or use placeholders/img tags for the illustration
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload, faFileInvoiceDollar, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HowItWorksSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const illustrationVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } }
  }

  const steps = [
    {
      id: 1,
      title: 'Drag & Drop Your Time-Tracking CSV',
      description: 'Export from Everhour, Toggl, or Clockify—just upload the file and we handle the rest.',
      // Icon (existing): Hand dragging CSV file into a dropzone.
    },
    {
      id: 2,
      title: 'Automatically Match Clients & Review',
      description: 'TrackToInvoice smartly matches hours to clients and projects. Confirm details at a glance.',
      // Icon (existing): Invoice preview with editable client, hours, rates fields.
    },
    {
      id: 3,
      title: 'Send Professional Invoices with One Click',
      description: 'Clients receive your branded invoice and a clear summary email instantly—payment made easy.',
      // Icon (existing): Envelope/paper plane with green checkmark.
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      className={`${styles.howItWorksSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
    >
      <div className={`${styles.container} container`}>
        <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>Invoice Automation in Just 3 Steps</h2>
            <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
                <motion.div key={step.id} className={styles.stepItem} variants={itemVariants}>
                 {/* If using FontAwesome icons: */}
                 {/* <div className={styles.stepIconWrapper}>
                    <FontAwesomeIcon icon={step.icon} className={styles.stepIcon} />
                 </div> */}
                 {/* If using numbered steps: */}
                 <div className={styles.stepNumber}>{index + 1}</div>
                 <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                 </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Placeholder for the illustration */}
        <motion.div className={styles.illustrationContainer} variants={illustrationVariants}>
          {/* Replace placeholder with actual image */}
          <Image
            src="/images/how-it-works.png"
            alt="How it works illustration showing the invoice creation process"
            width={600}  // Adjust these dimensions based on your actual image
            height={400} // Adjust these dimensions based on your actual image
            className={styles.illustration}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
