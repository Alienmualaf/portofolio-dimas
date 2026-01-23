document.addEventListener('DOMContentLoaded', () => {
    
    /* ==================== 1. CUSTOM CURSOR ==================== */
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button, .tab-btn, .exp-card, .contact-card');

    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Sedikit delay untuk follower agar terlihat smooth
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 100);
        });

        // Efek hover membesar
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                follower.style.transform = 'scale(1.5)';
                follower.style.background = 'rgba(255, 215, 0, 0.1)';
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                follower.style.transform = 'scale(1)';
                follower.style.background = 'transparent';
            });
        });
    }

    /* ==================== 2. NAVIGATION & BURGER MENU ==================== */
    const header = document.querySelector('header');
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle Menu Mobile
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Close menu saat link diklik
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    /* ==================== 3. SCROLL ANIMATIONS (INTERSECTION OBSERVER) ==================== */
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger stats animation jika section hero terlihat
                if (entry.target.classList.contains('hero-stats')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
    
    // Observe hero stats secara khusus
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer.observe(heroStats);


    /* ==================== 4. STATS COUNTER ANIMATION ==================== */
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;
        
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const isFloat = target % 1 !== 0; // Cek jika angka desimal (untuk IPK)
            const duration = 2000; // 2 detik
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            
            const updateCount = () => {
                current += step;
                
                if (current < target) {
                    stat.innerText = isFloat ? current.toFixed(2) : Math.ceil(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target;
                }
            };
            
            updateCount();
        });
        
        statsAnimated = true;
    }

    /* ==================== 5. EXPERIENCE TABS ==================== */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hapus active class dari semua tombol dan konten
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Tambah active class ke tombol yang diklik
            btn.classList.add('active');

            // Tampilkan konten yang sesuai
            const target = btn.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    /* ==================== 6. SIMPLE 3D TILT EFFECT ==================== */
    // Efek sederhana pengganti library tilt.js untuk gambar about
    const tiltElement = document.querySelector('.about-image');
    
    if (tiltElement) {
        tiltElement.addEventListener('mousemove', (e) => {
            const rect = tiltElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xRotation = -((y - rect.height / 2) / rect.height * 20); // Max rotasi 20deg
            const yRotation = (x - rect.width / 2) / rect.width * 20;
            
            tiltElement.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
        });

        tiltElement.addEventListener('mouseleave', () => {
            tiltElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
        
        // Tambahkan transisi css via JS agar smooth saat mouse leave
        tiltElement.style.transition = 'transform 0.1s ease';
    }

    /* ==================== 7. ACTIVE LINK ON SCROLL ==================== */
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                // Opsional: tambahkan class active jika di CSS ada styling khusus
                li.classList.add('active'); 
            }
        });
    });
});