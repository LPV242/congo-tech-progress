import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/',           label: 'Accueil' },
  { to: '/apropos',    label: 'À propos' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/documents',  label: 'Documents officiels' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={close} style={{ flexDirection:'row', alignItems:'center', gap:'10px' }}>
          <img src="/logo.jpg" alt="Congo Tech Progress" style={{ height:48, width:'auto', objectFit:'contain' }} />
        </Link>

        <button
          className={`nav-toggle${open ? ' active' : ''}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-menu${open ? ' open' : ''}`} role="list">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={pathname === l.to ? 'active' : ''}
                onClick={close}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="nav-cta">
            <Link to="/adherer" onClick={close}>Adhérer</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
