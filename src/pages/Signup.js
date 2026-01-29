import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../services/api';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Register form data being sent:', formData); // Debug log

    try {
      const res = await API.post('/auth/register', formData);
      const response = res.data;

      console.log('Register response:', response); // Debug log

      if (!response.user) {
        alert(response.message || 'Registration failed');
      } else {
        alert('Registration successful! Please login.');
        navigate('/signin'); // redirect to login page
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to Mind Mentor</h1>
        <p style={styles.subtitle}>Let's get started with your study journey</p>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Create your account</h2>

        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            <p style={styles.passwordHint}>
              Password must be at least 8 characters and contain uppercase, lowercase, and numbers
            </p>
          </div>

          <button onClick={handleSubmit} style={styles.signUpButton}>
            Register
          </button>

          <p style={styles.signInText}>
            Already have an account?{' '}
            <span onClick={() => navigate('/signin')} style={styles.signInLink}>Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5dc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '38px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: 0,
  },
  card: {
    backgroundColor: 'white',
    border: '3px solid #2c3e50',
    borderRadius: '16px',
    padding: '30px 35px',
    maxWidth: '380px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '24px',
    marginTop: 0,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '13px 16px',
    fontSize: '15px',
    border: '2px solid #d0d0d0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s',
    backgroundColor: '#f8f8f8',
    color: '#2c3e50',
  },
  passwordHint: {
    fontSize: '12px',
    color: '#888',
    marginTop: '6px',
    marginBottom: 0,
    lineHeight: '1.4',
  },
  signUpButton: {
    padding: '14px',
    backgroundColor: '#5a8a8a',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '6px',
    transition: 'background-color 0.3s',
  },
  signInText: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    marginTop: '6px',
    marginBottom: 0,
  },
  signInLink: {
    color: '#7cb342',
    cursor: 'pointer',
    fontWeight: '500',
  },
};

export default RegisterPage;