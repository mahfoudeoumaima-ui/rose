/**
 * Jardin d'Amour - E-Commerce Vitrine
 * Common JavaScript Script (100% Responsive & Seamless UX)
 */

const PRODUCTS = [
  {
    id: 1,
    name: "L'Amour Rose",
    price: 450,
    category: "anniversaire",
    shortDesc: "Bouquet délicat composé de roses poudrées, pivoines et de feuillage tendre.",
    fullDesc: "Une véritable déclaration de tendresse. Ce bouquet rassemble les plus belles roses roses sélectionnées au matin, mariées à des pivoines épanouies et des touches de vert sage aromatique. Idéal pour célébrer un anniversaire d'amour ou transmettre une émotion pure.",
    image: "images/bouquet-1.jpg",
    gallery: ["images/bouquet-1.jpg", "images/bouquet-5.jpg", "images/bouquet-7.jpg"],
    featured: true
  },
  {
    id: 2,
    name: "Élégance Blanche",
    price: 600,
    category: "mariage",
    shortDesc: "Composition majestueuse de lys blancs immaculés et d'eucalyptus vert sage.",
    fullDesc: "Symbole de pureté et d'élégance suprême. Notre composition Élégance Blanche réunit des lys parfumés, des roses blanches d'exception et des branches d'eucalyptus frais. Conçue pour sublimer un mariage ou apporter une touche de sérénité rare.",
    image: "images/bouquet-2.jpg",
    gallery: ["images/bouquet-2.jpg", "images/bouquet-12.jpg", "images/bouquet-9.jpg"],
    featured: true
  },
  {
    id: 3,
    name: "Douceur Champêtre",
    price: 380,
    category: "naissance",
    shortDesc: "Assemblage poétique de fleurs sauvages, marguerites et chardons pastel.",
    fullDesc: "Directement inspiré de nos promenades au grand air. Douceur Champêtre capture la magie de la nature avec ses marguerites des champs, ses chardons délicats et ses petites fleurs fraîches aux teintes printanières. Un souffle d'authenticité et de réconfort.",
    image: "images/bouquet-3.jpg",
    gallery: ["images/bouquet-3.jpg", "images/bouquet-11.jpg", "images/bouquet-8.jpg"],
    featured: true
  },
  {
    id: 4,
    name: "Passion Infinie",
    price: 520,
    category: "excuses",
    shortDesc: "Somptueux bouquet de roses rouges velours et feuillage d'exception.",
    fullDesc: "La passion dans toute son intensité. Vingt-quatre roses rouges au toucher velouté, arrangées avec précision au sein d'un feuillage noble. Le cadeau idéal pour exprimer un sentiment sincère, demander pardon ou célébrer une grande passion.",
    image: "images/bouquet-4.jpg",
    gallery: ["images/bouquet-4.jpg", "images/bouquet-1.jpg", "images/bouquet-7.jpg"],
    featured: true
  },
  {
    id: 5,
    name: "Rêverie de Pivoines",
    price: 650,
    category: "mariage",
    shortDesc: "Pivoines roses et blanches d'exception sublimées par du gypsophile fin.",
    fullDesc: "Les pivoines sont les reines des fleurs romantiques. Travaillées ici en dégradé de blanc et de rose poudré, entourées d'un nuage de gypsophile aérien. Un véritable chef-d'œuvre artisanal à offrir pour les moments uniques.",
    image: "images/bouquet-5.jpg",
    gallery: ["images/bouquet-5.jpg", "images/bouquet-1.jpg", "images/bouquet-6.jpg"],
    featured: false
  },
  {
    id: 6,
    name: "Symphonie Pastel",
    price: 420,
    category: "naissance",
    shortDesc: "Harmonie douce de renoncules, tulipes et hortensias aux teintes poudrées.",
    fullDesc: "Une palette pastel apaisante qui apporte douceur et légèreté. Ce bouquet combine des renoncules satinées et des hortensias généreux pour fêter l'arrivée d'un nouveau-né ou illuminer une pièce d'une lueur apaisante.",
    image: "images/bouquet-6.jpg",
    gallery: ["images/bouquet-6.jpg", "images/bouquet-10.jpg", "images/bouquet-3.jpg"],
    featured: false
  },
  {
    id: 7,
    name: "Jardin Secret",
    price: 490,
    category: "anniversaire",
    shortDesc: "Roses anciennes parfumées, lavande et eucalyptus frais aromatique.",
    fullDesc: "Comme une promenade dans un jardin provençal à l'aube. Ce bouquet dégage des notes subtiles de lavande et d'eucalyptus, qui subliment des roses anciennes aux nuances romantiques uniques.",
    image: "images/bouquet-7.jpg",
    gallery: ["images/bouquet-7.jpg", "images/bouquet-1.jpg", "images/bouquet-11.jpg"],
    featured: false
  },
  {
    id: 8,
    name: "Éclat Solaire",
    price: 350,
    category: "anniversaire",
    shortDesc: "Généreux bouquet de tournesols éclatants et fleurs de saison aux teintes dorées.",
    fullDesc: "Apportez le soleil chez vos proches. Une composition chaleureuse et lumineuse qui égaie l'esprit et transmet une joie instantanée grâce à ses tournesols vigoureux et son feuillage pétillant.",
    image: "images/bouquet-8.jpg",
    gallery: ["images/bouquet-8.jpg", "images/bouquet-3.jpg", "images/bouquet-11.jpg"],
    featured: false
  },
  {
    id: 9,
    name: "Sérénité d'Orchidée",
    price: 700,
    category: "deuil",
    shortDesc: "Fleurs d'orchidée et roses blanches présentées avec un feuillage vert sage.",
    fullDesc: "Une création d'une rare noblesse pour témoigner du soutien, du respect ou célébrer un événement marquant. La grâce intemporelle des orchidées alliée à la délicatesse de notre savoir-faire d'atelier.",
    image: "images/bouquet-9.jpg",
    gallery: ["images/bouquet-9.jpg", "images/bouquet-2.jpg", "images/bouquet-12.jpg"],
    featured: false
  },
  {
    id: 10,
    name: "Berceau de Tendresse",
    price: 410,
    category: "naissance",
    shortDesc: "Fleurs poudrées très douces et tons crème réconfortants.",
    fullDesc: "Créé spécifiquement pour célébrer les naissances et entourer la famille d'une atmosphère rassurante et fleurie. Des teintes douces, sans parfum entêtant, pour respecter la sensibilité des tout-petits.",
    image: "images/bouquet-10.jpg",
    gallery: ["images/bouquet-10.jpg", "images/bouquet-6.jpg", "images/bouquet-1.jpg"],
    featured: false
  },
  {
    id: 11,
    name: "Botanique Sauvage",
    price: 460,
    category: "anniversaire",
    shortDesc: "Assemblage champêtre chic aux feuillages texturés et fleurs rares.",
    fullDesc: "Pour les amateurs de créations contemporaines et naturelles. Un équilibre parfait entre le sauvage et le raffiné, associant des tiges de fleurs champêtres aux contours graphiques.",
    image: "images/bouquet-11.jpg",
    gallery: ["images/bouquet-11.jpg", "images/bouquet-3.jpg", "images/bouquet-7.jpg"],
    featured: false
  },
  {
    id: 12,
    name: "Hommage Éternel",
    price: 580,
    category: "deuil",
    shortDesc: "Lys purs, roses blanches et feuillage vert profond pour un souvenir empreint de dignité.",
    fullDesc: "Un bouquet solennel et délicat confectionné pour exprimer de profondes condoléances et accompagner les familles avec retenue et poésie.",
    image: "images/bouquet-12.jpg",
    gallery: ["images/bouquet-12.jpg", "images/bouquet-2.jpg", "images/bouquet-9.jpg"],
    featured: false
  }
];

