import { FEATURES, USES, FAQ, waLink, WHATSAPP_DISPLAY, WHATSAPP } from '../data'
import { PodsArt, WhatsAppIcon } from './Icons'

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
          <span className="eyebrow">La sélection</span>
          <h2>Pourquoi choisir notre vanille ?</h2>
          <p>
            Une origine claire, une relation directe et les qualités recherchées dans une vanille premium.
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
          <h2>Une vanille pour toutes tes préparations</h2>
          <p>
            Des usages du quotidien aux préparations artisanales, la vanille accompagne toutes vos envies.
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

export function Product() {
  return (
    <section id="produit" className="product-section">
      <div className="wrap product-grid">
        <figure className="product-visual">
          <div className="product-art"><span aria-hidden="true">✦</span><PodsArt /></div>
          <figcaption>Une matière brute, une présence intense.</figcaption>
        </figure>
        <div className="head rv">
          <span className="eyebrow">Le produit</span>
          <h2>Une gousse qui se remarque</h2>
          <p>Texture souple, aspect charnu, parfum intense : les qualités essentielles sont au centre de chaque format.</p>
          <div className="product-points">
            <span>Texture souple</span><span>Aspect charnu</span><span>Parfum intense</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowToOrder() {
  return (
    <section id="commander" className="how-section">
      <div className="wrap">
        <div className="head center rv"><span className="eyebrow">Simple et direct</span><h2>Comment commander</h2></div>
        <div className="steps">
          {['Choisis ton format', 'Clique sur WhatsApp', 'Confirme ta commande'].map((label, i) => (
            <div className="step rv" key={label}><span>0{i + 1}</span><h3>{label}</h3></div>
          ))}
        </div>
        <div className="center-action"><a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Commander sur WhatsApp</a></div>
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
        <h2>Envie de goûter à une vraie vanille de Madagascar ?</h2>
        <p>Dites-nous simplement combien de gousses vous voulez. On s&apos;occupe du reste.</p>
        <div className="row">
          <a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Commander sur WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap fgrid">
        <div>© {new Date().getFullYear()} Vanille Premium de Madagascar 🇲🇬<small>Gousses de vanille premium directement issues de Madagascar.</small></div>
        <div>
          WhatsApp : <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
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
