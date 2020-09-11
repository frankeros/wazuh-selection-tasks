const controller = require('../controller/controller');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: controller.helloWorld
  },
  {
    method: 'GET',
    path: '/agents',
    handler: controller.getAgents
  },
];