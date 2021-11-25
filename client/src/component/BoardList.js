import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const BoardList = () => {

    const [dataList, setDataList] = useState([]);
  

    useEffect(() => {
        Axios.get('http://localhost:3001/').then((response) => {
            console.log(response.data);
            setDataList(response.data)
        })
    },[setDataList])


    
    return (
        <div>

            <div align="center">

                <table border="1px" >
                    <th>작성자</th>
                    <th>제목</th>
                    <th>날짜</th>

                    {dataList.map((data) => {

                        return (

                            <tr key = {data.id}>
                                <td>{data.nickname}</td>
                                <td> <Link to ={`/BoardDetail/${data.id}`}>{data.title}</Link></td>
                                
                                
                                 {/* <td> <Link to = { { pathname : `/BoardDetail/${data.id}`,
                                            state : {check : "ss"} }   }>{data.title}</Link></td> */}

                                {/* <td>  <Link to ={gogo}>{data.title}</Link> </td>  */}

                                {/* <Navigate to = {`/BoardDetail/${data.id}`}>
                                <td> {data.title}</td> </Navigate>                   */}
                                
                                <td>{data.regdate}</td>
                            </tr>)
                    })}
                </table>
            </div>
        </div>
    )
}

export default BoardList
