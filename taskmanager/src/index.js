import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterPage from './router/router';
import { AuthProvider } from './context/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterPage />
    </AuthProvider>
  </React.StrictMode>
);
