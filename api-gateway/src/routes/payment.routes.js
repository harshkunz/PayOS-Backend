import { Router } from 'express';

import { createPayment } from '../controllers/payment.controller.js';
import auth from '../middleware/auth.js';
import rateLimiter from '../middleware/rateLimiter.js';
import validate from '../middleware/requestValidator.js';

const router = Router();

router.post(
    '/',
    auth,
    rateLimiter,
    validate,
    createPayment
);

export default router;