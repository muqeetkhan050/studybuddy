


// // import React from 'react';
// // import { useAuth } from '../context/authContext';
// // import { useNavigate } from 'react-router-dom';

// // const HomeIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
// //     <polyline points="9 22 9 12 15 12 15 22" />
// //   </svg>
// // );

// // const UserIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
// //     <circle cx="12" cy="7" r="4" />
// //   </svg>
// // );

// // const CalendarIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
// //     <line x1="16" y1="2" x2="16" y2="6" />
// //     <line x1="8" y1="2" x2="8" y2="6" />
// //     <line x1="3" y1="10" x2="21" y2="10" />
// //   </svg>
// // );

// // const ClockIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <circle cx="12" cy="12" r="10" />
// //     <polyline points="12 6 12 12 16 14" />
// //   </svg>
// // );

// // const StickyNoteIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
// //     <path d="M14 2v6h6" />
// //   </svg>
// // );

// // const LogOutIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
// //     <polyline points="16 17 21 12 16 7" />
// //     <line x1="21" y1="12" x2="9" y2="12" />
// //   </svg>
// // );

// // const SidebarButton = ({ icon: Icon, label, active = false, onClick }) => {
// //   const [isHovered, setIsHovered] = React.useState(false);

// //   const buttonStyle = {
// //     width: '100%',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //     padding: '10px 16px',
// //     textAlign: 'left',
// //     transition: 'all 0.2s',
// //     borderRadius: '8px',
// //     border: 'none',
// //     cursor: 'pointer',
// //     backgroundColor: active ? '#ffffff' : (isHovered ? '#e8e4d8' : 'transparent'),
// //     color: active ? '#1d4ed8' : '#374151',
// //     borderRight: active ? '4px solid #1d4ed8' : 'none',
// //     fontWeight: '500',
// //     fontSize: '15px'
// //   };

// //   return (
// //     <button
// //       onClick={onClick}
// //       style={buttonStyle}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <Icon />
// //       <span>{label}</span>
// //     </button>
// //   );
// // };

// // const SectionHeader = ({ title }) => (
// //   <div style={{ padding: '24px 16px 8px 16px' }}>
// //     <h3 style={{
// //       fontSize: '11px',
// //       fontWeight: '600',
// //       color: '#6b7280',
// //       textTransform: 'uppercase',
// //       letterSpacing: '0.05em'
// //     }}>
// //       {title}
// //     </h3>
// //   </div>
// // );

// // // User Profile Component - NOW ACCEPTS NAME AS PROP
// // const UserProfile = ({ name }) => {
// //   // Get first letter for avatar - handles both single and multiple names
// //   const getInitial = (fullName) => {
// //     if (!fullName) return 'U';
// //     return fullName.charAt(0).toUpperCase();
// //   };

// //   return (
// //     <div style={{ padding: '12px 16px', marginBottom: '8px' }}>
// //       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
// //         <div style={{
// //           width: '40px',
// //           height: '40px',
// //           borderRadius: '50%',
// //           backgroundColor: '#2563eb',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           color: 'white',
// //           fontWeight: '600',
// //           fontSize: '16px'
// //         }}>
// //           {getInitial(name)}
// //         </div>
// //         <div>
// //           <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Welcome,</p>
// //           <p style={{ fontWeight: '600', color: '#1f2937', margin: 0, fontSize: '13px' }}>
// //             {name || 'User'}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Leftbar Component
// // const Leftbar = ({ setActiveComponent }) => {
// //   const [activeTab, setActiveTab] = React.useState('streak');
// //   const [menuHovered, setMenuHovered] = React.useState(false);
// //   const navigate = useNavigate();
// //   const { logout, user } = useAuth(); // GET USER FROM AUTH CONTEXT

// //   const handleButtonClick = (tabName, componentName) => {
// //     setActiveTab(tabName);
// //     if (setActiveComponent) {
// //       setActiveComponent(componentName);
// //     }
// //   };

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/signin');
// //   };

