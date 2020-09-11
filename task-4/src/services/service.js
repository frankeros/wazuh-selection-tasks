const https = require('https');
const axios = require('axios');

const getWazuhAgents = async () => {
  const url = 'https://localhost:55000/agents';
  return await axios.get(url, {
    auth: {
      username: 'foo',
      password: 'bar'
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  });
}

module.exports = {
  getWazuhAgents,
}