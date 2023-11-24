import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router.jsx'
import { SessionProvider } from '../hooks/useSession';
import 'tailwindcss/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionProvider>
    <App />
    </SessionProvider>
  </React.StrictMode>,
)
