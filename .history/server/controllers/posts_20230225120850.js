import PostMessage from '../models/postMessage.js'

export const getPosts = (req, res) => {
    try {
        const postMessage = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessage);
    } catch (error) {
        
    }

}

export const createPost = (req, res) => {
    res.send('Post Creation'); 
}

