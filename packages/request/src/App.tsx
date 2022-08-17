import React from 'react'

import { Outlet, Routes, Route } from 'react-router-dom'

// Routes
import Request from './routes/Request'
import Requests from './routes/Requests'

function App({ prop }: { prop?: string }) {
  return (
    <>
      I'm rendered ;)
      <Routes>
        <Route
          path="/"
          element={
            <div>
              REQUEST MODULE
              <p>&nbsp;</p>
              <Outlet />
            </div>
          }
        >
          <Route index element={<Requests />} />
          <Route path="/:id" element={<Request />} />
        </Route>
      </Routes>
      <hr />
    </>
  )
}

export default App
