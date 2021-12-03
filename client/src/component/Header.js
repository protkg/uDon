import Axios from 'axios'
import {  useState , useEffect, useCallback} from 'react'
import LocalList from './LocalList'
import { Link } from 'react-router-dom'


const Header = ({ LocationId }) => {

    const [localData, setLocalData] = useState([])
    const [userSi, setUserSi] = useState()


    const axiosConnect =  () => {

            Axios.get(`http://localhost:3001/localNum/${LocationId}`).then(
                (response) => { setLocalData(response.data) 
                                setUserSi(response.data[0].siName) 
            }
            )
     }
        
        useEffect(() => {
            axiosConnect()
        }, [setLocalData])
        
        console.log(userSi);


    return (
        <>
        <LocalList localData ={localData} userSi ={userSi}/>

        {LocationId && (  <Link to ="/Register"> <h1>회원가입</h1> </Link>)}
        {LocationId && (<h1>로그인</h1>)}
        </>
    )


}


export default Header

