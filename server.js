const express = require('express');
const cors = require('cors');           //server-server security

const API_PORT = process.env.PORT || 6000;
const app = express();

app.use(cors());                        //CORS-enabled web server

app.get('/api', function(req, res) {
    console.log('/api Called');
    res.send({result: 'Helloooooooo'});
});

app.get('/quit', function(req, res) {
    console.log('/quit Called');
    res.send({result: 'Good bye'});
});

app.listen(API_PORT, () => {
    console.log(`Listening on port ${API_PORT}`);
});