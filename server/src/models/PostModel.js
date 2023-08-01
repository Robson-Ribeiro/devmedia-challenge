import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true }
})

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;