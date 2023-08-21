import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { AuthProvider } from './AuthContext'; 
import { TopAnimesProvider } from './TopAnimesContext';
import { UserProvider } from './UserContext';
import { AnimeProvider } from './AnimeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App component with both providers */}
    <AnimeProvider>
    <UserProvider>
    <AuthProvider>
      <TopAnimesProvider>
        <App />
      </TopAnimesProvider>
    </AuthProvider>
    </UserProvider>
    </AnimeProvider>
  </React.StrictMode>
);


