const express = require("express");
const app = express();
const port = 5000;

//
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://devpaul:1q2w3e4r@devpaul-28vbr.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("MongoDb Connected.."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World?!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
