'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './WaitlistCTASection.module.css';

const WaitlistCTASection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Email validation function
  const validateEmail = (email: string) => {
    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Validate email before submission
    if (!validateEmail(email)) {
      e.preventDefault(); // Only prevent submission if email is invalid
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // If email is valid, allow the form to submit normally
    setIsLoading(true);
    
    // Set submitted state after a short delay to show success message
    // This happens after the form has already started submitting
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <motion.section
      id="waitlist"
      className={`${styles.waitlistSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${styles.container} container`}>
        <h2 className={styles.headline}>Be the First to Try TrackToInvoice</h2>
        <p className={styles.subheadline}>
          Join our waitlist and get early access + an exclusive deal when we launch.
        </p>

        {!isSubmitted ? (
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            action="https://docs.google.com/forms/d/e/1FAIpQLSfaltu8LOnMQz-D5bvjGb7p5L8Pt0ClUAveJJuwktAjLEGGrw/formResponse"
            method="POST"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className={styles.inputWrapper}>
              <input
                type="email"
                name="entry.1784420640"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                required
                className={`${styles.emailInput} ${emailError ? styles.inputError : ''}`}
                aria-label="Email address for waitlist"
                aria-invalid={emailError ? 'true' : 'false'}
                aria-describedby={emailError ? 'email-error' : undefined}
              />
              {emailError && <p id="email-error" className={styles.errorMessage}>{emailError}</p>}
            </div>
            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading || !!emailError}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? 'Joining...' : 'Join the Waitlist'}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className={styles.successMessage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            🎉 You&apos;re on the list! We&apos;ll email you when we launch.
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default WaitlistCTASection;
