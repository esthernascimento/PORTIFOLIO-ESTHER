// Ativar smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe de scroll para navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.padding = '15px 0';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});

// Animação de revelação ao scroll
function revealElements() {
    const elements = document.querySelectorAll('.tecnologia-box, .card-projeto, .img-projeto');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Inicializar animações
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);