const express = require('express');
app = express();
app.set('port', 8000);

app.get('/', (req, res)=>{
    res.send('Hello, world');
});

app.get('/board', (req, res)=>{
    res.send('Board 입니다');
});

app.get('/login', (req, res)=>{
    res.send('Login 입니다');
});

app.get('/signup', (req, res)=>{
    res.send('Signup 입니다');
});

app.listen(app.get('port'), ()=>{
    console.log('Server Start');
});