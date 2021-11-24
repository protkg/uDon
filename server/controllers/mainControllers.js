import db from './../udonDb/udonDb.js'



export function getBoardList(req, res) {

    db.query("select m.nickname , d.* from Member m join Document d on m.id = d.writer", (err, result) => {
        
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
    
        const sql = 'select m.nickname , d.* from Member m join Document d on m.id = d.writer where m.id = ?'
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
        else { res.send(result)  }

    })
}



