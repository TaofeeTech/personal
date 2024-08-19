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

const yearsOfExpirence = document.querySelector('#years_of_expirence');
const projectDone = document.querySelector('#project_Done');


/**
 * 
 *  i -> initial count which is zero 
 *  j -> final count
 *  k -> optional if there any string to add with the output
 *  t -> time for the interval
 *  v -> html element
 */
function Counter(i, j, k, t, v) {

    setInterval(() => {

        if (i < j) {

            i++;
            v.textContent = k ? i + ' ' + k : i;

        }


    }, t);

}

Counter(i = 0, j = 5, k = "Years", t = 100, v = yearsOfExpirence);
Counter(i = 0, j = 80, k = '', t = 40, v = projectDone);

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

// for (let i = 0; i < skils.length; i++) {

//     for (const j in skils[i]){
//         console.log(skils[i][j].name);

//     }

// }

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

})