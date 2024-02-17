const https = require('https');

const options = {
  hostname: 'financialmodelingprep.com',
  port: 443,
  path: 'https://financialmodelingprep.com/api/v3/fx',
  method: 'GET',
};

const req = https.request(options, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});
