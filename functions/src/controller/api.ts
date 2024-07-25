import { Request, Response, NextFunction } from 'express';
import { db } from '../config/firebaseConfig';
import { ApiError } from '../entities/ApiError';

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, userData } = req.body;
        await db.collection('USERS').doc(userId).set(userData, { merge: true });
        res.status(200).send({ message: 'User data updated successfully' });
    } catch (error) {
        next(new ApiError(500, 'Failed to update user data', error));
    }
};

export const fetchUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.params;
        const userDoc = await db.collection('USERS').doc(userId).get();
        if (!userDoc.exists) {
            return next(new ApiError(404, 'User not found'));
        }
        res.status(200).send(userDoc.data());
    } catch (error) {
        next(new ApiError(500, 'Failed to fetch user data', error));
    }
};
