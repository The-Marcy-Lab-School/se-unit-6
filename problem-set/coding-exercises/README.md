# Coding Exercises - Create a real-time weather app.

## Introduction

The purpose of these coding exercises are to build a simple weather app that allows you to get weather data and display it on your browser. All directions can be found here. The starter code also includes a few `TODO` comments in order to guide you.

## Directions

**Step 0:**

Internalize the structure of the `index.html` and `app.js`. Ensure that you can see the placeholder app by
a. dragging your `index.html` into an internet browser _or_
b. copying the path of your `index.html` and pasting it the browser console URL bar.

Be sure _Allow Location Access_ (Firefox) or _Allow_ (Google Chrome) when asked. This will appear each time the browser is refreshed. Be advised, access to geolocation is necessary for this app to work. There will be more information about this in _Step 3_.

**Step 1:**

In the `index.html` file, create 5 classes for each of the placeholder elements.

**Step 2:**

In the `app.js` file, create 5 variables that get the first selector to match each of the 5 classes you created in the `index.html` file. Reference the [Web API Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document) for a reminder about the best method to use.

**Step 3:**

Gain context about the starter code on lines 12-15 of `app.js` by reading the MDN documentation on [Navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) and the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API). _NOTE:Navigator.geolocation is more precise using mobile devices and more generic when using laptops_.

**Step 4:**

Now you need actual weather data from an API. A great resource is Dark Ski API, which is free. Visit the [Dark Ski website](https://darksky.net/dev) and follow the directions to register for a free account and for obtaining your API key. _NOTE: Keep your unique API key handy for upcoming steps._

**Step 5: Fetch Data**

Reference the [Dark Ski Documentation](https://darksky.net/dev/docs).

Within `app.js`, code out a fetch request using the Dark SKI API. _NOTE: due to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), you will need to use a third party. Do Google Search "cross-origin requests to anywhere" for options._

Write a simple console.log statement to ensure your app is working and to analyze the response object.

Be sure to:

1. code out your fetch request to the endpoint **using the proxy website you find.**
2. make a simple console.log statement first to ensure you can return data
3. set the DOM elements for the `temperature`, `summary`, and `timezone` based on data returned from the Dark SkyAPI
4. include error handling

**Step 6: Access Weather Icons**

For the placeholder icon, import icons for weather into your app by using [Skycons](https://darkskyapp.github.io/skycons/). Then:

1. Visit the [github repo](https://github.com/darkskyapp/skycons) for Skycons.
2. Download the repository (no need to fork and clone).
3. Drag the `skycons.js` file into your `coding-exercises` folder.

**Step 7: Set Weather Icons**

The Dark Sky API also returns an icon.

Reference [Skycons](https://darkskyapp.github.io/skycons/) to learn more about displaying an icons in your Weather App.

Then revisit `index.html` and give the canvas element the appropriate width and height properties (as laid out in the Skycons docs).

Next, revisit `app.js` and define a function named `setIcons`, which must:

1. have two parameters - `icon` and `iconID`.
2. define a new instance of the Skycons class.
3. ensure the icon retrieved from the Dark Sky API is in the same format required when using Skycons.
4. add an icon
5. starts animation of the icon

Finally, invoke your `setIcons` function.

**Step 8 Toggle Between Measurements:**

Give the user the added functionality of toggling between Celcius and Fahrenheit.
The Dark Sky API returns temperatures in Fahrenheit by default.
Here is a helpful formula to use for converting the temperature to celcius:
`celsius = (fahreinheit - 32) * (5 / 9);`

Add an event listener that toggles between Fahrenheit and Celcius when a user clicks on the current temperature section.

**Step 9: Cleanup and check**

1. Run your Weather App a few time with the developer console open to ensure there are no errors.
2. If you have not done so already, remove all console.log statements and code comments.

3. OPTIONAL: Users may not want to allow the Weather App you just created to access their location. This is their choice. Create a helpful alert message to inform users that they will need to enable geolocation before using your app. Read about the [Alert from the Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

4. OPTIONAL: Style your app to your liking.
