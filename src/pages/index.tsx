import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import Home from './Home'

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route index path='/' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
