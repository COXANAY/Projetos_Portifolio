let slides = document.querySelectorAll('.slideshow');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;

const showSlides = (n) => {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden";
        slides[i].style.position = "absolute";
    }

    // Remove a classe 'ativo' de todos os dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('ativo');
    }

    // Exibe o slide atual e ativa o dot correspondente
    slides[slideIndex - 1].style.visibility = "visible";
    slides[slideIndex - 1].style.position = "relative";
    dots[slideIndex - 1].classList.add('ativo');
};

// Funções para controle manual dos slides
const plusSlides = (n) => {
    showSlides(slideIndex += n);
};

const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

// Inicializa o slideshow mostrando o primeiro slide
showSlides(slideIndex);
