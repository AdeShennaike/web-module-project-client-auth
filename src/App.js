import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className = 'header'>
        <h1>FRIENDS DATABASE</h1>
        <nav>
          <a>LOGIN.</a>
          <a>FRIENDLIST.</a>
          <a>ADDFRIEND.</a>
          <a>LOGOUT</a>
        </nav>
      </header>
      <h2> LOGIN </h2>
      <form>
        <label htmlFor='username'> Username </label>
        <input 
          className = 'input'
          labelHtml = 'name'
          type = 'text'
          />
        <label htmlFor='password'> Password </label>
        <input
          className = 'input'
          labelHtml = 'name'
          type = 'text'
        />
        <button> SUBMIT </button>
      </form>
    </div>
  );
}

export default App;
