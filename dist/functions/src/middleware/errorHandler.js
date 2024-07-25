"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send({
        message: err.message,
        details: err.details || null,
    });
};
exports.errorHandler = errorHandler;
