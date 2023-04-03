const express = require('express');
const app = express();

app.get("/cityInfo", function (req, res) {
  let state = req.query.state;
  let city = req.query.city;
  if (!(state && city)) {
debugger;
    res.status(400).send("Error: Missing required city and state query parameters.");
  } else {
debugger;
    res.send("You sent a request for " + city + ", " + state);
  }
});


// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
