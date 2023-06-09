import { divPictEl, divDescEl } from './index';


const renderBreedDesc = breed => {
  console.log(breed);
  const markupPicture = `<img class="cat-picture" src="${breed[0].url}" alt="${breed[0].id}">`;
  const markupDescript = `<h2 class="cat-info-desc-title">${breed[0].breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breed[0].breeds[0].description}</p>
    <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed[0].breeds[0].temperament}</p>`;
  divPictEl.insertAdjacentHTML('beforeend', markupPicture);
  divDescEl.insertAdjacentHTML('beforeend', markupDescript);
};

export { renderBreedDesc };
