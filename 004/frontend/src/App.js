import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
    fetch(`${backendUrl}/api/message`)
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;