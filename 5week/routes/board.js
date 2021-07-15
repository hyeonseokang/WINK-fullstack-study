const express = require('express');
const Board = require('../schemas/board.js');

const router = express.Router();

router.post('/board', (req, res, next)=>{
    console.log(req.body);
    const board = new Board({
        title: req.body.title,
        body: req.body.body
    });
    board.save()
    .then((result)=>{
        console.log('sucess: ', board);
        res.json({'msg':'success'});
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
});

module.exports = router;