function toggle() {
    var blur = document.getElementById('blur');
    if (blur) {
        blur.classList.toggle('active');
    }

    var popup = document.querySelector('.container22');
    if (popup) {
        popup.classList.toggle('active');
    }
}
// +++++++++++++++++++++++++++++++++++++
// EmailCsrips

function sendEmail(destination) {
    // Abre el cliente de correo predeterminado con destinatario, asunto y cuerpo predefinidos
    window.location.href = `mailto:${destination}?subject=Inquiry&body=I'm interested in your services.`;
}
// +++++++++++++++++++++++++++++++++++++




const img = document.getElementById('parallaxImage');
const parallaxContainer = document.getElementById('parallaxContainer');

parallaxContainer.addEventListener('mousemove', (e) => {
    const imgX = (window.innerWidth / 2 - e.pageX) / 50;
    const imgY = (window.innerHeight / 2 - e.pageY) / 50;

    img.style.transform = `translateX(${imgX}px) translateY(${imgY}px)`;
});

parallaxContainer.addEventListener('mouseleave', () => {
    img.style.transform = 'translateX(0) translateY(0)';
});

document.addEventListener("DOMContentLoaded", function () {
    animateOnScroll();
    window.addEventListener("scroll", function () {
        animateOnScroll();
    });
});

function animateOnScroll() {
    var elements = document.querySelectorAll(".animate-scroll");
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("active");
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  document.addEventListener("DOMContentLoaded", function () {
    // Configura la animación con anime.js
    const animatedElements = document.querySelectorAll('.animate-scroll');

    anime.timeline({
        targets: animatedElements,
        opacity: [0, 1],
        translateY: [-30, 0],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: anime.stagger(100),
    });

    let lastScrollPosition = window.scrollY;

    function revealOnScroll() {
        const scrollPosition = window.scrollY;
        
        // Compara la posición actual con la posición anterior
        if (scrollPosition > lastScrollPosition) {
            // Hacia abajo: inicia la animación
            animatedElements.forEach((element) => {
                if (scrollPosition + window.innerHeight - 0 > element.offsetTop) {
                    element.classList.add('active');
                }
            });
        } else {
            // Hacia arriba: elimina la clase 'active' para revertir la animación
            animatedElements.forEach((element) => {
                if (scrollPosition + window.innerHeight > element.offsetTop) {
                    element.classList.remove('active');
                }
            });
        }
    
        lastScrollPosition = scrollPosition;
    }
    // Agrega el evento de scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // También podrías activar las animaciones cuando la página se carga inicialmente
    revealOnScroll();
  });

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};
// ++++++++++++++++++++++++++++++++++++++++++++


// CardScrips


document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');

    // Función para agregar la clase "hovered" a una tarjeta después de un cierto retraso
    function addHoverClass(card, delay) {
        setTimeout(function() {
            card.classList.add('hovered');
        }, delay);
    }

    // Agregar la clase "hovered" a cada tarjeta con un retraso progresivo
    cards.forEach(function(card, index) {
        addHoverClass(card, index * 300); // Ajusta el tiempo según tu preferencia
    });

    // Manejar eventos de mouseenter y mouseleave si aún deseas que la animación se active al hacer hover
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// DropDonwMenu


document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++








// PhoneScrips+++++++++++++++++++++++++++++++
document.getElementById('phone-link1').addEventListener('click', function () {
    var phoneNumber = '8504958272';
    window.location.href = 'tel:' + phoneNumber;
});


// PhoneScrips+++++++++++++++++++++++++++++++
function animateServices() {
const services = document.querySelectorAll('.service');

anime.timeline({
targets: services,
opacity: [0, 1],
translateY: [30, 0],
easing: 'easeInOutQuad',
duration: 800,
delay: anime.stagger(200),
});
}

function sendEmail(destination) {
// Abre el cliente de correo predeterminado con destinatario, asunto y cuerpo predefinidos
window.location.href = `mailto:${destination}?subject=Inquiry&body=I'm interested in your services.`;
}


function animateOnScroll() {
var elements = document.querySelectorAll(".animate-scroll");
elements.forEach(function (element) {
if (isElementInViewport(element)) {
element.classList.add("active");
}
});
}

function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return (
rect.top >= 0 &&
rect.left >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}


function scrollToTop() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}

window.onscroll = function () {
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
scrollToTopBtn.style.display = 'block';
} else {
scrollToTopBtn.style.display = 'none';
}
};





