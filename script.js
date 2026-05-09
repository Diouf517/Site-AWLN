/* === Menu latéral coulissant === */
const burger = document.querySelector('.burger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.querySelector('.close-btn');

if (burger && sidebar && closeBtn) {
  // Ouvrir le menu
  burger.addEventListener('click', () => {
    sidebar.classList.add('show');
    burger.classList.add('open'); // animation burger → croix
  });

  // Fermer le menu
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
    burger.classList.remove('open');
  });

  // Fermer le menu quand on clique sur un lien
  const links = sidebar.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('show');
      burger.classList.remove('open');
    });
  });
}

/* === Carrousel === */
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

if (slides.length > 0 && dots.length > 0) {
  let slideIndex = 0;
  showSlides(slideIndex);

  // Affiche une slide spécifique
  function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  }

  // Défilement automatique
  function autoSlides() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlides, 4000); // change toutes les 4 secondes
  }

  // Clique sur un point
  window.currentSlide = function(n) {
    slideIndex = n;
    showSlides(slideIndex);
  }

  // Lancer le carrousel automatique
  autoSlides();
}
