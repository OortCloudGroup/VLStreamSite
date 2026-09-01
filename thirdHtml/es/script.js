// VLStream Website - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            navActions.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('active');
        });
    }

    // Language switcher dropdown
    const langSwitcher = document.getElementById('langSwitch');
    const langCurrent = document.getElementById('langCurrent');
    const langDropdown = document.getElementById('langDropdown');
    const langItems = document.querySelectorAll('.nav-lang-item');

    if (langSwitcher && langDropdown) {
        langSwitcher.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitcher.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove('open');
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && langSwitcher.classList.contains('open')) {
                langSwitcher.classList.remove('open');
            }
        });

        // Update button label on language selection
        langItems.forEach(item => {
            item.addEventListener('click', () => {
                const href = item.getAttribute('href');
                if (href && href !== '#') {
                    window.location.href = href;
                    return;
                }
                langItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                const langCode = item.getAttribute('data-lang');
                if (langCurrent) {
                    langCurrent.textContent = langCode.toUpperCase();
                }
                langSwitcher.classList.remove('open');
            });
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animateElements = document.querySelectorAll(
        '.painpoint-card, .dualai-card, .feature-card, .pipeline-step, .deploy-card, .usecase-card, .arch-layer, .hardware-card, .vlm-step, .vlm-feature-card, .perf-card, .protocol-card, .repo-card, .advantage-card'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index % 6 * 0.08}s, transform 0.5s ease ${index % 6 * 0.08}s`;
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (navLinks) navLinks.classList.remove('mobile-open');
                if (navActions) navActions.classList.remove('mobile-open');
                if (mobileToggle) mobileToggle.classList.remove('active');
            }
        });
    });

    // Animated counter for hero stats
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(10px)';
        stat.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        statsObserver.observe(stat);
    });

    // Add mobile menu styles dynamically
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            .nav-links.mobile-open,
            .nav-actions.mobile-open {
                display: flex !important;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                flex-direction: column;
                padding: 20px 24px;
                background: rgba(10, 10, 15, 0.98);
                border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                backdrop-filter: blur(16px);
                gap: 12px;
            }
            .nav-actions.mobile-open {
                top: auto;
                border-top: 1px solid rgba(255, 255, 255, 0.06);
            }
            .mobile-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            .mobile-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            .mobile-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    `;
    document.head.appendChild(mobileStyles);

    // Comparison table row hover effect
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.background = 'rgba(255, 255, 255, 0.03)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.background = '';
        });
    });
});
