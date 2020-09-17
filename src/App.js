import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={MainPage} />


    </div>
  )
}

export default App;
