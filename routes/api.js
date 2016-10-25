var express = require('express');
var path = require('path')
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dewei:dewei@ds048719.mlab.com:48719/man_blog');
var postSchema =new  mongoose.Schema({
    //  public _id: {},
     name: String,
     content: String
})
var Post = mongoose.model('Post', postSchema);

/* GET home page. */
router.get('/getUsers', function (req, res, next) {

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

module.exports = router;
