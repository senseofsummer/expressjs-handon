"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const errorHandler_1 = require("../middleware/errorHandler");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, body_parser_1.json)());
app.use('/api/users', userRoutes_1.default);
app.use(errorHandler_1.errorHandler);
//# sourceMappingURL=app.js.map