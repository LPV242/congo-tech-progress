import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

function Field({ label, required: req, error, children }) {
  return (
    <div className="form-group">
      <label>{label}{req && <span className="req"> *</span>}</label>
      {children}
      {error && <div className="err-msg"><i className="fas fa-exclamation-circle" /> {error}</div>}
    </div>
  )
}

export default function Contact() {
  useScrollReveal()
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({ nom:'', prenom:'', email:'', sujet:'', message:'', rgpd:false })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validate = () => {
    const e = {}
    if (!form.nom)     e.nom     = 'Ce champ est requis.'
    if (!form.email)   e.email   = 'Ce champ est requis.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Adresse e-mail invalide.'
    if (!form.sujet)   e.sujet   = 'Veuillez choisir un sujet.'
    if (!form.message) e.message = 'Ce champ est requis.'
    if (!form.rgpd)    e.rgpd    = 'Vous devez accepter la politique de confidentialité.'
    return e
  }

  const submit = e => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (!Object.keys(errs).length) setSent(true)
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Nous contacter</h1>
          <p className="lead">Une question, un partenariat ? Notre équipe est à votre écoute et vous répondra dans les meilleurs délais.</p>
          <nav className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span className="sep"><i className="fas fa-chevron-right" style={{ fontSize:'0.6rem' }} /></span>
            <span className="current">Contact</span>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Infos */}
            <div className="fade-left">
              <span className="eyebrow">Coordonnées</span>
              <h2 style={{ fontSize:'1.7rem', fontWeight:800, marginBottom:'0.8rem', lineHeight:1.25 }}>Restons en contact</h2>
              <div className="divider" style={{ marginBottom:'2rem' }} />

              <div className="contact-info-list">
                {[
                  { bg:'rgba(46,204,113,0.1)', color:'var(--green)', icon:'fa-map-marker-alt', title:'Adresse', content:<p>4 rue Charles Foucault<br />Brazzaville, République du Congo</p> },
                  { bg:'rgba(52,152,219,0.1)', color:'var(--blue)',  icon:'fa-envelope',       title:'E-mail',  content:<a href="mailto:contact@congotechprogress.org">contact@congotechprogress.org</a> },
                  { bg:'rgba(241,196,15,0.1)', color:'#b8860b',      icon:'fa-phone',           title:'Téléphone', content:<a href="tel:+24206000000">+242 06 000 00 00</a> },
                  { bg:'rgba(231,76,60,0.1)', color:'var(--red)',    icon:'fa-clock',           title:'Permanences', content:<p>Lun – Ven : 8h00 – 17h00<br />Sam : 9h00 – 13h00</p> },
                ].map(item => (
                  <div className="contact-item" key={item.title}>
                    <div className="ci-icon" style={{ background:item.bg, color:item.color }}>
                      <i className={`fas ${item.icon}`} />
                    </div>
                    <div className="ci-text">
                      <h4>{item.title}</h4>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop:'2rem' }}>
                <h4 style={{ fontSize:'0.9rem', fontWeight:700, marginBottom:'1rem' }}>Suivez-nous</h4>
                <div className="social-row">
                  {[['sl-fb','fa-facebook-f','Facebook'],['sl-li','fa-linkedin-in','LinkedIn'],['sl-tw','fa-x-twitter','X'],['sl-ig','fa-instagram','Instagram']].map(([cls,ico,label]) => (
                    <a href="#" key={label} className={`social-link ${cls}`} aria-label={label}>
                      <i className={`fab ${ico}`} />
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ marginTop:'2rem', background:'linear-gradient(135deg,var(--dark),#1a3a5c)', borderRadius:'var(--r-lg)', padding:'1.8rem', color:'#fff' }}>
                <div style={{ display:'flex', alignItems:'flex-start', gap:'1rem' }}>
                  <i className="fas fa-map" style={{ fontSize:'2rem', color:'var(--green)', marginTop:4, flexShrink:0 }} />
                  <div>
                    <h4 style={{ fontSize:'0.97rem', fontWeight:700, marginBottom:'0.4rem' }}>Localisation</h4>
                    <p style={{ fontSize:'0.83rem', color:'rgba(255,255,255,0.65)', lineHeight:1.65 }}>
                      Nos bureaux sont situés au cœur de Brazzaville. Des permanences sont organisées chaque semaine — contactez-nous pour les prochaines dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="fade-right">
              {sent ? (
                <div className="form-success">
                  <div className="si"><i className="fas fa-check-circle" /></div>
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Notre équipe vous répondra dans un délai de 24 à 48 heures ouvrées.</p>
                </div>
              ) : (
                <div className="form-card">
                  <h3 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:'0.3rem' }}>Envoyer un message</h3>
                  <p style={{ fontSize:'0.85rem', color:'var(--muted)', marginBottom:'1.8rem' }}>
                    Les champs marqués d'un <span style={{ color:'var(--red)' }}>*</span> sont obligatoires.
                  </p>
                  <form onSubmit={submit} noValidate>
                    <div className="form-row">
                      <Field label="Nom" required error={errors.nom}>
                        <input className={`form-control${errors.nom?' error':''}`} placeholder="Votre nom" value={form.nom} onChange={e=>set('nom',e.target.value)} />
                      </Field>
                      <Field label="Prénom">
                        <input className="form-control" placeholder="Votre prénom" value={form.prenom} onChange={e=>set('prenom',e.target.value)} />
                      </Field>
                    </div>
                    <Field label="Adresse e-mail" required error={errors.email}>
                      <input type="email" className={`form-control${errors.email?' error':''}`} placeholder="exemple@mail.com" value={form.email} onChange={e=>set('email',e.target.value)} />
                    </Field>
                    <Field label="Sujet" required error={errors.sujet}>
                      <select className={`form-control${errors.sujet?' error':''}`} value={form.sujet} onChange={e=>set('sujet',e.target.value)}>
                        <option value="">— Choisir un sujet —</option>
                        {['Demande d\'information','Adhésion','Partenariat','Programmes de formation','Presse / Médias','Autre'].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Message" required error={errors.message}>
                      <textarea className={`form-control${errors.message?' error':''}`} style={{ minHeight:140 }} placeholder="Votre message…" value={form.message} onChange={e=>set('message',e.target.value)} />
                    </Field>
                    <div className="form-check" style={{ marginBottom:'1.5rem' }}>
                      <input type="checkbox" id="rgpd" checked={form.rgpd} onChange={e=>set('rgpd',e.target.checked)} />
                      <label htmlFor="rgpd">
                        J'accepte que mes données soient utilisées pour traiter ma demande conformément à la <a href="#">politique de confidentialité</a>. <span className="req">*</span>
                      </label>
                    </div>
                    {errors.rgpd && <div className="err-msg" style={{ marginTop:'-1rem', marginBottom:'1rem' }}><i className="fas fa-exclamation-circle" /> {errors.rgpd}</div>}
                    <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:15 }}>
                      <i className="fas fa-paper-plane" /> Envoyer le message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Questions fréquentes</span>
            <h2>FAQ</h2>
            <div className="line" />
          </div>
          <div style={{ maxWidth:760, margin:'0 auto' }} className="fade-up">
            {[
              ['Comment puis-je adhérer à Congo Tech Progress ?', <>Rendez-vous sur la page <Link to="/adherer" style={{ color:'var(--blue)' }}>Adhérer</Link> et remplissez le formulaire en ligne. Notre équipe vous contactera sous 72h.</>],
              ['Les formations sont-elles payantes ?', 'Certaines formations sont gratuites pour les publics prioritaires. D\'autres peuvent nécessiter une contribution modeste. Contactez-nous pour en savoir plus.'],
              ['Comment devenir partenaire de l\'association ?', 'Envoyez-nous un message via ce formulaire en sélectionnant le sujet "Partenariat". Notre responsable partenariats prendra contact avec vous.'],
              ['Comment faire un don à l\'association ?', 'Vous pouvez soutenir nos actions via la cotisation de membre bienfaiteur, ou nous contacter directement pour discuter des modalités d\'un don.'],
            ].map(([q, r]) => (
              <details key={q}>
                <summary>
                  {q}
                  <i className="fas fa-plus" style={{ fontSize:'0.8rem', color:'var(--green)', flexShrink:0 }} />
                </summary>
                <p>{r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
