/* ====================================================
   VANILLE DE MADAGASCAR — script.js
   Vanilla JS · no dependencies
==================================================== */

'use strict';

/* ====================================================
   CONSTANTES DOM
==================================================== */
const header      = document.getElementById('header');
const menuToggle  = document.getElementById('menu-toggle');
const mainNav     = document.getElementById('main-nav');
const cartToggle  = document.getElementById('cart-toggle');
const cartClose   = document.getElementById('cart-close');
const cartDrawer  = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartBody    = document.getElementById('cart-body');
const cartFooter  = document.getElementById('cart-footer');
const cartTotal   = document.getElementById('cart-total');
const cartCount   = document.getElementById('cart-count');
const backToTop   = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const faqItems    = document.querySelectorAll('.faq__item');
const revealEls   = document.querySelectorAll('.reveal');
const addToCartBtns = document.querySelectorAll('.btn--add-cart');

/* ====================================================
   ÉTAT PANIER (en mémoire uniquement)
==================================================== */
let cart = [];   // [{ id, name, price, qty }]

/* ====================================================
   1. HEADER STICKY AU SCROLL
==================================================== */
const onScroll = () => {
  const scrolled = window.scrollY > 60;
  header.classList.toggle('is-scrolled', scrolled);

  // Bouton retour en haut
  if (backToTop) {
    if (scrolled) {
      backToTop.hidden = false;
      requestAnimationFrame(() => backToTop.style.opacity = '1');
    } else {
      backToTop.style.opacity = '0';
      setTimeout(() => { if (window.scrollY <= 60) backToTop.hidden = true; }, 300);
    }
  }
};

window.addEventListener('scroll', onScroll, { passive: true });

/* ====================================================
   2. MENU MOBILE
==================================================== */
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('is-open', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });

  // Fermer au clic sur un lien
  mainNav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Fermer à la touche Echap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
      document.body.style.overflow = '';
      menuToggle.focus();
    }
  });
}

/* ====================================================
   3. SCROLL FLUIDE & REVEAL AU SCROLL
==================================================== */
// Scroll fluide sur ancres (fallback navigateurs sans smooth-scroll natif)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const headerH = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Reveal au scroll via IntersectionObserver
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  // Fallback : tout afficher directement
  revealEls.forEach(el => el.classList.add('is-visible'));
}

/* ====================================================
   4. FAQ ACCORDION ACCESSIBLE
==================================================== */
faqItems.forEach(item => {
  const btn    = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');
  if (!btn || !answer) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Fermer toutes les autres FAQ
    faqItems.forEach(other => {
      if (other === item) return;
      const otherBtn    = other.querySelector('.faq__question');
      const otherAnswer = other.querySelector('.faq__answer');
      if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      if (otherAnswer) {
        otherAnswer.hidden = true;
        otherAnswer.style.visibility = '';
      }
    });

    // Toggle cette FAQ
    btn.setAttribute('aria-expanded', String(!isOpen));
    if (!isOpen) {
      answer.hidden = false;
      requestAnimationFrame(() => {
        answer.style.visibility = 'visible';
        answer.style.maxHeight = answer.scrollHeight + 'px';
      });
    } else {
      answer.style.maxHeight = '0';
      answer.style.visibility = 'hidden';
      setTimeout(() => { answer.hidden = true; }, 350);
    }
  });

  // Navigation clavier : flèches pour naviguer entre questions
  btn.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextItem = item.nextElementSibling;
      if (nextItem) nextItem.querySelector('.faq__question')?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevItem = item.previousElementSibling;
      if (prevItem) prevItem.querySelector('.faq__question')?.focus();
    }
  });
});

/* ====================================================
   5. PANIER
==================================================== */

// — Helpers —
const formatPrice = (n) =>
  n.toFixed(2).replace('.', ',') + ' €';

const getItemIndex = (id) =>
  cart.findIndex(item => item.id === id);

const updateCartCount = () => {
  const total = cart.reduce((acc, item) => acc + item.qty, 0);
  cartCount.textContent = String(total);
  if (cartToggle) {
    cartToggle.setAttribute('aria-label', `Ouvrir le panier (${total} article${total !== 1 ? 's' : ''})`);
  }
};

const computeTotal = () =>
  cart.reduce((acc, item) => acc + item.price * item.qty, 0);

