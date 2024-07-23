"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("../controller/api");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.put('/update-user-data/:userId', authMiddleware_1.authMiddleware, api_1.updateUserDataController);
router.get('/fetch-user-data/:userId', authMiddleware_1.authMiddleware, api_1.fetchUserDataController);
exports.default = router;
