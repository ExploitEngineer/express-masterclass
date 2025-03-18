import express from 'express';
import { cardsItems } from '../controllers/cardController.js';

const router = express.Router();

router.get('/', cardsItems);

export default router;
