import { Table, Card } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {


    const [registerId, setRegisterId] = useState("");
    const [registerPw, setregisterPw] = useState("");
    const [registerNickname, setregisterNickname] = useState("");
    const [registerName, setregisterName] = useState("");
    const [registerGender, setregisterGender] = useState(1);
    const [registerLocation, setregisterLocation] = useState(7);


    const Navigate  = useNavigate();

    const register = () => {
        axios({
            method : "post",
            data : {
                loginid : registerId, 
                passwd : registerPw, 
                nickname : registerNickname, 
                name : registerName, 
                gender : registerGender, 
                location : registerLocation, 
                status : 1, 
                superuser : 0,
            },

            // //withCredentials : true,
            url : 'http://localhost:3001/Register'
        })
        .then(() => {


            alert('가입성공')
            Navigate('/Login')

        }

            )
    }


    return (
        <div align = "center">
                <h1>회원가입</h1>

                <Card style = {{ width : '30%' }}  ><Table>
                    <thead></thead>
                    <tbody>
                        <tr> <td>아이디</td><td> <input type="text" onChange = { e => setRegisterId(e.target.value) }/>  </td></tr>
                        <tr> <td>비번</td><td><input type="text" onChange = {e => setregisterPw(e.target.value)} /></td></tr>
                        <tr> <td>닉네임</td><td><input type="text"  onChange = {e => setregisterNickname(e.target.value)} /></td></tr>
                        <tr> <td>이름</td><td><input type="text"  onChange = {e => setregisterName(e.target.value)} /></td></tr>

                        {/* <tr> <td>성별</td><td><input type ="radio"/> </td></tr>
                        <tr> <td>지역</td><td></td></tr> */}
                        <tr> <td colspan = "2"><input type = "button" value = "가입" onClick ={register}/></td></tr>
                    </tbody>
                    
                </Table></Card>
                
                
        </div>
        
    )

}

export default Register
