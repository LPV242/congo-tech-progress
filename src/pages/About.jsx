import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const caMembers = [
  { init:'VD', name:'Vhan Dziengue de Moucaut', role:'Président du Conseil d\'Administration', bg:'linear-gradient(135deg,var(--green),#1e8449)' },
  { init:'AM', name:'Amara Makosso',             role:'Vice-Présidente',                        bg:'linear-gradient(135deg,var(--blue),#2980b9)' },
  { init:'JN', name:'Josué Nganga',              role:'Secrétaire Général',                     bg:'linear-gradient(135deg,var(--yellow),#e67e22)' },
  { init:'CL', name:'Céleste Loubaki',           role:'Trésorière',                             bg:'linear-gradient(135deg,var(--red),#c0392b)' },
  { init:'PM', name:'Patrick Moukoko',           role:'Administrateur',                         bg:'linear-gradient(135deg,#8e44ad,#9b59b6)' },
]

const ceMembers = [
  { init:'SB', name:'Sandra Bouanga',   role:'Directrice Exécutive',                    bg:'linear-gradient(135deg,var(--green),#1e8449)' },
  { init:'RT', name:'Rodrigue Taty',    role:'Responsable Programmes',                  bg:'linear-gradient(135deg,#2980b9,#1abc9c)' },
  { init:'FK', name:'Fatou Kimboua',    role:'Responsable Programme Femmes & STEM',     bg:'linear-gradient(135deg,#e74c3c,#c0392b)' },
  { init:'DM', name:'Daniel Mboungou', role:'Responsable Partenariats',                 bg:'linear-gradient(135deg,#f39c12,#e67e22)' },
  { init:'LK', name:'Laure Kikouta',   role:'Chargée de Communication',                 bg:'linear-gradient(135deg,#1abc9c,#16a085)' },
]

const values = [
  { icon:'🌍', title:'Inclusion',         text:'Aucun individu ne doit être laissé de côté. Nos programmes sont conçus pour atteindre les plus vulnérables.' },
  { icon:'💡', title:'Innovation',        text:'Nous encourageons la créativité et les approches nouvelles pour résoudre les défis de l\'éducation numérique.' },
  { icon:'🔓', title:'Accessibilité',     text:'Le coût ne doit jamais être un obstacle. Nous rendons nos formations gratuites ou à prix symbolique.' },
  { icon:'⚖️', title:'Égalité STEM',     text:'Nous militons pour la parité dans les filières STEM, en ciblant prioritairement les femmes et jeunes filles.' },
]

