import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { AuthProvider } from './AuthContext'; 
import { TopAnimesProvider } from './TopAnimesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App component with both providers */}
    <AuthProvider>
      <TopAnimesProvider>
        <App />
      </TopAnimesProvider>
    </AuthProvider>
  </React.StrictMode>
);


