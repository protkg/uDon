import express from 'express';
import db from './../udonDb/udonDb.js'

//import를 쓰면 package.json에 module추가 해야함~!~!

const router = express.Router();

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




export default router;

