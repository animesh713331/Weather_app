# Weather App

## Overview
The Weather App is a simple web application that allows users to check the current weather for any city. It fetches weather data from the WeatherAPI and displays information such as temperature and weather conditions.

## Features
- Search for the current weather by city name
- Display temperature, location, and weather condition
- User-friendly interface with a clean design

## Technologies Used
- HTML
- CSS
- JavaScript
- WeatherAPI (https://www.weatherapi.com/)

## How to Use
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Enter a city name in the search input field.
4. Click the "Search" button to fetch and display the weather information.

## Setup Instructions
1. Obtain an API key from [WeatherAPI](https://www.weatherapi.com/).
2. Replace the existing API key in `app.js` with your own:
   ```javascript
   const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${place}&aqi=no`);
   ```
3. Save the changes and run the app in a browser.

## Potential Improvements
- Add a loading animation while fetching data.
- Improve error handling and user feedback.
- Implement a feature to save favorite locations.

## License
This project is open-source and available for modification and distribution.

