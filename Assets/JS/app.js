const yearsOfExpirence = document.querySelector('#years_of_expirence');

const projectDone = document.querySelector('#project_Done');

const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.nav-links li a');

const skills = [
    {
        name: 'HTML',
        percentage: 95
    },
    {
        name: 'CSS',
        percentage: 85
    },
    {
        name: 'JavaScript',
        percentage: 75
    },
    {
        name: 'Jquery',
        percentage: 80
    },
    {
        name: 'MySQL',
        percentage: 85
    },
    {
        name: 'PHP',
        percentage: 75
    },
    {
        name: 'Laravel',
        percentage: 80
    },
];

const skillsCon = document.querySelector('.skills-con');

const projectConEl = document.querySelector('.portfolio-project-container');

const challengeBtn = document.getElementById('challenge');

const allBtn = document.getElementById('all');

const fullStackBtn = document.getElementById('fullstack');

const clientSideBtn = document.getElementById('client');

const ProjectButtons = [challengeBtn, allBtn, fullStackBtn, clientSideBtn];

const iFrame = document.querySelector('.iframe');

const iFrameBox = document.querySelector('.iframe-box');

const testimonyContainer = document.querySelector('.testimony-container');

const prevBtn = document.querySelector('#prev-btn');

const nextBtn = document.querySelector('#next-btn');

const testimonyWidth = testimonyContainer.children[0].offsetWidth;

let position = 0;


const projects = [
    {
        title: 'Rock, paper and scissors game',
        image: 'rps.jpg',
        type: 'challenge',
        link: 'https://taofeetech.github.io/R.P.S/'
    },
    {
        title: 'Musion – Gardening HTML Template',
        image: 'project2.webp',
        type: 'challenge',
        link: 'http://127.0.0.1:5500/'
    },
    {
        title: 'SEOLLY - SEO Marketing & Digital Agency',
        image: 'project3.webp',
        type: 'client-side',
        link: 'http://127.0.0.1:5500/'
    },
    {
        title: 'Virtuf - Creative Agency Bootstrap 5 Template',
        image: 'project4.webp',
        type: 'client-side',
        link: 'http://127.0.0.1:5500/'
    },
    {
        title: 'Tourve - Travel Agency Bootstrap 5 Template',
        image: 'project5.webp',
        type: 'fullstack',
        link: 'http://127.0.0.1:5500/'
    },
    {
        title: 'Induste - Industrial & Factory Bootstrap 5 Template',
        image: 'project6-.webp',
        type: 'fullstack',
        link: 'http://127.0.0.1:5500/'
    },
    {
        title: 'Consor - Multi Purpose One Page PSD Template',
        image: 'project7.webp',
        type: 'challenge',
        link: 'http://127.0.0.1:5500/'
    },
    {
        title: 'Asore - Business Bootstrap 5 Template',
        image: 'project8.webp',
        type: 'fullstack',
        link: 'http://127.0.0.1:5500/'
    },
];

/*-------------------NAVIGATION BAR -------------------------*/
document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

    });

});

