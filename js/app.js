// Tablica z obiektami - jeden obiekt to jeden heros w galerii
var heroesArr = [
    {
        name: "Batman",
        src: "images/batman.jpg",
        logoSrc: "",
        gender: "male",
        attributes: ["cape","mask","hand combat","hitech"],
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
        attributes: ["spider thread","sticky hands","strength","mask","super senses"],
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
        // Wyzerowanie licznika jeśli osiągnął większy indeks niż ostatni element w tablicy wzoru
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

        var overlay = document.createElement("div");
        overlay.classList.add("gallery__overlay");

        var overlayBox = document.createElement("div");
        overlayBox.classList.add("gallery__overlay-box");
        overlayBox.innerText = objArr[i].name;
        overlay.appendChild(overlayBox);

        galleryBox.appendChild(overlay);

        // Dodanie całego boxa wraz z obrazem do galerii
        gallery.appendChild(galleryBox);
    }
}

function delateGallery() {

    var actGallerySize = gallery.children.length
    var i = 0;
    while (i < actGallerySize) {
        gallery.removeChild(gallery.children[0]);
        i++;
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

    return valArr.sort();
}

function createFilterBox(objArr,keyName,title) {

    getKeyValues(objArr,keyName);

    var filterBox = document.createElement("div");
    filterBox.classList.add("filters__box");
    filterBox.dataset.key = keyName;

    var filterTitle = document.createElement("h3");
    filterTitle.classList.add("filters__title");
    filterTitle.innerText = title;
    filterBox.appendChild(filterTitle);

    for (var i = 0; i < valArr.length; i++) {
        var valueButton = document.createElement("button");
        valueButton.dataset.key = keyName;
        valueButton.dataset.value = valArr[i];
        valueButton.classList.add("filters__button");
        valueButton.classList.add("active");
        valueButton.innerText = valArr[i];
        filterBox.appendChild(valueButton);
    }
    filters.appendChild(filterBox);
}

function updateFilterBox(objArr,keyName) {

    getKeyValues(objArr,keyName);

    filterButtons = document.querySelectorAll("button[data-key=" + keyName +"]");

    for (var i = 0; i < filterButtons.length; i++) {

        if (valArr.indexOf(filterButtons[i].dataset.value) === -1) {

            filterButtons[i].classList.remove("active");
            filterButtons[i].classList.add("disabled");

        } else if (valArr.indexOf(filterButtons[i].dataset.value) > -1) {

            if (filterButtons[i].className.indexOf("disabled") > -1) {
                filterButtons[i].classList.remove("disabled");
                filterButtons[i].classList.add("active");
            }

        }
    }
}

function createFilteredHeroesArr(objArr,keyName,filterValue) {

    var filteredHeroesArr = [];

    if (typeof objArr[0][keyName] === "string") {

        for (var i = 0; i < objArr.length; i++) {

            if (objArr[i][keyName] === filterValue) {
                filteredHeroesArr.push(objArr[i]);
            }
        }
    }

    if (typeof objArr[0][keyName] === "object") {

        for (var i = 0; i < objArr.length; i++) {

            for (var j = 0; j < objArr[i][keyName].length; j++) {

                if (objArr[i][keyName][j] === filterValue) {
                    filteredHeroesArr.push(objArr[i]);
                }
            }
        }
    }

    return filteredHeroesArr;
}

function activeButtonOnClick(event) {

    if (this.className.indexOf("active") != -1) {

        if (activeFiltersArr.length === 0) {

            var activeFiltersBox = document.createElement("div");
            activeFiltersBox.classList.add("filters__box");
            activeFiltersBox.classList.add("filters__box--active");

            var activeFiltersTitle = document.createElement("h3");
            activeFiltersTitle.classList.add("filters__title");
            activeFiltersTitle.innerText = "Active Filters:";
            activeFiltersBox.appendChild(activeFiltersTitle);

            filters.insertBefore(activeFiltersBox, filters.children[1]);
        }

        this.classList.remove("active");
        this.classList.add("clicked");
        var keyName = this.dataset.key;
        var filterValue = this.innerText;
        activeFiltersArr.push(filterValue);

        activeHeroesArr = createFilteredHeroesArr(activeHeroesArr,keyName,filterValue);

        var toClone = this;
        var clonedButton = toClone.cloneNode(true);
        var activeFiltersBoxAdding = document.querySelector(".filters__box--active");
        clonedButton.addEventListener("click", clickedButtonOnClick);
        activeFiltersBoxAdding.appendChild(clonedButton);

        this.parentElement.removeChild(this);

        delateGallery();

        createGridGallery(activeHeroesArr,gridPaternArrOne);
        updateFilterBox(activeHeroesArr,"gender");
        updateFilterBox(activeHeroesArr,"color");
        updateFilterBox(activeHeroesArr,"publisher");
        updateFilterBox(activeHeroesArr,"human");
        updateFilterBox(activeHeroesArr,"attributes");

        return activeHeroesArr;

    } else if (this.className.indexOf("disabled") != -1) {

        return;
    }

}

function clickedButtonOnClick(event) {

    var filterToDelete = activeFiltersArr.indexOf(this.dataset.value);

    activeFiltersArr.splice(filterToDelete,1);

    var toClone = this;
    var clonedButton = toClone.cloneNode(true);
    clonedButton.classList.remove("clicked");
    clonedButton.classList.add("active");
    clonedButton.addEventListener("click", activeButtonOnClick);

    var clonedButtonKey = clonedButton.dataset.key;
    var boxToAddClone = filters.querySelector("div[data-key=" + clonedButtonKey + "]");
    var keyButtonsArr = [];

    for (var i = 1; i < boxToAddClone.children.length; i++) {

        keyButtonsArr.push(boxToAddClone.children[i].dataset.value);

    }

    keyButtonsArr.push(clonedButton.dataset.value);
    keyButtonsArr.sort();

    var cloneIndex = keyButtonsArr.indexOf(clonedButton.dataset.value);

    if (cloneIndex - 1 === keyButtonsArr.length) {

        boxToAddClone.appendChild(clonedButton);

    } else {

        boxToAddClone.insertBefore(clonedButton, boxToAddClone.children[cloneIndex + 1]);

    }

    if (activeFiltersArr.length === 0) {

        this.parentElement.parentElement.removeChild(this.parentElement);
        activeHeroesArr = heroesArr;
        delateGallery();
        createGridGallery(heroesArr,gridPaternArrOne);

    } else {

        this.parentElement.removeChild(this);
        var remainFilterButtons = document.querySelectorAll(".filters__box--active > button");
        activeHeroesArr = heroesArr;

        for (var i = 0; i < remainFilterButtons.length; i++) {

            var keyName = remainFilterButtons[i].dataset.key;
            var filterValue = remainFilterButtons[i].dataset.value;

            activeHeroesArr = createFilteredHeroesArr(activeHeroesArr,keyName,filterValue);
        }

        delateGallery();
        createGridGallery(activeHeroesArr,gridPaternArrOne);
    }

    updateFilterBox(activeHeroesArr,"gender");
    updateFilterBox(activeHeroesArr,"color");
    updateFilterBox(activeHeroesArr,"publisher");
    updateFilterBox(activeHeroesArr,"human");
    updateFilterBox(activeHeroesArr,"attributes");
}

createGridGallery(heroesArr,gridPaternArrOne);
createFilterBox(heroesArr,"gender","Gender:");
createFilterBox(heroesArr,"color","Main Color:");
createFilterBox(heroesArr,"publisher","Publisher:");
createFilterBox(heroesArr,"human","Is human?");
createFilterBox(heroesArr,"attributes","Attributes:");

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", activeButtonOnClick);
}
