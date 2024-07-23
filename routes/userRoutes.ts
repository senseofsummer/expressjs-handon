import { Router } from 'express';
import { updateUserDataController, fetchUserDataController } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.put('/update-user-data/:userId', authMiddleware, updateUserDataController);
router.get('/fetch-user-data/:userId', authMiddleware, fetchUserDataController);

export default router;
