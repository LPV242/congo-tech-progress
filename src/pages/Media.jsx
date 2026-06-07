import { useState } from 'react'
import { useScrollReveal } from '../hooks/useAnimations'

const TYPES = [
  { key: 'all',   label: 'Tout',   icon: 'fa-border-all' },
  { key: 'photo', label: 'Photos', icon: 'fa-camera' },
  { key: 'video', label: 'Vidéos', icon: 'fa-video' },
  { key: 'audio', label: 'Audios', icon: 'fa-headphones' },
]

const CATS = [
  { key: 'all',          label: 'Toutes catégories', icon: 'fa-th' },
  { key: 'lancement',    label: 'Lancement',          icon: 'fa-flag' },
  { key: 'ateliers',     label: 'Ateliers',           icon: 'fa-laptop-code' },
  { key: 'formations',   label: 'Formations',         icon: 'fa-graduation-cap' },
  { key: 'partenariats', label: 'Partenariats',       icon: 'fa-handshake' },
]

const ITEMS = [
  /* ── PHOTOS ── */
  {
    id: 1, type: 'photo', cat: 'lancement', size: 'large',
    date: 'Novembre 2024', location: 'Brazzaville',
    title: 'Cérémonie de lancement officiel',
    desc: 'Plus de 100 invités réunis pour célébrer la naissance de Congo Tech Progress, en présence d\'autorités locales et de partenaires institutionnels.',
    bg: 'linear-gradient(135deg,#0b1f3a,#1a4a7a)', icon: 'fa-flag', accent: '#3498db',
  },
  {
    id: 2, type: 'photo', cat: 'lancement', size: 'normal',
    date: 'Novembre 2024', location: 'Brazzaville',
    title: 'Signature du registre fondateur',
    desc: 'Les membres fondateurs apposent leurs signatures sur le registre officiel de l\'association.',
    bg: 'linear-gradient(135deg,#112244,#1e3a6e)', icon: 'fa-pen-nib', accent: '#3498db',
  },
  {
    id: 3, type: 'photo', cat: 'ateliers', size: 'large',
    date: 'Décembre 2024', location: 'Brazzaville',
    title: 'Premier atelier informatique pour enfants',
    desc: '45 enfants découvrent les bases de l\'informatique et de la pensée computationnelle lors d\'une journée festive et éducative.',
    bg: 'linear-gradient(135deg,#0a2e1a,#1a6b3a)', icon: 'fa-child', accent: '#2ecc71',
  },
  {
    id: 4, type: 'photo', cat: 'ateliers', size: 'normal',
    date: 'Mars 2025', location: 'Brazzaville',
    title: 'Hackathon jeunes talents — remise des prix',
    desc: 'Trois équipes primées pour leurs projets numériques innovants répondant aux défis locaux.',
    bg: 'linear-gradient(135deg,#0e2a14,#1a5e2e)', icon: 'fa-trophy', accent: '#2ecc71',
  },
  {
    id: 5, type: 'photo', cat: 'formations', size: 'large',
    date: 'Janvier 2025', location: 'Brazzaville',
    title: 'Séminaire cybersécurité',
    desc: 'Sensibilisation aux bonnes pratiques numériques et à la protection des données pour les professionnels.',
    bg: 'linear-gradient(135deg,#2d2000,#7a5500)', icon: 'fa-shield-alt', accent: '#f1c40f',
  },
  {
    id: 6, type: 'photo', cat: 'partenariats', size: 'large',
    date: 'Janvier 2025', location: 'Brazzaville',
    title: 'Partenariat — Université Marien Ngouabi',
    desc: 'Signature du protocole d\'accord pour le développement de projets pilotes technologiques et des stages étudiants.',
    bg: 'linear-gradient(135deg,#2e0a0a,#6e1a1a)', icon: 'fa-university', accent: '#e74c3c',
  },
  {
    id: 7, type: 'photo', cat: 'partenariats', size: 'normal',
    date: 'Avril 2025', location: 'Brazzaville',
    title: 'Rencontre partenaires institutionnels',
    desc: 'Table ronde réunissant 12 partenaires institutionnels pour planifier les actions de l\'année 2025.',
    bg: 'linear-gradient(135deg,#2a0d0d,#5e1c1c)', icon: 'fa-users', accent: '#e74c3c',
  },

  /* ── VIDÉOS ── */
  {
    id: 8, type: 'video', cat: 'lancement', size: 'large',
    date: 'Novembre 2024', location: 'Brazzaville', duration: '4:32',
    title: 'Discours inaugural du fondateur Vhan Dziengue',
    desc: 'Allocution complète du fondateur lors de la cérémonie officielle, présentant la vision et les ambitions de Congo Tech Progress pour les années à venir.',
    bg: 'linear-gradient(135deg,#0d1f40,#1a3a80)', icon: 'fa-microphone', accent: '#3498db',
  },
  {
    id: 9, type: 'video', cat: 'ateliers', size: 'normal',
    date: 'Février 2025', location: 'Pointe-Noire', duration: '7:14',
    title: 'Atelier Python — initiation au code',
    desc: 'Captation d\'une session de formation en programmation Python pour lycéens animée par nos formateurs bénévoles.',
    bg: 'linear-gradient(135deg,#0d2e18,#1a6b34)', icon: 'fa-code', accent: '#2ecc71',
  },
  {
    id: 10, type: 'video', cat: 'formations', size: 'normal',
    date: 'Mars 2025', location: 'Dolisie', duration: '12:05',
    title: 'Témoignages — formation entrepreneuriat numérique',
    desc: 'Paroles de 5 participants ayant suivi le programme entrepreneuriat numérique et lancé leur activité en ligne.',
    bg: 'linear-gradient(135deg,#261800,#5c3c00)', icon: 'fa-rocket', accent: '#f1c40f',
  },
  {
    id: 11, type: 'video', cat: 'partenariats', size: 'normal',
    date: 'Avril 2025', location: 'Brazzaville', duration: '3:58',
    title: 'Reportage — table ronde des partenaires',
    desc: 'Résumé vidéo de la table ronde réunissant les partenaires institutionnels de Congo Tech Progress.',
    bg: 'linear-gradient(135deg,#2a0d0d,#6e1a1a)', icon: 'fa-handshake', accent: '#e74c3c',
  },

  /* ── AUDIOS ── */
  {
    id: 12, type: 'audio', cat: 'lancement', size: 'normal',
    date: 'Novembre 2024', location: 'Brazzaville', duration: '18:45',
    title: 'Enregistrement — cérémonie de lancement (intégral)',
    desc: 'Captation audio complète de la cérémonie officielle de lancement de l\'association, incluant tous les discours et interventions.',
    bg: 'linear-gradient(135deg,#0d1f40,#1a3a80)', icon: 'fa-microphone-alt', accent: '#3498db',
  },
  {
    id: 13, type: 'audio', cat: 'formations', size: 'normal',
    date: 'Janvier 2025', location: 'Brazzaville', duration: '24:10',
    title: 'Podcast — cybersécurité au quotidien',
    desc: 'Épisode de podcast enregistré avec les formateurs du séminaire cybersécurité, abordant les bonnes pratiques accessibles à tous.',
    bg: 'linear-gradient(135deg,#2d2000,#7a5500)', icon: 'fa-podcast', accent: '#f1c40f',
  },
  {
    id: 14, type: 'audio', cat: 'ateliers', size: 'normal',
    date: 'Mars 2025', location: 'Brazzaville', duration: '9:33',
    title: 'Interview — lauréats du Hackathon',
    desc: 'Les trois équipes lauréates du Hackathon jeunes talents partagent leur expérience et leurs projets primés.',
    bg: 'linear-gradient(135deg,#0e2a14,#1a5e2e)', icon: 'fa-headphones', accent: '#2ecc71',
  },
]

