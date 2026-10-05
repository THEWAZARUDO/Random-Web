/* const resourceURL = 'https://jsonplaceholder.typicode.com/posts/11111';

const getCurrentLocation = async () => {
	try{
		const response = await fetch(resourceURL);
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	}
	catch (err){
		console.log('rejected', err.message);
	}
};

getCurrentLocation().then((data) => {
	console.log(data);
}); */

let getWeather = async (city) => {
  try{
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
    const data = await response.json();
    return data;
  }
  catch (err){
    console.log('Something went wrong, please try again later');
  }
};

let showWeather = () => {
  const select = document.querySelector("#selector");
	console.log(select.value);
	city = select.value;
	getWeather(city);
	
};