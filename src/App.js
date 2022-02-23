import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Login from './component/login';
import Header from './component/header';
import Friendlist from './component/freindsList';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route path = '/friends' component = {Friendlist}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/' component = {Login}/>
          <Route path = ''/>
        </Switch>
    </div>
  );
}

export default App;
