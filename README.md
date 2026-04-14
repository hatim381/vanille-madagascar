# Vanille de Madagascar

Site vitrine statique pour la vente de gousses de vanille Bourbon premium, originaires de Sambava, Madagascar.

## Aperçu

Page unique HTML/CSS/JS présentant les produits, les avis clients et un formulaire de contact via WhatsApp. Les commandes sont passées directement par WhatsApp, sans panier ni paiement en ligne.

**Site en production :** [hatim381.github.io/vanille-madagascar](https://hatim381.github.io/vanille-madagascar)

## Fonctionnalités

- Présentation des produits avec prix et descriptions
- Commande directe via WhatsApp
- Section avis clients
- FAQ interactive (accordéon)
- Design responsive (mobile, tablette, desktop)
- Animations au défilement
- SEO optimisé (meta tags, Open Graph, Schema.org JSON-LD)

## Produits proposés

| Produit | Contenu | Prix |
|---|---|---|
| Pack Découverte | 5 gousses (~20-25g) | 8,90 € |
| Vanille 50g | 10-12 gousses (Calibre A) | 14,90 € |
| Vanille 100g | 20-25 gousses (Calibre A+) | 24,90 € |
| Vanille 250g | 50-65 gousses (Calibre A+) | 54,90 € |

## Stack technique

- **HTML5** — structure sémantique
- **CSS3** — variables CSS, Grid, Flexbox, animations
- **JavaScript vanilla** — menu mobile, accordéon FAQ, IntersectionObserver
- **Google Fonts** — Cormorant Garamond + Inter
- **GitHub Pages** — hébergement statique gratuit

Aucune dépendance, aucun outil de build requis.

## Lancer en local

```bash
# Ouvrir directement dans le navigateur
open index.html

# Ou servir avec Python
python -m http.server 8000
# puis visiter http://localhost:8000
```

## Structure du projet

```
vanille-madagascar/
└── index.html    # Site complet (HTML + CSS + JS en un seul fichier)
```

## Déploiement

Le site est hébergé sur **GitHub Pages**. Chaque push sur la branche `main` met automatiquement à jour le site en production.

## Contact

- **WhatsApp :** +33 6 67 08 00 50
- **Email :** hatimadnanepro@gmail.com