function GovCard({ icon, title, members }) {
  return (
    <div className="governance-card">
      <div className="gov-header">
        <i className={`fas ${icon}`} />
        <h3>{title}</h3>
      </div>
      <div className="gov-members">
        {members.map(m => (
          <div className="gov-member" key={m.name}>
            <div className="member-avatar" style={{ background: m.bg }}>{m.init}</div>
            <div className="member-info">
              <div className="mname">{m.name}</div>
              <div className="mrole">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  useScrollReveal()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>À propos de nous</h1>
          <p className="lead">Découvrez l'histoire, la vision et les personnes qui font vivre Congo Tech Progress.</p>
          <nav className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span className="sep"><i className="fas fa-chevron-right" style={{ fontSize:'0.6rem' }} /></span>
            <span className="current">À propos</span>
          </nav>
        </div>
      </section>

      {/* Fondateur */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-img-wrap fade-left">
              <div className="about-img-placeholder">
                <i className="fas fa-user-tie" />
                <span>Vhan Dziengue de Moucaut</span>
              </div>
              <div className="founder-badge">
                <div className="fname">Vhan Dziengue de Moucaut</div>
                <div className="ftitle"><i className="fas fa-star" /> Fondateur & Président</div>
              </div>
            </div>
            <div className="about-text fade-right">
              <span className="eyebrow">Le fondateur</span>
              <h2>DZIENGUE DE MOUCAUT Vhan</h2>
              <div className="divider" />
              <p>
                <strong>Vhan Dziengue de Moucaut</strong> est un passionné des nouvelles technologies et un
                ardent défenseur de l'accès universel au savoir numérique. Convaincu que la maîtrise
                des outils numériques est aussi fondamentale que la lecture et l'écriture, il a fondé
                Congo Tech Progress pour donner corps à cette conviction.
              </p>
              <p>
                Fort d'une expérience dans le domaine des technologies de l'information, il a rassemblé
                autour de lui une équipe engagée de professionnels, d'enseignants et de bénévoles
                partageant la même vision.
              </p>
              <p>
                Pour lui, le numérique n'est pas un luxe réservé à une élite — c'est un levier de
                développement économique, social et culturel qui doit profiter à tous les Congolais.
              </p>
              <blockquote style={{ borderLeft:'4px solid var(--green)', padding:'1rem 1.4rem', background:'rgba(46,204,113,0.05)', borderRadius:'0 var(--r-sm) var(--r-sm) 0', marginTop:'1.2rem' }}>
                <p style={{ fontStyle:'italic', fontSize:'0.95rem', margin:0 }}>
                  "Le savoir numérique est la clé qui ouvre toutes les portes. Notre mission est de s'assurer que personne n'en soit exclu."
                </p>
                <cite style={{ fontSize:'0.82rem', color:'var(--muted)', marginTop:'0.5rem', display:'block' }}>
                  — Vhan Dziengue de Moucaut, Fondateur
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Notre raison d'être</span>
            <h2>Mission & Vision</h2>
            <div className="line" />
          </div>
          <div className="mv-grid fade-up">
            {[
              { grad:'linear-gradient(135deg,var(--green),#27ae60)', icon:'fa-bullseye', title:'Notre Mission', text:"Congo Tech Progress a pour mission de démocratiser l'accès aux compétences numériques en République du Congo, en proposant des formations de qualité, accessibles financièrement, adaptées aux réalités locales et ouvertes à tous." },
              { grad:'linear-gradient(135deg,var(--blue),#2980b9)',   icon:'fa-binoculars', title:'Notre Vision', text:"Nous rêvons d'un Congo où chaque citoyen dispose des compétences numériques nécessaires pour participer activement à l'économie du savoir et où les jeunes Congolais rivalisent avec les talents du monde entier." },
            ].map(b => (
              <div key={b.title} style={{ background:'var(--white)', borderRadius:'var(--r-lg)', padding:'2.5rem', border:'1px solid var(--border)', boxShadow:'var(--shadow-sm)' }}>
                <div style={{ width:56, height:56, background:b.grad, borderRadius:'var(--r)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem', color:'#fff', marginBottom:'1.2rem' }}>
                  <i className={`fas ${b.icon}`} />
                </div>
                <h3 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:'0.8rem' }}>{b.title}</h3>
                <p style={{ fontSize:'0.92rem', color:'#555', lineHeight:1.8 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Ce qui nous guide</span>
            <h2>Nos valeurs fondamentales</h2>
            <p>Quatre valeurs qui guident chacune de nos actions et décisions au quotidien.</p>
            <div className="line" />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className={`value-card fade-up d${i+1}`} key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Organisation</span>
            <h2>Notre gouvernance</h2>
            <p>Congo Tech Progress est dirigée par des instances transparentes et représentatives.</p>
            <div className="line" />
          </div>
          <div className="governance-grid">
            <div className="fade-up d1"><GovCard icon="fa-landmark" title="Conseil d'Administration" members={caMembers} /></div>
            <div className="fade-up d2"><GovCard icon="fa-cogs"     title="Comité Exécutif"          members={ceMembers} /></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,var(--dark),#0d2137)', textAlign:'center' }}>
        <div className="container fade-up">
          <h2 style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:800, color:'#fff', marginBottom:'1rem' }}>Vous partagez notre vision ?</h2>
          <p style={{ fontSize:'0.97rem', color:'rgba(255,255,255,0.65)', maxWidth:'520px', margin:'0 auto 2rem', lineHeight:1.75 }}>
            Rejoignez Congo Tech Progress et contribuez à construire un avenir numérique pour tous les Congolais.
          </p>
          <Link to="/adherer" className="btn btn-primary"><i className="fas fa-user-plus" /> Devenir membre</Link>
        </div>
      </section>
    </main>
  )
}