/* Icône selon le type pour la carte */
const TYPE_OVERLAY = {
  photo: { icon: 'fa-expand-alt', label: null },
  video: { icon: 'fa-play',       label: 'Vidéo' },
  audio: { icon: 'fa-play',       label: 'Audio' },
}

/* Badge couleur par type */
const TYPE_COLOR = { photo: '#8b5cf6', video: '#ef4444', audio: '#f59e0b' }
const TYPE_LABEL = { photo: 'Photo', video: 'Vidéo', audio: 'Audio' }

export default function Media() {
  useScrollReveal()
  const [activeType, setActiveType] = useState('all')
  const [activeCat,  setActiveCat]  = useState('all')
  const [lightbox,   setLightbox]   = useState(null)

  const filtered = ITEMS.filter(item =>
    (activeType === 'all' || item.type === activeType) &&
    (activeCat  === 'all' || item.cat  === activeCat)
  )

  const counts = TYPES.reduce((acc, t) => {
    acc[t.key] = t.key === 'all' ? ITEMS.length : ITEMS.filter(i => i.type === t.key).length
    return acc
  }, {})

  return (
    <main>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Médiathèque</h1>
            <p className="lead">Revivez en images, vidéos et sons les moments forts de nos événements.</p>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <a href="/">Accueil</a>
              <span className="sep"><i className="fas fa-chevron-right" style={{ fontSize:'0.6rem' }} /></span>
              <span className="current">Médiathèque</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section className="section">
        <div className="container">

          {/* ── Onglets type ── */}
          <div className="media-type-tabs fade-up">
            {TYPES.map(t => (
              <button
                key={t.key}
                className={`media-type-tab${activeType === t.key ? ' active' : ''}`}
                onClick={() => { setActiveType(t.key); setActiveCat('all') }}
              >
                <i className={`fas ${t.icon}`} />
                <span>{t.label}</span>
                <em>{counts[t.key]}</em>
              </button>
            ))}
          </div>

          {/* ── Filtres catégorie ── */}
          <div className="media-filters fade-up d1">
            {CATS.map(c => (
              <button
                key={c.key}
                className={`media-filter-btn${activeCat === c.key ? ' active' : ''}`}
                onClick={() => setActiveCat(c.key)}
              >
                <i className={`fas ${c.icon}`} /> {c.label}
              </button>
            ))}
          </div>

          {/* ── Compteur ── */}
          <p className="media-count fade-up d2">
            <strong>{filtered.length}</strong> élément{filtered.length > 1 ? 's' : ''}
            {activeType !== 'all' && <span> · {TYPE_LABEL[activeType]}</span>}
            {activeCat  !== 'all' && <span> · {CATS.find(c => c.key === activeCat)?.label}</span>}
          </p>

          {/* ── Grille ── */}
          {filtered.length === 0 ? (
            <div className="media-empty fade-up">
              <i className="fas fa-photo-film" />
              <p>Aucun contenu dans cette sélection.</p>
            </div>
          ) : (
            <div className="media-grid">
              {filtered.map((item, i) => {
                if (item.type === 'audio') {
                  return (
                    <div
                      key={item.id}
                      className="media-audio-card fade-up"
                      style={{ animationDelay: `${(i % 4) * 0.08}s` }}
                      onClick={() => setLightbox(item)}
                      role="button" tabIndex={0}
                      onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
                    >
                      <div className="audio-card-icon" style={{ background: item.bg }}>
                        <i className={`fas ${item.icon}`} style={{ color: item.accent }} />
                      </div>
                      <div className="audio-card-body">
                        <div className="audio-type-badge" style={{ color: item.accent }}>
                          <i className="fas fa-headphones" /> Audio
                        </div>
                        <div className="audio-card-title">{item.title}</div>
                        <div className="audio-waveform">
                          {Array.from({ length: 18 }).map((_, j) => (
                            <span key={j} className="waveform-bar" style={{ height: `${12 + Math.sin(j * 1.3) * 10 + Math.random() * 8}px`, background: item.accent }} />
                          ))}
                        </div>
                        <div className="audio-card-meta">
                          <span><i className="far fa-clock" /> {item.duration}</span>
                          <span><i className="far fa-calendar-alt" /> {item.date}</span>
                          <span><i className="fas fa-map-marker-alt" /> {item.location}</span>
                        </div>
                      </div>
                      <button className="audio-play-btn" style={{ background: item.accent }} aria-label="Écouter">
                        <i className="fas fa-play" />
                      </button>
                    </div>
                  )
                }

                return (
                  <div
                    key={item.id}
                    className={`media-card fade-up${item.size === 'large' ? ' media-card--large' : ''}`}
                    style={{ animationDelay: `${(i % 4) * 0.08}s` }}
                    onClick={() => setLightbox(item)}
                    role="button" tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
                    aria-label={`${TYPE_LABEL[item.type]} : ${item.title}`}
                  >
                    <div className="media-card-img" style={{ background: item.bg }}>
                      <i className={`fas ${item.icon}`} style={{ color: item.accent }} />
                      {/* Badge type */}
                      <span className="media-type-badge" style={{ background: TYPE_COLOR[item.type] }}>
                        <i className={`fas ${item.type === 'video' ? 'fa-video' : 'fa-camera'}`} />
                        {TYPE_LABEL[item.type]}
                      </span>
                      {/* Durée vidéo */}
                      {item.type === 'video' && item.duration && (
                        <span className="media-duration">{item.duration}</span>
                      )}
                      <div className={`media-card-overlay${item.type === 'video' ? ' overlay-video' : ''}`}>
                        <i className={`fas ${TYPE_OVERLAY[item.type].icon}`} />
                      </div>
                    </div>
                    <div className="media-card-info">
                      <span className="media-cat-dot" style={{ background: item.accent }} />
                      <span className="media-card-title">{item.title}</span>
                      <span className="media-card-date">
                        <i className="far fa-calendar-alt" /> {item.date}
                        <i className="fas fa-map-marker-alt" style={{ marginLeft:10 }} /> {item.location}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* ── Bloc contribution ── */}
          <div className="media-contribute fade-up">
            <i className="fas fa-camera-retro" />
            <div>
              <strong>Vous avez des photos, vidéos ou enregistrements de nos événements ?</strong>
              <p>Partagez-les avec nous pour enrichir notre médiathèque collective.</p>
            </div>
            <a href="/#/contact" className="btn btn-outline-green btn-sm">
              <i className="fas fa-paper-plane" /> Contribuer
            </a>
          </div>

        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <div className="lightbox-box" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Fermer">
              <i className="fas fa-times" />
            </button>

            <div className="lightbox-img" style={{ background: lightbox.bg }}>
              <i className={`fas ${lightbox.icon}`} style={{ color: lightbox.accent }} />
              {lightbox.type === 'video' && (
                <div className="lightbox-play-ring">
                  <i className="fas fa-play" />
                </div>
              )}
              {lightbox.type === 'audio' && (
                <div className="lightbox-audio-wave">
                  {Array.from({ length: 30 }).map((_, j) => (
                    <span key={j} className="waveform-bar lb-bar" style={{ height:`${10 + Math.sin(j*0.9)*14 + j%3*4}px`, background: lightbox.accent }} />
                  ))}
                </div>
              )}
            </div>

            <div className="lightbox-body">
              <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.6rem', flexWrap:'wrap' }}>
                <span className="media-type-badge" style={{ background: TYPE_COLOR[lightbox.type], position:'static', fontSize:'0.72rem', padding:'3px 10px' }}>
                  <i className={`fas ${lightbox.type === 'video' ? 'fa-video' : lightbox.type === 'audio' ? 'fa-headphones' : 'fa-camera'}`} />
                  {TYPE_LABEL[lightbox.type]}
                </span>
                <span className="lightbox-meta">
                  <i className="far fa-calendar-alt" /> {lightbox.date} &nbsp;·&nbsp;
                  <i className="fas fa-map-marker-alt" /> {lightbox.location}
                  {lightbox.duration && <>&nbsp;·&nbsp;<i className="far fa-clock" /> {lightbox.duration}</>}
                </span>
              </div>
              <h2 className="lightbox-title">{lightbox.title}</h2>
              <p className="lightbox-desc">{lightbox.desc}</p>
              {(lightbox.type === 'video' || lightbox.type === 'audio') && (
                <p style={{ fontSize:'0.78rem', color:'var(--muted)', marginTop:'1rem', fontStyle:'italic' }}>
                  <i className="fas fa-info-circle" style={{ marginRight:5 }} />
                  Le fichier media sera disponible prochainement.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
