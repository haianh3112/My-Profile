const showMenu = (togleID, navID) => {
    const toggle = document.getElementById(togleID),
        nav = document.getElementById(navID);
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};

showMenu("nav_togle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linksAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener('click', linksAction));

const section = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive)


function scrollActive() {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.home__title', {})
sr.reveal('.home_scroll', { delay: 200 })
sr.reveal('.home_image', { origin: 'right', delay: 400 })
sr.reveal('.about_img', { delay: 500 })
sr.reveal('.about_subtitle', { delay: 300 })
sr.reveal('.about_profession', { delay: 400 })
sr.reveal('.about_text', { delay: 500 })
sr.reveal('.about_social-icon', { delay: 600, interval: 200 })
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills_img', { delay: 400 })
sr.reveal('.service__img', { interval: 200 })
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', { interval: 200 })
sr.reveal('.contact_input', { delay: 400 })
sr.reveal('.contact_button', { delay: 600 })
sr.reveal('.footer_container', { delay: 200 })