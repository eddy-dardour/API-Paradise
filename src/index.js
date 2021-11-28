import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home.jsx';
import {Header} from './pages/Home.jsx'
import reportWebVitals from './reportWebVitals';
import { General } from './pages/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <General/>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
