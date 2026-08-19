import { FEATURES, USES, REVIEWS, FAQ, waLink, EMAIL, WHATSAPP_DISPLAY, WHATSAPP } from '../data'
import { WhatsAppIcon } from './Icons'

export function Strip() {
  const items = [
    'Récolte récente',
    'Circuit direct producteur',
    'Aucun intermédiaire',
    'Taille & qualité uniformes',
    'Prix dégressifs'
  ]
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-inner">
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export function Quality() {
  return (
    <section id="qualite" className="why">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Ce qui change</span>
          <h2>Du producteur à votre cuisine, rien entre les deux</h2>
          <p>
            Chaque intermédiaire supprimé, c&apos;est du temps de stockage en moins et de la
            fraîcheur en plus dans la gousse.
          </p>
        </div>
        <div className="grid4">
          {FEATURES.map((f) => (
            <div className="feat rv" key={f.title}>
              <div className="ico">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Uses() {
  return (
    <section id="usages">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Usages</span>
          <h2>Une gousse, beaucoup de possibilités</h2>
          <p>
            Fendue et grattée, infusée entière, ou séchée puis mixée avec du sucre — rien ne se
            perd.
          </p>
        </div>
        <div className="uses rv">
          {USES.map((u) => (
            <span className="chip" key={u}>
              {u}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section id="avis" className="why">
      <div className="wrap">
        <div className="head center rv">
          <span className="eyebrow">Avis</span>
          <h2>Ce qu&apos;en disent les clients</h2>
        </div>
        <div className="grid3">
          {REVIEWS.map((r) => (
            <blockquote className="quote rv" key={r.who}>
              <div className="stars">★★★★★</div>
              <p>« {r.text} »</p>
              <span className="who">{r.who}</span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 840 }}>
        <div className="head center rv">
          <span className="eyebrow">FAQ</span>
          <h2>Questions fréquentes</h2>
        </div>
        <div className="rv">
          {FAQ.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section className="cta">
      <div className="wrap">
        <span className="eyebrow">Commander</span>
        <h2>Une vanille fraîche, à prix juste</h2>
        <p>Dites-nous simplement combien de gousses vous voulez. On s&apos;occupe du reste.</p>
        <div className="row">
          <a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp · {WHATSAPP_DISPLAY}
          </a>
          <a
            className="btn btn-ghost"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Commande gousses de vanille')}`}
          >
            Écrire un e-mail
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap fgrid">
        <div>© {new Date().getFullYear()} Vanille de Madagascar — Direct producteur 🇲🇬</div>
        <div>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{' '}
          · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
    </footer>
  )
}

export function Fab() {
  return (
    <a
      className="fab"
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
