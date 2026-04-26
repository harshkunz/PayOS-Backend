import { v4 as uuid } from 'uuid';

const requestIdMiddleware = (req, res, next) => {
    const id = req.headers['x-request-id'] || uuid();
    req.id = id;
    res.setHeader('x-request-id', id);
    next();
};

export default requestIdMiddleware;