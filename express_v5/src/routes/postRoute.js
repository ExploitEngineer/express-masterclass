import express from 'express';
import { postData } from '../controllers/postController.js';

const router = express.Router()

router.post('/submit', postData);

export default router;
