const mockProducts = [
    {
        id: "1",
        name: "Tomates Orgânicos",
        price: 8.5,
        unit: "kg",
        producer: "Sítio Vale Verde",
        location: "Bragança Paulista, SP",
        category: "Hortaliças",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
        description: "Tomates frescos cultivados sem agrotóxicos, colhidos diariamente."
    },
    {
        id: "2",
        name: "Mel Puro de Flores Silvestres",
        price: 35.0,
        unit: "500g",
        producer: "Apiário Flor do Campo",
        location: "Cunha, SP",
        category: "Mel",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784907?w=400",
        description: "Mel artesanal puro, extraído de colmeias em área de preservação."
    },
    {
        id: "3",
        name: "Ovos Caipiras",
        price: 18.0,
        unit: "dúzia",
        producer: "Granja da Serra",
        location: "Atibaia, SP",
        category: "Ovos",
        image: "https://images.unsplash.com/photo-1582722872445-44dc1f3e9b84?w=400",
        description: "Ovos de galinhas criadas soltas, alimentadas com ração natural."
    },
    {
        id: "4",
        name: "Queijo Minas Artesanal",
        price: 45.0,
        unit: "kg",
        producer: "Fazenda Boa Vista",
        location: "Serra da Mantiqueira, MG",
        category: "Laticínios",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400",
        description: "Queijo artesanal tradicional, feito com leite de vacas criadas a pasto."
    },
    {
        id: "5",
        name: "Verduras Orgânicas Mistas",
        price: 12.0,
        unit: "maço",
        producer: "Horta do Sítio",
        location: "Ibiúna, SP",
        category: "Hortaliças",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
        description: "Seleção de verduras frescas colhidas na hora, 100% orgânicas."
    },
    {
        id: "6",
        name: "Leite Fresco Integral",
        price: 6.5,
        unit: "litro",
        producer: "Fazenda São José",
        location: "Campinas, SP",
        category: "Laticínios",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
        description: "Leite integral fresco, ordenhado diariamente de vacas saudáveis."
    }
];

const mockProducers = [
    {
        id: "1",
        name: "Sítio Vale Verde",
        location: "Bragança Paulista, SP",
        description: "Produção familiar de hortaliças orgânicas há 15 anos. Utilizamos métodos naturais e sustentáveis de cultivo.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
        products: 12,
        rating: 4.8,
        specialty: "Hortaliças"
    },
    {
        id: "2",
        name: "Apiário Flor do Campo",
        location: "Cunha, SP",
        description: "Criação de abelhas e produção de mel puro. Nossas colmeias ficam em área de mata preservada.",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
        products: 5,
        rating: 5.0,
        specialty: "Apicultura"
    },
    {
        id: "3",
        name: "Fazenda Boa Vista",
        location: "Serra da Mantiqueira, MG",
        description: "Fazenda tradicional de produção de queijos artesanais. Nosso queijo minas é certificado e premiado.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
        products: 8,
        rating: 4.9,
        specialty: "Laticínios"
    }
];

const mockProblems = [
    {
        id: "1",
        title: "Vaca com Mastite - Preciso de Orientação",
        description: "Uma das minhas vacas leiteiras está apresentando sinais de mastite. O leite está saindo com grumos e ela parece sentir dor ao ordenhar. Já isolei ela do rebanho. Alguém pode me orientar sobre o tratamento?",
        producer: "João Silva",
        location: "Passos, MG",
        animal: "Vaca Leiteira",
        date: "10/02/2026",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400",
        status: "aberto",
        comments: 8
    },
    {
        id: "2",
        title: "Galinhas Pararam de Botar Ovos",
        description: "Minhas galinhas caipiras pararam de botar ovos há 3 dias. Elas parecem saudáveis, estão comendo normalmente. Mudei a ração recentemente. Pode ser isso? O que devo fazer?",
        producer: "Maria Santos",
        location: "Atibaia, SP",
        animal: "Galinhas Poedeiras",
        date: "11/02/2026",
        image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400",
        status: "em andamento",
        comments: 5
    },
    {
        id: "3",
        title: "Bezerro com Diarreia - Resolvido!",
        description: "Meu bezerro estava com diarreia severa. Graças às orientações da comunidade, consegui tratar com soro caseiro e probióticos. Ele já está se alimentando bem novamente!",
        producer: "Carlos Oliveira",
        location: "Poços de Caldas, MG",
        animal: "Bezerro",
        date: "08/02/2026",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400",
        status: "resolvido",
        comments: 12
    }
];

