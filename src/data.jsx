export const WHATSAPP = '33636165126'
export const WHATSAPP_DISPLAY = '+33 6 36 16 51 26'

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
    features: ['Un premier format pour découvrir', 'Gousses souples et charnues', 'Parfum intense']
  },
  {
    qty: 10,
    price: 20,
    unit: '2,00 €',
    save: '2 € / gousse',
    featured: true,
    tag: 'Le plus choisi',
    features: ['Le format le plus choisi', 'Pour pâtisseries et desserts', 'Tarif dégressif']
  },
  {
    qty: 50,
    price: 80,
    unit: '1,60 €',
    save: '1,60 € / gousse',
    tag: 'Meilleur prix',
    features: ['Le meilleur prix à la gousse', 'Pour les grandes préparations', 'Tarif dégressif']
  }
]

export const FEATURES = [
  {
    title: 'Origine Madagascar',
    text: 'Une vanille de Madagascar, au coeur de l’identité du produit.',
    icon: (
      <>
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    )
  },
  {
    title: 'Direct producteur',
    text: 'Les gousses sont achetées directement auprès du producteur, sans intermédiaire.',
    icon: <path d="M12 3v18M7 7c0 4 2 7 5 8M17 7c0 4-2 7-5 8" />
  },
  {
    title: 'Récolte récente',
    text: 'Une récolte récente mise en avant pour une vanille souple, charnue et parfumée.',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 12h6M12 9v6" />
      </>
    )
  },
  {
    title: 'Qualité premium',
    text: 'Des gousses souples, charnues et intensément parfumées.',
    icon: (
      <>
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
        <path d="M3 8h18v4H3zM12 8v12" />
      </>
    )
  }
]

export const USES = [
  'Pâtisseries',
  'Desserts',
  'Rhums arrangés',
  'Crèmes glacées',
  'Préparations artisanales'
]

export const FAQ = [
  {
    q: 'D’où vient la vanille ?',
    a: 'La vanille est directement issue de Madagascar et achetée auprès du producteur, sans intermédiaire.'
  },
  {
    q: 'Les gousses sont-elles souples ?',
    a: 'Les gousses proposées sont présentées comme souples, charnues et intensément parfumées.'
  },
  {
    q: 'Comment conserver les gousses ?',
    a: 'Pour connaître les recommandations adaptées à votre commande, contactez-nous directement sur WhatsApp.'
  },
  {
    q: 'Combien de temps se conservent-elles ?',
    a: 'La durée de conservation dépend des conditions de stockage. Contactez-nous sur WhatsApp pour recevoir les indications liées à votre commande.'
  },
  {
    q: 'Comment commander ?',
    a: 'Choisissez votre format, cliquez sur le bouton WhatsApp correspondant, puis confirmez votre commande directement avec nous.'
  },
  {
    q: 'Quels sont les tarifs ?',
    a: '5 gousses : 12 € (2,40 € / gousse), 10 gousses : 20 € (2 € / gousse), 50 gousses : 80 € (1,60 € / gousse).'
  },
  {
    q: 'Puis-je commander une autre quantité ?',
    a: 'Oui. Écrivez-nous sur WhatsApp avec la quantité souhaitée afin que nous vous répondions directement.'
  },
  {
    q: 'Comment fonctionne la livraison ?',
    a: 'Les modalités de livraison ne sont pas détaillées ici. Contactez-nous sur WhatsApp pour les connaître avant de confirmer votre commande.'
  }
]
