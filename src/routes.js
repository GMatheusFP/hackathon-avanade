const { Router } = require('express');
const DriverController = require('./controllers/DriverController');

const routes = Router();

// Rotascliente
// Rotas motorista
routes.get('/drivers', DriverController.index);
routes.post('/driver', DriverController.store);
routes.get('/driver/:id', DriverController.show);
routes.put('/driver/:id', DriverController.update);
routes.delete('/driver/:id', DriverController.delete);

module.exports = routes;
