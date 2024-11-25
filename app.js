const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
 navMenu.classList.toggle('active');
 navToggle.setAttribute('aria-expanded', 
 navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
 );
});


const projectsData = [
 {
 id: 1,
 title: "Job FINDER PLATFORM",
 description: "A full-stack solution with Springboot and Html,Css,and JavaScript.",
 image: "https://i.postimg.cc/DzkGBznX/JFD.png",
 tags: ["Springboot", "JavaScript", "Html","Css"]
 },
 {
 id: 2,
 title: "TEE & TANNERY",
 description: "T-shirt website using Html,Css, JavaScript.",
 image: "https://i.postimg.cc/rpkd5YNG/T-SHIRT.png",
 tags: ["JavaScript", "Html", "CSS"]
 },
 {
 id: 3,
 title: "TEXTILEUS WEBSITE",
 description: "A productivity website with full stack features.",
 image: "https://i.postimg.cc/t4PZZHWC/project4.png",
 tags: ["Html", "Css","Laravel","JavaScript"]
 },
 {
    id: 4,
    title: "PRISMA",
    description: "A website for content-readers having three dashboards:admin,author and reader.",
    image: "https://i.postimg.cc/hjM7DbxL/project2.jpg",
    tags: ["Springboot", "Html","Css","Javascript"]
    },
    {
        id: 5,
        title: "MOODFIT MENTAL HEALTH APP",
        description: "A mental health app with exciting features used to trak ones performance.",
        image: "https://i.postimg.cc/2SBvQWRY/project1.png",
        tags: ["Figma", "Wireframing","Prototyping"]
        },
        {
            id: 6,
            title: "DASHBOARD",
            description: "A website displaying dashboard features",
            image: "https://i.postimg.cc/FzCdcy9j/tex-back.png",
           tags: ["Laravel", "Html","CSS","Javascript"]
            },
            
        {
            id: 7,
            title: "GOOGLE CLASSROOM DUPE",
            description: "A dupe of Google classroom with features",
            image: "https://i.postimg.cc/BZMx4scr/GCR.png",
            tags: ["Html", "CSS","JavaScript"]
            },
            
            {
                id: 8,
                title: "WEB DEV PORTFOLIO",
                description: "A portfolio website with many projects listed.",
                image: "https://i.postimg.cc/C1wqp6ZM/MYPORTFOLIO.png",
                tags: ["Html", "CSS","JavaScript"]
                },
                
        {
            id: 9,
            title: "MY PROJECTS",
            description: "Projects made by me.",
            image: "https://i.postimg.cc/q7s3YdvZ/PORTFOLIO2.png",
            tags: ["Html", "CSS","JavaScript"]
               
            },
        
];


const createProjectCard = (project) => {
 const card = document.createElement('article');
 card.className = 'project-card';
 card.setAttribute('aria-labelledby', `project-${project.id}`);

 card.innerHTML = `
 <img 
 class="project-image" 
 src="${project.image}" 
 alt="${project.title} project screenshot"
 >
 <div class="project-content">
 <h3 id="project-${project.id}">${project.title}</h3>
 <p>${project.description}</p>
 <div class="project-tags">
 ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
 </div>
 </div>
 `;

 return card;
};

const loadProjects = async () => {
 const projectsGrid = document.querySelector('.projects-grid');
 const loadingSpinner = document.querySelector('.loading-spinner');

 try {

 await new Promise(resolve => setTimeout(resolve, 1500));



 loadingSpinner.style.display = 'none';

 projectsData.forEach(project => {
 const card = createProjectCard(project);
 projectsGrid.appendChild(card);
 });


 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
 observer.unobserve(entry.target);
 }
 });
 }, {
 threshold: 0.1
 });

 document.querySelectorAll('.project-card').forEach(card => {
 observer.observe(card);
 });

 } catch (error) {
 console.error('Error loading projects:', error);
 loadingSpinner.style.display = 'none';
 projectsGrid.innerHTML = `
 <p class="error-message">
 Failed to load projects. Please try again later.
 </p>
 `;
 }
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();
 const target = document.querySelector(this.getAttribute('href'));
 target.scrollIntoView({
 behavior: 'smooth'
 });
 });
});


document.addEventListener('DOMContentLoaded', () => {
 loadProjects();
}); 

