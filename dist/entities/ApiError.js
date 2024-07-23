"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor(message, status, details) {
        super(message);
        this.status = status;
        this.details = details;
    }
}
exports.default = ApiError;
