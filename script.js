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
});