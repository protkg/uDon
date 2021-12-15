import Axios from 'axios'
import {  useState , useEffect, useCallback, useMemo, useContext} from 'react'
import LocalList from './LocalList'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { Table, Card } from 'react-bootstrap'
import { Container, Nav, Navbar } from "react-bootstrap";
import { UserContext } from '../UserContext/UserContext'




const Header =  ({ LocationId }) => {




    const { user } = useContext(UserContext)



    let userData = useLocation().state

    const [localData, setLocalData] = useState([])
    const [userSi, setUserSi] = useState()
    const [userExistNickname, setUserExistNickname] = useState()
    
    
    let flag = null;

    if(userData){
        
        console.log("되라....");
        console.log(userData.location)
        LocationId = userData.location
        flag = true
        
    }else{
        console.log("오나????")
        userData = false
        flag = false
    }



    const axiosConnect =  () => {
        
       
            Axios.get(`http://localhost:3001/localNum/${LocationId}`).then(
                (response) => { 
                                    console.log("<>>>>>>>>>>>>>>>>",response.data)
                                setLocalData(response.data)
                                setUserSi(response.data[0].siName)

                                if(response.data[0].nickName == null) {
                                
                                    flag = false
                                    setUserExistNickname(false)

                                }else{

                                    flag = true
                                    setUserExistNickname(response.data[0].nickName)
                                }

            }    
            )

     }



        
        useEffect(() => {

            
            axiosConnect()

        }, [LocationId])
        
        console.log(userSi);


    return (

        <>

        <LocalList localData ={localData} userSi ={userSi} />

        

        <div align = "right" className = "register">
        { <Link style={{ textDecoration: 'none', color: 'black' }} to ="/" >홈</Link>}

        { <Link style={{ textDecoration: 'none', color: 'black' }} to ="/" > </Link>}

        { (!userExistNickname || !userData) && (  <Link style={{ textDecoration: 'none', color: 'black' }} to ="/Register" >회원가입 </Link>)}
        { (!userExistNickname || !userData)  && (  <Link style={{ textDecoration: 'none', color: 'black' }}  to ="/Login"> 로그인 </Link>)}

        { flag ? ( <Link  style={{ textDecoration: 'none', color: 'black' }} to ="/Logout"> 로그아웃 </Link> ) : (<></>)}
        { flag ? ( <h4>안녕하세요 {userExistNickname}님 </h4>) : (<></>)}
        {user ? (<h4> {  user.id}</h4>) : (<></>) }
        </div>
        </>
    )


}


export default Header

