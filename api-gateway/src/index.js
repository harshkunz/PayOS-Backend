import express from "express";
import ENV  from './config/env';

import routes from './routes/payment.routes.js';
import errorHandler from './utils/errorHandler.js'
import requestId from './middleware/requestId.js';

const app = express();

app.use(express.json());
app.use(requestId);

app.use('/api/v1/payments', routes);

app.get('/health', (req, res) => res.send("OK"));

app.use(errorHandler);

const PORT = ENV.PORT;

app.listen(PORT, () => {
    console.log(`API Gateway running on ${PORT}`);
});