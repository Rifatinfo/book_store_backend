const router = require("express").Router();
const User = require("../moduls/user");
const jwt = require('jsonwebtoken');
const { authenticationToken } = require("./userAuth");

// add book admin 
router.post("/add-book", authenticationToken, async(req, res) => {
    try {
        const {id} = req.headers;
        const user = await User.findById(id);
        if(user.role !== "admin"){
           res.status(500).json({message : "you are not having access to perform admin work"});
        }
    const book = new Book({
        url : req.body.url,
        title : req.body.title,
        author : req.body.author,
        price : req.body.price,
        desc : req.body.desc,
        language : req.body.language,
    })
    await book.save();
    res.status(200).json({message : "Book added successfully"});
    } catch(error) {
      res.status(500).json({message : "Internal server error"});
    }
})

module.exports = router;