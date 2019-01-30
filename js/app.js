// Tablica z obiektami - jeden obiekt to jeden heros w galerii
var heroesArr = [
    {
        name: "Batman",
        src: "images/batman.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["cape","mask","fists","hand combat","hitech"],
        human: "yes",
        color: "black",
        publisher: "DC Comics"
    },
    {
        name: "Captain America",
        src: "images/cap_america.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["strength","shield","mask","hand combat"],
        human: "yes",
        color: "blue",
        publisher: "Marvel"
    },
    {
        name: "Daredevil",
        src: "images/daredevil.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["super senses","blindness","cane"],
        human: "yes",
        color: "red",
        publisher: "Marvel"
    },
    {
        name: "Elektra",
        src: "images/elektra.jpg",
        logoSrc: "",
        gender: "female",
        attributes: ["sword","hand combat"],
        human: "yes",
        color: "red",
        publisher: "Marvel"
    },
    {
        name: "Flash",
        src: "images/flash.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["speed","mask","wings"],
        human: "yes",
        color: "red",
        publisher: "DC Comics"
    },
    {
        name: "Green Arrow",
        src: "images/green_arrow.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["bow","mask"],
        human: "yes",
        color: "green",
        publisher: "DC Comics"
    },
    {
        name: "Green Lantern",
        src: "images/green_lantern.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["ring","mask","hand combat"],
        human: "yes",
        color: "green",
        publisher: "DC Comics"
    },
    {
        name: "Hellboy",
        src: "images/hellboy.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["cloak","tail","gun","big fist"],
        human: "no",
        color: "red",
        publisher: "Dark Horse Comics"
    },
    {
        name: "Incredible Hulk",
        src: "images/hulk.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["strength","big fist","hand combat"],
        human: "yes",
        color: "green",
        publisher: "Marvel"
    },
    {
        name: "Iron Man",
        src: "images/iron_man.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["hitech","rockets","mask"],
        human: "yes",
        color: "red",
        publisher: "Marvel"
    },
    {
        name: "Spiderman",
        src: "images/spiderman.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["spider thread","sticky hands","strength","mask"],
        human: "yes",
        color: "red",
        publisher: "Marvel"
    },
    {
        name: "Supergirl",
        src: "images/super_girl.jpg",
        logoSrc: "",
        gender: "female",
        attributes: ["strength","flying","cape"],
        human: "no",
        color: "blue",
        publisher: "DC Comics"
    },
    {
        name: "Superman",
        src: "images/superman.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["strength","flying","cape"],
        human: "no",
        color: "blue",
        publisher: "DC Comics"
    },
    {
        name: "Thor",
        src: "images/thor.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["strength","hammer","cape","wings"],
        human: "no",
        color: "silver",
        publisher: "Marvel"
    },
    {
        name: "Wolverine",
        src: "images/wolverine.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["mask","claws","strength"],
        human: "no",
        color: "yellow",
        publisher: "Marvel"
    },
    {
        name: "Wonder Woman",
        src: "images/wonder_woman.jpg",
        logoSrc: "",
        gender: "female",
        attributes: ["lasso","sword","strength","shield"],
        human: "no",
        color: "red",
        publisher: "DC Comics"
    }
];

// Ustawienia zerowe:

// Dokładna kolejność elementów w siatce grida - klasy oznaczają wielkość danego boxa z obrazem
var gridPaternArrOne = ["gallery__box--wide","gallery__box--small","gallery__box--tall","gallery__box--tall","gallery__box--big","gallery__box--small"];
var gallery = document.querySelector(".gallery");
var filters = document.querySelector(".filters");
var polygonDepth = 5;
var valArr = [];
var activeFiltersArr = [];
var activeHeroesArr = heroesArr;

// Funkcja do tworzenia gridowej galerii obrazów z tablicy obiektów, parametry:
// 1. Tablica z obiektami bohaterów
// 2. Tablica z klasami układającymi wzór danej siatki grida
function createGridGallery(objArr,gridArr) {

    var gridPaternCount = 0;

    for (var i = 0; i < objArr.length; i++) {

        // Stworzenie nowego diva, który będzie boxem dla obrazu
        var galleryBox = document.createElement("div");
        galleryBox.classList.add("gallery__box");
        // Dodanie do boxa klasy w zależności od licznika - licznik mówi, który to będzie element we wzorze
        galleryBox.classList.add(gridArr[gridPaternCount]);
        gridPaternCount++;
        // Wyzerowanie licznika jeśli - osiągnął większy indeks niż ostatni element w tablicy wzoru
        if (gridPaternCount === gridArr.length) {
            gridPaternCount = 0;
        }
        // Dodanie inlinowo losowego clippatha na diva
        galleryBox.style.clipPath = getRandomPolygon(polygonDepth);

        // Stworzenie elementu img z odpowiednią klasą i dodanie wartości src zgodnej z kluczem src w obiekcie z przekazanej do funkcji tablicy
        var galleryImg = document.createElement("img");
        galleryImg.classList.add("gallery__img");
        galleryImg.src = objArr[i].src;
        // Zagnieżdzenie obrazu w utworzonym powyżej boxie
        galleryBox.appendChild(galleryImg);

        // Dodanie całego boxa wraz z obrazem do galerii
        gallery.appendChild(galleryBox);
    }
}

