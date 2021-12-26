//scroll effect
var menuLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function (event) {
    event.preventDefault();

    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    console.log(targetSection);

    var scrollInterval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(scrollInterval);
        return;
      }
      window.scrollBy(0, 50);

    }, 20)
  });
}

// Crousel logic
let slide_index = 1;
displaySlides(slide_index);


function nextSlide(n) {
  displaySlides(slide_index += n);
}


function currentSlide(n) {
  displaySlides(slide_index = n);
}

function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slide_index = 1
  }
  if (n < 1) {
    slide_index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "flex";
}



