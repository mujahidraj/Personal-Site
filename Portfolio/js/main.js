document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    const mobileLinks = document.querySelectorAll('.mobile-nav-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    const navLinks = document.querySelectorAll('.nav-item, .mobile-nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target') || this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
        const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkTarget = link.getAttribute('data-target') || link.getAttribute('href').substring(1);
            if (linkTarget === current) {
                link.classList.add('active');
            }
        });
    });
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    const projects = [
        {
            id: 1,
            title: "Health-Tracker",
            category: "Web Application",
            description: "Health Tracker is a web-based application that helps users monitor and calculate various health metrics, including: ✅ BMI (Body Mass Index) ✅ WHR (Waist-to-Hip Ratio) ✅ TDEE (Total Daily Energy Expenditure) ✅ Ovulation & Menstruation Date Prediction ✅ Due Date Calculation ✅ PHQ-9 Depression Assessment ✅ Health Charts & Visualizations.",
            image: "images/helath.png",
            link: "https://mujahidraj.github.io/Health-Tracker/",
            tags: ["health", "webapp", "metrics", "calculator"]
        },
        {
            id: 2,
            title: "SpaceX-HomePage-Clone",
            category: "Web Design",
            description: "This project is a frontend-only clone of the SpaceX website homepage, built using HTML and CSS without use of media queries. The primary goal was to enhance my understanding and skills in web design, focusing on responsive layouts, typography, and modern design principles.",
            image: "images/work-2.png",
            link: "https://mujahidraj.github.io/SpaceX-HomePage-Clone/",
            tags: ["clone", "spacex", "frontend"]
        },
        {
            id: 3,
            title: "Netflix-Bangladesh-HomePage-Clone",
            category: "Web Design",
            description: "This project is a demo clone of the Netflix homepage tailored for Bangladesh, built using HTML and CSS. The aim was to replicate the look and feel of the Netflix interface, focusing on responsive design, layout accuracy, and CSS styling.",
            image: "images/work-3.png",
            link: "https://mujahidraj.github.io/Netflix-Bangladesh-HomePage-Clone/",
            tags: ["clone", "netflix", "frontend"]
        },
        {
            id: 4,
            title: "Coming-Soon",
            category: "Web Design",
            description: "This repository contains a 'Coming Soon' page template built using HTML and CSS. The page displays a minimalist design with an engaging message that something exciting is on the way. This template can be easily customized for personal projects or websites under development.",
            image: "images/work-4.png",
            link: "https://mujahidraj.github.io/Coming-Soon/",
            tags: ["template", "comingsoon", "frontend"]
        },
        {
            id: 5,
            title: "Sign-UP-IN-Template",
            category: "Web Design",
            description: "This project is a responsive and visually appealing Sign Up and Sign In page template built using HTML and CSS. It provides a clean, modern, and user-friendly design suitable for authentication pages in various web applications.",
            image: "images/sign.png",
            link: "https://mujahidraj.github.io/Sign-UP-IN-Template/",
            tags: ["template", "authentication", "ui"]
        },
        {
            id: 6,
            title: "TechWisdom-Admin-NextJs",
            category: "Web Application",
            description: "TechWisdom is a University project which is an advanced online learning platform built using modern web technologies. This project incorporates secure user authentication, scalable database management, and an intuitive UI/UX to ensure efficient navigation and interaction.",
            image: "images/admin.jpg",
            link: "#",
            tags: ["nextjs", "education", "fullstack"]
        },
        {
            id: 7,
            title: "TechWisdom-Student-NextJs",
            category: "Web Application",
            description: "TechWisdom is an advanced and user-friendly online learning platform built using modern web technologies to provide seamless learning experiences. This project incorporates secure user authentication, scalable database management, and an intuitive UI/UX.",
            image: "images/student.jpg",
            link: "#",
            tags: ["nextjs", "education", "fullstack"]
        },
        {
            id: 8,
            title: "Rest-Api-NestJs",
            category: "Backend Development",
            description: "This repository contains a practice project developed using NestJS and Express.js. The goal is to explore backend development concepts and strengthen skills in creating modular, efficient, and scalable server-side applications with core implementations of fundamental features.",
            image: "images/rest.png",
            link: "#",
            tags: ["nestjs", "backend", "api"]
        },
        {
            id: 9,
            title: "Product-Details-Page",
            category: "Web Design",
            description: "This project focused on enhancing my understanding of HTML and CSS. The goal was to build a fully responsive and user-friendly product details page, demonstrating core HTML and CSS skills while exploring the layout and structure of an e-commerce-style product page.",
            image: "images/product.png",
            link: "https://mujahidraj.github.io/Product-Details-Page/",
            tags: ["ecommerce", "product", "ui"]
        },
        {
            id: 10,
            title: "My-Blogs",
            category: "Web Design",
            description: "This project showcases a visually appealing blog layout with animations, gradient colors, blur effects, and smooth transitions. It's designed to be modular, with CSS divided into multiple files for better organization and maintainability.",
            image: "images/blog.png",
            link: "https://mujahidraj.github.io/My-Blogs/",
            tags: ["blog", "design", "animations"]
        },
        {
            id: 11,
            title: "TechWisdom-Student-NestJs",
            category: "Web Application",
            description: "This repository contains a university project built using NestJS and Express.js, focusing on building a scalable backend application. The project showcases a modular and efficient architecture leveraging the power of NestJS for dependency injection.",
            image: "images/student.jpg",
            link: "#",
            tags: ["nestjs", "backend", "education"]
        },
        {
            id: 12,
            title: "Luxury-Real-Estate",
            category: "Web Application",
            description: "Developed in collaboration with Fidbi and Mayad during our Web Technology course by Al Amin, this project manages real estate operations. We used HTML and CSS for the frontend, PHP and Java for the backend, and MySQL for the database. AJAX and JSON were employed for dynamic content loading.",
            image: "images/real.jpg",
            link: "#",
            tags: ["realestate", "fullstack", "php"]
        },
        {
            id: 13,
            title: "Flight-Crew",
            category: "Software Development",
            description: "This project, developed in collaboration with Fidbi during Prappo Sarkar's Object-Oriented Programming course, focuses on Flight management. We used Java exclusively to develop the application's frontend, implementing features for efficient management of flight operations.",
            image: "images/flight.jpg",
            link: "#",
            tags: ["java", "desktop", "oop"]
        },
        {
            id: 14,
            title: "Hotel-Management-System-CSHARP",
            category: "Software Development",
            description: "This project, developed in C# with a Microsoft SQL backend, was created during my Object-Oriented Programming 2 course, supervised by Nazmus Shakib Shan. It features a C#-based frontend for managing hotel operations efficiently.",
            image: "images/hotel.png",
            link: "https://mujahidraj.github.io/Hotel-management-system-CSHARP/",
            tags: ["csharp", "desktop", "sql"]
        }
    ];
    
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (projectsGrid) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            
            projectCard.innerHTML = `
                <div class="project-img-container">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <div class="project-overlay">
                        <button class="btn btn-primary view-project" data-id="${project.id}">View Project</button>
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-category">${project.category === 'web' ? 'Web Design' : 
                                              project.category === 'app' ? 'Web Application' : 
                                              'UI/UX Design'}</p>
                    <p class="project-description">${project.description.substring(0, 100)}...</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    const modal = document.querySelector('.project-modal');
    const closeModal = document.querySelector('.close-modal');
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-project')) {
            const projectId = parseInt(e.target.getAttribute('data-id'));
            const project = projects.find(p => p.id === projectId);
            
            if (project) {
                document.querySelector('.modal-title').textContent = project.title;
                document.querySelector('.modal-category').textContent = 
                    project.category === 'web' ? 'Web Design' : 
                    project.category === 'app' ? 'Web Application' : 'UI/UX Design';
                document.querySelector('.modal-description').textContent = project.description;
                document.querySelector('.modal-link').setAttribute('href', project.link);
                
                const tagsContainer = document.querySelector('.modal-tags');
                tagsContainer.innerHTML = project.tags.map(tag => 
                    `<span class="tag">${tag}</span>`
                ).join('');
                
                const imageContainer = document.querySelector('.modal-image-container');
                imageContainer.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            console.log('Form submitted:', { name, email, message });
            
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            this.reset();
        });
    }
    
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.parentElement.querySelector('.skill-info span:last-child').textContent;
            bar.style.width = width;
        });
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
}

themeToggle.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
    const theme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
});