'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.listen(PORT, function() {
  // DONE: Log to the console a message that lets you know which port your server has started on
  console.log(`Our app is listening to port ${PORT}`);
});
