import { Table, Card } from 'react-bootstrap'
import { createContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router";

const userContext = createContext({})

const Login = () => {

    const [loginId, setLoginId] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const [location, setLocation] = useState("");

    

    console.log(loginId)
    console.log(loginPw)
    
    
    const navigate = useNavigate();
    const login = async () => {    
        
        axios.defaults.withCredentials = true;

        await axios({
            method : "post",

            data : {
                loginid : loginId, 
                passwd : loginPw, 
            },

            url : 'http://localhost:3001/Login',
            withCredentials : true,

        }).then(  
            //(res) => console.log(res)
            (res) => {
                
                 if(res.status == 200) {
                     console.log(res)
                     
                     console.log("확인!!")
                     
                       //const a = res.data.location  
                    //   console.log(a);
                    //   setLocation(a)
                    //  console.log(a.location)

                    //    navigate(`/`, {
                    //       state : res.data
                    //      })
                     }
                }
            )
            
        
            
    };

    
    return (
        <div align = "center">
        <h1>로그인</h1>

        <Card style = {{ width : '25%' }}  ><Table>
            <thead></thead>
            <tbody>
                <tr> <td>아이디</td><td> <input type="text" placeholder='아이디' onChange={ e => setLoginId (e.target.value)}/>  </td></tr>
                <tr> <td>비번</td><td><input type="text" placeholder='비번'  onChange={ e => setLoginPw (e.target.value)}/></td></tr>
                <tr> <td colspan = "2"><input type = "button" value = "로그인"  onClick = {login} /></td></tr>
            </tbody>
            
        </Table></Card>
        
        
</div>
 
    )


}

export default Login
//export const locationNum = back;
