/**
 * This alternate solution file structures the same weather app
 * code using classes.
 */

class WeatherData {
	constructor(api) {
		this.api = api;
	}
	fetchCurrentWeather = () => {
		return fetch(this.api)
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log('Data from the Dark Sky API', data);
				return data;
			})
			.catch(error => {
				console.log(
					`There was trouble getting your weather data. Please try again due to this error: ${error}`
				);
			});
	};
}

class UserInterface {
	constructor(api) {
		this.api = api;
		this.currentWeather = new WeatherData(this.api);
	}

	updateInterface = async () => {
		// const data = await this.fetchData();
		const data = await this.currentWeather.fetchCurrentWeather();
		const { temperature, summary, icon } = data.currently;
		const temperatureDescription = document.querySelector(
			'.temperature-description'
		);
		const temperatureDegree = document.querySelector('.temperature-degree');
		const locationTimezone = document.querySelector('.location-timezone');
		const temperatureSection = document.querySelector('.temperature');
		const temperatureSpan = document.querySelector('.temperature span');
		// Set DOM Elements from the API
		temperatureDegree.textContent = temperature;
		temperatureDescription.textContent = summary;
		locationTimezone.textContent = data.timezone;
		// Formula for Celsius
		let celsius = (temperature - 32) * (5 / 9);
		// Set icon
		this.setIcons(icon, document.querySelector('.icon'));

		// Change temperature to Celsius/Farenheit
		temperatureSection.addEventListener('click', () => {
			if (temperatureSpan.textContent === 'F') {
				temperatureSpan.textContent = 'C';
				temperatureDegree.textContent = Math.floor(celsius);
			} else {
				temperatureSpan.textContent = 'F';
				temperatureDegree.textContent = temperature;
			}
		});
	};

	setIcons = (icon, iconID) => {
		const skycons = new Skycons({ color: 'white' });
		const currentIcon = icon.replace(/-/g, '_').toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	};

	render = () => {
		return this.updateInterface();
	};
}

class WeatherApp {
	loadPage = () => {
		window.alert(
			'Welcome to the Weather App. When prompted, allow this app access your location.'
		);

		window.addEventListener('load', () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(async position => {
					console.log('My Position:', position);
					const long = position.coords.longitude;
					const lat = position.coords.latitude;

					const proxy = 'https://cors-anywhere.herokuapp.com/';
					const api = `${proxy}https://api.darksky.net/forecast/9a1876b30001d14d532f6c8fa14e95a8/${lat},${long}`;

					//updateUserInterface(api);
					const updateUserInterace = new UserInterface(api);
					updateUserInterace.render();
				});
			}
		});
	};
}

const weatherApp = new WeatherApp();

weatherApp.loadPage();
