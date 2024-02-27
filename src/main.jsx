import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-rater/lib/react-rater.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { AppContextProvider } from './context/AppContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
