const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const ongProfileController = require('./controllers/ongProfileController'); 
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/ongLogin', sessionController.create);

routes.get('/listOngs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/listIncidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/deleteIncidents/:id', incidentController.delete);

routes.get('/listOngProfile', ongProfileController.index);

module.exports = routes;