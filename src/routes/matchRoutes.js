const express = require("express");

const router = express.Router();

const {
  getAll,
  getById,
  create,
  update,
  remove
} = require("../controllers/matchController");

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Obtener partidas
 *     responses:
 *       200:
 *         description: Lista de partidas
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/matches/{id}:
 *   get:
 *     summary: Obtener partida por ID
 *     responses:
 *       200:
 *         description: Partida encontrada
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/matches:
 *   post:
 *     summary: Crear partida
 *     responses:
 *       201:
 *         description: Partida creada
 */
router.post("/", create);

/**
 * @swagger
 * /api/matches/{id}:
 *   put:
 *     summary: Actualizar partida
 *     responses:
 *       200:
 *         description: Partida actualizada
 */
router.put("/:id", update);

/**
 * @swagger
 * /api/matches/{id}:
 *   delete:
 *     summary: Eliminar partida
 *     responses:
 *       200:
 *         description: Partida eliminada
 */
router.delete("/:id", remove);

module.exports = router;