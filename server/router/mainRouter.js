import express from 'express';
import { getBoardList , getBoardDetail, deleteBoardData ,updateBoardData, newBoardData, getLocalNum, userRegister , userLogin } from './../controllers/mainControllers.js'
import cors from 'cors';
//import를 쓰면 package.json에 module추가 해야함~!~!



import passport from 'passport';
import passportLocal from 'passport-local'
import cookieParser from 'cookie-parser';
//import bcrypto from 'bcryptjs'
import session  from 'express-session'
import bodyParser from 'body-parser'



const router = express.Router();

router.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
}));


//router.use(cors());
//body값을 위해, 아래 2개를 사용한다.put, post를 위해!
router.use(express.json())
router.use(express.urlencoded({extended:false}));


// router.use(session({
//   secret : "secretcode",
//   resave : true,
//   saveUninitialized : false,
//   //store : new FileStoreEx
// }))



// router.use( cookieParser("secretcode") )




// router.use(session({
//     secret : "secretcode",
//     resave : true,
//     saveUninitialized : false
// }))

// import  passportInput  from './../passportConfig.js';

// router.use(cookieParser("secretcode"))

// router.use(passport.initialize() )
// router.use(passport.session() )

// passportInput(passport)





router.get('/local/:id', getBoardList)
router.get('/localNum/:localId', getLocalNum)
router.get('/BoardDetail/:id', getBoardDetail)
router.delete('/BoardDeleteData/:id', deleteBoardData)
router.put('/updateBoardData/:id', updateBoardData)
router.post('/newBoardData', newBoardData)

router.post('/Register', userRegister)

//router.post('/Login', userLogin)

//아래처럼 다음 함수에서 부르는 거는 deserializeUser<이부분에서 오는구나..
//sql: "select * from Member where loginid = `_loginid` = 'registerId7'" 오류 
// router.post('/Login', 
//   passport.authenticate('local'), (err, user) =>{

//     console.log(user);

//   }
   
//   );
  


// router.post('/Login', (req, res, next) => {
//   console.log("로그인 들어옴");
//   passport.authenticate('local', (err, user) => {
//     if (err) throw err;
//     if (!user) res.status(401).json({ message: '실패' });
//     else {
      
//       res.json({ loginid: user.loginid, nickname: user.nickname, location: user.location })
//     }
//   })(req, res, next)
// }
// );


// //해당부분이 제일 주요~!~!
// router.post('/Login', 
//   passport.authenticate('local', { failureRedirect: 'https://localhost:3000/'} ),
//   function(req, res) {
//     console.log("User >>> ", req.user );
//     res.json(req.user);
//   }
//   );

//해당부분이 제일 주요~!~!
router.post('/Login', 
  passport.authenticate('local', { failureRedirect: 'https://localhost:3000/'} ),
  function(req, res) {

    console.log(req.user);
    res.json(req.user);
    
  }
  );



  
router.get('/Logout',  (req, res) =>{
  // console.log("들어옴");
  // res.clearCookie('connect.sid');
  // req.logout();
  
  //   req.session.destroy((err) => {
  //    console.log("들어옴2");
  //   console.log(err);
  //   });

  // req.session.save(function(){
  //   console.log("삭제 성공?");
  //   req.logout();
  //   res.cookie('connect.sid','',{maxAge:0});
  // });
  //  req.logout();
  // req.session.destroy();
  // console.log("들어옴");
  
  console.log("로그아웃 들어옴");
  res.clearCookie('connet.sid')

    req.session.destroy(() => {
    console.log("들어옴2");
      res.clearCookie('connect.sid');
      res.json( {msg : "쿠키 삭제 완료" })

  });

//   req.session.destroy(function() {
//     res.clearCookie('connect.sid', { path: '/' });

// });
  
    
//    res.cookie('connect.sid','',{maxAge:0});

}
);




// router.get('/Logout', (req, res) => {
//   console.log("로그아웃 들어옴");
//   req.session.destroy(() => {
//     console.log("들어옴2");
//     res.clearCookie('connect.sid');

//   });
//   //res.json( {msg : "들어옴" })

//  }
// );



export default router;