const mockComments = {
    "1": [
        {
            id: "1",
            author: "Dr. Pedro Veterinário",
            date: "10/02/2026 14:30",
            text: "João, primeiramente é importante confirmar o diagnóstico. Faça o teste da caneca de fundo escuro. Se confirmar mastite clínica, limpe bem o úbere, aplique compressa morna e ordenhe manualmente. Procure um veterinário para prescrever antibiótico adequado."
        },
        {
            id: "2",
            author: "Ana Produtora",
            date: "10/02/2026 16:45",
            text: "Tive um caso parecido mês passado. Além do tratamento com antibiótico, melhorei a higiene do local de ordenha e isso ajudou muito na recuperação e prevenção de novos casos."
        }
    ],
    "2": [
        {
            id: "1",
            author: "José Granjeiro",
            date: "11/02/2026 09:15",
            text: "Maria, pode ser estresse pela mudança de ração. Volte para a ração antiga gradualmente e observe. Também verifique se há iluminação adequada no galinheiro (14-16 horas de luz por dia)."
        }
    ],
    "3": [
        {
            id: "1",
            author: "Veterinária Clara",
            date: "08/02/2026 11:20",
            text: "Que ótimo, Carlos! O soro caseiro realmente é muito eficaz. Continue monitorando e mantenha a hidratação. Parabéns pela dedicação!"
        }
    ]
};

// ==================== STATE ====================

let currentUser = null;
let cart = [];
let currentSection = 'home';
let selectedCategory = 'all';
let searchQuery = '';
let conversations = [];
let currentChatProducer = null;

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Carregar usuário do localStorage
    loadCurrentUser();
    
    // Carregar carrinho do localStorage
    loadCart();
    
    // Carregar conversas do localStorage
    loadConversations();
    
    // Renderizar conteúdo inicial
    renderFeaturedProducts();
    renderProducts();
    renderProducers();
    renderProblems();
    
    // Setup event listeners
    setupNavigationListeners();
    setupHeaderListeners();
    setupModalListeners();
    setupAuthListeners();
    setupCartListeners();
    setupChatListeners();
    setupFilterListeners();
    setupProfileListeners();
    setupProblemListeners();
    
    // Atualizar UI
    updateCartBadge();
    updateUserUI();
}

// ==================== NAVIGATION ====================

function setupNavigationListeners() {
    // Nav links
    document.querySelectorAll('.nav-link, [data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (section) {
                navigateTo(section);
            }
        });
    });
}

function navigateTo(section) {
    currentSection = section;
    
    // Atualizar nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });
    
    // Mostrar seção
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.toggle('active', sec.id === `${section}-section`);
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== HEADER ====================

function setupHeaderListeners() {
    // Cart button
    document.getElementById('cartBtn').addEventListener('click', () => {
        openModal('cartModal');
        renderCart();
    });
    
    // Messages button
    document.getElementById('messagesBtn').addEventListener('click', () => {
        openModal('messagesModal');
        renderConversations();
    });
    
    // Login button
    document.getElementById('loginBtn').addEventListener('click', () => {
        openModal('authModal');
    });
    
    // User avatar dropdown
    const userAvatar = document.getElementById('userAvatar');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userAvatar) {
        userAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        userDropdown?.classList.remove('active');
    });
    
    // Profile button
    document.getElementById('profileBtn')?.addEventListener('click', () => {
        openModal('profileModal');
        loadProfileData();
    });
    
    // Logout button
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        logout();
    });
}

function updateUserUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    
    if (currentUser) {
        loginBtn.style.display = 'none';
        userMenu.style.display = 'block';
        
        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        document.getElementById('userInitials').textContent = initials;
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userEmail').textContent = currentUser.email;
    } else {
        loginBtn.style.display = 'inline-flex';
        userMenu.style.display = 'none';
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }
}
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featured = mockProducts.slice(0, 3);
    
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
    
    // Add event listeners
    container.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.productId;
            addToCart(productId);
        });
    });
}

