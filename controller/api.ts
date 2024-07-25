import { Request, Response, NextFunction } from 'express';
import { updateUserData, fetchUserData } from '../repository/userCollection';
import {ApiError} from '../functions/src/entities/ApiError';

export const updateUserDataController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
    const data = req.body;
    await updateUserData(userId, data);
    res.status(200).send({ message: 'User data updated successfully' });
  } catch (error) {
    next(new ApiError(500, 'Failed to update user data' , error));
  }
};

export const fetchUserDataController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
    const userData = await fetchUserData(userId);
    res.status(200).send(userData);
  } catch (error) {
    next(new ApiError(500, 'Failed to fetch user data',  error));
  }
};
