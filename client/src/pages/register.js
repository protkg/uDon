import { Table, Card, CardGroup } from 'react-bootstrap'

const Register = () => {





    return (
        <div >
                <h1>회원가입</h1>
                <CardGroup>

                <Card style = {{ width : '50%' }}  ><Table>
                    <thead></thead>
                    <tbody>
                        <tr> <td>아이디</td><td> <input type="text"/>  </td></tr>
                        <tr> <td>비번</td><td><input type="text"/></td></tr>
                        <tr> <td>닉네임</td><td><input type="text"/></td></tr>
                        <tr> <td>성별</td><td><input type ="radio"/> </td></tr>
                        <tr> <td>지역</td><td></td></tr>
                    </tbody>
                </Table></Card>
                <Card><input type = "button">가입</input></Card>
                </CardGroup>
        </div>
        
    )

}

export default Register
