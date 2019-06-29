# ExpressJS Route Loader

The following skeleton is made to easily handle multi-file route management in ExpressJS application. All you need to do is to define a file with function (like you would do it normally in `index.js` file) inside `./src` folder and define a route inside `routes.json` file. It is that simple!

## First run

Don not forget to install all dependencies before first run!

```
npm install
```

## Running the application

To run the application go to project root directory and run the following command:

```
nodemon run
```

The application should start at `127.0.0.1:3000` by default.

## Creating new route

If you want to create new route, first go to `./src` directory and create new JavaScript file (or open existing one) and create a function generating view's content. The only difference between classic _ExpressJS_ function and this is that you need to precede it's definition with "_module.functionName_", like in the example:

```javascript
// file: ./src/person.js
module.about = function(request, response) {
  // ...
  response.send('<h1>Page about me</h1>');
};
```

If your function already exists, open `./routes.json` file and put new object inside of needed http method node. That object needs to have three properties:

- file -- path to the file with function to render the view (without "_,js_" file extension),
- function -- the function that will be used to render the view (the part of name after "_exports._"),
- route -- the route that function should match.

So according to the example above, the object for "_/about_" route should look this way:

```json
{
  "get": [
    { "_other": "data" },
    {
      "file": "person",
      "function": "about",
      "route": "/about"
    }
  ],
  "post": [{ "_other": "data" }],
  "put": [{ "_other": "data" }],
  "delete": [{ "_other": "data" }],
  "all": [{ "_other": "data" }]
}
```

...where `{"_other": "data"}` is just a placeholder for other routes.

### Error 404 route

Remember that all of the routes are loaded one after another so to keep in mind to leave "\__404_" route always at the end of "_all_" methods node.

---

Proudly created by **Sławomir Chabowski** in first hour of _ExpressJS_ learning session :)
