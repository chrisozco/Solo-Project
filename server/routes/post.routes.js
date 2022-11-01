const PostController = require('../controller/post.controller')
const {allPosts, createPost, onePost, updatePost, deletePost} = PostController
const{authenticate} = require('../config/jwt.config')

module.exports = app =>{
    app.get('/api/posts', authenticate, allPosts)
    app.post('/api/posts', authenticate, createPost)
    app.get('/api/posts/:id', authenticate, onePost)
    app.put('/api/posts/:id', authenticate, updatePost)
    app.delete('/api/posts/:id', authenticate, deletePost)
}