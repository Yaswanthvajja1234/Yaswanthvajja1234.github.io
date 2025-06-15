// Loading Screen Animation
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
});

// Smooth Scrolling Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
window.addEventListener('load', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .cert-card, .timeline-item, .contact-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation after loading screen
setTimeout(() => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
}, 3500);

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Skills animation - Progressive skill bars (if needed in future)
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const percentage = bar.dataset.percentage;
        bar.style.width = percentage + '%';
    });
}

// Smooth reveal animation for sections
function revealSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('reveal');
    }
}

// Project card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Dynamic color changing for cyber text
function createColorCycle() {
    const cyberText = document.querySelector('.cyber-text');
    if (cyberText) {
        const colors = [
            'linear-gradient(45deg, #00d4ff, #ff6b6b)',
            'linear-gradient(45deg, #4ecdc4, #a855f7)',
            'linear-gradient(45deg, #fbbf24, #ec4899)',
            'linear-gradient(45deg, #10b981, #f97316)'
        ];
        
        let colorIndex = 0;
        setInterval(() => {
            cyberText.style.background = colors[colorIndex];
            cyberText.style.webkitBackgroundClip = 'text';
            cyberText.style.backgroundClip = 'text';
            colorIndex = (colorIndex + 1) % colors.length;
        }, 2000);
    }
}

// Initialize color cycle
setTimeout(() => {
    createColorCycle();
}, 1000);

// Enhanced scroll animations
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-animate]');
        this.init();
    }
    
    init() {
        this.elements.forEach(el => {
            el.style.opacity = '0';
        });
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        this.elements.forEach(el => this.observer.observe(el));
    }
    
    animateElement(element) {
        const animationType = element.dataset.animate;
        element.style.transition = 'all 0.8s ease';
        element.style.opacity = '1';
        
        switch(animationType) {
            case 'fadeInUp':
                element.style.transform = 'translateY(0)';
                break;
            case 'fadeInLeft':
                element.style.transform = 'translateX(0)';
                break;
            case 'fadeInRight':
                element.style.transform = 'translateX(0)';
                break;
            case 'zoomIn':
                element.style.transform = 'scale(1)';
                break;
            default:
                element.style.transform = 'translateY(0)';
        }
    }
}

// Initialize enhanced animations
window.addEventListener('load', () => {
    new ScrollAnimations();
});

// Particle effect for hero section
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.init();
    }
    
    init() {
        for (let i = 0; i < 50; i++) {
            this.createParticle();
        }
        this.animate();
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        
        const particle_data = {
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        };
        
        this.particles.push(particle_data);
        this.container.appendChild(particle);
    }
    
    animate() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system for hero section
window.addEventListener('load', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && window.innerWidth > 768) {
        // Only create particles on larger screens for performance
        new ParticleSystem(heroBackground);
    }
});

// Glitch effect for cyber text
function createGlitchEffect() {
    const cyberText = document.querySelector('.cyber-text');
    if (cyberText) {
        setInterval(() => {
            cyberText.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00d4ff,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff6b6b
            `;
            
            setTimeout(() => {
                cyberText.style.textShadow = 'none';
            }, 100);
        }, 3000);
    }
}

// Initialize glitch effect
setTimeout(() => {
    createGlitchEffect();
}, 2000);

// Contact form animation (if form is added later)
function setupContactForm() {
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add submission animation
            const submitBtn = form.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                    setTimeout(() => {
                        submitBtn.innerHTML = 'Send Message';
                        submitBtn.disabled = false;
                        form.reset();
                    }, 2000);
                }, 2000);
            }
        });
    }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', setupContactForm);

// Preloader progress simulation
function simulateLoading() {
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) {
                progress = 100;
                clearInterval(interval);
            }
            progressBar.style.width = progress + '%';
        }, 200);
    }
}

// Start loading simulation
simulateLoading();

// Add custom cursor effect
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #00d4ff 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        mix-blend-mode: difference;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Scale cursor on hover over interactive elements
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Initialize custom cursor on desktop
if (window.innerWidth > 768) {
    createCustomCursor();
}