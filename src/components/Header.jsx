import { Logo, WhatsAppIcon } from './Icons'
import { waLink } from '../data'

const LINKS = [
  ['#top', 'Accueil'],
  ['#tarifs', 'Nos vanilles'],
  ['#qualite', 'Pourquoi nous'],
  ['#faq', 'FAQ'],
  ['#commander', 'Commander']
]

export default function Header() {
  return (
    <header id="hdr">
      <div className="wrap nav">
        <a className="brand" href="#top">
          <Logo />
          <span>
            Vanille Premium Madagascar 🇲🇬
            <small>Direct producteur</small>
          </span>
        </a>
        <nav className="nav-links">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-wa btn-sm" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Commander sur WhatsApp">
          <WhatsAppIcon size={17} />
          Commander
        </a>
      </div>
    </header>
  )
}
