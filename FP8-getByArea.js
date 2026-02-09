/* 

8. Exercise
Expand Exercise 7 by writing a function, which will accept one parameter area and the function returns
the names of the countries that have an area less or equal to the area parameter of the function. 

*/
const withLog = (fn) => { 
	return (...args) => { 	
		console.log(`Calling ${fn.name}`); 
		return fn(...args); 
	}; 
};
const url = 'https://restcountries.com/v3.1/region/europe';
fetch(url)
    .then(response => response.json())
    .then(arrayOfCountries => {
        const filterCountriesWithLog = withLog(filterCountriesByArea);
        const smallCountries = filterCountriesWithLog(1000, arrayOfCountries);
        smallCountries.forEach(country => {
            console.log(country.name.common, country.area, "km2");
        })
    })
//function, which will accept one parameter area and the function returns the names of the countries that have an area less or equal to the area parameter of the function. 
const filterCountriesByArea = (area, countries) => {
    return countries.filter(country => country.area < area);
}
