import React from 'react';
import { AppProvider } from "./components/context";
import ReactDOM from 'react-dom/client';
import App from './App';
import "./app.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
);

