const fetch = require("fetch").fetchUrl;

fetch("http://localhost:3000/api/get", function (error, meta, body) {
  console.log(body.toString());
});