function renderProducts() {
    const container = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyProducts');
    
    const filtered = mockProducts.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.producer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
    } else {
        container.style.display = 'grid';
        emptyState.style.display = 'none';
        container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        
        // Add event listeners
        container.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = btn.dataset.productId;
                addToCart(productId);
            });
        });
    }
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-producer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${product.producer} - ${product.location}</span>
                </div>
                <div class="product-footer">
                    <div>
                        <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                        <span class="product-unit">/${product.unit}</span>
                    </div>
                    <button class="btn-add-cart" data-product-id="${product.id}">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==================== PRODUCERS ====================

function renderProducers() {
    const container = document.getElementById('producersGrid');
    
    container.innerHTML = mockProducers.map(producer => `
        <div class="producer-card">
            <img src="${producer.image}" alt="${producer.name}" class="producer-image">
            <div class="producer-content">
                <span class="producer-specialty">${producer.specialty}</span>
                <h3 class="producer-name">${producer.name}</h3>
                <div class="producer-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${producer.location}</span>
                </div>
                <p class="producer-description">${producer.description}</p>
                <div class="producer-stats">
                    <div class="producer-stat">
                        <span class="producer-stat-value">${producer.products}</span>
                        <span class="producer-stat-label">Produtos</span>
                    </div>
                    <div class="producer-stat">
                        <span class="producer-stat-value">${producer.rating}</span>
                        <span class="producer-stat-label">Avaliação</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== PROBLEMS ====================

function renderProblems() {
    const container = document.getElementById('problemsGrid');
    
    container.innerHTML = mockProblems.map(problem => `
        <div class="problem-card" data-problem-id="${problem.id}">
            <img src="${problem.image}" alt="${problem.title}" class="problem-image">
            <div class="problem-content">
                <div class="problem-header">
                    <span class="problem-status status-${problem.status === 'aberto' ? 'open' : problem.status === 'em andamento' ? 'progress' : 'solved'}">
                        ${problem.status === 'aberto' ? 'Aberto' : problem.status === 'em andamento' ? 'Em Andamento' : 'Resolvido'}
                    </span>
                </div>
                <h3 class="problem-title">${problem.title}</h3>
                <p class="problem-description">${problem.description}</p>
                <div class="problem-meta">
                    <div class="problem-author">
                        <strong>${problem.producer}</strong>
                        <small>${problem.location}</small>
                    </div>
                    <div class="problem-comments">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>${problem.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners
    container.querySelectorAll('.problem-card').forEach(card => {
        card.addEventListener('click', () => {
            const problemId = card.dataset.problemId;
            openProblemDetail(problemId);
        });
    });
}

function setupProblemListeners() {
    const commentForm = document.getElementById('commentForm');
    
    commentForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('commentInput');
        const text = input.value.trim();
        
        if (text && currentUser) {
            addComment(text);
            input.value = '';
        } else if (!currentUser) {
            alert('Você precisa estar logado para comentar!');
        }
    });
}

function openProblemDetail(problemId) {
    const problem = mockProblems.find(p => p.id === problemId);
    if (!problem) return;
    
    const modal = document.getElementById('problemModal');
    const detailContainer = document.getElementById('problemDetail');
    
    document.getElementById('problemTitle').textContent = problem.title;
    
    detailContainer.innerHTML = `
        <div class="problem-detail-content">
            <img src="${problem.image}" alt="${problem.title}" class="problem-detail-image">
            <div class="problem-detail-header">
                <span class="problem-status status-${problem.status === 'aberto' ? 'open' : problem.status === 'em andamento' ? 'progress' : 'solved'}">
                    ${problem.status === 'aberto' ? 'Aberto' : problem.status === 'em andamento' ? 'Em Andamento' : 'Resolvido'}
                </span>
            </div>
            <div class="problem-detail-meta">
                <div><strong>Produtor:</strong> ${problem.producer}</div>
                <div><strong>Local:</strong> ${problem.location}</div>
                <div><strong>Animal:</strong> ${problem.animal}</div>
                <div><strong>Data:</strong> ${problem.date}</div>
            </div>
            <p class="problem-detail-description">${problem.description}</p>
        </div>
    `;
    
    renderComments(problemId);
    openModal('problemModal');
}

