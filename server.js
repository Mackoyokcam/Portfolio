'use strict';

const pg = require('pg');
// const fs = require('fs');
const express = require('express');
// const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy'); // REVIEW: We've added a new package here to our requirements, as well as in the package.json
const PORT = process.env.PORT || 3000;
const app = express();
const conString = process.env.DATABASE_URL || 'postgres://postgres:kilovoltdb@localhost:5432/kilovolt'; // DONE: Don't forget to set your own conString
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.listen(PORT, function() {
  // DONE: Log to the console a message that lets you know which port your server has started on
  console.log(`Our app is listening to port ${PORT}`);
});
