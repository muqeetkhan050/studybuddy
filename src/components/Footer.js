import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.copyright}>© 2025 Mind Mentor. All rights reserved.</p>
        <div style={styles.socialLinks}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2c3e50" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="#2c3e50" strokeWidth="2"/>
              <circle cx="18" cy="6" r="1.5" fill="#2c3e50"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="2" stroke="#2c3e50" strokeWidth="2"/>
              <path d="M8 11V17M8 8V8.01M12 17V13.5M12 13.5V11M12 13.5C12 11 17 11 17 13.5V17" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f5f5dc',
    borderTop: '2px solid #e0e0d0',
    padding: '24px 40px',
    marginTop: '60px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  socialLinks: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

export default Footer;