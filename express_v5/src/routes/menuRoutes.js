import express from 'express';
import { Items } from '../controllers/menuController.js';

const router = express.Router();

router.get('/', Items);

export default router;
