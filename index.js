// index.js
const country = document.getElementById("theInput").value;
const restCountriesApi = axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${country}`
  });
   
  function getCountryInfo(theName) {
    restCountriesApi
      .get(theName)
      .then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }
   
  document.getElementById("theButton").onclick = function() {
   
    getCountryInfo(country);
  };

