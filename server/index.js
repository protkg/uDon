const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());



const db = mysql.createConnection({
    user : '',
    host : '',
    password: '',
    database: '',
})


app.get('/total', (req, res) => {

    db.query("select * from Document", (err, result) => {

        if(err){
            console.log(err);
        }else{
             res.send(result)
            console.log(result);

        }

    })

})




app.listen(3001, ()=> {
    console.log('server running port:3001');
})