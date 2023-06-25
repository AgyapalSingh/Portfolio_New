var ulAnchorTags = document.querySelectorAll('.list-items a');
var interval;

for (var i = 0; i < ulAnchorTags.length; i++) {
    ulAnchorTags[i].addEventListener('click', function (event) {
        // event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        console.log(targetSectionId);
        var targetSection = document.getElementById(targetSectionId);
        interval = setInterval(function(){
            scrollVertically(targetSection);
        }, 20)
    })
}
function scrollVertically(targetSection) {
    console.log(targetSection);
    var targetSectionCordinates = targetSection.getBoundingClientRect();
    if (targetSectionCordinates.left <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}






// ========================================= Carousel =========================================================
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Controls
var prevBtn = document.getElementsByClassName("prev")[0];
var nextBtn = document.getElementsByClassName("next")[0];

prevBtn.addEventListener("click", function() {
  plusSlides(-1);
});

nextBtn.addEventListener("click", function() {
  plusSlides(1);
});