const mongoose = require('mongoose');

// account.js 파일 있을때
const account = require('../account/account.js');
const id = account.id;
const pwd = account.pwd;

// id pwd 파일 없을때
// const id = 'test';
// const pwd = 'test';

const connect = () => {
    if (process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true);
    }
    
    mongoose.connect(`mongodb://${id}:${pwd}@localhost:27017/admin`, {
        dbName: 'test',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, 
    (error)=>{
        if(error){
            console.log('몽고디비 연결 에러', error);
        }
        else{
            console.log('MongoDB Connected');
        }
    });
};

mongoose.connection.on('error', (error) =>{
    console.error('몽고디비 연결 에러!!', error);
});
mongoose.connection.on('disconnected',()=>{
    console.error('몽고디비 연결이 끊겼습니다.ㅜㅜ 연결을 재시도합니다.');
    connect();
});

module.exports = connect;