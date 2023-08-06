import { Router } from 'express';
const router = new Router();

import { createPost, updatePost, searchPost, newPost, showPost, deletePost, showPostToBeUpdated } from '../controller/postController.js';

router.get('/show/:id', showPost);
router.get('/new', newPost);
router.post('/create', createPost);
router.post('/update/:id', updatePost);
router.post('/search', searchPost);
router.get('/delete/:id', deletePost);
router.get('/update/:id', showPostToBeUpdated);

export default router;
