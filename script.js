const properties = [
    {
        id: 1,
        type: 'house',
        title: 'Modern Family House',
        location: 'Manila, Philippines',
        beds: 4,
        baths: 3,
        sqft: 2500,
        price: '₱8,500,000',
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
        ],
        description: 'Beautiful modern family home featuring contemporary design, spacious rooms, and premium finishes throughout. Perfect for families looking for comfort and style.',
        features: ['Garage', 'Garden', 'Modern Kitchen', 'Walk-in Closet', 'Balcony', 'Security System']
    },
    {
        id: 2,
        type: 'apartment',
        title: 'Luxury Apartment',
        location: 'Makati, Philippines',
        beds: 2,
        baths: 2,
        sqft: 1200,
        price: '₱6,200,000',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
            'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800'
        ],
        description: 'Sophisticated luxury apartment in the heart of Makati. High-end finishes, stunning city views, and access to premium amenities.',
        features: ['Pool', 'Gym', 'Parking', 'Security', 'City View', 'Concierge']
    },
    {
        id: 3,
        type: 'lot',
        title: 'Residential Lot',
        location: 'Tagaytay, Philippines',
        beds: null,
        baths: null,
        sqft: 500,
        price: '₱3,500,000',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
            'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
            'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800'
        ],
        description: 'Prime residential lot in Tagaytay with scenic views. Perfect for building your dream home in a cool climate location.',
        features: ['Mountain View', 'Cool Climate', 'Accessible Road', 'Clear Title', 'Peaceful Area', 'Near Amenities']
    },
    {
        id: 4,
        type: 'house',
        title: 'Cozy Bungalow',
        location: 'Quezon City, Philippines',
        beds: 3,
        baths: 2,
        sqft: 1800,
        price: '₱5,800,000',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'
        ],
        description: 'Charming bungalow perfect for small families. Cozy interiors with a beautiful garden and peaceful neighborhood.',
        features: ['Garden', 'Covered Parking', 'Updated Kitchen', 'Wooden Floors', 'Storage', 'Quiet Area']
    },
    {
        id: 5,
        type: 'apartment',
        title: 'Studio Apartment',
        location: 'Pasig, Philippines',
        beds: 1,
        baths: 1,
        sqft: 450,
        price: '₱2,800,000',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800',
            'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800'
        ],
        description: 'Modern studio apartment ideal for young professionals. Efficient layout with all essentials in a prime location.',
        features: ['Fully Furnished', 'WiFi Ready', 'Laundry', '24/7 Security', 'Near MRT', 'Shops Nearby']
    },
    {
        id: 6,
        type: 'lot',
        title: 'Commercial Lot',
        location: 'Davao, Philippines',
        beds: null,
        baths: null,
        sqft: 800,
        price: '₱12,000,000',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800'
        ],
        description: 'Strategic commercial lot in prime Davao location. High foot traffic area, perfect for business ventures.',
        features: ['Corner Lot', 'High Traffic', 'Commercial Zone', 'Wide Frontage', 'Clean Title', 'Development Ready']
    },
    {
        id: 7,
        type: 'house',
        title: 'Beach House',
        location: 'Batangas, Philippines',
        beds: 5,
        baths: 4,
        sqft: 3200,
        price: '₱15,500,000',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
            'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
        ],
        description: 'Stunning beachfront property with panoramic ocean views. Spacious layout perfect for weekend getaways and entertaining.',
        features: ['Beach Access', 'Ocean View', 'Outdoor Deck', 'BBQ Area', 'Pool', 'Guest House']
    },
    {
        id: 8,
        type: 'apartment',
        title: 'Penthouse Suite',
        location: 'BGC, Philippines',
        beds: 3,
        baths: 3,
        sqft: 2000,
        price: '₱18,000,000',
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
            'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=800'
        ],
        description: 'Exclusive penthouse in BGC with breathtaking skyline views. Premium finishes and world-class amenities.',
        features: ['Skyline View', 'Private Elevator', 'Rooftop Access', 'Smart Home', 'Wine Cellar', 'Spa Bath']
    },
    {
        id: 9,
        type: 'lot',
        title: 'Agricultural Lot',
        location: 'Laguna, Philippines',
        beds: null,
        baths: null,
        sqft: 5000,
        price: '₱8,000,000',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
            'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
            'https://images.unsplash.com/photo-1445264718192-e4a65c172c80?w=800',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
        ],
        description: 'Expansive agricultural land perfect for farming or development. Rich soil and good water source.',
        features: ['Water Source', 'Fertile Soil', 'Farm Ready', 'Accessible', 'Flat Terrain', 'Clear Title']
    }
];

