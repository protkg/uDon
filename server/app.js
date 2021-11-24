// const express = require('express')
// const app = express()
// const cors = require('cors')
// const mainRouter = require('./router/mainRouter')

import express from 'express';
import cors from 'cors';
import mainRouter from './router/mainRouter.js'

const app = express();


app.use(cors());
//앱 use라우터를 꼭 써줘야 기본 값이 셋팅됀다!! 이게 없으면 router연결이 안됌! app 이 기본임!
//https://darrengwon.tistory.com/46 참고

app.use('/',mainRouter)

// router.use(express.json())
// router.use(express.urlencoded({extended:false}));


app.listen(3001, ()=> {
    console.log('server running port:3001');
})