import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import AuthProvider from './components/context/AuthProvuder'
import './18n/18n'
import Loader from './components/loader/Loader'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </Suspense>


)