// //   return (
// //     <div style={{
// //       width: '300px',
// //       minWidth: '300px',
// //       height: '100vh',
// //       backgroundColor: '#f5f1e8',
// //       borderRight: '1px solid #e5e7eb',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       overflow: 'hidden',
// //       flexShrink: 0
// //     }}>
// //       {/* User Profile Section - PASS DYNAMIC USERNAME */}
// //       <UserProfile name={user?.name} />

// //       {/* Collapsible Menu Icon */}
// //       <div style={{ padding: '0 16px', marginBottom: '16px' }}>
// //         <button
// //           style={{
// //             width: '100%',
// //             padding: '8px',
// //             backgroundColor: menuHovered ? '#e8e4d8' : 'transparent',
// //             border: 'none',
// //             borderRadius: '8px',
// //             cursor: 'pointer',
// //             transition: 'background-color 0.2s'
// //           }}
// //           onMouseEnter={() => setMenuHovered(true)}
// //           onMouseLeave={() => setMenuHovered(false)}
// //         >
// //           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //             <div style={{
// //               width: '24px',
// //               height: '24px',
// //               border: '2px solid #9ca3af',
// //               borderRadius: '4px'
// //             }}></div>
// //           </div>
// //         </button>
// //       </div>

// //       {/* General Section */}
// //       <SectionHeader title="General" />
// //       <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
// //         <SidebarButton
// //           icon={HomeIcon}
// //           label="Home"
// //           active={activeTab === 'home'}
// //           onClick={() => handleButtonClick('home', 'streak')}
// //         />
// //         <SidebarButton
// //           icon={UserIcon}
// //           label="Profile"
// //           active={activeTab === 'profile'}
// //           onClick={() => handleButtonClick('profile', 'profile')}
// //         />
// //       </div>

// //       {/* Study Tools Section */}
// //       <SectionHeader title="Study Tools" />
// //       <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
// //         <SidebarButton
// //           icon={CalendarIcon}
// //           label="Planner"
// //           active={activeTab === 'planner'}
// //           onClick={() => handleButtonClick('planner', 'planner')}
// //         />

// //         <SidebarButton
// //           icon={ClockIcon}
// //           label="Timer"
// //           active={activeTab === 'timer'}
// //           onClick={() => handleButtonClick('timer', 'timer')}
// //         />
// //         <SidebarButton
// //           icon={StickyNoteIcon}
// //           label="Notes"
// //           active={activeTab === 'notes'}
// //           onClick={() => handleButtonClick('notes', 'notes')}
// //         />
// //       </div>

// //       {/* Spacer to push logout to bottom */}
// //       <div style={{ flex: 1 }}></div>

// //       {/* Account Section */}
// //       <SectionHeader title="Account" />
// //       <div style={{ padding: '0 8px 16px 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
// //         <SidebarButton
// //           icon={LogOutIcon}
// //           label="Log out"
// //           active={false}
// //           onClick={handleLogout}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Leftbar;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/authContext';
// import './Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   // Clear any existing session when visiting login page
//   useEffect(() => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('https://studybuddy-osk1.onrender.com/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         login(data.user, data.token);
//         navigate('/home');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('Server error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Sign In</h2>
//         {error && <div className="error-message">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? 'Signing in...' : 'Sign In'}
//           </button>
//         </form>
//         <p>
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import API from '../services/api';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await API.post('/auth/login', formData);
      const response = res.data;

      console.log('Login response:', response); // Debug log
      console.log('Response user:', response.user); // Debug log
      console.log('Response token:', response.token); // Debug log

      if (!response.user) {
        setError(response.message || 'Login failed');
      } else {
        console.log('Calling login function with:', response.user, response.token); // Debug log
        login(response.user, response.token);
        console.log('Navigating to /home...'); // Debug log
        navigate('/home');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Try again later.');
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to Mind Mentor</h1>
        <p style={styles.subtitle}>Sign in to continue your study journey</p>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Sign in to your account</h2>

        <div style={styles.formContainer}>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

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
          </div>

          <button
            onClick={handleSubmit}
            style={{ ...styles.signUpButton, opacity: loading ? 0.6 : 1 }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>

          <p style={styles.signInText}>
            Don't have an account?{' '}
            <span onClick={() => navigate('/register')} style={styles.signInLink}>Register</span>
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
