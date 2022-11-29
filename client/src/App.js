import React from 'react';
import ReactDOM from 'react-dom';
import quoteForm from './components/quoteForm';

import logo from './logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Receive a free quote and schedule your procedure in minutes.</p>
        <p>Just answer a few questions and we'll do the rest.</p>
        <button
          type='modal' 
          className='btn'
          onClick={quoteForm}
        >
          Proceed to questionaire
        </button>
      </header>
    </div>
  );
}

export default App;
