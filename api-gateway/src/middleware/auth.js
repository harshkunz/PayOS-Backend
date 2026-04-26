import jwt from "jsonwebtoken";
import ENV from "../config/env.js";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        req.user = jwt.verify(token, ENV.JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({ error: "Invalid token" });
    }
};

export default authMiddleware;