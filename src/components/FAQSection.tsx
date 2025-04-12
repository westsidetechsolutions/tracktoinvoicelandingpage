'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FAQSection.module.css';

const FAQSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const faqs = [
    {
      question: 'Can’t I just create invoices in Everhour / Toggl / Clockify? Why would I use this?',
      answer: `Yes, most time-tracking tools offer built-in invoicing — but they’re generic, clunky, and often require you to manually format and style them. TrackToInvoice is built to go beyond that:\n\n- Create beautifully branded invoices with your logo and custom layout\n- Automatically generates clean, client-ready summary emails\n- Auto-detects clients, rates, and hours — no need to click around\n- Sends your invoice and summary email with one click\n- No setup, no templates, no learning curve — just upload and send`,
    },
    {
      question: 'Is this just a glorified template or PDF generator?',
      answer: 'Nope. TrackToInvoice is smarter than a template — it actually reads your timesheet data, matches entries to clients, and automates the entire formatting and delivery process. It’s more like a mini virtual assistant for your billing workflow.',
    },
    {
      question: 'Will it work with my time tracking software?',
      answer: `Right now, we support exports from:\n\n- Everhour\n- Toggl\n- Clockify\n\nJust export your time as a CSV — no special formatting required.\n\nDon’t see yours listed? You can still try uploading your file. We’ll guide you through mapping the fields (and we're actively expanding support).`,
    },
    {
      question: 'What file format do I need to upload?',
      answer: 'A basic .csv export from your time tracking tool is all you need. We’ll do the rest — including parsing the data, calculating totals, and generating your invoice.',
    },
    {
      question: 'What if my invoice includes different rates or retainer work?',
      answer: `TrackToInvoice supports:\n\n- Hourly rates (per client or project)\n- Flat rate retainers\n- Notes and special line items\n\nYou can review and edit everything before sending. Nothing is sent automatically without your approval.`,
    },
    {
      question: 'Do I need to install anything or set up templates?',
      answer: `No installation. No template building.\nTrackToInvoice runs entirely in your browser.\n\nJust upload your file, review the auto-generated invoice, and hit send. That’s it.`,
    },
    {
      question: 'Will my invoices look professional?',
      answer: `Yes — invoices are:\n\n- Fully branded with your logo and colors\n- Clean, modern, and easy for clients to read\n- Designed with freelancers in mind\nYou’ll look polished without doing any formatting yourself.`,
    },
    {
      question: 'What happens when I hit "send"?',
      answer: `We generate:\n\n- A branded PDF invoice\n- A client-ready summary email\n\nOne-click send from your email address (or via a connected Gmail account)\n\nYou stay in control. No invoice goes out unless you approve it.`,
    },
    {
      question: 'Is my data safe?',
      answer: `Absolutely. Your time data is never stored or shared.\n\nWe process it securely during your session to generate your invoice and email, and then it’s gone. No tracking, no storage, no snooping.`,
    },
    {
      question: 'How much does it cost?',
      answer: `TrackToInvoice is currently free for early users. We may add a paid plan in the future to support hosting and features like saved templates, recurring clients, and email tracking — but your early feedback helps shape what’s next.`,
    },
    {
      question: 'I don’t invoice that often. Is this still for me?',
      answer: `Yes! Even if you only invoice once a month or once a quarter, TrackToInvoice saves you from:\n\n- Hunting for your last invoice number\n- Copy/pasting from your timesheet\n- Writing up a new summary email\n- Making sure it all looks clean and professional\n\nIt turns a 30+ minute chore into a 2-minute breeze — no matter how often you invoice.`,
    },
  ];

  return (
    <motion.section
      id="faq"
      className={`${styles.faqSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`${styles.container} container`}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.details key={index} className={styles.faqItem} variants={itemVariants}>
              <summary className={styles.faqQuestion}>{faq.question}</summary>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
