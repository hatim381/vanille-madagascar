import { PodsArt } from './Icons'
import { waLink } from '../data'

const STATS = [
  ['1,60 €', 'prix mini / gousse'],
  ['0', 'intermédiaire'],
  ['24-48 h', 'expédition']
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <span className="flag">🇲🇬 Sourcé à Madagascar · Sans intermédiaire</span>
          <h1>
            La vanille, <em>telle qu&apos;elle sort</em> de la récolte.
          </h1>
          <p className="lead">
            Des gousses de vanille premium achetées directement auprès du producteur à Madagascar.
            Une vanille très fraîche, issue d&apos;une récolte récente&nbsp;: souple, charnue et
            intensément parfumée.
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
            <b>−33 %</b>
            <span>dès 50 gousses</span>
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
