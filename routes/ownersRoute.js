const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// $env:NODE_ENV="development"
// console.log(process.env.NODE_ENV); // development

if (process.env.NODE_ENV == "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(500)
        .send("You don't have permission to create  new owner");
    }

    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(createdOwner);
  });
}

router.get("/", (req, res) => {
  res.send("hey working owners");
});

module.exports = router;
