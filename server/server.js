require("./config/config.js");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("<h1> Bienvenido a mi Servidor REST (localhost) </h1>");
});

app.use(require('./routes/usuario'))

mongoose.connect(
  "mongodb://localhost:27017/cafeteria",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err, res) => {
    if (err) throw err;

    console.log("Base de datos ONLINE");
  }
);

app.listen(process.env.PORT, () => {
  console.log("El servidor esta en linea por el puerto ", process.env.PORT);
});
