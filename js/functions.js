// Selecciona todos los elementos con la clase "abtnTest"
const iconMenu = document.querySelector(".iconMenu");
const menu = document.querySelector(".menu");
const closeIcon= document.querySelector(".closeIcon");
iconMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const elements = document.querySelectorAll("path"); 
elements.forEach(element => {
  element.addEventListener("mouseover", function (event){
    const elementId = event.target.id;
    console.log(elementId);
  });
});

elements.forEach(element => {
  element.addEventListener("mouseover", function (event){
    const elementId = event.target.id;
    const targetElementId = `info-${elementId}`; // Genera el ID del elemento a modificar
    const targetElement = document.getElementById(targetElementId); // Obtiene el elemento con el ID generado

    if (targetElement) { // Verifica si el elemento existe
      targetElement.classList.add("show"); // Agrega la clase "show"
    }
  });
});

// Para remover la clase "show" al quitar el mouse del elemento:

elements.forEach(element => {
  element.addEventListener("mouseout", function (event){
    const elementId = event.target.id;
    const targetElementId = `info-${elementId}`;
    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
      targetElement.classList.remove("show"); // Remueve la clase "show"
    }
  });
});


const articles = document.querySelectorAll('.temes__Container article');

articles.forEach(article => {
    article.addEventListener('mouseover', () => {
        articles.forEach(otherArticle => {
            if (otherArticle !== article) {
                otherArticle.style.transform = 'scale(0.8)';
                otherArticle.style.opacity = '0.5';
            }
        });
    });

    article.addEventListener('mouseout', () => {
        articles.forEach(otherArticle => {
            if (otherArticle !== article) {
                otherArticle.style.transform = 'scale(1)';
                otherArticle.style.opacity = '1';
            }
        });
    });
});

function createSlider(sliderId, prevButtonId, nextButtonId) {
  let slideIndex = 1;
  const slides = document.querySelectorAll(`#${sliderId} .slider__slide`);
  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);

  showSlides(slideIndex);

  function plusSlide(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
  }

  prevButton.addEventListener('click', () => plusSlide(-1));
  nextButton.addEventListener('click', () => plusSlide(1));
}

createSlider('slider1', 'prev1', 'next1');
createSlider('slider2', 'prev2', 'next2');