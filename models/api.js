const express = require('express');
const router = express.Router();
const app = express();
const axios = require('axios');
const path = require('path');

router.get('/', express.static('public'));

router.get('/api/:word', async(req, res) => {
    const data = req.params.word;
    const url = `https://contexto.me/machado/pt-br/game/226/${data}`;
    
    const request = await axios({
        method: 'GET',
        baseURL: url,
        headers: {"Content-Type": "application/json"},
    });

    res.status(200).send(request.data);
});

module.exports = router;