import PostModel from '../models/PostModel.js';

export default async function homeController(req, res) {
    try {
        const posts = await PostModel.find();
        return res.status(200).render('index', { posts });
    } catch (error) {
        console.log(error.message);
    }
    
}