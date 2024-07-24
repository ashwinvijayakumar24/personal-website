const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    id: {type:Number},
    title: {type:String},
    description: {type:String},
    route: {type:String},
    date: {type:String},
    content: {type:String},
    year: {type: String}
})



const Blogs = mongoose.model('Blogs', blogsSchema, 'blogs')

const mySchemas = {
    'Blogs': Blogs,
}


module.exports = mySchemas;