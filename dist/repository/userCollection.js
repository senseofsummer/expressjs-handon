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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const firebaseConfig_1 = require("../functions/src/config/firebaseConfig");
const updateUserData = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRef = firebaseConfig_1.db.collection('USERS').doc(userId);
    yield userRef.set(data, { merge: true });
});
exports.updateUserData = updateUserData;
const fetchUserData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRef = firebaseConfig_1.db.collection('USERS').doc(userId);
    const doc = yield userRef.get();
    if (!doc.exists) {
        throw new Error('User not found');
    }
    return doc.data();
});
exports.fetchUserData = fetchUserData;
