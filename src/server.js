require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "StudySync API funcionando"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});