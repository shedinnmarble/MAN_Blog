var express = require('express');
var path = require('path')
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dewei:dewei@ds048719.mlab.com:48719/man_blog');
var postSchema =new  mongoose.Schema({
    //  public _id: {},
     name: String,
     author:String,
     content: String
})
var Post = mongoose.model('Post', postSchema);

/* GET home page. */
router.get('/getPosts', function (req, res, next) {

    var dewei = new Post({
        name: "dewei xiang",
        content: "this is my first content"
    })
    // dewei.save(function (err) {
    //     if (err) console.log(err)
    // });
    Post.find({},{"__v":0}, function (err, posts) {
        if (err) console.log(err)
        res.send(posts)
    })

});
router.post("addPost",function (req,res) {
    var post= new Post({
        name:req.params.postName,
        author:req.params.postAuthor,
        content:req.params.postContent
    })
    post.save(function(err){
        if(err) console.log(err);
        res.send("success");
    })
})

module.exports = router;
