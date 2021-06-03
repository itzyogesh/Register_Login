const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/registerdata", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is created");
  })
  .catch((e) => {
    console.log(e);
  });
