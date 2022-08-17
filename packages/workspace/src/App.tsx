import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Template from './components/Template'

// @ts-ignore
const AuthModule = React.lazy(() => import('auth/App'))
// @ts-ignore
const DealModule = React.lazy(() => import('deal/App'))
// @ts-ignore
const RequestModule = React.lazy(() => import('request/App'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<h1>Workspace: main page</h1>} />
          <Route
            path="request/*"
            element={
              <React.Suspense fallback="Loading...">
                <RequestModule />
              </React.Suspense>
            }
          />
          <Route
            path="deal/*"
            element={
              <React.Suspense fallback="Loading...">
                <DealModule />
              </React.Suspense>
            }
          />
          <Route
            path="auth/*"
            element={
              <React.Suspense fallback="Loading...">
                <AuthModule />
              </React.Suspense>
            }
          />
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
