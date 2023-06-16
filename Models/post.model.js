const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   title: String,
   img: String,
   desc: String,
   price: Number,
   discount:Number,
   category: String
},{
    versionKey: false
});


const postModel = mongoose.model("post", postSchema);

module.exports = {postModel}