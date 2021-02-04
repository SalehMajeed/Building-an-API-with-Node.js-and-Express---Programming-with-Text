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
```
