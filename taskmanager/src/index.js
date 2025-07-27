import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterPage from './router/router';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from "./context/ProjectContext";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <RouterPage />
      </ProjectProvider>
    </AuthProvider>
  </React.StrictMode>
);
