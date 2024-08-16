//Themes toggle

let themeDarkButton = document.querySelector('.theme-button-dark');
let themeLightButton = document.querySelector('.theme-button-light');

themeDarkButton.onclick = function () {
    document.body.classList.add('dark');
    themeLightButton.classList.remove('active');
    themeDarkButton.classList.add('acrive');
}

themeLightButton.onclick = function () {
    document.body.classList.remove('dark');
    themeLightButton.classList.add('active');
    themeDarkButton.classList.remove('acrive');
}

//Fonts toggle

let fontButtonSans = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSerif.onclick = function () {
    document.body.classList.add('serif');
    fontButtonSerif.classList.add('active');
    fontButtonSans.classList.remove('active');
}

fontButtonSans.onclick = function () {
    document.body.classList.remove('serif');
    fontButtonSerif.classList.remove('active');
    fontButtonSans.classList.add('active');
}

//Article`s open

let blogArticles = document.querySelectorAll('.blog-article.short');

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function () {
        blogArticle.classList.remove('short');
    }
}

//Cards view change

let buttonGrid = document.querySelector('.card-view-button-grid');
let buttonList = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

buttonList.onclick = function () {
    cardsList.classList.add('list');
    buttonList.classList.add('active');
    buttonGrid.classList.remove('active');
}

buttonGrid.onclick = function () {
    cardsList.classList.remove('list');
    buttonList.classList.remove('active');
    buttonGrid.classList.add('active');
}

//Gallery

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelector('.preview-list li');

for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
      evt.preventDefault();
      activePhoto.src = activePhoto.href;
      let currentActive = document.querySelector('.preview-list li.active');
      currentActive.classList.remove('active');
      activeImage.classList.add('active');
    };
}