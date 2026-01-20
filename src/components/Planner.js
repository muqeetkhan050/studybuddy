import React, { useState } from 'react';

function StudyPlanGenerator() {
  const [plans, setPlans] = useState([]);
  const [topic, setTopic] = useState('');
  const [examDate, setExamDate] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const handleCreatePlan = () => {
    if (!topic || !examDate) return;
    
    const today = new Date();
    const exam = new Date(examDate);
    const daysUntilExam = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));
    
    const newPlan = {
      id: Date.now(),
      topic: topic,
      examDate: examDate,
      daysLeft: daysUntilExam,
      status: 'Active',
      createdAt: new Date().toISOString()
    };
    
    setPlans([...plans, newPlan]);
    setTopic('');
    setExamDate('');
  };

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
    const newExpanded = { ...expandedSections };
    delete newExpanded[`final-${id}`];
    delete newExpanded[`rec-${id}`];
    setExpandedSections(newExpanded);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f1e8',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1e3a5f',
            margin: 0
          }}>Study Plan Generator</h1>
          <p style={{
            color: '#6b7280',
            margin: 0
          }}>Create and manage your study plans</p>
        </div>

        {/* Input Section */}
        <div style={{
          backgroundColor: 'white',
          border: '3px solid #1e3a5f',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <input
              type="text"
              placeholder="Enter your study topic..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={{
                padding: '16px 20px',
                fontSize: '16px',
                border: '2px solid #1e3a5f',
                borderRadius: '8px',
                outline: 'none',
                backgroundColor: '#f9fafb',
                color: '#374151',
                fontFamily: 'inherit'
              }}
            />
            <div style={{ position: 'relative' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none'
                }}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                style={{
                  padding: '16px 20px 16px 48px',
                  fontSize: '16px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  outline: 'none',
                  backgroundColor: '#f9fafb',
                  color: '#374151',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleCreatePlan}
              style={{
                padding: '14px 40px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: '#9cb4a8',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#8aa397'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#9cb4a8'}
            >
              Create Study Plan
            </button>
          </div>
        </div>

        {/* Study Plans List */}
        <div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1e3a5f',
            marginBottom: '30px'
          }}>Your Study Plans</h2>

          {plans.length === 0 ? (
            <div style={{
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: '60px',
              textAlign: 'center',
              color: '#9ca3af'
            }}>
              <p style={{ margin: 0, fontSize: '16px' }}>No study plans yet. Create one above to get started!</p>
            </div>
          ) : (
            plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  backgroundColor: 'white',
                  border: '3px solid #1e3a5f',
                  borderRadius: '12px',
                  padding: '30px',
                  marginBottom: '20px'
                }}
              >
                {/* Plan Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#1e3a5f',
                      margin: '0 0 12px 0'
                    }}>Study Plan for {plan.topic}</h3>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        fontWeight: '600'
                      }}>{plan.daysLeft} days</span>
                      <span style={{
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>Exam: {plan.examDate}</span>
                      <span style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'white',
                        backgroundColor: '#1e3a5f',
                        padding: '4px 12px',
                        borderRadius: '12px'
                      }}>{plan.status}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => deletePlan(plan.id)}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '600',
                      backgroundColor: 'white',
                      color: '#1e3a5f',
                      border: '2px solid #1e3a5f',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'inherit'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#1e3a5f';
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#1e3a5f';
                    }}
                  >
                    Delete Plan
                  </button>
                </div>

                {/* Collapsible Sections */}
                <div style={{
                  borderTop: '2px solid #e5e7eb',
                  paddingTop: '20px'
                }}>
                  {/* Final Week Section */}
                  <div style={{ marginBottom: '16px' }}>
                    <button
                      onClick={() => toggleSection(`final-${plan.id}`)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 0',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}
                    >
                      <h4 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#1e3a5f',
                        margin: 0
                      }}>Final Week</h4>
                      <span style={{
                        fontSize: '20px',
                        color: '#6b7280',
                        transform: expandedSections[`final-${plan.id}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }}>▼</span>
                    </button>
                    {expandedSections[`final-${plan.id}`] && (
                      <div style={{
                        padding: '16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        marginTop: '8px'
                      }}>
                        <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.6' }}>
                          Focus on review sessions, practice tests, and consolidating key concepts for {plan.topic}.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Recommendations Section */}
                  <div>
                    <button
                      onClick={() => toggleSection(`rec-${plan.id}`)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 0',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}
                    >
                      <h4 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#1e3a5f',
                        margin: 0
                      }}>Recommendations</h4>
                      <span style={{
                        fontSize: '20px',
                        color: '#6b7280',
                        transform: expandedSections[`rec-${plan.id}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }}>▼</span>
                    </button>
                    {expandedSections[`rec-${plan.id}`] && (
                      <div style={{
                        padding: '16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        marginTop: '8px'
                      }}>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: '#6b7280', lineHeight: '1.8' }}>
                          <li>Create a daily study schedule with breaks every 45-60 minutes</li>
                          <li>Use active recall and spaced repetition techniques</li>
                          <li>Practice with past papers and sample questions</li>
                          <li>Form or join a study group for collaborative learning</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyPlanGenerator;