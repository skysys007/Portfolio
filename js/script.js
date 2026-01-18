// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-bar');

// Mobile Navigation Toggle
const navMenuContainer = document.querySelector('.nav-menu-container');

if (hamburger && navMenuContainer) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenuContainer.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenuContainer) {
            hamburger.classList.remove('active');
            navMenuContainer.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Theme Management
const getTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
};

// Initialize theme on page load
const initTheme = () => {
    const currentTheme = getTheme();
    setTheme(currentTheme);
};

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        updateNavbarOnScroll(); // Update navbar after theme change
    });
}

// Navbar background change on scroll
const updateNavbarOnScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        navbar.style.background = currentTheme === 'dark' 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.background = currentTheme === 'dark' 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
};

window.addEventListener('scroll', updateNavbarOnScroll);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skills')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Animate skill bars
function animateSkillBars() {
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }, index * 200);
    });
}

// Typing animation for hero title that handles HTML properly
function typeWriter(element, speed = 100) {
    const fullText = "Hi, I'm Gagan";
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i <= fullText.length) {
            if (i <= 7) { // "Hi, I'm "
                element.innerHTML = fullText.substring(0, i) + '<span class="typing-cursor">|</span>';
            } else { // "Gagan"
                element.innerHTML = 'Hi, I\'m <span class="highlight">' + fullText.substring(8, i) + '<span class="typing-cursor">|</span></span>';
            }
            i++;
            setTimeout(type, speed);
        } else {
            // Animation complete, keep final text with blinking cursor
            element.innerHTML = 'Hi, I\'m <span class="highlight">Gagan</span><span class="typing-cursor">|</span>';
        }
    }
    
    type();
}

// Initialize typing animation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Always run the typing animation (will replace the static content)
        typeWriter(heroTitle, 80);
    }
});

// Fallback: Ensure cursor is always present
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const cursor = heroTitle.querySelector('.typing-cursor');
        if (!cursor) {
            // If no cursor found after a delay, add it
            setTimeout(() => {
                if (!heroTitle.querySelector('.typing-cursor')) {
                    const nameSpan = heroTitle.querySelector('.highlight');
                    if (nameSpan) {
                        nameSpan.insertAdjacentHTML('afterend', '<span class="typing-cursor">|</span>');
                    }
                }
            }, 2000);
        }
    }
});

// Google Forms button functionality
const googleFormsBtn = document.querySelector('.google-forms-btn');
if (googleFormsBtn) {
    googleFormsBtn.addEventListener('click', (e) => {
        // You can add analytics tracking here if needed
        console.log('Google Forms button clicked');
    });
}

// Google Forms button click tracking (optional)
function trackGoogleFormsClick() {
    // You can add analytics tracking here
    console.log('User clicked Google Forms button');
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close button styles
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link styles
const activeLinkStyle = document.createElement('style');
activeLinkStyle.textContent = `
    .nav-link.active {
        color: #2563eb;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeLinkStyle);

// Project card hover effects with glassmorphism
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.background = 'rgba(255, 255, 255, 0.15)';
        card.style.border = '1px solid rgba(255, 255, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.background = 'rgba(255, 255, 255, 0.1)';
        card.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    });
});

// Skill card hover effects with glassmorphism
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.skill-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
        card.style.background = 'rgba(255, 255, 255, 0.15)';
        card.style.border = '1px solid rgba(255, 255, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.skill-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        card.style.background = 'rgba(255, 255, 255, 0.1)';
        card.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    });
});

// Add transition styles for smooth animations
const transitionStyle = document.createElement('style');
transitionStyle.textContent = `
    .skill-icon {
        transition: transform 0.3s ease;
    }
    
    .project-card {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(transitionStyle);

// Console welcome message
console.log(`
🚀 Portfolio Website Loaded Successfully!

Built with:
- HTML5 (Semantic Structure)
- CSS3 (Modern Styling & Animations)
- JavaScript (DOM Manipulation & Interactions)
- PHP (Backend Processing)

Feel free to customize and enhance!
`);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    console.log('Portfolio website initialized!');
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});
