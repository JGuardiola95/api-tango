import { Router } from 'express';
import { getFibonacciNumber } from '../controllers/getFibonacciNumber';

const router = Router();

router.get('/fibonacci/:number', getFibonacciNumber);

export default router;
