import React from 'react'

import { Outlet, Routes, Route } from 'react-router-dom'

// Routes
import Deal from './routes/Deal'
import Deals from './routes/Deals'

function App({ prop }: { prop?: string }) {
  return (
    <>
      I'm rendered ;)
      <Routes>
        <Route
          path="/"
          element={
            <div>
              DEAL MODULE
              <p>&nbsp;</p>
              <Outlet />
            </div>
          }
        >
          <Route index element={<Deals />} />
          <Route path="/:id" element={<Deal />} />
        </Route>
      </Routes>
      <hr />
    </>
  )
}

export default App
