//Select element function
const selectElement = function(element){
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

//Scroll reveal
window.sr=ScrollReveal();

sr.reveal('.animate-left',{
  origin:'left',
  duration:1000,
  distance:'25rem',
  delay:300
});
sr.reveal('.animate-right',{
  origin:'right',
  duration:1000,
  distance:'25rem',
  delay:300
});
sr.reveal('.animate-top',{
  origin:'top',
  duration:1000,
  distance:'25rem',
  delay:600
});
sr.reveal('.animate-bottom',{
  origin:'bottom',
  duration:900,
  distance:'25rem',
  delay:300
});
sr.reveal('.card-1', {
    origin: 'bottom',
    duration: 900,
    distance: '25rem',
    delay: 300
});
sr.reveal('.card-2', {
    origin: 'bottom',
    duration: 1100,
    distance: '25rem',
    delay: 300
});
sr.reveal('.card-3', {
    origin: 'bottom',
    duration: 1300,
    distance: '25rem',
    delay: 300
});
sr.reveal('.card-4', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 300
});

