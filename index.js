const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection");
const path = require("path");
const app = express();
const fileUpload = require('express-fileupload')
const mongoConnection = require("./utils/mongodb")

dotenv.config({ path: "./config.env" });
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload())


app.use("/api", require("./routes/index"));
app.use("/api", require("./routes/Admin/index"));

app.get("/", (req, res) => {
  res.send(`Hello from the server`);
});
// app.listen(process.env.PORT || 3000, () => {
//   console.log(
//     `App listening at http://localhost:${process.env.PORT || 3000}`
//   );
// });
// connectRedis().then((status)=>{
//   console.log(status)
// })

mongoConnection()
  .then((status) => {
    console.log(status);
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `App listening at http://localhost:${process.env.PORT || 3000}`
      );
    });
  })
  .catch((err) => console.log(err));

