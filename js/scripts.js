document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const nav = document.querySelector('.nav-responsive');
    const overlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-responsive a');

    if(menuHamburguer && nav && overlay) {
        // Toggle menu
        menuHamburguer.addEventListener('click', () => {
            menuHamburguer.classList.toggle('change'); 
            nav.classList.toggle('open'); 
            overlay.classList.toggle('active'); 
        });

        // Close menu when clicking on overlay
        overlay.addEventListener('click', () => {
            menuHamburguer.classList.remove('change');
            nav.classList.remove('open');
            overlay.classList.remove('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuHamburguer.classList.remove('change');
                nav.classList.remove('open');
                overlay.classList.remove('active');
            });
        });

        // Prevent closing when clicking inside the nav container (unless it's a link)
        nav.addEventListener('click', (event) => {
            if(event.target.tagName !== 'A') {
                event.stopPropagation();
            }
        });
    }

    // Scroll Reveal (Intersection Observer)
    const elementsToReveal = document.querySelectorAll('.home-content, .home-img, .about-img, .about-content, .portfolio-box, .services-box, .contact h2, .contact .social-media-a');
    
    // Add the starting class to all elements
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });

    const revealOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -30px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Small delay for stagger effect
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Start observing elements
    elementsToReveal.forEach(el => {
        revealOnScroll.observe(el);
    });
});
