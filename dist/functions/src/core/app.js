"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const body_parser_1 = require("body-parser");
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const errorHandler_1 = require("../middleware/errorHandler");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, body_parser_1.json)());
app.use('/api/users', userRoutes_1.default);
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('Login function is working!');
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
}));
app.use(errorHandler_1.errorHandler);
