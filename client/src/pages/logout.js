import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Logout = () => {

    const navigate = useNavigate()

      useEffect( () =>{

        axios.get( 'http://localhost:3001/Logout' ).then(() => {

          alert('로그아웃 성공~!')
          navigate(`/`, {
            state : false
           })
          

        })

      } ,[])  


    return (
        <div>


        </div>
    )
}





export default Logout


