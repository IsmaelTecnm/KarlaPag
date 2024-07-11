// Navegación suave
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});


