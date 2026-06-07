import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const docs = [
  {
    section: 'Documents fondateurs', sectionIcon: 'fa-folder-open', sectionColor: 'var(--green)',
    items: [
      { title: 'Statuts de l\'association', desc: 'Document fondateur définissant l\'objet, l\'organisation et le fonctionnement — Version 1.0 • 2024', available: true },
      { title: 'Règlement intérieur',       desc: 'Règles de fonctionnement interne, droits et obligations des membres — Version 1.0 • 2024',               available: true },
    ]
  },
  {
    section: 'Rapports annuels', sectionIcon: 'fa-chart-bar', sectionColor: 'var(--blue)',
    items: [
      { title: 'Rapport annuel 2024', desc: 'Bilan des activités, résultats financiers et perspectives — Exercice 2024', available: false },
      { title: 'Rapport d\'activité 2025', desc: 'Bilan des activités et résultats des programmes — Exercice 2025',       available: false },
    ]
  },
  {
    section: 'Assemblées générales', sectionIcon: 'fa-gavel', sectionColor: 'var(--red)',
    items: [
      { title: 'Procès-verbal — Assemblée Générale Constitutive', desc: 'PV de l\'assemblée de fondation de l\'association — Novembre 2024', available: true },
      { title: 'Procès-verbal — AG Ordinaire 2025',               desc: 'PV de la première assemblée générale ordinaire — 2025',             available: false },
    ]
  },
]

export default function Documents() {
  useScrollReveal()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Documents officiels</h1>
          <p className="lead">Dans un esprit de transparence totale, Congo Tech Progress met à disposition ses documents officiels.</p>
          <nav className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span className="sep"><i className="fas fa-chevron-right" style={{ fontSize:'0.6rem' }} /></span>
            <span className="current">Documents officiels</span>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="docs-intro fade-up" style={{ maxWidth:760, margin:'0 auto 2.5rem' }}>
            <p>
              <strong><i className="fas fa-info-circle" style={{ color:'var(--blue)', marginRight:6 }} />Engagement de transparence.</strong>{' '}
              Congo Tech Progress s'engage à fonctionner avec la plus grande transparence. Nos documents fondateurs
              sont librement consultables et téléchargeables ci-dessous.
            </p>
          </div>

          {docs.map(group => (
            <div key={group.section} style={{ maxWidth:760, margin:'0 auto 3rem' }}>
              <h2 className="fade-up" style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:'1.5rem', paddingBottom:'0.6rem', borderBottom:'2px solid var(--gray)' }}>
                <i className={`fas ${group.sectionIcon}`} style={{ color: group.sectionColor, marginRight:8 }} />
                {group.section}
              </h2>
              <div className="documents-list">
                {group.items.map((doc, i) => (
                  <div className={`document-item fade-up d${i+1}`} key={doc.title}>
                    <div className="doc-icon">
                      <i className={`fas ${doc.available ? 'fa-file-pdf' : 'fa-file-alt'}`} />
                    </div>
                    <div className="doc-info">
                      <h3>{doc.title}</h3>
                      <p>{doc.desc}</p>
                    </div>
                    <div className="doc-action">
                      {doc.available
                        ? <a href="#" onClick={e => { e.preventDefault(); alert('Le document sera disponible prochainement.') }}>
                            <i className="fas fa-download" /> Télécharger (PDF)
                          </a>
                        : <span className="doc-coming"><i className="fas fa-clock" /> À venir</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="fade-up" style={{ maxWidth:760, margin:'0 auto', textAlign:'center' }}>
            <div style={{ background:'var(--light)', borderRadius:'var(--r-lg)', padding:'2rem', border:'1px solid var(--border)' }}>
              <i className="fas fa-lock" style={{ fontSize:'1.8rem', color:'var(--green)', marginBottom:'0.75rem', display:'block' }} />
              <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:'0.5rem' }}>Besoin d'un document spécifique ?</h3>
              <p style={{ fontSize:'0.88rem', color:'var(--muted)', maxWidth:440, margin:'0 auto 1rem' }}>
                Si vous êtes membre ou partenaire, n'hésitez pas à nous contacter directement.
              </p>
              <Link to="/contact" className="btn btn-outline-blue btn-sm">
                <i className="fas fa-envelope" /> Nous contacter
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
