import bcrypto from 'bcryptjs'
//import LocalStrategy from 'passport-local'

import { Strategy as LocalStrategy } from 'passport-local'

import { findUser } from './controllers/mainControllers.js'



export default  function passportInput(passport){

    passport.use( new LocalStrategy(

        {usernameField: 'loginid',
            passwordField: 'passwd'
    },
      async (loginid, passwd, done) => {

            console.log("strategy 호출");
            

             await findUser(loginid,  (err, user) => {

                console.log(user);

                if(err) {console.log(err)}
                if(!user) return done(null, false)

                    bcrypto.compare(passwd, user.passwd, (err, result) => {
                        if(err) {console.log(err)}
                               if(result === true) {return done(null, user)}
                               else{return done(null, false)}
                    })
            } 
            
            )
            
        })
    )


    passport.serializeUser( (user, done) => {
        done(null, user.loginid)
    })
    
    passport.deserializeUser( (loginid, done) => {
        findUser({loginid : loginid}, (err, user) => {
            done(err, user)
        })
    } )
    
    console.log("passport 실행");
}


