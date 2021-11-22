import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'


const BoardList = () => {

    const [dataList, setDataList] = useState([]);
  
    const loadDataExample = () => {
    Axios.get('http://localhost:3001/').then( (response) => {
    console.log(response.data);
    setDataList(response.data)
    
    } )

  }

    return (
        <div>
            <button onClick={loadDataExample}>start</button>

            <div align="center">

                <h1>프로젝트 프론트 화면 test</h1>

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
                                            state : {
                                                nickname : data.nickname,
                                                id : data.id,
                                                location : data.location,
                                                title : data.title,
                                                content : data.content,
                                                writer : data.writer,
                                                status : data.status,
                                                regdate : data.regdate,
                                            }, }   }>{data.title}</Link></td> */}

                                <td>{data.regdate}</td>
                            </tr>)
                    })}
                </table>
            </div>
        </div>
    )
}

export default BoardList
