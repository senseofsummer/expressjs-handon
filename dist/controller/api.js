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
exports.fetchUserDataController = exports.updateUserDataController = void 0;
const userCollection_1 = require("../repository/userCollection");
const ApiError_1 = __importDefault(require("../entities/ApiError"));
const updateUserDataController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const data = req.body;
        yield (0, userCollection_1.updateUserData)(userId, data);
        res.status(200).send({ message: 'User data updated successfully' });
    }
    catch (error) {
        next(new ApiError_1.default('Failed to update user data', 500, error));
    }
});
exports.updateUserDataController = updateUserDataController;
const fetchUserDataController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const userData = yield (0, userCollection_1.fetchUserData)(userId);
        res.status(200).send(userData);
    }
    catch (error) {
        next(new ApiError_1.default('Failed to fetch user data', 500, error));
    }
});
exports.fetchUserDataController = fetchUserDataController;
