const router = require('express').Router();
const axios = require('axios');

router.get('/:word', async(req, res) => {
    const data = req.params.word;
    const url = `https://contexto.me/machado/pt-br/game/226/${data}`;
    
    const request = await axios({
        method: 'GET',
        baseURL: url,
        headers: {"Content-Type": "application/json"},
    });

    res.send(request.data);
});

module.exports = router;