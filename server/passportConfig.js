import bcrypto from 'bcryptjs'
//import LocalStrategy from 'passport-local'

import { Strategy as LocalStrategy } from 'passport-local'

import { findUser } from './controllers/mainControllers.js'


export default function passportInput(passport){

    passport.use( new LocalStrategy(

        {usernameField: 'loginid',
            passwordField: 'passwd'
    },
      async (loginid, passwd, done) => {

            console.log("strategy 호출");
            

             const user = await findUser(loginid)
             
             console.log(  user );
             console.log(  user[0] );
             console.log("되나");
             console.log( Boolean( user) );
             console.log(  user );
             console.log(  user[0].passwd );
             
                 if(!user) return done(null, false)

                 if(user){
                    bcrypto.compare(passwd, user[0].passwd,  (err, result) => {
                        if(err) {console.log(err)
                            console.log("비밀번호 에러");
                            return  done(null, false)
                        }

                               if(result ) {
                                   
                                   return done(null, user[0])                                }

                               else{ return  done(null, false) }
                    })
                }

            } 
            
        )
    )


    
     passport.serializeUser( (user, done) => {
        console.log('serializeUser', user);
        done(null, user.loginid)
    })
    
    // passport.deserializeUser( (loginid, done) => {
    //     console.log('deserializeUser', loginid);
    //          done(null, loginid)

    //     // findUser(loginid, (err, user) => {
    //     //     done(err, user)
    //     // })
    // } )

    
    passport.deserializeUser(  async (user, done) => {
    
        console.log('deserializeUser >>>>',user );

        // findUser(user, (err, user) => {
        //     console.log("찾기후", user);

        //     const userInformation = {
        //         loginid: user.loginid,
        //         nickname: user.nickname,
        //         location: user.location
        //     }

        //     done(err, userInformation)
        // })

        const userData =  await findUser(user)
           
        console.log("들어옴??", userData);

           if(userData) { 
           
            console.log("찾기후", userData);

              const userInformation = {
               loginid : userData[0].loginid,
               nickname : userData[0].nickname,
               location : userData[0].location
              }

             done(null, userInformation)
           }

    } )

    console.log("passport 실행");
}


