import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/authcontext.jsx';
import { SocketContextProvider } from './context/socketcontext.jsx';
import { ToastContainer } from 'react-toastify'; // Ensure the correct path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
<SocketContextProvider>

        <App />
        </SocketContextProvider>
    </AuthContextProvider>
   
  </React.StrictMode>
);
