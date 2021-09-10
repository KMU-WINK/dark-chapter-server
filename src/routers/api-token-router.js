import express from 'express';
import * as apiService from '../services/api-token-service';

const router = express.Router();

router.post('/', async (req, res) => {
    const token = await apiService.getToken(req.body);
    res.status(201).json({ token });
});

export default router;
