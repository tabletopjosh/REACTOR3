import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

function App() {
  const [message, setMessage] = useState('Welcome to the React App!');

  return (
    <div className="App">
      <Header title="My React App" />
      <Content message={message} />
    </div>
  );
}

export default App;
