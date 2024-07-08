import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/ui/Loader.jsx'

// Just to show you my loading screen 😁
const App = lazy(() =>
  new Promise(
    resolve => setTimeout(
      () => resolve(import('./App.jsx')), 3000
    )))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
