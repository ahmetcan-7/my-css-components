const navSlide = () => {

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        if (nav.classList.contains("nav-active") === false) {
            nav.classList.add("nav-anime");
        }
    });

}

navSlide();

