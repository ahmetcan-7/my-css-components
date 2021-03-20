var images = [

    {
        name: "image_1",
        image: "./image/image1.jpg",
        link: "https://en.wikipedia.org/wiki/England"
    },
    {
        name: "image_2",
        image: "./image/image2.jpg",
        link: "https://www.britannica.com/place/England"
    },
    {
        name: "image_3",
        image: "./image/image3.jpg",
        link: "https://www.visitengland.com/"
    },
    {
        name: "image_4",
        image: "./image/image4.jpg",
        link: "https://www.gov.uk/guidance/national-lockdown-stay-at-home"
    }

];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getimg = document.querySelector("#image");
const getlink = document.querySelector("#link");
const getname = document.querySelector("#header");

getimg.setAttribute("src", images[0].image);
getname.innerHTML = images[0].name;
getlink.setAttribute("href", images[0].link);

let i = 1;
setInterval(() => {


    getimg.setAttribute("src", images[i].image);
    getlink.setAttribute("href", images[i].link);
    getname.innerHTML = images[i].name;
    i += 1;

    if (i == 4) {
        i = 0;
    }

}, 1000);

