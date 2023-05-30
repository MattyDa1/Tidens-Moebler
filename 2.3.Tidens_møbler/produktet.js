/*Produktet*/
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("p_slides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//inspiration fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show 
function myFunction() {
  var x = document.getElementById("svar1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}