window.addEventListener('scroll', () => {

    let current = '';

    navLinks.forEach((link) => {

        const href = link.getAttribute('href');

        if (href !== '#') {

            const section = document.querySelector(href);

            if (section && section.offsetTop - 60 <= window.scrollY && window.scrollY <= section.offsetTop + section.offsetHeight) {

                current = href;

            }

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove('active');

        if (link.getAttribute('href') === current) {

            link.classList.add('active');

        }

    });

});

/*-------------------NAVIGATION BAR ENDS-------------------------*/


/*------------------- COUNTER FUNCTION -------------------------*/
function Counter(i, j, k, t, v) {

    /**
     * 
     *  i -> initial count which is zero 
     *  j -> final count
     *  k -> optional if there any string to add with the output
     *  t -> time for the interval
     *  v -> html element
     */

    setInterval(() => {

        if (i < j) {

            i++;
            v.textContent = k ? i + ' ' + k : i;

        }


    }, t);

}
/*------------------- COUNTER FUNCTION ENDS -------------------------*/


/*------------------- YEARS OF EXPIRENCE / PROJECT DONE  -------------------------*/
Counter(i = 0, j = 5, k = "Years", t = 100, v = yearsOfExpirence);
Counter(i = 0, j = 80, k = '', t = 40, v = projectDone);
/*------------------- YEARS OF EXPIRENCE / PROJECT DONE ENDS  -------------------------*/


/*------------------- PORTFOLIO SKILLS LOOPED -------------------------*/
skills.forEach(s => {

    const skill = `
        <div class="skill">

            <h6>${s.name}</h6>

            <div class="range-con">

                <div class="range">
                    <div class="inner-range" style="width: ${s.percentage}% ;"></div>
                </div>

                <p>${s.percentage}%</p>

            </div>

        </div>
    `;

    skillsCon.innerHTML += skill;

});
/*------------------- PORTFOLIO SKILLS LOOPED ENDS -------------------------*/


/*------------------- PORTFOLIO PROJECT LOOPED -------------------------*/


function switchActive(activeBtn) {
    ProjectButtons.forEach(button => button.classList.remove('active'));
    activeBtn.classList.add('active');
}

function loadLinkOnIframe() {

    const projectLink = document.querySelectorAll('#project_link');

    projectLink.forEach(link => {

        link.addEventListener('click', (e) => {

            e.preventDefault();

            let linkHref = link.getAttribute('href');

            iFrameBox.style.display = 'block';

            iFrame.src = linkHref;

            let closeFrameBtn = document.getElementById('close-iframe');

            closeFrameBtn.addEventListener('click', () => {

                iFrameBox.style.display = 'none';

            });

            // alert(linkHref);

        });

    })

}

const allProjects = function () {

    projects.forEach(project => {

        const projectEl = document.createElement('div');

        projectEl.className = 'project';

        projectEl.innerHTML = `
        
                <div class="project-image">
        
                    <img src="./Assets/IMAGES/${project.image}" alt="project" id="bg-image">
                    <div class="project-overlay"></div>
                    <img src="./Assets/IMAGES/${project.image}" alt="project" id="p-image">
        
                </div>
        
                <h3 class="project-title"><a id="project_link" href="${project.link}">${project.title}</a></h3>
        
            `;

        projectConEl.appendChild(projectEl);

        projectEl.setAttribute("data-aos", "zoom-out");

        loadLinkOnIframe();

    });

};

document.addEventListener('DOMContentLoaded', () => {

    allProjects();

});

// all project
allBtn.addEventListener('click', (e) => {

    e.preventDefault();

    switchActive(allBtn);

    projectConEl.innerHTML = '';

    allProjects();

});
// all project ends

// challenge project
challengeBtn.addEventListener('click', (e) => {

    e.preventDefault();

    switchActive(challengeBtn);

    const challengeProjects = projects.filter(project => project.type === 'challenge');

    projectConEl.innerHTML = '';

    challengeProjects.forEach(project => {

        const projectEl = document.createElement('div');

        projectEl.className = 'project';

        projectEl.innerHTML = `

            <div class="project-image">

                <img src="./Assets/IMAGES/${project.image}" alt="project" id="bg-image">
                <div class="project-overlay"></div>
                <img src="./Assets/IMAGES/${project.image}" alt="project" id="p-image">

            </div>

            <h3 class="project-title"><a href="${project.link}">${project.title}</a></h3>
        `;

        projectConEl.appendChild(projectEl);

        projectEl.setAttribute("data-aos", "flip-up");

        loadLinkOnIframe();

    });

});
// challenge project ends

// client-side project
clientSideBtn.addEventListener('click', (e) => {

    e.preventDefault();

    switchActive(clientSideBtn);

    const clientSideProjects = projects.filter(project => project.type === 'client-side');

    projectConEl.innerHTML = '';

    clientSideProjects.forEach(project => {

        const projectEl = document.createElement('div');

        projectEl.className = 'project';

        projectEl.innerHTML = `

            <div class="project-image">

                <img src="./Assets/IMAGES/${project.image}" alt="project" id="bg-image">
                <div class="project-overlay"></div>
                <img src="./Assets/IMAGES/${project.image}" alt="project" id="p-image">

            </div>

            <h3 class="project-title"><a href="${project.link}">${project.title}</a></h3>
        `;

        projectConEl.appendChild(projectEl);

        projectEl.setAttribute("data-aos", "flip-up");

        loadLinkOnIframe();

    });

});
// client-side project ends

// fullstack project
fullStackBtn.addEventListener('click', (e) => {

    e.preventDefault();

    switchActive(fullStackBtn);

    const fullStackProjects = projects.filter(project => project.type === 'client-side');

    projectConEl.innerHTML = '';

    fullStackProjects.forEach(project => {

        const projectEl = document.createElement('div');

        projectEl.className = 'project';

        projectEl.innerHTML = `

            <div class="project-image">

                <img src="./Assets/IMAGES/${project.image}" alt="project" id="bg-image">
                <div class="project-overlay"></div>
                <img src="./Assets/IMAGES/${project.image}" alt="project" id="p-image">

            </div>

            <h3 class="project-title"><a href="${project.link}">${project.title}</a></h3>
        `;

        projectConEl.appendChild(projectEl);

        projectEl.setAttribute("data-aos", "flip-up");

        loadLinkOnIframe();

    });

});
// fullstack project ends


/*------------------- PORTFOLIO PROJECT LOOPED ENDS -------------------------*/


/*------------------- TESTIMONY SECTION -------------------------*/

// prevBtn.addEventListener('click', () => {

//     position -= testimonyWidth;
//     testimonyContainer.style.transform = `translateX(${position}px)`;

// });

// nextBtn.addEventListener('click', () => {

//     position += testimonyWidth;
//     testimonyContainer.style.transform = `translateX(${position}px)`;

// });

/*------------------- TESTIMONY SECTION ENDS -------------------------*/

/*------------------- BACK TO TOP -------------------------*/
document.addEventListener('DOMContentLoaded', () => {

    const backT0TopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

        if (scrollTop > 200) {
            backT0TopBtn.style.display = 'block';
        } else {
            backT0TopBtn.style.display = 'none';
        }

        backT0TopBtn.style.setProperty('--scroll-percent', `${scrollPercent}%`);

    });

    backT0TopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
/*------------------- BACK TO TOP ENDS -------------------------*/
