

import React from 'react';

const Streak = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate empty contribution grid (52 weeks)
  const generateContributionGrid = () => {
    const grid = [];
    for (let i = 0; i < 7; i++) {
      const row = [];
      for (let j = 0; j < 52; j++) {
        row.push(0);
      }
      grid.push(row);
    }
    return grid;
  };

  const contributionGrid = generateContributionGrid();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.userName}>MUHAMMAD MUQEET UR REHMAN's Study Activity</h1>
        <p style={styles.lastUpdated}>Last updated: 16/01/2026</p>
      </div>

      {/* Contribution Graph */}
      <div style={styles.contributionCard}>
        <h2 style={styles.contributionTitle}>Your Study Contributions</h2>
        
        <div style={styles.graphContainer}>
          <div style={styles.monthLabels}>
            {months.map((month, index) => (
              <div key={index} style={styles.monthLabel}>{month}</div>
            ))}
          </div>

          <div style={styles.gridWrapper}>
            <div style={styles.dayLabels}>
              {days.map((day, index) => (
                <div key={index} style={styles.dayLabel}>{day}</div>
              ))}
            </div>

            <div style={styles.grid}>
              {contributionGrid.map((row, rowIndex) => (
                <div key={rowIndex} style={styles.gridRow}>
                  {row.map((cell, cellIndex) => (
                    <div key={cellIndex} style={styles.gridCell}></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.legend}>
            <span style={styles.legendText}>Less</span>
            <div style={{...styles.legendBox, backgroundColor: '#c8e6c9'}}></div>
            <div style={{...styles.legendBox, backgroundColor: '#81c784'}}></div>
            <div style={{...styles.legendBox, backgroundColor: '#4caf50'}}></div>
            <div style={{...styles.legendBox, backgroundColor: '#2e7d32'}}></div>
            <span style={styles.legendText}>More</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Current Streak</h3>
          <p style={styles.statValue}>0 days</p>
        </div>

        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Total Study Days</h3>
          <p style={styles.statValue}>0 days</p>
        </div>

        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Best Streak</h3>
          <p style={styles.statValue}>0 days</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f5f5dc',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    marginBottom: '30px',
  },
  userName: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 8px 0',
  },
  lastUpdated: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  contributionCard: {
    backgroundColor: 'white',
    border: '2px solid #2c3e50',
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '24px',
  },
  contributionTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 0,
    marginBottom: '24px',
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  monthLabels: {
    display: 'flex',
    marginLeft: '50px',
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
  },
  monthLabel: {
    width: '56px',
    textAlign: 'center',
  },
  gridWrapper: {
    display: 'flex',
    gap: '8px',
  },
  dayLabels: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    fontSize: '12px',
    color: '#666',
    paddingTop: '2px',
    width: '42px',
  },
  dayLabel: {
    height: '13px',
    display: 'flex',
    alignItems: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  gridRow: {
    display: 'flex',
    gap: '3px',
  },
  gridCell: {
    width: '13px',
    height: '13px',
    backgroundColor: '#e8e8e8',
    borderRadius: '2px',
  },
  legend: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '6px',
    marginTop: '16px',
    fontSize: '12px',
    color: '#666',
  },
  legendText: {
    fontSize: '12px',
  },
  legendBox: {
    width: '12px',
    height: '12px',
    borderRadius: '2px',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  statCard: {
    backgroundColor: 'white',
    border: '2px solid #2c3e50',
    borderRadius: '12px',
    padding: '32px',
  },
  statTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50',
    margin: '0 0 16px 0',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: 0,
  },
};

export default Streak;