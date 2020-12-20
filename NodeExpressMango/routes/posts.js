'use strict'
import express from 'express';
import { PostSchemaMangoos as Post } from '../models/Posts.js';

const  router = express.Router();

//Main route
//Return Every data's
export default  router.get('/', async (req, res) => {
    try{
        const posts = await Post.find(); //.find() is a moongos func
        res.json(posts);
    }catch(err){
        res.json({message: err}); 
    }
});

//Post data
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);    
    }catch(err){
        res.json({message: err});
    }

});

//Return Specific ID
router.get('/:postID', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//Delete specific ID
router.delete('/:postID', async (req, res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postID});
        res.json(removePost);
    }catch(err){
        res.json({message: err});
    }

});

//Update posts
router.patch('/:postID', async (req, res) => {
    try{
        const updatePost = await Post.updateOne(
            { _id: req.params.postID },
             { $set: {title: req.body.title} }
        );
        res.json(updatePost);
    }catch(err){
        res.json({ message: err });
    }
})









// //subRoutes
//  router.get('/specific', (req, res) => {
//     res.send('Specific posts');
// }); 