// — Rendu panier —
const renderCart = () => {
  cartBody.innerHTML = '';

  if (cart.length === 0) {
    // État vide
    cartBody.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty__icon" aria-hidden="true">🛒</div>
        <h3 class="cart-empty__title">Votre panier est vide</h3>
        <p class="cart-empty__text">Ajoutez des produits pour commencer.</p>
        <a href="#produits" class="btn btn--outline btn--sm" onclick="closeCart()">Voir les produits</a>
      </div>`;
    cartTotal.textContent = '0,00 €';
    return;
  }

  // Items
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.setAttribute('role', 'article');
    el.innerHTML = `
      <div>
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__price-unit">${formatPrice(item.price)} / unité</p>
      </div>
      <div class="cart-item__controls">
        <div class="cart-item__qty" role="group" aria-label="Quantité de ${item.name}">
          <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Diminuer la quantité">−</button>
          <span class="qty-value" aria-live="polite">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Augmenter la quantité">+</button>
        </div>
        <p class="cart-item__subtotal">${formatPrice(item.price * item.qty)}</p>
        <button class="cart-item__remove" data-id="${item.id}" aria-label="Supprimer ${item.name}">Supprimer</button>
      </div>`;
    cartBody.appendChild(el);
  });

  // Total
  cartTotal.textContent = formatPrice(computeTotal());
};

// — Actions qty / supprimer —
cartBody.addEventListener('click', e => {
  const btn = e.target.closest('[data-action], .cart-item__remove');
  if (!btn) return;

  const id = parseInt(btn.dataset.id, 10);
  const idx = getItemIndex(id);
  if (idx === -1) return;

  if (btn.dataset.action === 'inc') {
    cart[idx].qty += 1;
  } else if (btn.dataset.action === 'dec') {
    cart[idx].qty -= 1;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
  } else if (btn.classList.contains('cart-item__remove')) {
    cart.splice(idx, 1);
  }

  updateCartCount();
  renderCart();
});

// — Ajouter au panier —
addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    if (!card) return;

    const id    = parseInt(card.dataset.productId, 10);
    const name  = card.dataset.productName;
    const price = parseFloat(card.dataset.productPrice);
    const idx   = getItemIndex(id);

    if (idx > -1) {
      cart[idx].qty += 1;
    } else {
      cart.push({ id, name, price, qty: 1 });
    }

    updateCartCount();
    renderCart();
    openCart();

    // Micro-feedback sur le bouton
    const originalText = btn.textContent;
    btn.textContent = '✓ Ajouté';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1400);
  });
});

// — Ouvrir/Fermer le drawer —
const openCart = () => {
  cartDrawer.classList.add('is-open');
  cartOverlay.classList.add('is-visible');
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Focus pour accessibilité
  setTimeout(() => cartDrawer.focus(), 60);
};

const closeCart = () => {
  cartDrawer.classList.remove('is-open');
  cartOverlay.classList.remove('is-visible');
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  cartToggle?.focus();
};

// Exposer closeCart globalement (utilisé dans le HTML inline)
window.closeCart = closeCart;

if (cartToggle) cartToggle.addEventListener('click', openCart);
if (cartClose)  cartClose.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Echap pour fermer le panier
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && cartDrawer.classList.contains('is-open')) {
    closeCart();
  }
});

// Focus trap dans le drawer (accessibilité)
cartDrawer.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusable = cartDrawer.querySelectorAll(
    'button:not([disabled]), a[href], input, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

// Rendu initial du panier
renderCart();

/* ====================================================
   6. BOUTON RETOUR EN HAUT
==================================================== */
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ====================================================
   7. FORMULAIRE DE CONTACT
==================================================== */
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const nameInput    = contactForm.querySelector('#form-name');
    const emailInput   = contactForm.querySelector('#form-email');
    const messageInput = contactForm.querySelector('#form-message');

    // Validation simple
    let valid = true;
    [nameInput, emailInput, messageInput].forEach(field => {
      if (!field || !field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailInput.style.borderColor = '#c0392b';
      valid = false;
    }

    if (!valid) return;

    // Préparer un lien mailto de fallback
    const name    = nameInput.value.trim();
    const email   = emailInput.value.trim();
    const message = messageInput.value.trim();
    const subject = encodeURIComponent(`Message de ${name} — Vanille de Madagascar`);
    const body    = encodeURIComponent(`Nom : ${name}\nE-mail : ${email}\n\n${message}`);
    window.location.href = `mailto:contact@vanilledemadagascar.fr?subject=${subject}&body=${body}`;

    // Feedback visuel
    const submitBtn = contactForm.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = '✓ Message préparé';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Envoyer le message';
        submitBtn.disabled = false;
        contactForm.reset();
      }, 3000);
    }
  });
}

/* ====================================================
   8. INITIALISATION AU CHARGEMENT
==================================================== */
document.addEventListener('DOMContentLoaded', () => {
  onScroll(); // Déclencher une fois dès le départ
});
