
const validateRequest = (req, res, next) => {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
        return res.status(400).json({
            error: "amount and currency required"
        });
    }

    if (typeof amount !== 'number') {
        return res.status(400).json({
            error: "amount must be number"
        });
    }

    next();
};

export default validateRequest;