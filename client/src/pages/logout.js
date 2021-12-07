import { useState, useEffect } from "react"
import axios from "axios"


const Logout = () => {

      useEffect( () =>{

        axios.get( 'http://localhost:3001/Logout' ).then((response) => {
            console.log(response)
        })

      } ,[])  


    return (
        <div>

           <h1> 삭제 페이지입니다.</h1>

        </div>
    )
}





export default Logout


