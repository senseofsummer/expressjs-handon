"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send({
        message: err.message,
        details: err.details,
    });
};
exports.errorHandler = errorHandler;
