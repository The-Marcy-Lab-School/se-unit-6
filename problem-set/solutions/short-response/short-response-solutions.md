## Short response solutions

1. Programs often need to run multiple tasks at once. When an engineer's program needs to wait for another process to complete, it can be very useful to use asynchronous code because it permits programs to continue other operations instead of simply waiting. From a user's perspective, simply waiting would cause a negative experience and users may think that a program is no longer running. Operations could be simply a long running process, such as loading graphics, doing calculations, posting or getting data from a server. Often, engineers want to run many of these processes simultaneously in a multi-threaded way. So asynchronous coding allows you to do that.

2. Recently, many new libraries are building upon the technologies of XHR and Fetch. Libraries such as axios are making the handling of promises easier. Axios makes http requests from node.js or XMLHttpRequests from the browser. It also supports the Promise API that is native to JS ES6. When using .fetch(), axios automatically transforms data into JSON format.

3. Responses may vary depending on the specific apps chosen by the fellows. AJAX stands for Asynchronous JavaScript and XML and it is a technique/process for creating fast and dynamic web pages. AJAX is not the name of a specific technology.

AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page. Examples of applications using AJAX: Google Maps, Gmail, Youtube, etc. Classic web pages from decades ago do not use AJAX. They must reload the entire page if the content should change.

AJAX is based on internet standards, and uses a combination of:

- XMLHttpRequest object (to exchange data asynchronously with a server)
- JavaScript/DOM (to display/interact with the information)
- CSS (to style the data)
- XML (often used as the format for transferring data, but json is commonly used as well)

AJAX Step 1: First an event occurs within a browser and a request is created. This request is then sent via an HTTP request, across the internet, and to a server.

AJAX Step 2: The server processes the HTTP request. Then, a response is created and data is sent back to the client/browser over the internet.

AJAX Step 3: Once the client/browser receives the response, the data is processed based on specifications determined by the programs running in the browser. As needed, the web page content is updated.
