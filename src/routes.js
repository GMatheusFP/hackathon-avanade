const { Router } = require('express');

const routes = Router();

routes.get('/', () => {
  console.log('teste de rota');
});

// Rotascliente
// Rotas motorista

module.exports = routes;
