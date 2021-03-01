const mongoose = require("mongoose");
require("dotenv").config();
const connected = () => {
  mongoose
    .connect(process.env.URL, { useNewUrlParser: true,useUnifiedTopology:true })
    .then(()=>console.log("connection created"))
    .catch((error) => console.log(error));
};

module.exports = connected;
