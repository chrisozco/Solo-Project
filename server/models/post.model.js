const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: [true, 'Dish name is required'],
        minLength: [3, 'Dish name must be at least 3 characters']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minLength: [3, 'Location must be at least 3 characters']
    },
    foodType: {
        type: String,
        enum: ['Mexican', 'Chinese', 'Indian', 'Italian', 'American'],
        required: [true, 'Food type is required']
    },
    raiting: {
        type: Number,
        required: [true, 'Raiting is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    description: {
        type: String,
        required: [true, 'Dont be shy, spill the beans!'],
        maxLength: [50, 'Description can be a maximum of 50 characters']
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', PostSchema)