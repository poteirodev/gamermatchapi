const matches = require("../models/matches");

exports.getAll = (req, res) => {

  let result = [...matches];

  const { q, active } = req.query;

  if (q) {
    result = result.filter(m =>
      m.game.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (active) {
    result = result.filter(
      m => m.active.toString() === active
    );
  }

  res.status(200).json(result);
};

exports.getById = (req, res) => {

  const match = matches.find(
    m => m.id == req.params.id
  );

  if (!match) {
    return res.status(404).json({
      message: "Partida no encontrada"
    });
  }

  res.status(200).json(match);
};

exports.create = (req, res) => {

  const { id, game, players, active } = req.body;

  if (!game) {
    return res.status(400).json({
      message: "game es obligatorio"
    });
  }

  const newMatch = {
    id: id || matches.length + 1,
    game,
    players,
    active
  };

  matches.push(newMatch);

  res.status(201).json(newMatch);
};

exports.update = (req, res) => {

  const match = matches.find(
    m => m.id == req.params.id
  );

  if (!match) {
    return res.status(404).json({
      message: "Partida no encontrada"
    });
  }

  const { game, players, active } = req.body;

  match.game = game;
  match.players = players;
  match.active = active;

  res.status(200).json(match);
};

exports.remove = (req, res) => {

  const index = matches.findIndex(
    m => m.id == req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Partida no encontrada"
    });
  }

  matches.splice(index, 1);

  res.status(200).json({
    message: "Partida eliminada"
  });
};