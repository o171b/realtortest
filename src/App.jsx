import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    </Routes>
    </Router>
  )
}

export default App
