"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.updateUser = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
const ApiError_1 = require("../entities/ApiError");
const updateUser = async (req, res, next) => {
    try {
        const { userId, userData } = req.body;
        await firebaseConfig_1.db.collection('USERS').doc(userId).set(userData, { merge: true });
        res.status(200).send({ message: 'User data updated successfully' });
    }
    catch (error) {
        next(new ApiError_1.ApiError(500, 'Failed to update user data', error));
    }
};
exports.updateUser = updateUser;
const fetchUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const userDoc = await firebaseConfig_1.db.collection('USERS').doc(userId).get();
        if (!userDoc.exists) {
            return next(new ApiError_1.ApiError(404, 'User not found'));
        }
        res.status(200).send(userDoc.data());
    }
    catch (error) {
        next(new ApiError_1.ApiError(500, 'Failed to fetch user data', error));
    }
};
exports.fetchUser = fetchUser;
//# sourceMappingURL=api.js.map