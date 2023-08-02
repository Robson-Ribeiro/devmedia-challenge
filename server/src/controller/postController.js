import PostModel from '../models/PostModel.js';

export function newPost(req, res) {
    res.status(200).render('postForm');
}



export async function createPost(req, res) {
    try {
        const postBody = req.body;
        if(!postBody) return res.render('error');
        const post = await PostModel.create( postBody );
        return res.status(200).redirect('/');
    } catch (error) {
        console.log(error.message);
        return res.render('error');
    }
}

export async function updatePost(req, res) {
    try {
        const id = req.params.id;
        if(!id) return res.render('error');
        const updatedPost = await PostModel.findByIdAndUpdate(id, req.body, { new: true });
        if(!updatedPost) return res.render('error');
        return res.status(200).redirect('/');
    } catch (error) {
        console.log(error.message);
        return res.render('error');
    }
}

export async function searchPost(req, res) {
    try {
        const searchContent = req.body.search;
        if(!searchContent) return res.render('error');
        //const posts = await PostModel.find({ title: /searchContent/i, text: /searchContent/i });
        const posts = await PostModel.find({ $or: [
            { 
                title: { $regex: '.*' + searchContent + '.*', $options: 'i' }
            }, { 
                text: { $regex: '.*' + searchContent + '.*', $options: 'i' }
            }
        ]});
        if(!posts) return res.render('index');
        return res.status(200).render('index', { posts });
    } catch (error) {
        console.log(error.message);
        return res.render('error');
    }
}

export async function showPost(req, res) {
    const { id } = req.params;
    if(!id) return res.render('error');
    try {
        const post = await PostModel.findById(id);
        if(!post) return res.status(200).render('index');
        return res.status(200).render('showPost', { post });
    } catch (error) {
        console.log(error.message);
        return res.render('error');
    }
}



