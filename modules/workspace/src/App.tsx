import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Template from './components/Template'

// @ts-ignore
const AuthModule = React.lazy(() => import('moduleAuth/App'))
// @ts-ignore
const DealModule = React.lazy(() => import('moduleDeal/App'))
// @ts-ignore
const DocumentModule = React.lazy(() => import('moduleDocument/App'))
// @ts-ignore
const RequestModule = React.lazy(() => import('moduleRequest/App'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<h1>Workspace: main page</h1>} />
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
          <Route
            path="document/*"
            element={
              <React.Suspense fallback="Loading...">
                <DocumentModule />
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
