import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const articles = [
  { id:1, cat:'evenement', catLabel:'Événement', badge:'badge-green', bg:'linear-gradient(135deg,#0d2137,#163a5c)', icon:'fa-flag',              date:'15 novembre 2024', title:'Lancement officiel de Congo Tech Progress à Brazzaville',      text:"C'est avec une grande fierté que l'association Congo Tech Progress a été officiellement lancée lors d'une cérémonie réunissant partenaires institutionnels, membres fondateurs et représentants de la société civile." },
  { id:2, cat:'programme', catLabel:'Programme', badge:'badge-blue',  bg:'linear-gradient(135deg,#1a3a1a,#166016aa)',icon:'fa-chalkboard-teacher', date:'3 décembre 2024',  title:'Premier atelier informatique pour enfants : 45 jeunes formés', text:'Le programme "Ateliers pour enfants" a démarré avec succès à Brazzaville. 45 enfants âgés de 8 à 14 ans ont découvert les bases de l\'informatique et de la pensée computationnelle.' },
  { id:3, cat:'partenariat',catLabel:'Partenariat',badge:'badge-yellow',bg:'linear-gradient(135deg,#1a1a3a,#1a2a6c)', icon:'fa-handshake',         date:'20 janvier 2025',  title:'Partenariat signé avec l\'Université Marien Ngouabi',            text:"Un protocole d'accord a été signé pour développer des projets pilotes technologiques et offrir des opportunités de stage et de recherche aux étudiants en informatique." },
  { id:4, cat:'programme', catLabel:'Programme', badge:'badge-red',   bg:'linear-gradient(135deg,#3a1a1a,#c0392baa)',icon:'fa-venus',              date:'8 mars 2025',      title:'Journée de la Femme : lancement du programme Femmes & STEM',    text:'À l\'occasion du 8 mars, Congo Tech Progress a officiellement lancé son programme phare dédié à l\'émancipation numérique des femmes congolaises.' },
  { id:5, cat:'evenement', catLabel:'Événement', badge:'badge-green', bg:'linear-gradient(135deg,#1a2f1a,#27ae60aa)',icon:'fa-laptop',             date:'15 avril 2025',    title:'1er Hackathon Congo Tech Progress : des solutions locales',       text:'Pendant 48 heures, 12 équipes de jeunes développeurs ont planché sur des solutions numériques innovantes pour répondre aux défis du secteur agricole et sanitaire.' },
  { id:6, cat:'partenariat',catLabel:'Partenariat',badge:'badge-yellow',bg:'linear-gradient(135deg,#1a1a2a,#2c3e50aa)',icon:'fa-school',            date:'2 juin 2025',      title:'Convention avec 3 lycées de Brazzaville pour le numérique',      text:'Congo Tech Progress signe des conventions avec trois lycées pour déployer des clubs technologiques et former les enseignants aux outils pédagogiques numériques.' },
]

const filters = [
  { key:'all',        label:'Tous' },
  { key:'evenement',  label:'Événements' },
  { key:'programme',  label:'Programmes' },
  { key:'partenariat',label:'Partenariats' },
]

export default function News() {
  useScrollReveal()
  const [active, setActive] = useState('all')
  const [nlSent, setNlSent] = useState(false)
  const [nlEmail, setNlEmail] = useState('')

  const visible = articles.filter(a => active === 'all' || a.cat === active)

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Actualités</h1>
          <p className="lead">Suivez toutes nos activités, événements et réalisations sur le terrain.</p>
          <nav className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span className="sep"><i className="fas fa-chevron-right" style={{ fontSize:'0.6rem' }} /></span>
            <span className="current">Actualités</span>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {visible.length ? (
            <div className="news-grid">
              {visible.map((a, i) => (
                <article className={`news-card fade-up d${(i % 3) + 1}`} key={a.id}>
                  <div className="news-card-img" style={{ background: a.bg }}>
                    <i className={`fas ${a.icon}`} />
                  </div>
                  <div className="news-card-body">
                    <div className="news-meta">
                      <span className={`badge ${a.badge}`}>{a.catLabel}</span>
                      <span className="news-date"><i className="far fa-calendar" /> {a.date}</span>
                    </div>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                    <a href="#" onClick={e => e.preventDefault()} className="btn btn-outline-blue btn-sm">
                      Lire plus <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div style={{ textAlign:'center', padding:'3rem', color:'var(--muted)' }}>
              <i className="fas fa-search" style={{ fontSize:'2.5rem', opacity:0.3, display:'block', marginBottom:'1rem' }} />
              <p>Aucun article dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background:'var(--light)', padding:'80px 0' }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth:560, margin:'0 auto', textAlign:'center' }}>
            <span className="eyebrow">Newsletter</span>
            <h2 style={{ fontSize:'1.8rem', fontWeight:800, marginBottom:'0.8rem' }}>Restez informé</h2>
            <p style={{ color:'var(--muted)', marginBottom:'2rem', fontSize:'0.93rem', lineHeight:1.7 }}>
              Inscrivez-vous pour recevoir nos actualités directement dans votre boîte e-mail.
            </p>
            {nlSent ? (
              <div style={{ padding:'1rem', background:'rgba(46,204,113,0.1)', borderRadius:'var(--r)', color:'var(--green)', fontWeight:600 }}>
                <i className="fas fa-check-circle" /> Merci pour votre inscription !
              </div>
            ) : (
              <form
                style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', justifyContent:'center' }}
                onSubmit={e => { e.preventDefault(); setNlSent(true) }}
              >
                <input
                  type="email"
                  value={nlEmail}
                  onChange={e => setNlEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  className="form-control"
                  style={{ maxWidth:300, borderRadius:'50px', padding:'13px 22px' }}
                  required
                />
                <button type="submit" className="btn btn-primary" style={{ whiteSpace:'nowrap' }}>
                  <i className="fas fa-paper-plane" /> S'inscrire
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
