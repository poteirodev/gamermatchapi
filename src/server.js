require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const matchRoutes = require("./routes/matchRoutes");

const { swaggerUi, specs } = require("./swagger");

app.use(cors());

app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use("/api/matches", matchRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});