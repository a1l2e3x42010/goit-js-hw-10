import { breedSelect } from './index';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';


const renderBreedsSelect = breeds => {
  const markup = breeds
    .map(breed => {
      return `<option value="${breed.id}">${breed.name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
};


export { renderBreedsSelect };