// Numéro WhatsApp par défaut
const WHATSAPP_NUMBER = "212600000000";

/* ----------------------------------------------------
   GESTION DU PANIER (localStorage & UI Drawer)
---------------------------------------------------- */

function getCart() {
  try {
    const raw = localStorage.getItem('jardin_amour_cart');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Erreur lecture cart', e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem('jardin_amour_cart', JSON.stringify(cart));
    updateCartUI();
  } catch (e) {
    console.error('Erreur sauvegarde cart', e);
  }
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`🌸 "${product.name}" a été ajouté à votre panier.`);
  openCartDrawer();
}

function updateCartQuantity(productId, newQty) {
  let cart = getCart();
  if (newQty <= 0) {
    cart = cart.filter(item => item.id !== productId);
  } else {
    const item = cart.find(i => i.id === productId);
    if (item) item.quantity = newQty;
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

function getCartTotalCount(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotalPrice(cart) {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
  const cart = getCart();
  const countBadges = document.querySelectorAll('.cart-count-badge');
  const totalItems = getCartTotalCount(cart);

  countBadges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  });

  const cartDrawerItems = document.getElementById('cart-drawer-items');
  const cartDrawerSubtotal = document.getElementById('cart-drawer-subtotal');

  if (cartDrawerItems) {
    if (cart.length === 0) {
      cartDrawerItems.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B8546E" stroke-width="1.5">
            <path d="M12 2C8 6 4 10 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 16 6 12 2Z"></path>
          </svg>
          <p>Votre panier est vide pour le moment.</p>
          <a href="boutique.html" class="btn btn-outline" onclick="closeCartDrawer()">Découvrir nos bouquets</a>
        </div>
      `;
    } else {
      cartDrawerItems.innerHTML = cart.map(item => `
        <div class="cart-drawer-item">
          <img src="${item.image}" alt="Bouquet de fleurs ${item.name}" class="cart-item-thumb" />
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">${item.price} DH</div>
            <div class="cart-item-qty-controls">
              <button type="button" aria-label="Diminuer quantité" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
              <span>${item.quantity}</span>
              <button type="button" aria-label="Augmenter quantité" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
          </div>
          <button type="button" class="cart-item-remove" aria-label="Supprimer" onclick="removeFromCart(${item.id})">&times;</button>
        </div>
      `).join('');
    }
  }

  if (cartDrawerSubtotal) {
    cartDrawerSubtotal.textContent = `${getCartTotalPrice(cart)} DH`;
  }
}

/* ----------------------------------------------------
   COMMANDE WHATSAPP
---------------------------------------------------- */

function checkoutWhatsApp() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Votre panier est vide.");
    return;
  }

  let message = `Bonjour Jardin d'Amour 🌸,\n\nJe souhaite effectuer la commande suivante :\n\n`;
  cart.forEach(item => {
    message += `• ${item.quantity}x ${item.name} — ${item.price * item.quantity} DH\n`;
  });
  message += `\n💰 Total : ${getCartTotalPrice(cart)} DH\n\nPouvez-vous svp me confirmer la disponibilité et les modalités de livraison ? Merci !`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function orderSingleProductWhatsApp(productName, price, quantity = 1) {
  const total = price * quantity;
  const message = `Bonjour Jardin d'Amour 🌸,\n\nJe souhaite commander directement :\n• ${quantity}x ${productName} (${price} DH/unité)\n\n💰 Total : ${total} DH\n\nPouvez-vous me donner les détails de livraison ? Merci !`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* ----------------------------------------------------
   DRAWER & OVERLAY CONTROLS
---------------------------------------------------- */

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ----------------------------------------------------
   TOAST NOTIFICATION
---------------------------------------------------- */

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'site-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ----------------------------------------------------
   PÉTALES FLOTTANTS EN CSS/JS DANS LE HERO
---------------------------------------------------- */

function initFloatingPetals() {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;

  const container = document.createElement('div');
  container.className = 'floating-petals-container';

  const petalTypes = [
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="#F8C8D4" opacity="0.8"><path d="M12 2C8 6 4 10 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 16 6 12 2Z"/></svg>`,
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="#F6DEE3" opacity="0.85"><path d="M12 2C9 7 5 11 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 11 15 7 12 2Z"/></svg>`,
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="#E8E0F0" opacity="0.8"><path d="M12 2C8.5 6.5 4.5 10.5 4.5 14.5C4.5 18.6 7.9 22 12 22C16.1 22 19.5 18.6 19.5 14.5C19.5 10.5 15.5 6.5 12 2Z"/></svg>`
  ];

  for (let i = 0; i < 12; i++) {
    const petal = document.createElement('div');
    petal.className = 'floating-petal';
    petal.innerHTML = petalTypes[i % petalTypes.length];
    petal.style.left = `${Math.random() * 94}%`;
    petal.style.animationDuration = `${7 + Math.random() * 7}s`;
    petal.style.animationDelay = `${Math.random() * 6}s`;
    petal.style.transform = `scale(${0.6 + Math.random() * 0.6}) rotate(${Math.random() * 360}deg)`;
    container.appendChild(petal);
  }

  hero.appendChild(container);
}

/* ----------------------------------------------------
   INITIALISATION COMMUNE DE LA PAGE
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initFloatingPetals();
  updateCartUI();

  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Hamburger Menu Controller
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Cart Drawer Controller
  const cartBtn = document.getElementById('cart-btn-trigger');
  const cartCloseBtn = document.getElementById('cart-drawer-close');
  const cartOverlay = document.getElementById('cart-overlay');
  const whatsappCheckoutBtn = document.getElementById('btn-whatsapp-checkout');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
  if (whatsappCheckoutBtn) whatsappCheckoutBtn.addEventListener('click', checkoutWhatsApp);

  initBoutiquePage();
  initProduitPage();
  initContactPage();
});

/* ----------------------------------------------------
   PAGE BOUTIQUE (boutique.html)
---------------------------------------------------- */

function initBoutiquePage() {
  const grid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  function renderProducts(category = 'all') {
    const filtered = category === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `<p class="no-products">Aucun bouquet ne correspond à cette occasion.</p>`;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <article class="product-card" data-category="${p.category}">
        <div class="product-card-img-wrap">
          <img src="${p.image}" alt="Bouquet de fleurs ${p.name} (${formatCategoryName(p.category)})" loading="lazy" />
          <span class="product-card-badge">🌸 ${formatCategoryName(p.category)}</span>
        </div>
        <div class="product-card-body">
          <h3 class="product-card-title">${p.name}</h3>
          <p class="product-card-desc">${p.shortDesc}</p>
          <div class="product-card-footer">
            <span class="product-card-price">${p.price} DH</span>
            <div class="product-card-actions">
              <a href="produit.html?id=${p.id}" class="btn btn-outline-sm">Voir</a>
              <button type="button" class="btn btn-order-card" onclick="addToCart(${p.id})">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                </svg>
                Commander
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderProducts('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProducts(cat);
    });
  });
}

function formatCategoryName(cat) {
  const map = {
    anniversaire: "Anniversaire",
    mariage: "Mariage",
    excuses: "Excuses",
    deuil: "Deuil",
    naissance: "Naissance"
  };
  return map[cat] || cat;
}

/* ----------------------------------------------------
   PAGE PRODUIT (produit.html)
---------------------------------------------------- */

function initProduitPage() {
  const container = document.getElementById('product-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  let productId = parseInt(urlParams.get('id'), 10);
  if (!productId || isNaN(productId)) {
    productId = 1;
  }

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  let selectedQty = 1;

  container.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-gallery-wrap">
        <div class="main-image-box">
          <img id="main-product-img" src="${product.image}" alt="Bouquet de fleurs ${product.name}" />
        </div>
        <div class="gallery-thumbs">
          ${product.gallery.map((imgUrl, index) => `
            <img src="${imgUrl}" alt="Vue ${index + 1} - Bouquet ${product.name}" class="thumb-img ${index === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${imgUrl}')" />
          `).join('')}
        </div>
      </div>
      <div class="product-info-wrap">
        <span class="product-category-tag">🌸 ${formatCategoryName(product.category)}</span>
        <h1 class="product-title">${product.name}</h1>
        <div class="product-price-large">${product.price} DH</div>
        <p class="product-description">${product.fullDesc}</p>
        
        <div class="product-meta-highlights">
          <div class="highlight-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 2C8 6 4 10 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 16 6 12 2Z"></path>
            </svg>
            <span>Fleurs fraîches coupées le jour même</span>
          </div>
          <div class="highlight-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Livraison soignée avec petite carte personnalisée</span>
          </div>
        </div>

        <div class="product-actions-group">
          <div class="quantity-picker">
            <button type="button" id="qty-minus" aria-label="Diminuer">-</button>
            <span id="qty-value">1</span>
            <button type="button" id="qty-plus" aria-label="Augmenter">+</button>
          </div>
          <button type="button" id="btn-add-to-cart-detail" class="btn btn-primary btn-large">
            Ajouter au panier 🌸
          </button>
        </div>

        <button type="button" id="btn-whatsapp-direct" class="btn btn-whatsapp btn-large">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.334 5.002L2 22l5.122-1.332A9.948 9.948 0 0 0 12.012 22c5.508 0 9.991-4.478 9.991-9.984 0-5.507-4.483-9.984-9.991-9.984zm5.795 14.155c-.244.686-1.42 1.312-1.968 1.385-.503.067-1.157.1-3.376-.821-2.836-1.176-4.664-4.047-4.805-4.236-.141-.189-1.15-1.533-1.15-2.925 0-1.392.73-2.077.989-2.361.26-.285.568-.356.758-.356.19 0 .378.002.544.01.178.008.416-.067.65.495.244.588.835 2.039.907 2.186.072.147.12.32.023.513-.097.192-.146.312-.289.48-.143.168-.302.375-.431.503-.143.143-.292.298-.126.583.166.284.737 1.215 1.583 1.968 1.088.969 2.007 1.27 2.29 1.412.285.143.453.12.62-.072.167-.193.717-.837.91-1.123.192-.286.384-.238.647-.142.264.095 1.673.788 1.96.931.288.143.48.214.55.333.072.119.072.693-.172 1.379z"/>
          </svg>
          Commander directement sur WhatsApp
        </button>
      </div>
    </div>
  `;

  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyVal = document.getElementById('qty-value');
  const btnAddToCart = document.getElementById('btn-add-to-cart-detail');
  const btnWhatsAppDirect = document.getElementById('btn-whatsapp-direct');

  if (qtyMinus && qtyPlus && qtyVal) {
    qtyMinus.addEventListener('click', () => {
      if (selectedQty > 1) {
        selectedQty--;
        qtyVal.textContent = selectedQty;
      }
    });

    qtyPlus.addEventListener('click', () => {
      selectedQty++;
      qtyVal.textContent = selectedQty;
    });
  }

  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      addToCart(product.id, selectedQty);
    });
  }

  if (btnWhatsAppDirect) {
    btnWhatsAppDirect.addEventListener('click', () => {
      orderSingleProductWhatsApp(product.name, product.price, selectedQty);
    });
  }

  renderRelatedProducts(product.id);
}

function changeMainImage(thumbEl, imgUrl) {
  const mainImg = document.getElementById('main-product-img');
  if (mainImg) mainImg.src = imgUrl;

  const thumbs = document.querySelectorAll('.thumb-img');
  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function renderRelatedProducts(currentId) {
  const relatedGrid = document.getElementById('related-products-grid');
  if (!relatedGrid) return;

  const related = PRODUCTS.filter(p => p.id !== currentId).slice(0, 3);
  relatedGrid.innerHTML = related.map(p => `
    <article class="product-card">
      <div class="product-card-img-wrap">
        <img src="${p.image}" alt="Bouquet de fleurs ${p.name} (${formatCategoryName(p.category)})" loading="lazy" />
        <span class="product-card-badge">🌸 ${formatCategoryName(p.category)}</span>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-title">${p.name}</h3>
        <p class="product-card-desc">${p.shortDesc}</p>
        <div class="product-card-footer">
          <span class="product-card-price">${p.price} DH</span>
          <div class="product-card-actions">
            <a href="produit.html?id=${p.id}" class="btn btn-outline-sm">Voir</a>
            <button type="button" class="btn btn-order-card" onclick="addToCart(${p.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
              </svg>
              Commander
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

/* ----------------------------------------------------
   PAGE CONTACT (contact.html)
---------------------------------------------------- */

function initContactPage() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value || 'Client';
    const phone = document.getElementById('contact-phone')?.value || '';
    const subject = document.getElementById('contact-subject')?.value || 'Commande / Information';
    const message = document.getElementById('contact-message')?.value || '';

    const text = `Bonjour Jardin d'Amour 🌸,\n\nMessage depuis le site web :\n• Nom : ${name}\n• Téléphone : ${phone}\n• Sujet : ${subject}\n\nMessage :\n${message}`;

    showToast("Redirection vers WhatsApp pour envoyer votre message...");
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
      form.reset();
    }, 800);
  });
}
