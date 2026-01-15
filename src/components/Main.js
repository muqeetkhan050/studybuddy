

import React, { useState } from 'react';
import Questions from './Questions';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const OurHeader = () => {
    const navigate=useNavigate();
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>📚</div>
        <span style={styles.logoText}>Study Buddy</span>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.githubButton}>
          ⭐ GitHub 131
        </button>
        <button onClick={()=>navigate('/signin')} style={styles.signInButton}>Sign in</button>
        <button onClick={()=>navigate('/register')} style={styles.signUpButton}>Register</button>
      </div>
    </header>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.card,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.cardIconWrapper}>
        <span style={styles.cardIcon}>{icon}</span>
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
};

const Main = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const navigate=useNavigate();

  const features = [
    {
      icon: "📖",
      title: "Personalized Study Plans",
      description: "Get tailored study plans based on your goals and learning style."
    },
    {
      icon: "💡",
      title: "AI-Curated Resources",
      description: "Access the best learning materials curated by our AI."
    },
    {
      icon: "⏰",
      title: "Time Management",
      description: "Manage your time effectively and stay on top of your studies."
    }
  ];

  return (
    <div style={styles.app}>
      <OurHeader />
      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.heroIcon}>🎓</div>
          <h1 style={styles.heroTitle}>
            Welcome to <span style={styles.highlight}>Study Buddy</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Your AI-powered study assistant for accelerated learning
          </p>
          <button 
            style={{
              ...styles.getStartedButton,
              transform: buttonHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
       
            onClick={()=>navigate('/register')} 
          >
            Get Started →
          </button>
        </div>
        
        <div style={styles.cardsContainer}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </main>
      <Questions />
      <Footer/>
    </div>
  );
};

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5dc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#f5f5dc',
    borderBottom: '2px solid #e0e0d0',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#7cb342',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2c3e50',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
  },
  githubButton: {
    padding: '10px 20px',
    backgroundColor: '#7cb342',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  signInButton: {
    padding: '10px 24px',
    backgroundColor: 'transparent',
    color: '#2c3e50',
    border: '2px solid #7cb342',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  signUpButton: {
    padding: '10px 24px',
    backgroundColor: '#7cb342',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  heroIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#7cb342',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    margin: '0 auto 30px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '16px',
  },
  highlight: {
    color: '#7cb342',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
  },
  getStartedButton: {
    padding: '14px 32px',
    backgroundColor: '#7cb342',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  card: {
    backgroundColor: 'white',
    border: '2px solid #2c3e50',
    borderRadius: '12px',
    padding: '32px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  cardIconWrapper: {
    width: '50px',
    height: '50px',
    backgroundColor: '#f0f8e8',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  cardIcon: {
    fontSize: '24px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '12px',
  },
  cardDescription: {
    fontSize: '15px',
    color: '#666',
    lineHeight: '1.6',
  },
};

export default Main;