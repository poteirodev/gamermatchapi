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
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida encontrada
 *       404:
 *         description: Partida no encontrada
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/matches:
 *   post:
 *     summary: Crear partida
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               game:
 *                 type: string
 *               players:
 *                 type: integer
 *               active:
 *                 type: boolean
 *             example:
 *               id: 10
 *               game: Minecraft
 *               players: 4
 *               active: true
 *     responses:
 *       201:
 *         description: Partida creada
 *       400:
 *         description: Datos inválidos
 */
router.post("/", create);

/**
 * @swagger
 * /api/matches/{id}:
 *   put:
 *     summary: Actualizar partida
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game:
 *                 type: string
 *               players:
 *                 type: integer
 *               active:
 *                 type: boolean
 *             example:
 *               game: Valorant
 *               players: 5
 *               active: true
 *     responses:
 *       200:
 *         description: Partida actualizada
 *       404:
 *         description: Partida no encontrada
 */
router.put("/:id", update);

/**
 * @swagger
 * /api/matches/{id}:
 *   delete:
 *     summary: Eliminar partida
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida eliminada
 *       404:
 *         description: Partida no encontrada
 */
router.delete("/:id", remove);

module.exports = router;