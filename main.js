tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#121212",
        card: "#0A0A0A",
        "brand-blue": "#0091FF",
        "brand-gold": "#FFC800",
        "brand-cyan": "#00E5FF",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A1A1AA",
        "text-dim": "#52525B",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
};

 // Initialize Lucide icons
    lucide.createIcons();

    // Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));

    // Progress bar
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    // Navigation dots
    const slides = document.querySelectorAll('[data-slide]');
    const navDotsContainer = document.getElementById('navDots');

    slides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.className = 'nav-dot';
        dot.setAttribute('aria-label', `الانتقال للشريحة ${index + 1}`);
        dot.addEventListener('click', () => {
            slide.scrollIntoView({ behavior: 'smooth' });
        });
        navDotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.nav-dot');
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.getAttribute('data-slide'));
                dots.forEach((d, i) => {
                    d.classList.toggle('active', i === index);
                });
            }
        });
    }, { threshold: 0.5 });

    slides.forEach(slide => slideObserver.observe(slide));

    // Animate tier bars on scroll
    const tariffTable = document.getElementById('tariffTable');
    const tierObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.tier-bar');
                bars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
            }
        });
    }, { threshold: 0.3 });

    if (tariffTable) tierObserver.observe(tariffTable);

