import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const memberTypes = [
  { value:'physique',    label:'Membre adhérent personne physique (12 000 FCFA)' },
  { value:'morale',      label:'Membre adhérent personne morale (35 000 FCFA)' },
  { value:'actif',       label:'Membre actif (50 000 FCFA)' },
  { value:'bienfaiteur', label:'Membre bienfaiteur (à partir de 200 000 FCFA)' },
]

const cotisations = [
  { cat:'Membre adhérent personne physique', desc:'Toute personne physique souhaitant soutenir la mission de l\'association.',          price:'12 000 FCFA',           badge:'badge-green',  avantages:'Accès aux formations, newsletter, droit de vote AG' },
  { cat:'Membre adhérent personne morale',   desc:'Associations, ONG, entreprises souhaitant collaborer avec Congo Tech Progress.',     price:'35 000 FCFA',           badge:'badge-blue',   avantages:'Tous les avantages + logo partenaire, 2 représentants en AG' },
  { cat:'Membre actif',                      desc:'Personne s\'engageant activement dans la vie de l\'association par du bénévolat.',   price:'50 000 FCFA',           badge:'badge-yellow', avantages:'Tous les avantages + éligibilité au CA, carte officielle' },
  { cat:'Membre bienfaiteur',                desc:'Personne ou organisation apportant un soutien financier exceptionnel.',              price:'À partir de 200 000 FCFA',badge:'badge-red',  avantages:'Tous les avantages + mention dans rapports, invitations VIP' },
]

function Field({ label, required: req, error, children }) {
  return (
    <div className="form-group">
      <label>{label}{req && <span className="req"> *</span>}</label>
      {children}
      {error && <div className="err-msg"><i className="fas fa-exclamation-circle" /> {error}</div>}
    </div>
  )
}

