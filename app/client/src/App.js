import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [clickCount, setClickCount] = useState(0);

  // Handle button click
  const handleButtonClick = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/hello');
      setMessage(response.data.message);
      setClickCount(response.data.click_count);
    } catch (err) {
      setError('Failed to connect to server: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🚀 Template Utils - Hello Template App</h1>
        <p>Simple sample application with React + Python + PostgreSQL</p>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="card">
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleButtonClick}
            className="btn"
            disabled={loading}
            style={{
              fontSize: '18px',
              padding: '15px 30px',
              marginBottom: '20px'
            }}
          >
            {loading ? 'Processing...' : 'Click Me!'}
          </button>

          {message && (
            <div style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: '#e8f5e8',
              border: '2px solid #4caf50',
              borderRadius: '8px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#2e7d32'
            }}>
              {message}
            </div>
          )}

          {clickCount > 0 && (
            <div style={{
              marginTop: '15px',
              fontSize: '16px',
              color: '#666'
            }}>
              Total clicks: {clickCount}
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <h3>🏗️ Architecture Information</h3>
        <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
          <li><strong>Frontend:</strong> React (this page)</li>
          <li><strong>Backend:</strong> Python FastAPI</li>
          <li><strong>Database:</strong> PostgreSQL</li>
          <li><strong>Feature:</strong> Save and retrieve button click counts to/from DB</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
