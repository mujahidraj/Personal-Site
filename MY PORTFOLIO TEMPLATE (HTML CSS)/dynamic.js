
document.addEventListener('DOMContentLoaded', function() {
 
    const projects = [
        {
            id: 1,
            title: "Health-Tracker",
            category: "Web Application",
            description: "Health Tracker is a web-based application that helps users monitor and calculate various health metrics, including: ✅ BMI (Body Mass Index) ✅ WHR (Waist-to-Hip Ratio) ✅ TDEE (Total Daily Energy Expenditure) ✅ Ovulation & Menstruation Date Prediction ✅ Due Date Calculation ✅ PHQ-9 Depression Assessment ✅ Health Charts & Visualizations.",
            image: "helath.png",
            link: "https://mujahidraj.github.io/Health-Tracker/",
            tags: ["health", "webapp", "metrics", "calculator"]
        },
        {
            id: 2,
            title: "SpaceX-HomePage-Clone",
            category: "Web Design",
            description: "This project is a frontend-only clone of the SpaceX website homepage, built using HTML and CSS without use of media queries. The primary goal was to enhance my understanding and skills in web design, focusing on responsive layouts, typography, and modern design principles.",
            image: "work-2.png",
            link: "https://mujahidraj.github.io/SpaceX-HomePage-Clone/",
            tags: ["clone", "spacex", "frontend"]
        },
        {
            id: 3,
            title: "Netflix-Bangladesh-HomePage-Clone",
            category: "Web Design",
            description: "This project is a demo clone of the Netflix homepage tailored for Bangladesh, built using HTML and CSS. The aim was to replicate the look and feel of the Netflix interface, focusing on responsive design, layout accuracy, and CSS styling.",
            image: "work-3.png",
            link: "https://mujahidraj.github.io/Netflix-Bangladesh-HomePage-Clone/",
            tags: ["clone", "netflix", "frontend"]
        },
        {
            id: 4,
            title: "Coming-Soon",
            category: "Web Design",
            description: "This repository contains a 'Coming Soon' page template built using HTML and CSS. The page displays a minimalist design with an engaging message that something exciting is on the way. This template can be easily customized for personal projects or websites under development.",
            image: "work-4.png",
            link: "https://mujahidraj.github.io/Coming-Soon/",
            tags: ["template", "comingsoon", "frontend"]
        },
        {
            id: 5,
            title: "Sign-UP-IN-Template",
            category: "Web Design",
            description: "This project is a responsive and visually appealing Sign Up and Sign In page template built using HTML and CSS. It provides a clean, modern, and user-friendly design suitable for authentication pages in various web applications.",
            image: "sign.png",
            link: "https://mujahidraj.github.io/Sign-UP-IN-Template/",
            tags: ["template", "authentication", "ui"]
        },
        {
            id: 6,
            title: "TechWisdom-Admin-NextJs",
            category: "Web Application",
            description: "TechWisdom is a University project which is an advanced online learning platform built using modern web technologies. This project incorporates secure user authentication, scalable database management, and an intuitive UI/UX to ensure efficient navigation and interaction.",
            image: "admin.jpg",
            link: "#",
            tags: ["nextjs", "education", "fullstack"]
        },
        {
            id: 7,
            title: "TechWisdom-Student-NextJs",
            category: "Web Application",
            description: "TechWisdom is an advanced and user-friendly online learning platform built using modern web technologies to provide seamless learning experiences. This project incorporates secure user authentication, scalable database management, and an intuitive UI/UX.",
            image: "student.jpg",
            link: "#",
            tags: ["nextjs", "education", "fullstack"]
        },
        {
            id: 8,
            title: "Rest-Api-NestJs",
            category: "Backend Development",
            description: "This repository contains a practice project developed using NestJS and Express.js. The goal is to explore backend development concepts and strengthen skills in creating modular, efficient, and scalable server-side applications with core implementations of fundamental features.",
            image: "rest.png",
            link: "#",
            tags: ["nestjs", "backend", "api"]
        },
        {
            id: 9,
            title: "Product-Details-Page",
            category: "Web Design",
            description: "This project focused on enhancing my understanding of HTML and CSS. The goal was to build a fully responsive and user-friendly product details page, demonstrating core HTML and CSS skills while exploring the layout and structure of an e-commerce-style product page.",
            image: "product.png",
            link: "https://mujahidraj.github.io/Product-Details-Page/",
            tags: ["ecommerce", "product", "ui"]
        },
        {
            id: 10,
            title: "My-Blogs",
            category: "Web Design",
            description: "This project showcases a visually appealing blog layout with animations, gradient colors, blur effects, and smooth transitions. It's designed to be modular, with CSS divided into multiple files for better organization and maintainability.",
            image: "blog.png",
            link: "https://mujahidraj.github.io/My-Blogs/",
            tags: ["blog", "design", "animations"]
        },
        {
            id: 11,
            title: "TechWisdom-Student-NestJs",
            category: "Web Application",
            description: "This repository contains a university project built using NestJS and Express.js, focusing on building a scalable backend application. The project showcases a modular and efficient architecture leveraging the power of NestJS for dependency injection.",
            image: "student.jpg",
            link: "#",
            tags: ["nestjs", "backend", "education"]
        },
        {
            id: 12,
            title: "Luxury-Real-Estate",
            category: "Web Application",
            description: "Developed in collaboration with Fidbi and Mayad during our Web Technology course by Al Amin, this project manages real estate operations. We used HTML and CSS for the frontend, PHP and Java for the backend, and MySQL for the database. AJAX and JSON were employed for dynamic content loading.",
            image: "real.jpg",
            link: "#",
            tags: ["realestate", "fullstack", "php"]
        },
        {
            id: 13,
            title: "Flight-Crew",
            category: "Software Development",
            description: "This project, developed in collaboration with Fidbi during Prappo Sarkar's Object-Oriented Programming course, focuses on Flight management. We used Java exclusively to develop the application's frontend, implementing features for efficient management of flight operations.",
            image: "flight.jpg",
            link: "#",
            tags: ["java", "desktop", "oop"]
        },
        {
            id: 14,
            title: "Hotel-Management-System-CSHARP",
            category: "Software Development",
            description: "This project, developed in C# with a Microsoft SQL backend, was created during my Object-Oriented Programming 2 course, supervised by Nazmus Shakib Shan. It features a C#-based frontend for managing hotel operations efficiently.",
            image: "hotel.png",
            link: "https://mujahidraj.github.io/Hotel-management-system-CSHARP/",
            tags: ["csharp", "desktop", "sql"]
        }
    ];

    const skills = [
        { name: "Data Analysis", percentage: 75 },
        { name: "UI/UX Design", percentage: 85 },
        { name: "Web Design", percentage: 95 },
        { name: "Wordpress Web Design", percentage: 85 }
    ];


    const pricingPlans = [
        {
            name: "Basic",
            price: "3000 BDT",
            period: "Per Month",
            features: [
                "Wordpress Web Design",
                "UI/UX Design",
                "Basic Data analysis",
                "Mail support"
            ],
            buttonText: "Hire Me",
            buttonClass: "basic-sign-up"
        },
        {
            name: "Professional",
            price: "7000 BDT",
            period: "Per Month",
            features: [
                "Web Design",
                "UI/UX Desgin",
                "Primary Data Analysis",
                "Endless Mail Support"
            ],
            buttonText: "Hire Me",
            buttonClass: "pro-sign-up"
        },
        {
            name: "Premium",
            price: "12000 BDT",
            period: "Per Month",
            features: [
                "Web Design",
                "UI/UX Design",
                "Data Analysis And Visulaization",
                "AI Driven web Application"
            ],
            buttonText: "Hire Me",
            buttonClass: "premium-sign-up"
        }
    ];

    initPage();

    function initPage() {
        renderProjects();
        renderSkills();
        renderPricingPlans();
        setupEventListeners();
        setupAnimations();
        createProjectModal();
        setupThemeToggle();
        setupPagination(); 
    }

    function setupPagination() {
    
        document.querySelectorAll('.content').forEach(page => {
            page.style.display = 'none';
        });
        
       
        document.getElementById('page-1').style.display = 'block';
       
        document.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageNum = this.getAttribute('data-page');
                changePage(pageNum);
            });
        });
    }

    function changePage(pageNum) {
       
        document.querySelectorAll('.content').forEach(page => {
            page.style.display = 'none';
        });
       
        document.getElementById(`page-${pageNum}`).style.display = 'block';
        
        document.querySelectorAll('.page-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageNum) {
                link.classList.add('active');
            }
        });
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function renderProjects() {
       
        const projectsPerPage = 4;
        const pageCount = Math.ceil(projects.length / projectsPerPage);
        
        
        const pagesContainer = document.querySelector('.main-section');
        
        const existingPages = document.querySelectorAll('.content');
        if (existingPages.length > 1) {
            for (let i = 1; i < existingPages.length; i++) {
                existingPages[i].remove();
            }
        }
        
        for (let i = 0; i < pageCount; i++) {
            const startIdx = i * projectsPerPage;
            const endIdx = startIdx + projectsPerPage;
            const pageProjects = projects.slice(startIdx, endIdx);
            
            let pageElement;
            if (i === 0) {
            
                pageElement = document.getElementById('page-1');
            } else {
             
                pageElement = document.createElement('div');
                pageElement.className = 'content';
                pageElement.id = `page-${i+1}`;
                pageElement.style.display = 'none';
                pagesContainer.insertBefore(pageElement, document.querySelector('.pagination'));
            }
        
            pageElement.innerHTML = '';
            pageProjects.forEach(project => {
                const projectElement = createProjectElement(project);
                pageElement.appendChild(projectElement);
            });
        }
        
        const paginationContainer = document.querySelector('.page-count');
        paginationContainer.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.className = 'page-link';
            if (i === 0) pageLink.classList.add('active');
            pageLink.setAttribute('data-page', i+1);
            pageLink.textContent = i+1;
            paginationContainer.appendChild(pageLink);
        }
    }
    function createProjectElement(project) {
        const projectDiv = document.createElement('div');
        projectDiv.className = `content-${project.id} project-card`;
        projectDiv.innerHTML = `
            <div class="content-photo">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <button class="view-project" data-id="${project.id}">View Details</button>
                </div>
            </div>
            <div class="content-name">${project.title}</div>
            <div class="content-category">Category: ${project.category}</div>
            <div class="content-description">${truncateDescription(project.description, 150)}</div>
            <div class="project-links">
                ${project.link !== '#' ? `<a href="${project.link}" target="_blank" class="project-link">Go to website</a>` : ''}
                <button class="view-project-btn" data-id="${project.id}">View Details</button>
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        return projectDiv;
    }

    function truncateDescription(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    function renderSkills() {
        const skillsContainer = document.querySelector('.technical-skills > div:last-child');
        if (!skillsContainer) return;
        
        skillsContainer.innerHTML = '';
        
        skills.forEach(skill => {
            const skillElement = createSkillElement(skill);
            skillsContainer.appendChild(skillElement);
        });
    }

    function createSkillElement(skill) {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        skillDiv.innerHTML = `
            <div class="skill-text">${skill.name}</div>
            <div class="skill-bar-container">
                <div class="skill-bar" style="width: ${skill.percentage}%">
                    <span class="skill-percentage">${skill.percentage}%</span>
                </div>
            </div>
        `;
        return skillDiv;
    }

    function renderPricingPlans() {
        const plansContainer = document.querySelector('.charge-list');
        if (!plansContainer) return;
        
        plansContainer.innerHTML = '';
        
        pricingPlans.forEach(plan => {
            const planElement = createPricingPlanElement(plan);
            plansContainer.appendChild(planElement);
        });
    }

    function createPricingPlanElement(plan) {
        const planDiv = document.createElement('div');
        const planClass = plan.name.toLowerCase().includes('basic') ? 'basic-charge' : 
                         plan.name.toLowerCase().includes('pro') ? 'pro-charge' : 'premium-charge';
        
        planDiv.className = `${planClass} pricing-card`;
        planDiv.innerHTML = `
            <div class="plan-name ${planClass.replace('-charge', '-name')}">
                ${plan.name}
            </div>
            ${plan.features.map(feature => `
                <div class="plan-feature ${planClass.replace('-charge', '-skill')}">
                    ${feature}
                </div>
            `).join('')}
            <div class="plan-cost ${planClass.replace('-charge', '-cost')}">
                <span>${plan.price}</span> ${plan.period}
            </div>
            <div class="plan-button ${planClass.replace('-charge', '-button')}">
                <button class="${plan.buttonClass}">${plan.buttonText}</button>
            </div>
        `;
        return planDiv;
    }

    function setupEventListeners() {
        
        document.querySelectorAll('.filter-option div').forEach(button => {
            button.addEventListener('click', filterProjects);
        });

        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-project') || 
                e.target.classList.contains('view-project-btn')) {
                const projectId = e.target.dataset.id;
                showProjectDetails(projectId);
            }
        });

        const contactForm = document.querySelector('.contact-me-text-field');
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('page-link')) {
                e.preventDefault();
                const pageNum = e.target.getAttribute('data-page');
                changePage(pageNum);
            }
        });
    }

    function filterProjects(e) {
        const filter = e.target.textContent.toLowerCase();
        const allProjects = document.querySelectorAll('.project-card');
        
        allProjects.forEach(project => {
            const category = project.querySelector('.content-category').textContent.toLowerCase();
            if (filter === 'all' || category.includes(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    function showProjectDetails(projectId) {
        const project = projects.find(p => p.id == projectId);
        if (!project) return;
        
        const modal = document.querySelector('.project-modal');
        if (!modal) return;
        
        modal.querySelector('.modal-title').textContent = project.title;
        modal.querySelector('.modal-category').textContent = `Category: ${project.category}`;
        modal.querySelector('.modal-description').textContent = project.description;
        modal.querySelector('.modal-link').href = project.link;
        
        const tagsContainer = modal.querySelector('.modal-tags');
        tagsContainer.innerHTML = project.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        const imageContainer = modal.querySelector('.modal-image-container');
        imageContainer.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
        
        modal.style.display = 'block';
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const name = document.querySelector('.name-text-field input').value;
        const email = document.querySelector('.Mail-text-field input').value;
        const message = document.querySelector('.message-text-field input').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        e.target.reset();
    }

    function setupAnimations() {
        if (typeof gsap !== 'undefined') {
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: i * 0.1
                });
            });
            
            gsap.utils.toArray('.skill-bar').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                
                ScrollTrigger.create({
                    trigger: bar,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(bar, {
                            width: width,
                            duration: 1.5,
                            ease: "power3.out"
                        });
                    }
                });
            });
        }
    }

    function createProjectModal() {
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-image-container"></div>
                <div class="modal-text-content">
                    <h2 class="modal-title"></h2>
                    <p class="modal-category"></p>
                    <p class="modal-description"></p>
                    <div class="modal-tags"></div>
                    <a class="modal-link" href="#" target="_blank">Visit Project</a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    function setupThemeToggle() {
        const themeToggle = document.createElement('div');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.body.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
        
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            const icon = themeToggle.querySelector('i');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
});