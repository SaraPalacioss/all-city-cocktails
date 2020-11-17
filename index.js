  function getByName()
  {
    const name = document.getElementById("theInput").value;
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + name)
       .then(function (response) {
           for(let i=0;i<(response.data.drinks).length; i++){
               console.log(response.data.drinks[i])
           }
       })
       .catch(function (error) {
        console.log(error);
       })
       .then(function () {
       });
  }
 

