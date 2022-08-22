import { Routes, Route } from 'react-router-dom'

// Routes
import Deal from './routes/Deal'
import Deals from './routes/Deals'

function App() {
  return (
    <Routes>
      <Route index element={<Deals />} />
      <Route path=":id" element={<Deal />} />
    </Routes>
  )
}

export default App
