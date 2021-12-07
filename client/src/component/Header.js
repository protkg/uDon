import Axios from 'axios'
import {  useState , useEffect, useCallback} from 'react'
import LocalList from './LocalList'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { Table, Card } from 'react-bootstrap'
import { Container, Nav, Navbar } from "react-bootstrap";



const Header = ({ LocationId }) => {

    const userData = useLocation().state

    
    const [localData, setLocalData] = useState([])
    const [userSi, setUserSi] = useState()
    const [userName, setUserName] = useState("")

    

    let bb = "홍길동";

    if(userData){
        
        
        console.log("되라....");
        console.log(userData.location)
        LocationId = userData.location
        bb = userData.nickname
        console.log("bb>>>>>>>>>>>", bb);
    }




    const axiosConnect =  () => {
            
        
            
    //     if(userData){
    //         bb = userData.nickname
    //    }  

        
            Axios.get(`http://localhost:3001/localNum/${LocationId}`).then(
                (response) => { setLocalData(response.data)
                                setUserSi(response.data[0].siName)
                                   setUserName(bb)

            }    
            )

     }

     const nameRe = () => {
        if(userData){
            return userData.nickname
           console.log("안들어오나...");
           
       }  
     }

        
        useEffect(() => {

            
            axiosConnect()

        }, [LocationId])
        
        console.log(userSi);


    return (
        <>

        <LocalList localData ={localData} userSi ={userSi} userName ={userName}/>

        <div align = "right" className = "register">
        
        {!userData && (  <Link style={{ textDecoration: 'none', color: 'black' }} to ="/Register" >회원가입 </Link>)}
        {!userData  && (  <Link style={{ textDecoration: 'none', color: 'black' }}  to ="/Login"> 로그인 </Link>)}
        {userData && (  <Link  style={{ textDecoration: 'none', color: 'black' }} to ="/Logout"> 로그아웃 </Link>)}
        
        </div>
        </>
    )


}


export default Header

