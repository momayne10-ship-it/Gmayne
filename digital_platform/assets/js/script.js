document.addEventListener('DOMContentLoaded', function() {
    // Initialize Hero Swiper
    const heroSwiper = new Swiper('.hero-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Initialize Testimonials Swiper if exists
    const testimonialsSwiperEl = document.querySelector('.testimonials-swiper');
    if (testimonialsSwiperEl) {
        const testimonialsSwiper = new Swiper('.testimonials-swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 800,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Update aria-expanded attribute
            const isExpanded = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .section-title');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    animateOnScroll();

    // Initialize Team Swiper if exists
    const teamSwiperEl = document.querySelector('.team-swiper');
    if (teamSwiperEl) {
        const teamSwiper = new Swiper('.team-swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 800,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('aboutVideo');
  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = soundToggle.querySelector('i');
  const soundText = document.querySelector('.sound-text');
  let isMuted = true;
  
  // Intersection Observer لتشغيل الفيديو عند الظهور وإيقافه عند الاختفاء
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // تشغيل الفيديو عندما يكون مرئياً
        video.play().catch(error => {
          console.log('Auto-play was prevented:', error);
        });
      } else {
        // إيقاف الفيديو عندما لا يكون مرئياً
        video.pause();
      }
    });
  }, { threshold: 0.5 }); // عندما يكون 50% من الفيديو مرئياً
  
  // مراقبة عنصر الفيديو
  videoObserver.observe(video);
  
  // تبديل الصوت عند النقر على الزر
  soundToggle.addEventListener('click', function() {
    isMuted = !isMuted;
    video.muted = isMuted;
    
    if (isMuted) {
      soundIcon.className = 'fas fa-volume-mute';
      soundText.textContent = 'Sound Off';
    } else {
      soundIcon.className = 'fas fa-volume-up';
      soundText.textContent = 'Sound On';
    }
  });
  
  // تشغيل/إيقاف الفيديو عند النقر عليه
  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});