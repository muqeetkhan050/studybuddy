import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import './Profile.css';

const Profile = () => {
  const { user, token } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email || '');
      if (user.profilePicture) {
        setPreviewImage(user.profilePicture);
      }
    }
  }, [user]);

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Email updated successfully!');
        setIsEditing(false);
        // Update user in localStorage and context
        const updatedUser = { ...user, email };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        // Force a re-render by updating window location slightly
        window.dispatchEvent(new Event('storage'));
      } else {
        setMessage(data.message || 'Failed to update email');
      }
    } catch (error) {
      setMessage('Error updating email');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setProfilePicture(file);
      };
      reader.readAsDataURL(file);

      // Upload image to server
      const formData = new FormData();
      formData.append('profilePicture', file);

      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/auth/upload-profile-picture', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        });

        const data = await response.json();

        if (response.ok) {
          setMessage('Profile picture updated successfully!');
          // Update user in localStorage
          const updatedUser = { ...user, profilePicture: data.profilePicture };
          localStorage.setItem('user', JSON.stringify(updatedUser));
          // Force a re-render
          window.dispatchEvent(new Event('storage'));
        } else {
          setMessage(data.message || 'Failed to upload profile picture');
        }
      } catch (error) {
        setMessage('Error uploading profile picture');
      } finally {
        setLoading(false);
      }
    }
  };

  if (!user) {
    return <div className="profile-container">Please login to view profile</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Profile</h2>
        
        {/* Profile Picture Section */}
        <div className="profile-picture-section">
          <div className="profile-picture">
            {previewImage ? (
              <img src={previewImage} alt="Profile" className="profile-image" />
            ) : (
              <div className="default-avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
            )}
          </div>
          <div className="upload-section">
            <label htmlFor="profile-upload" className="upload-btn">
              Change Picture
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* User Info Section */}
        <div className="user-info">
          <div className="info-item">
            <label>Name:</label>
            <span>{user.name}</span>
          </div>

          <div className="info-item">
            <label>Email:</label>
            {isEditing ? (
              <form onSubmit={handleEmailUpdate} className="email-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email-input"
                />
                <div className="email-actions">
                  <button type="submit" disabled={loading} className="save-btn">
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => {
                      setIsEditing(false);
                      setEmail(user.email);
                    }} 
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="email-display">
                <span>{user.email}</span>
                <button onClick={() => setIsEditing(true)} className="edit-btn">
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="info-item">
            <label>Member Since:</label>
            <span>{new Date(user.createdAt || Date.now()).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;