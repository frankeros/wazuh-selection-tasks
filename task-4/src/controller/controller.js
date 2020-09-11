const service = require('../services/service')

const helloWorld = (req, res) => {
  return { message: 'Hello World' };
};

const getAgents = async (req, res) => {
  try {
    const response = await service.getWazuhAgents();
    return response.data;
  } catch (error) {
    console.error(error);
    return {error};
  }
}


module.exports = {
  helloWorld,
  getAgents,
}