function getRandomPolygon(polygonDepth) {

    var lowValuesArr = []
    for (var i = 0; i < 5; i++) {
        lowValuesArr[i] = (0 + Math.floor(Math.random() * (polygonDepth + 1))).toString();
    }

    var highValuesArr = []
    for (var i = 0; i < 5; i++) {
        highValuesArr[i] = (100 - polygonDepth + Math.floor(Math.random() * (polygonDepth + 1))).toString();
    }

    var randomPolygon = "polygon(" + lowValuesArr[0] + "% " + lowValuesArr[1] + "%, " + highValuesArr[0] + "% " + lowValuesArr[2] + "%, " + highValuesArr[1] + "% " + highValuesArr[2] + "%, " + lowValuesArr[3] + "% " + highValuesArr[3] + "%)";

    return randomPolygon;
}

function getKeyValues(objArr,keyName) {

    valArr = [];

    if (typeof objArr[0][keyName] === "string") {

        for (var i = 0; i < objArr.length; i++) {

            if (valArr.indexOf(objArr[i][keyName]) === -1) {
                valArr.push(objArr[i][keyName]);
            }

        }

    }

    if (typeof objArr[0][keyName] === "object") {

        for (var i = 0; i < objArr.length; i++) {

            for (var j = 0; j < objArr[i][keyName].length; j++) {

                if (valArr.indexOf(objArr[i][keyName][j]) === -1) {
                    valArr.push(objArr[i][keyName][j]);
                }

            }

        }

    }

    return valArr;
}

function createFilterBox(objArr,keyName,title) {

    getKeyValues(objArr,keyName);

    var filterBox = document.createElement("div");
    filterBox.classList.add("filters__box")

    var filterTitle = document.createElement("h3");
    filterTitle.classList.add("filters__title")
    filterTitle.innerText = title;
    filterBox.appendChild(filterTitle);

    var allButton = document.createElement("button");
    allButton.dataset.key = "all";
    allButton.classList.add("filters__button")
    allButton.innerText = "all";
    filterBox.appendChild(allButton);

    for (var i = 0; i < valArr.length; i++) {
        var valueButton = document.createElement("button")
        valueButton.dataset.key = keyName;
        valueButton.classList.add("filters__button");
        valueButton.innerText = valArr[i];
        filterBox.appendChild(valueButton);
    }
    filters.appendChild(filterBox);
}

function buttonOnClick(event) {

    if (this.className.indexOf("clicked") === -1) {
        this.classList.add("clicked");
        var keyName = this.dataset.key;
        var filterValue = this.innerText;
        console.log(filterValue);
        activeFiltersArr.push(filterValue);

        var filteredHeroesArr = [];

        if (typeof activeHeroesArr[0][keyName] === "string") {

            for (var i = 0; i < activeHeroesArr.length; i++) {

                if (activeHeroesArr[i][keyName] === filterValue) {
                    filteredHeroesArr.push(activeHeroesArr[i]);
                }
            }
        }

        if (typeof activeHeroesArr[0][keyName] === "object") {

            for (var i = 0; i < activeHeroesArr.length; i++) {

                for (var j = 0; j < activeHeroesArr[i][keyName].length; j++) {

                    if (activeHeroesArr[i][keyName][j] === filterValue) {
                        filteredHeroesArr.push(activeHeroesArr[i]);
                    }
                }
            }
        }

        activeHeroesArr = filteredHeroesArr;
        console.log(activeHeroesArr);

    }

    var actGallerySize = gallery.children.length
    var i = 0;
    while (i < actGallerySize) {
        gallery.removeChild(gallery.children[0]);
        console.log(gallery.children);
        i++;
    }

    createGridGallery(activeHeroesArr,gridPaternArrOne);
    createFilterBox(activeHeroesArr,"gender","Gender:");
    createFilterBox(activeHeroesArr,"color","Main Color:");
    createFilterBox(activeHeroesArr,"publisher","Publisher:");
    createFilterBox(activeHeroesArr,"human","Is human?");
    createFilterBox(activeHeroesArr,"attributes","Attributes:");

    return activeHeroesArr;
}

createGridGallery(heroesArr,gridPaternArrOne)
createFilterBox(heroesArr,"gender","Gender:");
createFilterBox(heroesArr,"color","Main Color:");
createFilterBox(heroesArr,"publisher","Publisher:");
createFilterBox(heroesArr,"human","Is human?");
createFilterBox(heroesArr,"attributes","Attributes:");

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", buttonOnClick);
}
























// var images = document.querySelectorAll("#gallery > img");
// var showButton = document.getElementById("showButton");
// var hideButton = document.getElementById("hideButton");
// var tagInput = document.getElementById("tagInput");
//
// showButton.addEventListener("click", filterImages);
// hideButton.addEventListener("click", filterImages);
//
// function filterImages() {
//
//     var tagName = tagInput.value;
//     tagInput.value = "";
//
//     for (var i = 0; i < images.length; i++) {
//         var tag = images[i].dataset.tag;
//
//         if (tag.indexOf(tagName) > -1) {
//
//             if (this.id === "showButton") {
//                 images[i].classList.remove("invisible");
//             }
//
//             if (this.id === "hideButton") {
//                 images[i].classList.add("invisible");
//             }
//
//         }
//
//     }
//
// }
