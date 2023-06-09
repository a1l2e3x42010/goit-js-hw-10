/* const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "live_q2bqCzwY035FSYSMV6vvaFItSMDACSOaQfEiRN9fiYzATHB35SodvA7YXHhanldH";
//const URL = `${CAT_API_URL}?${CAT_API_KEY}`;


const params = new URLSearchParams({
  fields: 'id,name,temperament,description,',
});

function searchCat(){
    const url = `${API_URL}breeds`;
    return fetch(url,{headers: {'x-api-key': API_KEY}}).then(res_cat => {
      if (!res_cat.ok) {
        throw new Error(`${res_cat.status} ${res_cat.statusText}`);
      } else {
        return res_cat.json();
      }
    });
    //.then(breeds => {console.log(breeds)});
}

const test = searchCat();
console.log(test);


 */

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_q2bqCzwY035FSYSMV6vvaFItSMDACSOaQfEiRN9fiYzATHB35SodvA7YXHhanldH"
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filter to only include those with an `image` object
   data = data.filter(img=> img.image?.url!=null)
   
  storedBreeds = data;
  console.log(data); 
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!breed.image)continue
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);
    
    }
   //show the first breed by default
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  document.getElementById("breed_name").textContent= storedBreeds[index].name;
  document.getElementById("breed_desc").textContent= storedBreeds[index].description;
  document.getElementById("breed_json").textContent= storedBreeds[index].temperament;
  
  //document.getElementById("breed_json").textContent= storedBreeds[index].name
  
  //document.getElementById("wiki_link").innerHTML= storedBreeds[index].description
}

