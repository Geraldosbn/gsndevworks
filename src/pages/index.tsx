import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import About from './About'

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}
