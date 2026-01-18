

import React from 'react';

// Icon Components
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StickyNoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
    <path d="M14 2v6h6" />
  </svg>
);

const LogOutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const SidebarButton = ({ icon: Icon, label, active = false, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const buttonStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    textAlign: 'left',
    transition: 'all 0.2s',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: active ? '#ffffff' : (isHovered ? '#e8e4d8' : 'transparent'),
    color: active ? '#1d4ed8' : '#374151',
    borderRight: active ? '4px solid #1d4ed8' : 'none',
    fontWeight: '500',
    fontSize: '15px'
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon />
      <span>{label}</span>
    </button>
  );
};

// Section Header Component
const SectionHeader = ({ title }) => (
  <div style={{ padding: '24px 16px 8px 16px' }}>
    <h3 style={{
      fontSize: '11px',
      fontWeight: '600',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }}>
      {title}
    </h3>
  </div>
);

// User Profile Component
const UserProfile = ({ name }) => (
  <div style={{ padding: '12px 16px', marginBottom: '8px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#2563eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: '16px'
      }}>
        M
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Welcome,</p>
        <p style={{ fontWeight: '600', color: '#1f2937', margin: 0, fontSize: '13px' }}>{name}</p>
      </div>
    </div>
  </div>
);

// Main Leftbar Component
const Leftbar = ({ setActiveComponent }) => {
  const [activeTab, setActiveTab] = React.useState('streak');

  const handleButtonClick = (tabName, componentName) => {
    setActiveTab(tabName);
    if (setActiveComponent) {
      setActiveComponent(componentName);
    }
  };

  const [menuHovered, setMenuHovered] = React.useState(false);

  return (
    <div style={{
      width: '300px',
      minWidth: '300px',
      height: '100vh',
      backgroundColor: '#f5f1e8',
      borderRight: '1px solid #e5e7eb',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      flexShrink: 0
    }}>
      {/* User Profile Section */}
      <UserProfile name="MUHAMMAD" />

      {/* Collapsible Menu Icon */}
      <div style={{ padding: '0 16px', marginBottom: '16px' }}>
        <button
          style={{
            width: '100%',
            padding: '8px',
            backgroundColor: menuHovered ? '#e8e4d8' : 'transparent',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={() => setMenuHovered(true)}
          onMouseLeave={() => setMenuHovered(false)}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '24px',
              height: '24px',
              border: '2px solid #9ca3af',
              borderRadius: '4px'
            }}></div>
          </div>
        </button>
      </div>

      {/* General Section */}
      <SectionHeader title="General" />
      <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <SidebarButton
          icon={HomeIcon}
          label="Home"
          active={activeTab === 'home'}
          onClick={() => handleButtonClick('home', 'streak')}
        />
        <SidebarButton
          icon={UserIcon}
          label="Profile"
          active={activeTab === 'profile'}
          onClick={() => handleButtonClick('profile', 'profile')}
        />
      </div>

      {/* Study Tools Section */}
      <SectionHeader title="Study Tools" />
      <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <SidebarButton
          icon={CalendarIcon}
          label="Planner"
          active={activeTab === 'planner'}
          onClick={() => handleButtonClick('planner', 'planner')}
        />
        <SidebarButton
          icon={BookIcon}
          label="Resources"
          active={activeTab === 'resources'}
          onClick={() => handleButtonClick('resources', 'resources')}
        />
        <SidebarButton
          icon={FileTextIcon}
          label="Scriba"
          active={activeTab === 'scriba'}
          onClick={() => handleButtonClick('scriba', 'scriba')}
        />
        <SidebarButton
          icon={ClockIcon}
          label="Timer"
          active={activeTab === 'timer'}
          onClick={() => handleButtonClick('timer', 'timer')}
        />
        <SidebarButton
          icon={StickyNoteIcon}
          label="Notes"
          active={activeTab === 'notes'}
          onClick={() => handleButtonClick('notes', 'notes')}
        />
      </div>

      {/* Spacer to push logout to bottom */}
      <div style={{ flex: 1 }}></div>

      {/* Account Section */}
      <SectionHeader title="Account" />
      <div style={{ padding: '0 8px 16px 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <SidebarButton
          icon={LogOutIcon}
          label="Log out"
          active={false}
          onClick={() => console.log('Logging out...')}
        />
      </div>
    </div>
  );
};

export default Leftbar;