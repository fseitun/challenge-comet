const axios = require('axios');
const https = require('https');
const express = require('express');

const app = express();

// app.use('/api/v1', require('./controllers/api_v1'));
// app.use('/api/v2', require('./controllers/api_v2'));

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

app.get('/api/v1/students/:id', async function (req, res) {
  const result = await axios.get(`http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/${req.params.id}`, {
    httpsAgent,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      hash: 'OcJn4jYChW',
      'Access-Control-Allow-Origin': '*',
    },
  });
  res.send(result.data);
});

app.listen(3000);
console.log('Express started on port 3000');
