const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const userRoutes = require("./views/userRoutes");

app.use( express.json() );

app.use(userRoutes);

mongoose
  .connect(
    "mongodb+srv://MONGO_USER:12345@cluster0.vi2oi.mongodb.net/dbName?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Db COnnected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server started running on port ${port}`);
});