export default function Join() {
  useScrollReveal()
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({ nom:'', prenom:'', email:'', telephone:'', type:'', organisation:'', ville:'', motivation:'', statuts:false, newsletter:false })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validate = () => {
    const e = {}
    if (!form.nom)        e.nom        = 'Ce champ est requis.'
    if (!form.prenom)     e.prenom     = 'Ce champ est requis.'
    if (!form.email)      e.email      = 'Ce champ est requis.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Adresse e-mail invalide.'
    if (!form.telephone)  e.telephone  = 'Ce champ est requis.'
    if (!form.type)       e.type       = 'Veuillez choisir une catégorie.'
    if (!form.ville)      e.ville      = 'Ce champ est requis.'
    if (!form.motivation) e.motivation = 'Ce champ est requis.'
    if (!form.statuts)    e.statuts    = 'Vous devez accepter les statuts pour adhérer.'
    if (form.type === 'morale' && !form.organisation) e.organisation = 'Ce champ est requis pour une personne morale.'
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
          <h1>Adhérer à l'association</h1>
          <p className="lead">Rejoignez Congo Tech Progress et participez activement à la transformation numérique du Congo.</p>
          <nav className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span className="sep"><i className="fas fa-chevron-right" style={{ fontSize:'0.6rem' }} /></span>
            <span className="current">Adhérer</span>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Intro */}
          <div className="intro-box fade-up">
            <h2><i className="fas fa-heart" style={{ color:'var(--red)', marginRight:8 }} />Pourquoi adhérer ?</h2>
            <p>L'adhésion est gratuite à l'inscription. Elle vous donne accès à notre communauté, à nos événements et ressources. La cotisation annuelle finance nos programmes et amplifie notre impact.</p>
          </div>

          {/* Avantages */}
          <div className="fade-up" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1.2rem', marginBottom:'3.5rem' }}>
            {[['🎓','Accès aux formations','Bénéficiez d\'un accès prioritaire à tous nos ateliers.'],['🤝','Réseau professionnel','Intégrez un réseau de professionnels du numérique.'],['🗳️','Droit de vote','Participez aux assemblées générales et aux décisions.'],['📰','Newsletter exclusive','Recevez nos actualités en avant-première.']].map(([ico,t,p]) => (
              <div key={t} style={{ textAlign:'center', padding:'1.5rem', background:'var(--light)', borderRadius:'var(--r-lg)', border:'1px solid var(--border)' }}>
                <div style={{ fontSize:'1.8rem', marginBottom:'0.6rem' }}>{ico}</div>
                <h4 style={{ fontSize:'0.95rem', fontWeight:700, marginBottom:'0.4rem' }}>{t}</h4>
                <p style={{ fontSize:'0.82rem', color:'var(--muted)' }}>{p}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="section-header" style={{ textAlign:'left', marginBottom:'1.5rem' }}>
            <span className="eyebrow">Tarification</span>
            <h2>Catégories et cotisations</h2>
            <div className="line" style={{ margin:0 }} />
          </div>
          <div className="membership-table-wrap fade-up" style={{ marginBottom:'3.5rem' }}>
            <table className="membership-table">
              <thead><tr><th>Catégorie</th><th>Description</th><th>Cotisation</th><th>Avantages</th></tr></thead>
              <tbody>
                {cotisations.map(r => (
                  <tr key={r.cat}>
                    <td><strong>{r.cat}</strong><br /><span className={`badge ${r.badge}`} style={{ marginTop:4, display:'inline-block' }}>{r.badge.replace('badge-','')}</span></td>
                    <td style={{ fontSize:'0.875rem', color:'var(--muted)' }}>{r.desc}</td>
                    <td><strong style={{ fontSize:'1.05rem', color:'var(--green)' }}>{r.price}</strong><br /><small style={{ color:'#aaa' }}>/ an</small></td>
                    <td style={{ fontSize:'0.82rem' }}>{r.avantages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Form */}
          <div className="section-header" style={{ textAlign:'left', marginBottom:'1.5rem' }}>
            <span className="eyebrow">Inscription</span>
            <h2>Formulaire d'adhésion</h2>
            <div className="line" style={{ margin:0 }} />
          </div>

          {sent ? (
            <div className="form-success fade-up">
              <div className="si"><i className="fas fa-check-circle" /></div>
              <h3>Demande envoyée avec succès !</h3>
              <p>Merci pour votre démarche. Notre équipe vous contactera sous 72 heures ouvrées pour finaliser votre inscription et vous communiquer les modalités de paiement.</p>
            </div>
          ) : (
            <div className="form-card fade-up">
              <form onSubmit={submit} noValidate>

                <p className="form-section-title"><i className="fas fa-user" style={{ color:'var(--green)', marginRight:8 }} />Informations personnelles</p>
                <div className="form-row">
                  <Field label="Nom" required error={errors.nom}>
                    <input className={`form-control${errors.nom?' error':form.nom?' valid':''}`} placeholder="Votre nom" value={form.nom} onChange={e=>set('nom',e.target.value)} />
                  </Field>
                  <Field label="Prénom" required error={errors.prenom}>
                    <input className={`form-control${errors.prenom?' error':form.prenom?' valid':''}`} placeholder="Votre prénom" value={form.prenom} onChange={e=>set('prenom',e.target.value)} />
                  </Field>
                </div>
                <div className="form-row">
                  <Field label="Adresse e-mail" required error={errors.email}>
                    <input type="email" className={`form-control${errors.email?' error':''}`} placeholder="exemple@mail.com" value={form.email} onChange={e=>set('email',e.target.value)} />
                  </Field>
                  <Field label="Téléphone" required error={errors.telephone}>
                    <input type="tel" className={`form-control${errors.telephone?' error':''}`} placeholder="+242 06 xxx xx xx" value={form.telephone} onChange={e=>set('telephone',e.target.value)} />
                  </Field>
                </div>
                <div className="form-row">
                  <Field label="Type de membre" required error={errors.type}>
                    <select className={`form-control${errors.type?' error':''}`} value={form.type} onChange={e=>set('type',e.target.value)}>
                      <option value="">— Sélectionner une catégorie —</option>
                      {memberTypes.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                    </select>
                  </Field>
                  <Field label="Ville" required error={errors.ville}>
                    <input className={`form-control${errors.ville?' error':''}`} placeholder="Brazzaville, Pointe-Noire…" value={form.ville} onChange={e=>set('ville',e.target.value)} />
                  </Field>
                </div>

                {form.type === 'morale' && (
                  <Field label="Nom de l'organisation" required error={errors.organisation}>
                    <input className={`form-control${errors.organisation?' error':''}`} placeholder="Nom de votre organisation" value={form.organisation} onChange={e=>set('organisation',e.target.value)} />
                  </Field>
                )}

                <p className="form-section-title" style={{ marginTop:'1.5rem' }}><i className="fas fa-comment" style={{ color:'var(--blue)', marginRight:8 }} />Motivation</p>
                <Field label="Pourquoi souhaitez-vous adhérer ?" required error={errors.motivation}>
                  <textarea className={`form-control${errors.motivation?' error':''}`} placeholder="Décrivez vos motivations et ce que vous souhaitez apporter…" value={form.motivation} onChange={e=>set('motivation',e.target.value)} />
                </Field>

                <div className="form-check">
                  <input type="checkbox" id="statuts" checked={form.statuts} onChange={e=>set('statuts',e.target.checked)} />
                  <label htmlFor="statuts">
                    J'ai lu et j'accepte les <Link to="/documents">statuts de l'association</Link> et le <Link to="/documents">règlement intérieur</Link>. <span className="req">*</span>
                  </label>
                </div>
                {errors.statuts && <div className="err-msg" style={{ marginTop:'-0.8rem', marginBottom:'1rem' }}><i className="fas fa-exclamation-circle" /> {errors.statuts}</div>}

                <div className="form-check">
                  <input type="checkbox" id="newsletter" checked={form.newsletter} onChange={e=>set('newsletter',e.target.checked)} />
                  <label htmlFor="newsletter">Je souhaite recevoir la newsletter de Congo Tech Progress.</label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop:'0.5rem', width:'100%', justifyContent:'center', padding:'15px' }}>
                  <i className="fas fa-paper-plane" /> Soumettre ma demande d'adhésion
                </button>
              </form>
            </div>
          )}

          {/* Paiement */}
          <div style={{ marginTop:'3.5rem' }} className="fade-up">
            <div className="section-header" style={{ textAlign:'left', marginBottom:'1.5rem' }}>
              <span className="eyebrow">Paiement</span>
              <h2>Modalités de paiement</h2>
              <div className="line" style={{ margin:0 }} />
            </div>
            <p style={{ fontSize:'0.93rem', color:'#555', marginBottom:'1.5rem' }}>
              Après validation de votre demande, notre équipe vous contactera pour finaliser l'inscription et vous communiquer les coordonnées de paiement.
            </p>
            <div className="payment-grid">
              {[['📱','Mobile Money','MTN MoMo, Airtel Money — Paiement simple depuis votre téléphone.'],['🏦','Virement bancaire','Virement sur le compte de l\'association. RIB communiqué sur demande.'],['💵','Espèces','Règlement en espèces directement auprès de notre bureau lors d\'une permanence.']].map(([ico,t,p]) => (
                <div className="payment-card" key={t}>
                  <div className="pay-icon">{ico}</div>
                  <h4>{t}</h4>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
