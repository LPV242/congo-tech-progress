import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Documents from './pages/Documents'
import News from './pages/News'
import Join from './pages/Join'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/apropos"    element={<About />} />
        <Route path="/programmes" element={<Programs />} />
        <Route path="/documents"  element={<Documents />} />
        <Route path="/actualites" element={<News />} />
        <Route path="/adherer"    element={<Join />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </Router>
  )
}
