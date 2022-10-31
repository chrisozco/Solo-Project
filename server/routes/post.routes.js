const PostController = require('../controller/post.controller')
const {allPosts, createPost, onePost, updatePost, deletePost} = PostController


module.exports = app =>{
    app.get('/api/posts', allPosts)
    app.post('/api/posts', createPost)
    app.get('/api/posts/:id', onePost)
    app.put('/api/posts/:id', updatePost)
    app.delete('/api/posts/:id', deletePost)
}