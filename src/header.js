import React from 'react';
import './Content.css';
import logo from './logo.png'; // Ensure this image is in the 'src' folder

function Content({ message }) {
  return (
    <main>
      <p>{message}</p>
      <img src={logo} alt="Logo" className="logo" />
    </main>
  );
}

export default Content;
