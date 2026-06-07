import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <div style={{ display:'inline-block', background:'#fff', borderRadius:10, padding:'6px 12px', marginBottom:'0.9rem' }}>
              <img src="/logo.jpg" alt="Congo Tech Progress" style={{ height:44, width:'auto', objectFit:'contain', display:'block' }} />
            </div>
            <p>Œuvrons ensemble pour une Afrique numérique inclusive, innovante et accessible à toutes et à tous.</p>
            <div className="footer-socials">
              <a href="#" className="social-link sl-fb" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social-link sl-li" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="#" className="social-link sl-tw" aria-label="X / Twitter"><i className="fab fa-x-twitter" /></a>
              <a href="#" className="social-link sl-ig" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {[['/', 'Accueil'], ['/apropos', 'À propos'], ['/programmes', 'Programmes'], ['/documents', 'Documents']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to}><i className="fas fa-chevron-right" style={{ fontSize: '0.6rem' }} /> {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Liens utiles</h4>
            <ul>
              {[['/actualites', 'Actualités'], ['/adherer', 'Adhérer'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to}><i className="fas fa-chevron-right" style={{ fontSize: '0.6rem' }} /> {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p className="contact-li"><i className="fas fa-map-marker-alt" /> 4 rue Charles Foucault, Congo-Brazzaville</p>
            <p className="contact-li"><i className="fas fa-envelope" /> contact@congotechprogress.org</p>
            <p className="contact-li"><i className="fas fa-globe" /> www.congotechprogress.org</p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>© 2024 Congo Tech Progress — Tous droits réservés</p>
          <div className="footer-bottom-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
