import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { HashRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Canvas } from 'react-three-fiber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

<span className="above">
  <HashRouter basename='/'>
      <App className="above"/>


    </HashRouter>

    </span>
    <img className='bgimg' src='https://i.imgur.com/gRVV7mn.jpg'/>

    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
