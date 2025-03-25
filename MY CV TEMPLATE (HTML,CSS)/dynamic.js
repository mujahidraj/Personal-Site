function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> ';
        } else {
            localStorage.removeItem('darkMode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> ';
        }
    });
}

function initSkillBars() {
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level, .language-level');
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                const width = bar.getAttribute('data-width') || bar.style.width;
                bar.style.width = width;
            }
        });
    }

    const skillBars = document.querySelectorAll('.skill-level, .language-level');
    skillBars.forEach(bar => {
        bar.style.width = '0';
    });
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initHeaderAnimation() {
    const headerTitle = document.querySelector('header h1');
    if (!headerTitle) return;
    
    const originalTitle = headerTitle.textContent;
    headerTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalTitle.length) {
            headerTitle.textContent += originalTitle.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initSkillBars();
    initBackToTop();
    initHeaderAnimation();
});