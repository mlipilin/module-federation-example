import { Routes, Route } from 'react-router-dom'

// Routes
import Request from './routes/Request'
import Requests from './routes/Requests'

function App() {
  return (
    <Routes>
      <Route index element={<Requests />} />
      <Route path=":id" element={<Request />} />
    </Routes>
  )
}

export default App
