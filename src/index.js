import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
);


