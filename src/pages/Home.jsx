import { Link } from 'react-router-dom'
import { useScrollReveal, useCounters } from '../hooks/useAnimations'

export default function Home() {
  useScrollReveal()
  useCounters()

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-layout">

            {/* Texte */}
            <div className="hero-content">
              <div className="hero-eyebrow fade-up">
                <i className="fas fa-globe-africa" /> Association Congolaise
              </div>
              <h1 className="hero-title fade-up d1">
                <span className="gt">Le Savoir Numérique</span><br />Pour Tous !
              </h1>
              <p className="hero-lead fade-up d2">
                Congo Tech Progress œuvre pour une Afrique numérique inclusive en offrant des formations,
                des ateliers et des programmes innovants accessibles à toutes et à tous,
                quel que soit le milieu social ou géographique.
              </p>
              <div className="hero-buttons fade-up d3">
                <Link to="/programmes" className="btn btn-primary">
                  <i className="fas fa-rocket" /> Découvrir nos programmes
                </Link>
                <Link to="/adherer" className="btn btn-secondary">
                  <i className="fas fa-user-plus" /> Adhérer
                </Link>
              </div>
              <div className="hero-divider fade-up d4" />
              <div className="hero-stats fade-up d5">
                {[['200+','Membres'],['8','Programmes'],['12+','Partenaires'],['5','Villes']].map(([n,l]) => (
                  <div className="hero-stat" key={l}>
                    <span className="number">{n}</span>
                    <span className="label">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo mis en évidence */}
            <div className="hero-logo-side fade-right d2">
              <div className="hero-logo-ring ring-1" />
              <div className="hero-logo-ring ring-2" />
              <div className="hero-logo-ring ring-3" />
              <div className="hero-logo-card">
                <img src="/logo.jpg" alt="Congo Tech Progress" className="hero-logo-img" />
              </div>
              <div className="hero-logo-badge">
                <i className="fas fa-shield-check" style={{ color:'var(--green)', marginRight:6 }} />
                Association certifiée
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MISSIONS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Ce que nous faisons</span>
            <h2>Nos axes d'action</h2>
            <p>Quatre piliers fondateurs pour construire une société congolaise connectée, compétente et inclusive.</p>
            <div className="line" />
          </div>
          <div className="missions-grid">
            {[
              { c:'c1', icon:'fa-laptop-code',   title:'Éducation numérique',      text:'Dispenser des formations en informatique et technologies numériques accessibles à tous les publics.' },
              { c:'c2', icon:'fa-lightbulb',      title:'Innovation technologique', text:"Encourager la créativité et l'esprit entrepreneurial numérique par des projets pilotes et partenariats." },
              { c:'c3', icon:'fa-network-wired',  title:'Inclusion numérique',      text:'Réduire la fracture numérique en touchant les communautés éloignées et les populations marginalisées.' },
              { c:'c4', icon:'fa-venus',          title:'Égalité STEM',             text:"Promouvoir l'accès équitable des femmes et des jeunes filles aux disciplines STEM." },
            ].map((m, i) => (
              <div className={`mission-card ${m.c} fade-up d${i+1}`} key={m.title}>
                <div className="mission-icon"><i className={`fas ${m.icon}`} /></div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Notre impact en chiffres</span>
            <h2 style={{ color: '#fff' }}>Des résultats concrets</h2>
            <div className="line" />
          </div>
          <div className="stats-grid">
            {[
              { icon:'fa-users',              color:'var(--green)',  count:200, suffix:'+', label:'Membres actifs' },
              { icon:'fa-chalkboard-teacher', color:'var(--blue)',   count:8,   suffix:'',  label:'Programmes de formation' },
              { icon:'fa-handshake',          color:'var(--yellow)', count:12,  suffix:'+', label:'Partenaires institutionnels' },
              { icon:'fa-map-marker-alt',     color:'var(--red)',    count:5,   suffix:'',  label:'Villes couvertes' },
            ].map((s, i) => (
              <div className={`stat-item fade-up d${i+1}`} key={s.label}>
                <div className="stat-icon" style={{ color: s.color }}>
                  <i className={`fas ${s.icon}`} />
                </div>
                <span className="stat-number" data-count={s.count} data-suffix={s.suffix}>0</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
            <div className="fade-left">
              <span className="eyebrow">Notre histoire</span>
              <h2 style={{ fontSize:'clamp(1.5rem,3vw,2rem)', fontWeight:800, marginBottom:'1rem', lineHeight:1.25 }}>
                Une vision née de la conviction que le numérique est un droit universel
              </h2>
              <div className="divider" />
              <p style={{ fontSize:'0.94rem', color:'#555', lineHeight:1.85, marginTop:'1rem', marginBottom:'1rem' }}>
                Fondée par <strong>Vhan Dziengue de Moucaut</strong>, Congo Tech Progress est née d'une conviction profonde :
                chaque citoyen congolais mérite d'accéder aux compétences numériques qui façonnent le monde de demain.
              </p>
              <p style={{ fontSize:'0.94rem', color:'#555', lineHeight:1.85, marginBottom:'1.5rem' }}>
                L'association s'est donné pour mission de combler le fossé numérique en proposant des formations adaptées,
                accessibles et gratuites ou à moindre coût pour les publics les plus vulnérables.
              </p>
              <Link to="/apropos" className="btn btn-outline-green">
                <i className="fas fa-arrow-right" /> En savoir plus
              </Link>
            </div>
            <div className="fade-right" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
              {[
                { bg:'linear-gradient(135deg,var(--green),#27ae60)', icon:'fa-graduation-cap', val:'500+', lbl:'Bénéficiaires formés', mt:'1.5rem' },
                { bg:'linear-gradient(135deg,var(--blue),#2980b9)',  icon:'fa-award',           val:'2024', lbl:'Année de fondation', mt:'0' },
                { bg:'linear-gradient(135deg,var(--yellow),#e67e22)',icon:'fa-venus-mars',      val:'40%',  lbl:'Femmes bénéficiaires', mt:'0' },
                { bg:'linear-gradient(135deg,var(--red),#c0392b)',   icon:'fa-child',           val:'150+', lbl:'Enfants sensibilisés', mt:'1.5rem' },
              ].map(b => (
                <div key={b.lbl} style={{ background:b.bg, borderRadius:'var(--r-lg)', padding:'2rem', color:'#fff', textAlign:'center', marginTop:b.mt }}>
                  <i className={`fas ${b.icon}`} style={{ fontSize:'2rem', marginBottom:'0.75rem', opacity:0.9, display:'block' }} />
                  <div style={{ fontSize:'1.5rem', fontWeight:800 }}>{b.val}</div>
                  <div style={{ fontSize:'0.8rem', opacity:0.8 }}>{b.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTUALITÉS aperçu ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Blog & Actualités</span>
            <h2>Dernières nouvelles</h2>
            <p>Restez informé de nos activités, événements et réalisations sur le terrain.</p>
            <div className="line" />
          </div>
          <div className="news-grid">
            {[
              { bg:'linear-gradient(135deg,#0d2137,#163a5c)', icon:'fa-flag',              badge:'badge-green', cat:'Événement',   date:'15 novembre 2024', title:'Lancement officiel de Congo Tech Progress à Brazzaville', text:"C'est avec une grande fierté que l'association Congo Tech Progress a été officiellement lancée lors d'une cérémonie réunissant partenaires, membres fondateurs et institutions." },
              { bg:'linear-gradient(135deg,#1a3a1a,#166016aa)',icon:'fa-chalkboard-teacher',badge:'badge-blue',  cat:'Programme',   date:'3 décembre 2024',  title:'Premier atelier informatique pour enfants : 45 jeunes formés', text:'Le programme "Ateliers pour enfants" a démarré avec succès. 45 enfants ont découvert les bases de l\'informatique et de la pensée computationnelle.' },
              { bg:'linear-gradient(135deg,#1a1a3a,#1a2a6c)',  icon:'fa-handshake',         badge:'badge-yellow', cat:'Partenariat', date:'20 janvier 2025',  title:'Partenariat signé avec l\'Université Marien Ngouabi', text:"Un protocole d'accord a été signé pour développer des projets pilotes technologiques et offrir des opportunités de stage aux étudiants." },
            ].map((a, i) => (
              <article className={`news-card fade-up d${i+1}`} key={a.title}>
                <div className="news-card-img" style={{ background: a.bg }}>
                  <i className={`fas ${a.icon}`} />
                </div>
                <div className="news-card-body">
                  <div className="news-meta">
                    <span className={`badge ${a.badge}`}>{a.cat}</span>
                    <span className="news-date"><i className="far fa-calendar" /> {a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <Link to="/actualites" className="btn btn-outline-blue btn-sm">Lire plus <i className="fas fa-arrow-right" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
            <Link to="/actualites" className="btn btn-outline-green">
              <i className="fas fa-newspaper" /> Toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:'linear-gradient(135deg,var(--green),var(--blue))', padding:'80px 0', textAlign:'center' }}>
        <div className="container">
          <div className="fade-up">
            <h2 style={{ fontSize:'clamp(1.6rem,3.5vw,2.4rem)', fontWeight:800, color:'#fff', marginBottom:'1rem' }}>
              Rejoignez notre communauté numérique
            </h2>
            <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.82)', maxWidth:'560px', margin:'0 auto 2rem', lineHeight:1.75 }}>
              Ensemble, faisons du Congo un exemple de réussite numérique pour toute l'Afrique.
            </p>
            <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/adherer" className="btn btn-secondary"><i className="fas fa-user-plus" /> Devenir membre</Link>
              <Link to="/contact" className="btn" style={{ background:'rgba(255,255,255,0.15)', color:'#fff', border:'2px solid rgba(255,255,255,0.4)' }}>
                <i className="fas fa-envelope" /> Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
