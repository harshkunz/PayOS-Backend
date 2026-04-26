const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
        requestId: req.id
    });
};

export default errorHandler;