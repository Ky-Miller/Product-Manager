const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    Title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [4, "Title must be at least 4 characters long"]
    },
    Price: {
        type: Number,
        required: [true, "Please enter a price"],
    },
    Description: {
        type: String,
        minlength:[true, "Please enter a description"],
        minlength: [10, "please enter a description at least 10 characters long"]
    }
    },
    { timestamps: true}
);

// DataBase Keys Should be LOWERCASE don't make this mistake!

const Product = mongoose.model('Product', ProductSchema);

module.exports =  Product;