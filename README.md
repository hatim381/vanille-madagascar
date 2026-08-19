# Vanille Premium de Madagascar

Site vitrine React (Vite) pour la vente de gousses de vanille de Madagascar, en direct du producteur.

## Stack

- React 18 + Vite 5
- CSS vanilla (`src/styles.css`), aucune dépendance UI
- Aucun back-end : les commandes passent par WhatsApp

## Développement

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # sert dist/ en local
```

## Déploiement (Vercel)

Importer le dépôt sur [vercel.com/new](https://vercel.com/new). Vercel détecte Vite
automatiquement :

| Réglage | Valeur |
| --- | --- |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Chaque push sur la branche de production déclenche un nouveau déploiement.

## Structure

```
index.html                  métadonnées SEO, Open Graph, JSON-LD (Product + Offers)
src/data.jsx                contenu éditable : tarifs, atouts, usages, FAQ et contact WhatsApp
src/App.jsx                 assemblage des sections
src/styles.css              design system (variables CSS, composants, responsive)
src/components/Header.jsx   navigation collante
src/components/Hero.jsx     accroche + chiffres clés
src/components/Pricing.jsx  packs + calculateur de quantité
src/components/Sections.jsx bandeau, qualité, usages, avis, FAQ, CTA, footer
src/components/Icons.jsx    logo, icône WhatsApp, illustration des gousses
src/hooks/useReveal.js      apparition au scroll + ombre du header
legacy/index.html           ancienne page statique, conservée pour référence
```

## Modifier les prix ou le contenu

Tout est centralisé dans `src/data.jsx` :

- `PACKS` — les trois formats affichés (quantité, prix, arguments)
- `TIERS` — la grille dégressive utilisée par le calculateur (1,60 € / 2,00 € / 2,40 €)
- `WHATSAPP` — coordonnées de commande
- `FEATURES`, `USES`, `FAQ` — le reste du contenu éditorial

Les liens WhatsApp sont générés avec un message pré-rempli incluant la quantité et le total.

## Tarifs actuels

| Quantité | Prix | Prix / gousse |
| --- | --- | --- |
| 5 gousses | 12 € | 2,40 € |
| 10 gousses | 20 € | 2,00 € |
| 50 gousses | 80 € | 1,60 € |

Au-delà de 100 gousses : tarif sur demande.
