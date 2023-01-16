
 //Define Global Variables


const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const sideBtn = document.querySelector('.side-button')
 // End Global Variables




// build the nav

const BuildNav = () =>{
    let NavContent = '';

    sections.forEach(section =>{
        const sectionId = section.id;
        const sectionData = section.dataset.nav;

        NavContent +=`<li><a class="menu__link" href="#${sectionId}">${sectionData}</a></li>`
    })
     navigation.innerHTML = NavContent;
}

BuildNav();



//Add 4 section at least



// Add class 'active' to section when near top of viewport

const getSize = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};


// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

};

// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: rgb(55, 8, 59) ";

    };
};

const ActiveSection = () => {
    sections.forEach(section => {
        const element = getSize(section);

        inviewport = () => element < 200 && element >= -200;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,ActiveSection);


// Scroll to anchor ID using scrollTO event

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();


