import React from 'react'

import { Outlet, Routes, Route } from 'react-router-dom'

// Routes
import Login from './routes/Login'

function App() {
  return (
    <>
      I'm rendered ;)
      <Routes>
        <Route
          path="/"
          element={
            <div>
              AUTH MODULE
              <p>&nbsp;</p>
              <Outlet />
            </div>
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <hr />
    </>
  )
}

export default App
