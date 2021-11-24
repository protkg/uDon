const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const router = express.Router();

app.use(cors());
//앱 use라우터를 꼭 써줘야 기본 값이 셋팅됀다!! 이게 없으면 router연결이 안됌! app 이 기본임!
//https://darrengwon.tistory.com/46 참고

app.use(router)

router.use(express.json())
router.use(express.urlencoded({extended:false}));


const db = mysql.createConnection({
    user : 'bsk',
    host : '101.101.219.43',
    password: 'Ssac000@',
    database: 'udondb',
})


router.get('/', (req, res, next) => {

    db.query("select m.nickname , d.* from Member m join Document d on m.id = d.writer", (err, result) => {

        if(err){
            console.log(err);
    
        }else{
             res.send(result)
            console.log(result);

        }

    })
})


router.get('/BoardDetail/:id', (req, res) => {
    
    var documentId = req.params.id;
    console.log(documentId);

    var sql = 'select m.nickname , d.* from Member m join Document d on m.id = d.writer where m.id = ?'
    db.query(sql, documentId, (err,result) => {

        if(err){
            console.log(err);
    
        }else{

            //만약 ejs였다면 res.render
            
             res.send(result)
            console.log(result);

        }


    } )

})




app.listen(3001, ()=> {
    console.log('server running port:3001');
})