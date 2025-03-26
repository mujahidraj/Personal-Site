document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const certificateTabButtons = document.querySelectorAll('.certificates-tabs .tab-button');
    const certificateTabPanes = document.querySelectorAll('.certificates-tabs .tab-pane');
    
    certificateTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            certificateTabButtons.forEach(btn => btn.classList.remove('active'));
            certificateTabPanes.forEach(pane => pane.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    const projectTabButtons = document.querySelectorAll('.projects-tabs .tab-button');
    const projectTabPanes = document.querySelectorAll('.projects-tabs .tab-pane');
    const allProjects = document.querySelectorAll('.project-card');
    
    const projectsByCategory = {
        'all-projects': Array.from(allProjects),
        'html-css': Array.from(document.querySelectorAll('.project-card[data-languages*="html-css"]')),
        'javascript': Array.from(document.querySelectorAll('.project-card[data-languages*="javascript"]')),
        'php': Array.from(document.querySelectorAll('.project-card[data-languages*="php"]')),
        'java': Array.from(document.querySelectorAll('.project-card[data-languages*="java"]'))
    };
    
    projectTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            projectTabButtons.forEach(btn => btn.classList.remove('active'));
            projectTabPanes.forEach(pane => pane.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            const projectsContainer = document.getElementById(tabId).querySelector('.projects-grid');
            projectsContainer.innerHTML = '';
            
            projectsByCategory[tabId].forEach(project => {
                projectsContainer.appendChild(project.cloneNode(true));
            });
        });
    });
    
    const floatingMenuLinks = document.querySelectorAll('.floating-menu a');
    
    floatingMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    const animateOnScroll = function() {
        const progressBars = document.querySelectorAll('.progress');
        const circularProgresses = document.querySelectorAll('.circle-progress');
        
        progressBars.forEach(bar => {
            if (isElementInViewport(bar)) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
                
                const progressText = bar.parentElement.querySelector('.progress-text');
                if (progressText) {
                    progressText.textContent = width + '%';
                }
            }
        });
        
        circularProgresses.forEach(circle => {
            if (isElementInViewport(circle)) {
                const value = circle.getAttribute('data-value');
                const circleFill = circle.querySelector('.circle-fill');
                circleFill.style.strokeDasharray = `${value}, 100`;
                
                const circleText = circle.querySelector('.circle-text');
                if (circleText) {
                    circleText.textContent = value + '%';
                }
            }
        });
    };
    
    const isElementInViewport = function(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    animateOnScroll();
    
    const activitiesCtx = document.getElementById('activitiesChart').getContext('2d');
    const activitiesChart = new Chart(activitiesCtx, {
        type: 'bar',
        data: {
            labels: ['Open-Source', 'Coding Competitions', 'Volunteer Work', 'Tech Conferences', 'Sports'],
            datasets: [{
                label: 'Participation Level',
                data: [90, 85, 75, 70, 80],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(231, 76, 60, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '% participation';
                        }
                    }
                }
            }
        }
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});