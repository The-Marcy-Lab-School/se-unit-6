1. The part of the url that is a query string is  _Janelle Monae_. The server will recieve the request and pass the query string as a parameter of artists. The question mark is the separator and the %20 converts a non-conforming character (which is space) to an ASCII value with the % in front of it.

2.  A higher order function `sendHTTPRequest()` would help to prevent repetitive code. Without   `sendHTTPRequest()`, `getData()` and `sendData()` would have to implement indiviual ways for parsing the response and handling errors. 


3.  The purpose of conditionally rendering the headers is to indicate the media type of the resource being sent by the HTTP request is sent in json format. The headers are being conditionally rendered in `sendHTTPRequest()` because it is being sent data that has to be retrieved while `getData()` does not send data with the GET Request. 


4.  The status is being checked for in the then method as the Promise `fetch`returns will not reject on an HTTP error status. The check prevents the request from completing, as the Promise will only reject on network failure or anything else that will prevent the request completion

6. For the exercises #4 and #5 the responses that were returned were returned with the status of 200.
For in exercise #6, there is no id of 1000 so data object includes the error message objects. When getSpecificAdvice() tries to log the piece of advice it will log the error message as the 'id 1000' is undefined since there is advice object with 'id 1000'
