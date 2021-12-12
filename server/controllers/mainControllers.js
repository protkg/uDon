import db from './../udonDb/udonDb.js'
import bcrypto from 'bcryptjs'



export function getBoardList(req, res) {

    const locationId = req.params.id;
    console.log("지역 id" + locationId);

    db.query("select l.*, d.* from (select m.nickname , d.* from Member m join Document d on m.id = d.writer) d join Location l on d.location = l.id where l.pid = ?", locationId, (err, result) => {
        
        if(err){
            console.log(err);
    
        }else{
             res.send(result)
             console.log(result);
        }
    })
}




export function getBoardDetail(req, res){
    
        const documentId = req.params.id;
        console.log(documentId);
    
        const sql = 'select m.nickname , d.* from Member m join Document d on m.id = d.writer where d.id = ?'
        db.query(sql, documentId, (err,result) => {
    
            if(err){
                console.log(err);
        
            }else{
    
                //만약 ejs였다면 res.render
                
                 res.send(result)
                console.log(result);
    
            }

        } )

}



export function updateBoardData( req, res) {

        const ducumentId = req.params.id;

        const documentTitle = req.body.title;
        const documentContent = req.body.content;
        
        const sql = 'update Document set title=?, content = ? where id = ?'

        db.query(sql, [documentTitle,documentContent,ducumentId], (err, result) => {

            if(err) { console.log( err )}
            else { res.send(result)  }
    
        }) 
}


export function newBoardData (req, res) {

    const documentLocation = req.body.location;
    const documentTitle = req.body.title;
    const documentContent = req.body.content;
    const documentWriter = req.body.writer;
    const documentStatus = req.body.status;

    console.log(documentStatus);

    const sql = "insert into Document( location, title, content, writer, status) values(?,?,?,?,?);"

    
    db.query(sql, [documentLocation,documentTitle,documentContent,documentWriter,documentStatus],(err, result) =>{

        if(err) { console.log( err )}
        else { 
            console.log("입력성공");
            res.send(result)  }
    })

}


export function deleteBoardData( req, res ) {

    const documentId = req.params.id;
    const sql = 'delete from Document where id = ?'

    db.query(sql, documentId, (err, result) => {

        if(err) { console.log( err )}
        else { res.send(result) 
                console.log('삭제 성공'); }

    })
}



export function getLocalNum(req, res) {

    const localId  = req.params.localId;

    //키값이 같을경우, 중복으로 인식됌 >>alias로 모두 정해야함
     const sql = 'select si.id,  si.name as siName, gu.id as gu_ID, gu.name from Location si left outer join Location gu on si.id = gu.pid where si.id = ?'
    

    db.query(sql, localId, (err, result) => {
        if(err) {console.log( err)}
        else{ 
            res.send(result) 
            console.log('getLocalNum 성공');
        }
    })



}


//await 쓰면 ,>> async씀!!

export async function userRegister ( req, res)  {

    const loginid =  req.body.loginid 
    const nickname = req.body.nickname 
    const name = req.body.name 
    const gender = req.body.gender 
    const location = req.body.location 
    const status = req.body.status 
    const superuser = req.body.superuser 

    
    console.log("sssss");
    
    const findUserData = await findUser(loginid)
    
    console.log(findUserData.length);

    //Promise { <pending> } 이기 때문에! await 써야함
    //const check = await findUser(loginid)
    if(findUserData.length < 1){
        console.log("들어옴?");
        const hashPassword = await bcrypto.hash(req.body.passwd,10)

        console.log(hashPassword);
    
        const sql = "insert into Member(loginid, passwd, nickname, name, gender, location, status, superuser) values(?,?,?,?,?,?,?,?)"
        
        db.query(sql, [loginid,hashPassword,nickname,name,gender,location,status,superuser],(err, result) =>{
    
            if(err) { console.log( err )}
    
            else { 
                console.log("가입 성공");
                res.send(result)  }
        })

    }

}


import passport from 'passport';





export async function userLogin (req, res, next) {
    console.log("userLogin 실행");
    
    passport.authenticate('local', (err,user,info) => {

        console.log(user);
        if(err) throw err;

        if(!user) res.send("유저 없음")

        else{
            console.log("처리");
            console.log(req.loginid)
            //바디부분에 들어옴
            // body: { loginid: 'registerId7', passwd: 'registerPw' },


            // req.loginid(user, err => {
            //     if(err) throw err;
            //     res.send("성공 authenticate")
            //     console.log(req.user);
            // }
            //)
        }

    })(req, res, next)



    // const loginid =  req.body.loginid 

    
    // const sql = "select * from Member where loginid = ?"
    
    //  db.query(sql, [loginid], (err, result) =>{

    //     if(err) { console.log( err )}

    //     else { 
    //         console.log("로그인 성공");
    //         res.send(result)  }
    // })

}



export async function findUser (loginid) {
    console.log("findUser 호출");
    console.log(loginid);
    const sql = "select * from Member where loginid = ?"
    
    //아래처럼 쓰면 안됀다..
    //   db.query(sql, [loginid],  (err, result) => {

    //     if(err) { console.log( err )}

    //     else { 
    //         console.log("아이디 확인 완료");
    //         //배열 값으로 들어옴
            
    //         console.log(result[0].name);
    //         return result[0]
    //          }
    // })

    return new Promise( (resolve, reject) => {

        console.log("아이디찾기 실행");
        db.query(sql, [loginid], function( err, result){
            if(err) {  
                reject( console.log(err) )  }
            
            else{ 
                console.log("아이디 찾았음");
                console.log(result);
              return resolve( result )}
        })

    } )


}






