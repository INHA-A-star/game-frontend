import axios from 'axios';

function getScenarios() {
  return axios.get('/scenarios');
}

export { getScenarios };
