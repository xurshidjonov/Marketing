const btns = document.querySelectorAll('.btn-animation');

btns.forEach((everyBtn) => {
  everyBtn.classList.remove('animate__animated', 'animate__rubberBand');
  everyBtn.addEventListener("click", () => {
    everyBtn.classList.add('animate__animated', 'animate__rubberBand');

    setTimeout(() => {
      everyBtn.classList.remove('animate__animated', 'animate__rubberBand');
    }, 1000)
  })
});


function reveal() {
  let reveals = document.querySelectorAll(".scroll_element");
  for (let i = 0; i < reveals.length; i++) {
    if (!reveals[i].className.includes("home_content_left")) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
}
document.addEventListener("scroll", reveal);



// EFFECT OVERFLOW 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.menu');

humburger.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  humburger.classList.toggle("active");
  menu.classList.toggle("active");
})



