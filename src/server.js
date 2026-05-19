require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const matchRoutes = require(
  "./routes/matchRoutes"
);

app.get("/", (req, res) => {
  res.json({
    message: "API de partidas funcionando"
  });
});

app.use("/api/matches", matchRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});