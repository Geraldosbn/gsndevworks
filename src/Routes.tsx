import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import About from './pages/About'

//import About from './pages/About';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Resume' element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
