export const WHATSAPP = '33667080050'
export const WHATSAPP_DISPLAY = '+33 6 67 08 00 50'
export const EMAIL = 'hatimadnanepro@gmail.com'

export const waLink = (msg = 'Bonjour, je souhaite commander des gousses de vanille.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export const TIERS = [
  { min: 50, unit: 1.6 },
  { min: 10, unit: 2.0 },
  { min: 1, unit: 2.4 }
]

export const unitFor = (q) => TIERS.find((t) => q >= t.min).unit

export const eur = (n) =>
  n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const PACKS = [
  {
    qty: 5,
    price: 12,
    unit: '2,40 €',
    features: ['Idéal pour découvrir', 'Gousses calibrées à la main', 'Emballage hermétique']
  },
  {
    qty: 10,
    price: 20,
    unit: '2,00 €',
    save: '−17 % / gousse',
    featured: true,
    tag: 'Le plus choisi',
    features: ['Le bon volume pour l’année', 'Pâtisserie & rhums arrangés', 'Gousses souples et charnues']
  },
  {
    qty: 50,
    price: 80,
    unit: '1,60 €',
    save: '−33 % / gousse',
    features: ['Meilleur prix à la gousse', 'Artisans, revente, gros usage', 'Lot homogène en taille']
  }
]

export const FEATURES = [
  {
    title: 'Circuit direct',
    text: 'Les gousses sont achetées sur place, auprès du producteur, sans grossiste ni revendeur.',
    icon: (
      <>
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    )
  },
  {
    title: 'Récolte récente',
    text: 'Une vanille qui n’a pas passé deux ans en entrepôt : elle reste souple, grasse et charnue.',
    icon: <path d="M12 3v18M7 7c0 4 2 7 5 8M17 7c0 4-2 7-5 8" />
  },
  {
    title: 'Lots uniformes',
    text: 'Taille et qualité homogènes dans chaque commande : pas de mélange de calibres au hasard.',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 12h6M12 9v6" />
      </>
    )
  },
  {
    title: 'Prix dégressifs',
    text: 'De 2,40 € à 1,60 € la gousse. L’économie faite à l’achat vous revient directement.',
    icon: (
      <>
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
        <path d="M3 8h18v4H3zM12 8v12" />
      </>
    )
  }
]

export const USES = [
  'Crème pâtissière',
  'Rhum arrangé',
  'Glaces & sorbets',
  'Sucre vanillé maison',
  'Brioches & cannelés',
  'Chocolat & ganaches',
  'Confitures',
  'Sauces salées',
  'Extrait maison'
]

export const REVIEWS = [
  {
    text: 'Les gousses sont vraiment souples, on sent qu’elles sont fraîches. Rien à voir avec celles du supermarché.',
    who: 'Camille — Lyon'
  },
  {
    text: 'J’ai pris les 50 gousses pour mes rhums arrangés. Le prix à la gousse est imbattable et le parfum est puissant.',
    who: 'Yann — Nantes'
  },
  {
    text: 'Commande passée sur WhatsApp en deux minutes, reçue trois jours après. Emballage nickel.',
    who: 'Sofia — Marseille'
  }
]

export const FAQ = [
  {
    q: 'Comment conserver les gousses ?',
    a: 'Enveloppez-les dans du papier sulfurisé, puis dans un bocal hermétique, à l’abri de la lumière et de l’humidité, à température ambiante (18-22 °C). Elles se gardent ainsi 12 à 18 mois. Surtout pas au réfrigérateur : le froid les dessèche et favorise les moisissures.'
  },
  {
    q: 'D’où vient exactement la vanille ?',
    a: 'De Madagascar, achetée directement auprès du producteur. C’est ce circuit court qui explique à la fois la fraîcheur des gousses et le prix : aucun intermédiaire ne prend de marge au passage.'
  },
  {
    q: 'Les gousses sont-elles toutes identiques ?',
    a: 'Elles sont sélectionnées pour être homogènes en taille et en qualité au sein d’une même commande. Ce sont des produits naturels, donc de légères variations de longueur restent normales.'
  },
  {
    q: 'Quels sont les délais de livraison ?',
    a: 'Expédition sous 24 à 48 h après confirmation, puis 2 à 4 jours ouvrés en France métropolitaine. Les gousses voyagent sous emballage hermétique pour garder leur humidité.'
  },
  {
    q: 'Comment je commande et je paie ?',
    a: 'Vous écrivez sur WhatsApp ou par e-mail avec la quantité souhaitée. On confirme le total et l’adresse, puis le paiement se fait par virement ou par lien de paiement sécurisé.'
  },
  {
    q: 'Puis-je commander une grande quantité ?',
    a: 'Oui. Au-delà de 100 gousses (pâtissiers, restaurateurs, revendeurs), le tarif est étudié au cas par cas. Contactez-nous en précisant votre volume.'
  }
]
