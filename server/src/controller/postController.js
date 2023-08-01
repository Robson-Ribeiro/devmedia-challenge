import PostModel from '../models/PostModel.js';
/*
class PostController {

    async createPost(req, res) {
        try {
            const post = await PostModel.create({ req.body });
            return res.status(200).redirect('/');
        } catch (error) {
            console.log(error.message);
            return res.render('error');
        }
    }

    async updatePost(req, res) {
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

    async searchPost(req, res) {
        try {
            const searchContent = req.body.search;
            if(!searchContent) return res.render('error');
            const posts = await PostModel.find({ title: /searchContent/i, text: /searchContent/i });
            if(!posts) return res.render('index');
            return res.status(200).render('index', { posts });
        } catch (error) {
            console.log(error.message);
            return res.render('error');
        }
    }


    async test(req, res) {
        try {
            const post = await PostModel.create({ title: "Olá Mundo!", text: "Lorem ipsum dolum sit amdsalfsadlçfkjal asldfkjasd 2l3kjsaldf asdflk jasdfaksl dasldf kjsadflkj asdfa sdklsodfkçjlsadfl sadf sadf laksdfjkl asdfa sdfajsldf asdf asdlfkjasdlfjasdlfk sldakfj a" });
            const post2 = await PostModel.create({ title: "Olá Mundo!", text: "Lorem ipkfj a" });
            const post3 = await PostModel.create({ title: "Olá Mundo!", text: "Lorem ipsum dolum sit amdsalfsadlçfkjal asldfkjasd 2l3kjsaldf asdflk jasdfaksl dasldf kjsadflkj asdfa sdklsodfkçjlsadfl sadjasdlfjasdlfk sldakfj a" });
            return res.status(200).redirect('/');
        } catch (error) {
            console.log(error.message);
            return res.render('error');
        }
    }
}

export default PostController;
*/


export async function createPost(req, res) {
    try {
        const postBody = req.body;
        if(!postBody) return res.render('error');
        const post = await PostModel.create({ postBody });
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

export async function test(req, res) {
    try {
        const post = await PostModel.create({ title: "Olá Mundo!", text: "Lorem ipsum dolum sit amdsalfsadlçfkjal asldfkjasd 2l3kjsaldf asdflk jasdfaksl dasldf kjsadflkj asdfa sdklsodfkçjlsadfl sadf sadf laksdfjkl asdfa sdfajsldf asdf asdlfkjasdlfjasdlfk sldakfj a" });
        const post2 = await PostModel.create({ title: "Olá Mundo!", text: "Lorem ipkfj a" });
        const post3 = await PostModel.create({ title: "Olá Mundo!", text: "Lorem ipsum dolum sit amdsalfsadlçfkjal asldfkjasd 2l3kjsaldf asdflk jasdfaksl dasldf kjsadflkj asdfa sdklsodfkçjlsadfl sadjasdlfjasdlfk sldakfj a" });
        return res.status(200).redirect('/');
    } catch (error) {
        console.log(error.message);
        return res.render('error');
    }
}

