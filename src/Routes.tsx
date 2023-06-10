import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Resume } from './pages/Resume'
import { Contact } from './pages/Contact'
import { About } from './pages/About'

//import About from './pages/About';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<About />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
