import { Routes, Route } from 'react-router-dom'

// Routes
import Login from './routes/Login'

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default App
