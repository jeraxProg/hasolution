const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    isShown: {
        type: Boolean,  
        default: false,
    },
}, { timestamps: true })



module.exports = mongoose.model('Category', CategorySchema);