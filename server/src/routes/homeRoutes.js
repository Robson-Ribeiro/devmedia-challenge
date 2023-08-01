import { Router } from 'express';
import homeController from '../controller/homeController.js';
const router = new Router();

router.get('/', homeController);

export default router;