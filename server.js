const express = require('express');
const app = express();
const router = require('./models/api');
const cors = require('cors');

app.use(cors());

app.get('/:id', router);

app.listen(3000, () => {
    console.log('Server is running!');
});