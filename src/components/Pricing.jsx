import { useState } from 'react'
import { PACKS, waLink, unitFor, eur } from '../data'

const QUANTITIES = [5, 10, 20, 50, 100]

function Calculator() {
  const [qty, setQty] = useState(10)
  const unit = unitFor(qty)
  const total = qty * unit

  return (
    <div className="calc rv">
      <div>
        <h3>Une autre quantité&nbsp;?</h3>
        <p>Choisissez un format, on prépare votre message de commande.</p>
        <div className="picker" role="group" aria-label="Choisir une quantité">
          {QUANTITIES.map((q) => (
            <button
              key={q}
              type="button"
              aria-pressed={q === qty}
              onClick={() => setQty(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
      <div className="calc-out">
        <div className="tot">{Number.isInteger(total) ? total : eur(total)} €</div>
        <div className="sub">
          {qty} gousses · {eur(unit)} € / gousse
        </div>
        <a
          className="btn btn-wa"
          href={waLink(`Bonjour, je souhaite commander ${qty} gousses de vanille premium de Madagascar à ${eur(total)} €.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Commander
        </a>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="tarifs">
      <div className="wrap">
        <div className="head center rv">
          <span className="eyebrow">Tarifs</span>
          <h2>Des formats simples, des tarifs dégressifs</h2>
          <p>
            Choisissez le format qui correspond à votre usage, puis commandez directement sur WhatsApp.
          </p>
        </div>

        <div className="prices">
          {PACKS.map((p) => (
            <article key={p.qty} className={'card rv' + (p.featured ? ' featured' : '')}>
              {p.tag && <span className="tag">{p.tag}</span>}
              <div className="qty">{p.qty} gousses</div>
              <div className="price">
                {p.price}
                <sup>€</sup>
              </div>
              <div className="per">soit {p.unit} la gousse</div>
              {p.save && <span className="save">{p.save}</span>}
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                className={'btn btn-wa' + (p.featured ? ' btn-featured' : '')}
                href={waLink(
                  `Bonjour, je souhaite commander ${p.qty} gousses de vanille premium de Madagascar à ${p.price} €.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Commander
              </a>
            </article>
          ))}
        </div>

        <Calculator />

        <p className="note">
          Au-delà de 100 gousses, <strong>tarif sur demande</strong> — écrivez-nous directement.
        </p>
      </div>
    </section>
  )
}
