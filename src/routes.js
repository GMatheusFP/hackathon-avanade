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

// Rotas running

// - Clientes e motoristas podem fazer apenas uma corrida por vez!
routes.post('/running');
// - Os clientes podem ver corridas já realizadas
routes.get('/');
// - Os motoristas podem ver corridas já realizadas
routes.get('/');
// - O motorista ao aceitar uma corrida, podem altera-la para cancelada ou finalizada
routes.put('/');
// - O cliente pode cancelar uma corrida!
routes.post('/');

module.exports = routes;
