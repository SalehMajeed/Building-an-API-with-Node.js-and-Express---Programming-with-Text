# Need for Server Side Programming

1.  large data.
2.  persistance.
3.  API.
4.  Scraping.

Simple Commands ->

1. express -> it is the function that returns the reference of that function.
2. app -> app hold all the methods that were returned by calling express.
3. server -> for server we want listening port to make connection and that is done by using listening method that is available in the app.
4. express.static() -> it is used to access files on the server when someone run that host.

```javascript
const express = require('express');
const app = express();
const server = app.listen(3000, listening); // listen also accept a callback function

function listening() {
	console.log('done');
}

app.use(express.static('website'));
app.get('path/:data', cb);

function cb(request, response) {
	const data = request.params; // it's an object
	response.send(`you searched for ${data.data}`);
}
```

# REST(Representation State Transfer)

style to use get request and receive data from API.

app.get() is an method to provide the route so user can access that route. it takes the string of path and a callback function and that callback take request and response parameter. in the app.get('path/:') we use **:** to create user defined path from that level so user can set any path and we define **object(any name)** as suffix of **:** so we can track what the path user has request and response according to that request.
