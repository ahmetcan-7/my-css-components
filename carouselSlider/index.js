const carouselSlide = document.querySelector(".slide");
const carouselImages = document.querySelectorAll(".slide img");

//btns
const btnPrev = document.querySelector("#prevBtn");
const btnNext = document.querySelector("#nextBtn");

//counter
var counter = 1;
const size = carouselImages[0].naturalWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';  //transform=dönüstürmek

//btnlistener

btnNext.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) return;

    carouselSlide.style.transition = "transform 0.4s ease-in-out";  //transition=geçiş
    counter += 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

btnPrev.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";  //transition=geçiş
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

//back to start

carouselSlide.addEventListener("transitionend", () => {


    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
