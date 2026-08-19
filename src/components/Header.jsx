import { Logo, WhatsAppIcon } from './Icons'
import { waLink } from '../data'

const LINKS = [
  ['#tarifs', 'Tarifs'],
  ['#qualite', 'Qualité'],
  ['#usages', 'Usages'],
  ['#avis', 'Avis'],
  ['#faq', 'FAQ']
]

export default function Header() {
  return (
    <header id="hdr">
      <div className="wrap nav">
        <a className="brand" href="#top">
          <Logo />
          <span>
            Vanille de Madagascar
            <small>Direct producteur</small>
          </span>
        </a>
        <nav className="nav-links">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-wa btn-sm" href={waLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={17} />
          Commander
        </a>
      </div>
    </header>
  )
}