function renderComments(problemId) {
    const container = document.getElementById('commentsList');
    const comments = mockComments[problemId] || [];
    
    if (comments.length === 0) {
        container.innerHTML = '<p style="color: #9ca3af; text-align: center;">Nenhum comentário ainda. Seja o primeiro a ajudar!</p>';
    } else {
        container.innerHTML = comments.map(comment => `
            <div class="comment-item">
                <div class="comment-header">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
            </div>
        `).join('');
    }
}

function addComment(text) {
    // Aqui você adicionaria ao backend
    alert('Comentário enviado com sucesso! (Funcionalidade completa requer backend)');
}

// ==================== CART ====================

function addToCart(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.product.id === productId);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    saveCart();
    updateCartBadge();
    
    // Feedback visual
    const btn = document.querySelector(`[data-product-id="${productId}"]`);
    const originalText = btn.textContent;
    btn.textContent = '✓ Adicionado';
    btn.style.background = '#15803d';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    updateCartBadge();
    renderCart();
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.product.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            renderCart();
        }
    }
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const emptyState = document.getElementById('emptyCart');
    const totalElement = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'flex';
        totalElement.textContent = 'R$ 0,00';
        return;
    }
    
    emptyState.style.display = 'none';
    
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.product.name}</div>
                <div class="cart-item-producer">${item.product.producer}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-action="decrease" data-product-id="${item.product.id}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-product-id="${item.product.id}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 5v14M5 12h14"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div style="text-align: right;">
                <div class="cart-item-price">R$ ${(item.product.price * item.quantity).toFixed(2)}</div>
                <button class="btn-remove" data-product-id="${item.product.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
    
    // Event listeners
    container.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.productId;
            const action = btn.dataset.action;
            const item = cart.find(i => i.product.id === productId);
            
            if (action === 'increase') {
                updateQuantity(productId, item.quantity + 1);
            } else {
                updateQuantity(productId, item.quantity - 1);
            }
        });
    });
    
    container.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.productId;
            removeFromCart(productId);
        });
    });
}

function setupCartListeners() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        
        if (!currentUser) {
            closeModal('cartModal');
            openModal('authModal');
            alert('Faça login para finalizar a compra!');
            return;
        }
        
        // Abrir chat com o produtor
        const producerName = cart[0].product.producer;
        currentChatProducer = producerName;
        closeModal('cartModal');
        openChatModal();
    });
}

