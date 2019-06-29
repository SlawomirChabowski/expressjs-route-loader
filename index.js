const express = require('express');
const app = express();

const siteList = require('./routes.json');

try {
  Object.keys(siteList).forEach(method => {
    Object.keys(siteList[method]).forEach(site => {
      const file = require('./src/' + siteList[method][site].file);

      app[method](
        siteList[method][site].route,
        file[siteList[method][site].function]
      );
    });
  });
} catch (e) {
  const errorMessage = [
    `There was an error while loading routes.`,
    `Please check if routes.json file is correct and if all your route files
    and functions exist.`
  ];

  console.error(
    (errorMessage[0] + '\n' + errorMessage[1]).replace(/\s+/g, ' ').trim()
  );

  app.all((req, res) => {
    res.send(
      `<h1>Fatal error</h1><p>${errorMessage[0]}</p><p>${errorMessage[1]}</p>`
    );
  });
}

app.listen(3000);
