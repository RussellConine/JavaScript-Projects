let slideIndex = 1;                                                   // initializes slideIndex var
showSlides(slideIndex);                                               // calls ShowSlides function


function plusSlides(n) {        
  showSlides(slideIndex += n);                                        // increments Slide index
}

function currentSlide(n) {
  showSlides(slideIndex = n);                                         // defines current slide index
}

function showSlides(n) {
  let i;                                                              // initializes variable i
  let slides = document.getElementsByClassName("mySlides");           // retrieves all divs that are class mySlides 
  let dots = document.getElementsByClassName("dot");                  // retrievs all divs that are class dot
  if (n > slides.length) {slideIndex = 1}                             // if n is greater than number of slides, show first slide (loop back to slide 1)
  if (n < 1) {slideIndex = slides.length}                             // if n is less than one, show first slide
  for (i = 0; i < slides.length; i++) {                               
    slides[i].style.display = "none";                                 // hide all slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");     // inactivate all dots
  }
  slides[slideIndex-1].style.display = "block";                       // show selected slide
  dots[slideIndex-1].className += " active";                          // activate selected dot
}

