const Post = require('../models/post.model')

module.exports.allPosts = (req, res) => {
    Post.find()
        .then(posts => {
            res.json(posts)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.createPost = (req, res) => {
    Post.create(req.body)
        .then(newPost => {
            res.json(newPost)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.onePost = (req, res) => {
    Post.findById(req.params.id)
        .then(singlePost => {
            res.json(singlePost)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.updatePost = (req, res) => {
    Post.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(update => {
            res.json(update)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(deletedPost => {
            res.json(deletedPost)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}