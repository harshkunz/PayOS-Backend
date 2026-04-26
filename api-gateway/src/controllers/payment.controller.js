import orchestrator from '../services/orchestrator.service.js';

export const createPayment = async (req, res, next) => {
    try {
        const result = await orchestrator.startPayment(
            req.body,
            req.id
        );

        res.status(202).json(result);
    } catch (err) {
        next(err);
    }
};