'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

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
