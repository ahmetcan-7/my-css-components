var images = [

    {
        name: "image_1",
        image: "/image/image1.jpg",
        link: "https://en.wikipedia.org/wiki/England"
    },
    {
        name: "image_2",
        image: "/image/image2.jpg",
        link: "https://www.britannica.com/place/England"
    },
    {
        name: "image_3",
        image: "/image/image3.jpg",
        link: "https://www.visitengland.com/"
    },
    {
        name: "image_4",
        image: "/image/image4.jpg",
        link: "https://www.gov.uk/guidance/national-lockdown-stay-at-home"
    }

];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getimg = document.querySelector("#image");
const getlink = document.querySelector("#link");
const getname = document.querySelector("#header");

let rand = Math.floor(Math.random() * images.length);
let x = 5;
setInterval(() => {

    while (x === rand) {
        rand = Math.floor(Math.random() * images.length);
    }

    getimg.setAttribute("src", images[rand].image);
    getlink.setAttribute("href", images[rand].link);
    getname.innerHTML = images[rand].name;



    x = rand;
}, 1000);

