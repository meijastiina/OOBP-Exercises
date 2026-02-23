// Create an event listener
document.getElementById("searchButton").onclick = function () {
    const countryUL = document.getElementById("countryList");
    countryUL.innerHTML = "";
    const url = 'https://restcountries.com/v3.1/region/europe';
    fetch(url)
        .then(response => response.json())
        .then(arrayOfCountries => {
            const smallCountries = filterCountriesByArea(document.getElementById("areaInput").value, arrayOfCountries);
            smallCountries.forEach(country => {
                // Create li element
                const countryLI = document.createElement('li');
                countryLI.innerText = country.name.common;
                countryUL.appendChild(countryLI);
            })
        })

}


//function, which will accept one parameter area and the function returns the names of the countries that have an area less or equal to the area parameter of the function. 
const filterCountriesByArea = (area, countries) => {
    return countries.filter(country => country.area < area);
}