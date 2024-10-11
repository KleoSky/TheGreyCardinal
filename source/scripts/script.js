const themeDarkButton = document.querySelector('.theme-switcher__theme-button-dark');
const themeLightButton = document.querySelector('.theme-switcher__theme-button-light');
themeDarkButton.onclick = function () {
  document.body.classList.add('dark');
  themeLightButton.classList.remove('active');
  themeDarkButton.classList.add('acrive');
};

themeLightButton.onclick = function () {
  document.body.classList.remove('dark');
  themeLightButton.classList.add('active');
  themeDarkButton.classList.remove('acrive');
};

const fontButtonSans = document.querySelector('.fonts__font-button-sans-serif');
const fontButtonSerif = document.querySelector('.fonts__font-button-serif');
fontButtonSerif.onclick = function () {
  document.body.classList.add('serif');
  fontButtonSerif.classList.add('active');
  fontButtonSans.classList.remove('active');
};

fontButtonSans.onclick = function () {
  document.body.classList.remove('serif');
  fontButtonSerif.classList.remove('active');
  fontButtonSans.classList.add('active');
};

const blogArticles = document.querySelectorAll('.blog-article.short');
for (const blogArticle of blogArticles) {
  const moreButton = blogArticle.querySelector('.blog-article__more');
  moreButton.onclick = function () {
    blogArticle.classList.remove('short');
  };
}

const buttonGrid = document.querySelector('.rent__card-view-button-grid');
const buttonList = document.querySelector('.rent__card-view-button-list');
const cardsList = document.querySelector('.rent__cards');
buttonList.onclick = function () {
  cardsList.classList.add('list');
  buttonList.classList.add('active');
  buttonGrid.classList.remove('active');
};

buttonGrid.onclick = function () {
  cardsList.classList.remove('list');
  buttonList.classList.remove('active');
  buttonGrid.classList.add('active');
};

const activePhoto = document.querySelector('.gallery__active-photo');
const previews = document.querySelectorAll('.gallery__preview-list-link');
for (const activeImage of previews) {
  activeImage.onclick = function (evt) {
    evt.preventDefault();
    activePhoto.src = activeImage.href;
    const currentActive = document.querySelector('.gallery__preview-list-link.active-item');
    currentActive.classList.remove('active-item');
    activeImage.classList.add('active-item');
  };
}
