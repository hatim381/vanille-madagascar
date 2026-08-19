import { PodsArt } from './Icons'
import { waLink } from '../data'

const STATS = [['12 €', 'dès 5 gousses'], ['20 €', '10 gousses'], ['80 €', '50 gousses']]

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <span className="flag">🇲🇬 Sourcé à Madagascar · Sans intermédiaire</span>
          <h1>Vanille Bourbon Premium de Madagascar 🇲🇬</h1>
          <p className="lead">
            Des gousses souples, charnues et intensément parfumées, directement issues de Madagascar.
          </p>
          <div className="hero-cta">
            <a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
              Commander sur WhatsApp
            </a>
            <a className="btn btn-ghost" href="#tarifs">Voir les tarifs</a>
          </div>
          <div className="trust">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <strong>{n}</strong>
                {l}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="badge-float">
            <b>Direct</b>
            <span>producteur</span>
          </div>
          <figure className="pods">
            <PodsArt />
            <figcaption>Gousses souples · Récolte récente</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
