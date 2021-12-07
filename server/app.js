// const express = require('express')
// const app = express()
// const cors = require('cors')
// const mainRouter = require('./router/mainRouter')

import express from 'express';
import cors from 'cors';
import mainRouter from './router/mainRouter.js'

//로그인 작업에 붙일것들

import passport from 'passport';
import cookieParser from 'cookie-parser';
//import bcrypto from 'bcryptjs'
import session  from 'express-session'
import bodyParser from 'body-parser'

import  passportInput  from './passportConfig.js';
import FileStore from 'session-file-store';
import cookieSession from 'cookie-session';



const app = express();




//app.use(cors());
//앱 use라우터를 꼭 써줘야 기본 값이 셋팅됀다!! 이게 없으면 router연결이 안됌! app 이 기본임!
//https://darrengwon.tistory.com/46 참고




// 로그인 Middleware

// 아래 두개는 라우터에서 처리되었음.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// app.use(cors({
//     origin: "http://localhost:3000", 
//     credentials: true
// }));

const FileStoreEx = FileStore(session)

app.use(session({
    secret : "secretcode",
    resave : true,
    saveUninitialized : false,
    maxAge : 24*60*60*1000,
    //store : new FileStoreEx
}))



app.use( cookieParser("secretcode") )



app.use( passport.initialize() )
app.use( passport.session() )
app.use('/',mainRouter)


passportInput(passport)





// router.use(express.json())
// router.use(express.urlencoded({extended:false}));

app.listen(3001, ()=> {
    console.log('server running port:3001');
})

