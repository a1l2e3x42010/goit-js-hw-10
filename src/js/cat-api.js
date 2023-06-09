const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "live_igVlcMFSaqru5Ud2QT0CRpS66uL0cDxXfewNmYYSNFIcAyrcOZjCTImgcavL5MIX";



const fetchBreeds = () => {
  const url = `${API_URL}breeds`;
    return fetch(url,{headers: {'x-api-key': API_KEY}}).then(res_cat => {
      if (!res_cat.ok) {
        throw new Error(`${res_cat.status} ${res_cat.statusText}`);
      } else {
        return res_cat.json();
      }
    });
};


const fetchCatByBreed = breedId => {
  const url = `${API_URL}images/search?breed_ids=${breedId}`;
  return fetch(url,{headers: {'x-api-key': API_KEY}}).then(res_cat => {
    if (!res_cat.ok) {
      throw new Error(`${res_cat.status} ${res_cat.statusText}`);
    } else {
      return res_cat.json();
    }
  });
};


export { fetchBreeds, fetchCatByBreed };
