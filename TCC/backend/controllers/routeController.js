const Route = require('../models/routeModel');
const aStar = require('../utils/aStarAlgorithm');

exports.createRoute = async (req, res) => {
  try {
    const { startLocation, endLocation, grid } = req.body;
    const optimizedPath = aStar(startLocation, endLocation, grid);
    // Simular salvamento no banco de dados
    const savedRoute = { startLocation, endLocation, optimizedPath };
    res.status(201).json(savedRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoutes = async (req, res) => {
  try {
    // Simular recuperação de dados do banco de dados
    const routes = [];
    res.status(200).json(routes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};