// script.js
// Inisialisasi ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk navigasi smooth scroll
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Tutup menu mobile jika terbuka
                document.querySelector('.menu').classList.remove('active');
            }
        });
    });
    
    // Tombol Contact Me
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Toggle menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('.menu').classList.toggle('active');
        });
    }
    
    // Efek parallax untuk background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const stars = document.querySelector('.stars');
        const clouds = document.querySelector('.clouds');
        
        if (stars) {
            stars.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (clouds) {
            clouds.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // Efek fade in untuk elemen saat scroll
        const elements = document.querySelectorAll('.about-card, .contact-card, .map-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Inisialisasi opacity untuk animasi scroll
    const animatedElements = document.querySelectorAll('.about-card, .contact-card, .map-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger scroll event untuk inisialisasi
    window.dispatchEvent(new Event('scroll'));
    
    // Efek hover untuk card
    const cards = document.querySelectorAll('.about-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s ease';
        });
    });
    
    // Animasi untuk shooting star acak
    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Posisi acak
        const startX = Math.random() * 100;
        const startY = Math.random() * 50;
        const duration = Math.random() * 5 + 5;
        
        shootingStar.style.left = `${startX}%`;
        shootingStar.style.top = `${startY}%`;
        shootingStar.style.animationDuration = `${duration}s`;
        shootingStar.style.animationDelay = `${Math.random() * 5}s`;
        
        document.querySelector('.space-bg').appendChild(shootingStar);
        
        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            shootingStar.remove();
        }, duration * 1000);
    }
    
    // Buat shooting star setiap beberapa detik
    setInterval(createShootingStar, 3000);
    
    // Buat beberapa shooting star saat halaman dimuat
    for (let i = 0; i < 3; i++) {
        setTimeout(createShootingStar, i * 1000);
    }
    
    // Efek ketik ulang untuk judul setelah beberapa waktu
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        const originalText = typingElement.textContent;
        const texts = [
            "Programmer & UI/UX Designer",
            "Web Developer",
            "Creative Thinker",
            "Tech Enthusiast"
        ];
        
        let currentIndex = 0;
        
        function retypeText() {
            typingElement.style.animation = 'none';
            typingElement.style.width = '0';
            typingElement.style.borderRight = '3px solid #8a2be2';
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                typingElement.textContent = texts[currentIndex];
                typingElement.style.animation = 'typing 3.5s steps(40, end) forwards, blink 0.75s step-end infinite';
            }, 500);
        }
        
        // Mulai efek ketik ulang setiap 10 detik
        setInterval(retypeText, 10000);
    }

    // Tambahkan efek partikel keren
function createParticles() {
    const particleCount = 50;
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.querySelector('.space-bg').appendChild(particlesContainer);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Ukuran dan posisi acak
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Warna biru/ungu acak
        const colors = ['#8a2be2', '#4169e1', '#9370db', '#6a5acd', '#483d8b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        particlesContainer.appendChild(particle);
    }
}

// Tambahkan efek cursor kustom
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursor2 = document.createElement('div');
    cursor2.className = 'custom-cursor-2';
    document.body.appendChild(cursor2);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursor2.style.left = e.clientX + 'px';
            cursor2.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Ubah cursor saat hover tombol
    const buttons = document.querySelectorAll('button, .social-icon, .btn-wa');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'rgba(138, 43, 226, 0.3)';
        });
        btn.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'rgba(65, 105, 225, 0.1)';
        });
    });
}

// Tambahkan efek suara klik (opsional)
function addClickSounds() {
    const buttons = document.querySelectorAll('button, .btn-wa, .nav-link');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Efek visual klik
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
            
            // Tambah efek partikel klik
            createClickParticles(event);
        });
    });
}

function createClickParticles(event) {
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'click-particle';
        
        const colors = ['#8a2be2', '#4169e1', '#ff00ff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = event.clientX + 'px';
        particle.style.top = event.clientY + 'px';
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        document.body.appendChild(particle);
        
        // Animasi partikel
        const angle = (i / particleCount) * Math.PI * 2;
        const speed = Math.random() * 50 + 30;
        const x = Math.cos(angle) * speed;
        const y = Math.sin(angle) * speed;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        });
        
        setTimeout(() => particle.remove(), 600);
    }
}

// Tambahkan efek scroll reveal 3D
function add3DScrollEffect() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const delta = scrolled - lastScrollY;
        
        // Efek parallax 3D ringan
        document.querySelectorAll('.about-card, .contact-card').forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            card.style.transform = `perspective(1000px) rotateX(${delta * 0.1}deg) rotateY(${delta * 0.05}deg) translateZ(${delta * speed}px)`;
        });
        
        lastScrollY = scrolled;
    });
}

// Inisialisasi semua efek tambahan
document.addEventListener('DOMContentLoaded', () => {
    // Panggil fungsi-fungsi baru
    createParticles();
    createCustomCursor();
    addClickSounds();
    add3DScrollEffect();
    
    // Tambahkan efek hover bergetar untuk logo
    const logo = document.querySelector('.logo-text');
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            logo.style.animation = '';
        }, 500);
    });
    
    // Efek ketukan keyboard saat hover text
    const textElements = document.querySelectorAll('h1, h2, h3');
    textElements.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.textShadow = '0 0 20px rgba(138, 43, 226, 0.7)';
        });
        text.addEventListener('mouseleave', () => {
            text.style.textShadow = '';
        });
    });
});
});