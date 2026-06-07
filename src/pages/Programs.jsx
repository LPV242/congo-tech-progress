import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const programs = [
  { pi:'pi-1', icon:'fa-laptop-code',  title:'Formation en informatique et technologies numériques', desc:'Un programme complet couvrant les fondamentaux de l\'informatique, la bureautique, la programmation initiatique et l\'utilisation d\'outils numériques professionnels.', target:'Tous publics, débutants à intermédiaires' },
  { pi:'pi-2', icon:'fa-child',        title:'Ateliers pour enfants',                                 desc:'Des ateliers ludiques et interactifs pour initier les enfants à l\'informatique, à la pensée computationnelle, au codage et à la robotique simple.', target:'Enfants de 6 à 14 ans' },
  { pi:'pi-3', icon:'fa-briefcase',    title:'Cours pour adultes en reconversion professionnelle',    desc:'Un accompagnement structuré pour les adultes souhaitant se reconvertir vers des métiers du numérique : développement web, data, design, marketing digital.', target:'Adultes en reconversion, 25 ans et plus' },
  { pi:'pi-4', icon:'fa-chart-line',   title:'Formations pour entrepreneurs',                         desc:'Maîtriser les outils numériques pour développer son business : e-commerce, réseaux sociaux, outils de gestion, facturation en ligne, présence web.', target:'Entrepreneurs, commerçants, PME' },
  { pi:'pi-5', icon:'fa-venus',        title:'Programme Femmes & STEM',                               desc:'Un programme phare dédié à l\'émancipation numérique des femmes et des jeunes filles. Coding, sciences des données, leadership technologique et mentorat.', target:'Femmes et jeunes filles, tous niveaux' },
  { pi:'pi-6', icon:'fa-shield-alt',   title:'Sensibilisation aux risques numériques et cybersécurité', desc:'Apprendre à naviguer sur internet en sécurité : protection des données personnelles, reconnaissance des arnaques, bonnes pratiques de mots de passe.', target:'Grand public, jeunes, familles' },
  { pi:'pi-7', icon:'fa-university',   title:'Partenariats avec écoles et universités',               desc:'Collaborations avec les établissements scolaires et universitaires pour intégrer le numérique dans les cursus et former les enseignants.', target:'Étudiants, enseignants, institutions' },
  { pi:'pi-8', icon:'fa-flask',        title:'Projets pilotes technologiques',                        desc:'Des projets innovants menés en partenariat pour expérimenter des solutions technologiques répondant aux défis concrets du Congo.', target:'Innovateurs, porteurs de projets, chercheurs' },
]

export default function Programs() {
  useScrollReveal()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Nos Programmes</h1>
          <p className="lead">8 programmes conçus pour accompagner chaque profil dans sa montée en compétences numériques.</p>
          <nav className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span className="sep"><i className="fas fa-chevron-right" style={{ fontSize:'0.6rem' }} /></span>
            <span className="current">Programmes</span>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-box fade-up">
            <h2>Une offre de formation complète et inclusive</h2>
            <p>Congo Tech Progress propose 8 programmes complémentaires, conçus pour répondre aux besoins spécifiques de chaque public. Des enfants aux professionnels, chacun peut trouver la formation qui lui correspond.</p>
          </div>

          <div className="programs-grid">
            {programs.map((p, i) => (
              <div className={`program-card fade-up d${(i % 4) + 1}`} key={p.title}>
                <div className={`program-icon ${p.pi}`}><i className={`fas ${p.icon}`} /></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="program-target"><i className="fas fa-users" /> {p.target}</div>
                <Link to="/contact" className="btn btn-outline-green btn-sm">En savoir plus <i className="fas fa-arrow-right" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'linear-gradient(135deg,var(--green),var(--blue))', padding:'80px 0', textAlign:'center' }}>
        <div className="container fade-up">
          <h2 style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:800, color:'#fff', marginBottom:'1rem' }}>Un programme vous intéresse ?</h2>
          <p style={{ fontSize:'0.97rem', color:'rgba(255,255,255,0.82)', maxWidth:'520px', margin:'0 auto 2rem', lineHeight:1.75 }}>
            Contactez-nous pour connaître les prochaines sessions de formation dans votre ville.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/adherer" className="btn btn-secondary"><i className="fas fa-user-plus" /> Adhérer</Link>
            <Link to="/contact" className="btn" style={{ background:'rgba(255,255,255,0.15)', color:'#fff', border:'2px solid rgba(255,255,255,0.4)' }}>
              <i className="fas fa-envelope" /> Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