function saveCart() {
    localStorage.setItem('campo_direto_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('campo_direto_cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}
function setupAuthListeners() {
    // Tabs
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.dataset.tab;
            
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            if (tabType === 'login') {
                loginForm.style.display = 'flex';
                registerForm.style.display = 'none';
                document.getElementById('authTitle').textContent = 'Entrar';
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'flex';
                document.getElementById('authTitle').textContent = 'Cadastrar';
            }
        });
    });
    
    // User type selector
    const userTypeRadios = document.querySelectorAll('input[name="userType"]');
    const producerFields = document.getElementById('producerFields');
    const locationFields = document.getElementById('locationFields');
    
    userTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'producer') {
                producerFields.style.display = 'block';
                locationFields.style.display = 'block';
            } else {
                producerFields.style.display = 'none';
                locationFields.style.display = 'none';
            }
        });
    });
    
    // Login form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simulação de login
        const savedUsers = JSON.parse(localStorage.getItem('campo_direto_users') || '[]');
        const user = savedUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = { ...user };
            delete currentUser.password; // Não manter senha na memória
            saveCurrentUser();
            updateUserUI();
            closeModal('authModal');
            alert(`Bem-vindo(a), ${currentUser.name}!`);
        } else {
            alert('Email ou senha incorretos!');
        }
    });
    
    // Register form
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const userType = document.querySelector('input[name="userType"]:checked').value;
        const farm = document.getElementById('registerFarm').value;
        const location = document.getElementById('registerLocation').value;
        
        // Verificar se usuário já existe
        const savedUsers = JSON.parse(localStorage.getItem('campo_direto_users') || '[]');
        if (savedUsers.some(u => u.email === email)) {
            alert('Este email já está cadastrado!');
            return;
        }
        
        // Criar novo usuário
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
            userType,
            farm: userType === 'producer' ? farm : null,
            location: userType === 'producer' ? location : null
        };
        
        savedUsers.push(newUser);
        localStorage.setItem('campo_direto_users', JSON.stringify(savedUsers));
        
        // Login automático
        currentUser = { ...newUser };
        delete currentUser.password;
        saveCurrentUser();
        updateUserUI();
        closeModal('authModal');
        alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${currentUser.name}!`);
    });
}

function saveCurrentUser() {
    localStorage.setItem('campo_direto_current_user', JSON.stringify(currentUser));
}

function loadCurrentUser() {
    const saved = localStorage.getItem('campo_direto_current_user');
    if (saved) {
        currentUser = JSON.parse(saved);
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('campo_direto_current_user');
    updateUserUI();
    alert('Você saiu da sua conta!');
}

// ==================== PROFILE ====================

function setupProfileListeners() {
    const profileForm = document.getElementById('profileForm');
    
    profileForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('profileName').value;
        const email = document.getElementById('profileEmail').value;
        const farm = document.getElementById('profileFarm').value;
        const location = document.getElementById('profileLocation').value;
        
        // Atualizar usuário atual
        currentUser.name = name;
        currentUser.email = email;
        if (currentUser.userType === 'producer') {
            currentUser.farm = farm;
            currentUser.location = location;
        }
        
        // Atualizar no localStorage
        saveCurrentUser();
        
        // Atualizar na lista de usuários
        const savedUsers = JSON.parse(localStorage.getItem('campo_direto_users') || '[]');
        const userIndex = savedUsers.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            savedUsers[userIndex] = { ...savedUsers[userIndex], ...currentUser };
            localStorage.setItem('campo_direto_users', JSON.stringify(savedUsers));
        }
        
        updateUserUI();
        closeModal('profileModal');
        alert('Perfil atualizado com sucesso!');
    });
}

function loadProfileData() {
    if (!currentUser) return;
    
    document.getElementById('profileName').value = currentUser.name;
    document.getElementById('profileEmail').value = currentUser.email;
    
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
    document.getElementById('profileAvatarLarge').textContent = initials;
    
    if (currentUser.userType === 'producer') {
        document.getElementById('profileFarmGroup').style.display = 'block';
        document.getElementById('profileLocationGroup').style.display = 'block';
        document.getElementById('profileFarm').value = currentUser.farm || '';
        document.getElementById('profileLocation').value = currentUser.location || '';
    } else {
        document.getElementById('profileFarmGroup').style.display = 'none';
        document.getElementById('profileLocationGroup').style.display = 'none';
    }
}

// ==================== CHAT ====================

let currentChat = [];
let isTyping = false;

function setupChatListeners() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendMessageBtn');
    
    sendBtn?.addEventListener('click', () => {
        sendMessage();
    });
    
    chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Quick replies
    document.getElementById('quickReplies')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-reply-btn')) {
            const message = e.target.textContent;
            sendMessageText(message);
        }
    });
}

function openChatModal() {
    const producerName = currentChatProducer || cart[0]?.product.producer || 'Produtor';
    document.getElementById('chatProducerName').textContent = producerName;
    
    // Iniciar conversa
    currentChat = [];
    renderChatMessages();
    renderQuickReplies();
    
    // Mensagem inicial do produtor
    setTimeout(() => {
        addBotMessage(`Olá! Obrigado pelo interesse em nossos produtos. Como posso ajudar?`);
    }, 500);
    
    openModal('chatModal');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    
    if (text) {
        sendMessageText(text);
        input.value = '';
    }
}

function sendMessageText(text) {
    // Adicionar mensagem do usuário
    const userMessage = {
        id: Date.now().toString(),
        text,
        sender: 'user',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    currentChat.push(userMessage);
    renderChatMessages();
    
    // Mostrar indicador de digitação
    showTypingIndicator();
    
    // Simular resposta do produtor
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateProducerResponse(text);
        addBotMessage(response);
    }, 1500 + Math.random() * 1000);
}

function addBotMessage(text) {
    const botMessage = {
        id: Date.now().toString(),
        text,
        sender: 'producer',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    currentChat.push(botMessage);
    renderChatMessages();
}

function generateProducerResponse(userMessage) {
    const lower = userMessage.toLowerCase();
    
    if (lower.includes('preço') || lower.includes('valor') || lower.includes('quanto')) {
        return 'Os preços estão detalhados em cada produto. Trabalhamos com preços justos que valorizam o produtor e oferecem qualidade ao consumidor.';
    } else if (lower.includes('entrega') || lower.includes('envio')) {
        return 'Fazemos entregas na região. O prazo varia de 24h a 48h dependendo da sua localização. Posso verificar sua área se me informar o CEP!';
    } else if (lower.includes('orgânico') || lower.includes('agrotóxico')) {
        return 'Todos nossos produtos são cultivados sem agrotóxicos! Seguimos práticas sustentáveis e temos certificação orgânica.';
    } else if (lower.includes('obrigad') || lower.includes('valeu')) {
        return 'Por nada! Estou aqui para ajudar. Qualquer dúvida é só chamar! 😊';
    } else if (lower.includes('sim') || lower.includes('quero')) {
        return 'Ótimo! Vou preparar seu pedido com muito carinho. Você receberá a confirmação em breve!';
    } else {
        return 'Entendi! Fico feliz em poder ajudar. Nossos produtos são frescos e de alta qualidade. Tem mais alguma dúvida?';
    }
}

function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    
    container.innerHTML = currentChat.map(msg => {
        const isSent = msg.sender === 'user';
        const initials = isSent ? (currentUser?.name || 'U').charAt(0) : 'P';
        
        return `
            <div class="chat-message ${isSent ? 'sent' : ''}">
                <div class="chat-message-avatar">${initials}</div>
                <div class="chat-message-content">
                    <p class="chat-message-text">${msg.text}</p>
                    <div class="chat-message-time">${msg.time}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function renderQuickReplies() {
    const container = document.getElementById('quickReplies');
    
    const replies = [
        'Qual o prazo de entrega?',
        'Aceita cartão?',
        'Tem certificado orgânico?',
        'Posso visitar a propriedade?'
    ];
    
    container.innerHTML = replies.map(reply => 
        `<button class="quick-reply-btn">${reply}</button>`
    ).join('');
}

function showTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    indicator.style.display = 'flex';
    
    const container = document.getElementById('chatMessages');
    container.scrollTop = container.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    indicator.style.display = 'none';
}

// ==================== CONVERSATIONS ====================

function loadConversations() {
    const saved = localStorage.getItem('campo_direto_conversations');
    if (saved) {
        conversations = JSON.parse(saved);
    } else {
        // Conversas mockadas
        conversations = [
            {
                id: '1',
                name: 'Sítio Vale Verde',
                avatar: 'S',
                lastMessage: 'Obrigado pela compra! Seu pedido será entregue amanhã.',
                time: '10:30',
                unread: 2
            },
            {
                id: '2',
                name: 'Apiário Flor do Campo',
                avatar: 'A',
                lastMessage: 'Temos mel fresco disponível!',
                time: 'Ontem',
                unread: 0
            }
        ];
        saveConversations();
    }
}

function saveConversations() {
    localStorage.setItem('campo_direto_conversations', JSON.stringify(conversations));
}

function renderConversations() {
    const container = document.getElementById('conversationsList');
    
    if (conversations.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Nenhuma conversa ainda</p></div>';
        return;
    }
    
    container.innerHTML = conversations.map(conv => `
        <div class="conversation-item ${conv.unread > 0 ? 'unread' : ''}" data-conversation-id="${conv.id}">
            <div class="conversation-avatar">${conv.avatar}</div>
            <div class="conversation-info">
                <div class="conversation-header">
                    <span class="conversation-name">${conv.name}</span>
                    <span class="conversation-time">${conv.time}</span>
                </div>
                <p class="conversation-preview">${conv.lastMessage}</p>
            </div>
        </div>
    `).join('');
}

// ==================== FILTERS ====================

function setupFilterListeners() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    searchInput?.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });
    
    categoryFilter?.addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        renderProducts();
    });
}

// ==================== MODALS ====================

function setupModalListeners() {
    // Close buttons
    document.querySelectorAll('.btn-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.modal;
            closeModal(modalId);
        });
    });
    
    // Click outside to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==================== UTILITY ====================

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

// ==================== FIM ====================

console.log('Campo Direto carregado com sucesso! 🌱');