const express = require('express');

const connect = require('./schemas');
const boardRouter = require('./routes/board');

const app = express();
connect();

app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', boardRouter);

app.listen(app.get('port'), ()=>{
    console.log('express 서버 실행');
})
