import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import API from '../services/api';

const Profile = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profilePicture: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Load current profile data on mount
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        profilePicture: user.profilePicture || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage('File size must be less than 5MB');
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setMessage('Please upload an image file');
        return;
      }

      setLoading(true);
      const formData = new FormData();
      formData.append('profilePicture', file);

      try {
        const response = await API.post('/user/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });

        if (response.user) {
          setEditing(false);
          setMessage('Profile picture updated successfully!');
          setFormData({
            ...formData,
            profilePicture: response.user.profilePicture
          });
        } else {
          setMessage(response.message || 'Failed to upload profile picture');
        }
      } catch (err) {
        console.error('Upload error:', err);
        setMessage('Failed to upload profile picture');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await API.put('/user/profile', {
        name: formData.name,
        email: formData.email
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.user) {
        setEditing(false);
        setMessage('Profile updated successfully!');
        // Update user in context
        const updatedUser = {
          ...response.user,
          name: response.user.name,
          email: response.user.email
        };
        
        localStorage.setItem("user", JSON.stringify(updatedUser));
        
        // Navigate to refresh user data
        window.location.reload();
      } else {
        setMessage(response.message || 'No response from server');
      }
    } catch (err) {
      console.error('Update error:', err);
      setMessage('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };
        
        // Update AuthContext
        const updateUser = { ...response.user };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        
        // Navigate to refresh user data
        window.location.reload();
      } else {
        setMessage(response.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error('Update error:', err);
      setMessage('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    const { logout } = useAuth();
    logout();
    navigate('/signin');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>My Profile</h1>
        {message && (
          <div style={message.type === 'error' ? styles.errorMessage : styles.successMessage}>
            {message}
          </div>
        )}
      </div>

      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>
            {editing ? 'Edit Profile' : 'Profile Information'}
          </h2>
          {!editing && (
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          )}
        </div>

        <form onSubmit={handleProfileUpdate}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!editing}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editing}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={!editing}
              style={styles.input}
            />
            {formData.profilePicture && (
              <div style={styles.imagePreview}>
                <img
                  src={formData.profilePicture}
                  alt="Profile"
                  style={styles.profileImage}
                />
              </div>
            )}
          </div>

          <div style={styles.formActions}>
            {editing && (
              <>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  style={styles.saveButton}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </>
            ) || (
              <button
                type="button"
                onClick={() => setEditing(true)}
                style={styles.editButton}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5dc',
    padding: '40px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 10px 0',
  },
  card: {
    backgroundColor: 'white',
    border: '3px solid #2c3e50',
    borderRadius: '16px',
    padding: '30px',
    maxWidth: '500px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2c3e50',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '14px',
    border: '2px solid #d0d0d0',
    borderRadius: '6px',
    outline: 'none',
    backgroundColor: '#f8f8f8',
    color: '#2c3e50',
  },
  imagePreview: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '15px',
    border: '2px solid #d0d0d0',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  formActions: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#4a6b78',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#4a6b78',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: 'auto',
  },
  successMessage: {
    backgroundColor: '#d4edda',
    color: '#2c3e50',
    padding: '12px 20px',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
  },
  errorMessage: {
    backgroundColor: '#f8d7da',
    color: '#dc3545',
    padding: '12px 20px',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default Profile;