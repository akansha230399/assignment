import React, { useEffect, useState } from 'react';

function App() {
  const [varData, setVarData] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setVarData(data.var))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome {varData}</h1>
      </header>
    </div>
  );
}

export default App;
