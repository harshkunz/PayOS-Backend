import ENV  from './config/env';
const express = require('express');
const app = express();

app.use(express.json());

const PORT = ENV.PORT;

app.listen(PORT, () => {
    console.log(`API Gateway running on ${PORT}`);
});