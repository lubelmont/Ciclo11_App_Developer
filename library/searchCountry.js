
export async function searchCountry() {

fetch("https://restcountries.com/v3.1/region/America?fields=name,capital,currencies,flags,region")
  .then(response => response.json())
  .then(data => {
    console.log(data)   
  })
  .catch(error => console.log(error))

}