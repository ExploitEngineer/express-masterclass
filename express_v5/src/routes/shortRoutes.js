import express from 'express';
import { shortData } from '../controllers/shortController.js';

const router = express.Router();

router.get('/', shortData);

export default router;
