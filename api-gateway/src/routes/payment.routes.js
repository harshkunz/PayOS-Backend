import { Router } from 'express';

import { createPayment } from '../controllers/payment.controller.js';
import authMiddleware from '../middleware/auth.js';
import limiter from '../middleware/rateLimiter.js';
import validateRequest from '../middleware/requestValidator.js';

const router = Router();

router.post(
    '/',
    auth,
    rateLimiter,
    validateRequest,
    createPayment
);

export default router;