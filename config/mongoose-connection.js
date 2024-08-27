const mongoose = require("mongoose");
const deb = require("debug")("development:mongoose");
const config = require("config");

// $env:DEBUG="development:*"

mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function () {
    deb("connected");
  })
  .catch(function (err) {
    deb(err);
  });

module.exports = mongoose.connection;
