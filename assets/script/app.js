const menuBtn = document.querySelector('.navbar-button');
const navbar = document.querySelector('.navbar');

const navSlide = () => {
    navbar.classList.toggle('navbar-collapse');
}

menuBtn.addEventListener('click', navSlide);