import { Router } from 'express';
const router = new Router();

import { createPost, updatePost, searchPost, newPost, showPost } from '../controller/postController.js';

router.get('/show/:id', showPost);
router.get('/new', newPost);
router.post('/create', createPost);
router.post('/update', updatePost);
router.post('/search', searchPost);

export default router;
