1. The response header is displayed above of the request header. The response header also contains information such as status code and raw response data. This header is not related to the actual contetnt of a message. It can be used in an HTTP responsE. 

The request header contains information that is related to the request being made. Information such as the method and content type can be seen. Request headers help the server give back a specific response to the browser. 


2.  Successful POST requests returned a response status of 200 and an object containing token and/or id property values. Unsuccessful POST requests returned a response error of 400 and an object containing an error message. 


3.  In the `postDataIncorrectly()` function, POST is not passed as an argument of the `fetch()` method. The `postDataIncorrectly()` method also incorrectly passes the body within the request and also does not pass the password needed for a successful loggin. 

If these mistakes go uncorrected `postDataIncorrectly()` will return a status of 400 and a response object that will log an error message. 