let currentFilter = 'all';

function renderProperties(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('propertyGrid');
    grid.innerHTML = '';

    const filtered = properties.filter(p => {
        const matchesFilter = filter === 'all' || p.type === filter;
        const matchesSearch = searchTerm === '' || 
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    filtered.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';
        
        const detailsHTML = property.beds ? 
            `<div class="property-details">
                <span>🛏️ ${property.beds} beds</span>
                <span>🚿 ${property.baths} baths</span>
                <span>📏 ${property.sqft} sqft</span>
            </div>` : 
            `<div class="property-details">
                <span>📏 ${property.sqft} sqm</span>
            </div>`;

        card.innerHTML = `
            <div class="property-image" style="background-image: url('${property.images[0]}')"></div>
            <div class="property-info">
                <span class="property-type">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">📍 ${property.location}</div>
                ${detailsHTML}
                <div class="property-price">${property.price} <span>total</span></div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            openPropertyModal(property.id);
        });
        
        grid.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll('.property-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 50);
        });
    }, 10);
}

function openPropertyModal(id) {
    const property = properties.find(p => p.id === id);
    if (!property) return;

    document.getElementById('modalType').textContent = property.type.toUpperCase();
    document.getElementById('modalTitle').textContent = property.title;
    document.getElementById('modalLocation').innerHTML = `📍 ${property.location}`;
    document.getElementById('modalPrice').textContent = property.price;

    document.getElementById('mainImage').src = property.images[0];

    const thumbsContainer = document.getElementById('galleryThumbs');
    thumbsContainer.innerHTML = '';
    property.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="">`;
        thumb.addEventListener('click', () => {
            document.getElementById('mainImage').src = img;
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbsContainer.appendChild(thumb);
    });

    const specsContainer = document.getElementById('modalSpecs');
    if (property.beds) {
        specsContainer.innerHTML = `
            <div class="spec-item">
                <strong>${property.beds}</strong>
                <span>Bedrooms</span>
            </div>
            <div class="spec-item">
                <strong>${property.baths}</strong>
                <span>Bathrooms</span>
            </div>
            <div class="spec-item">
                <strong>${property.sqft}</strong>
                <span>Sq Ft</span>
            </div>
        `;
    } else {
        specsContainer.innerHTML = `
            <div class="spec-item">
                <strong>${property.sqft}</strong>
                <span>Square Meters</span>
            </div>
        `;
    }

    const descContainer = document.getElementById('modalDescription');
    descContainer.innerHTML = `
        <h3>Description</h3>
        <p>${property.description}</p>
    `;

    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = '';
    property.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresContainer.appendChild(li);
    });

    document.getElementById('propertyModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePropertyModal() {
    document.getElementById('propertyModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function filterProperties(type) {
    currentFilter = type;
    renderProperties(type);
}

function searchProperties() {
    const searchTerm = document.getElementById('searchInput').value;
    renderProperties(currentFilter, searchTerm);
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
});

const filterTabs = document.querySelectorAll('.filter-tab');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');
        filterProperties(filter);
    });
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchProperties();
    }
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.background = '#4caf50';
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    }, 1500);
});

const ownerContactForm = document.getElementById('ownerContactForm');

ownerContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = ownerContactForm.querySelector('.contact-owner-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.background = '#4caf50';
        ownerContactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    }, 1500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
            heroContent.style.opacity = Math.max(1 - scrolled / 600, 0);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderProperties();
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
    
    observeElements();
});

const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
}

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.property-card, .stat-card, .info-card').forEach(el => {
        observer.observe(el);
    });
}
