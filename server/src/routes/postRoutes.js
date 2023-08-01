import { Router } from 'express';
const router = new Router();

import {createPost, updatePost, searchPost, test} from '../controller/postController.js';

router.post('/create', createPost);
router.post('/update', updatePost);
router.post('/search', searchPost);

router.get('/test', test);


export default router;
