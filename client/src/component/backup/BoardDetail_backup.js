import React, {useState , useEffect} from "react";
import Axios from 'axios';
import { useParams, useLocation, useNavigate } from "react-router"
import { Link } from 'react-router-dom'

const BoardDetail = (  ) => {


    // const daaaa = props.location;
    // console.log("아래");
    // console.log(daaaa);

    const params = useParams().id;  
    const [dataDetail, setDataDetail] = useState([]);
  
    useEffect( () => {

        Axios.get(`http://localhost:3001/BoardDetail/${params}`).then( (response) => {

        console.log("이거는 useEffect");
        console.log(response.data);
        setDataDetail(response.data[0])

        } )
        
        console.log(dataDetail);
    },[setDataDetail])
    //위에 [] 이부분의 대한 해석 필요할듯..
    
    const navigate = useNavigate();
    const testt = () => {
        alert('good')
        navigate(`/BoardUpdate/${params}`, {
            state : dataDetail
        })
    }


    return (
        <div>

                <h2>BoardDetail</h2>
                <table border = "1" align = "center">
                    <tr>
                        <td>{dataDetail.nickname}</td>
                    </tr>
                    <tr>
                        <td>{dataDetail.title}</td>
                    </tr>
                    <tr>
                        <td>{dataDetail.content}</td>
                    </tr>
                    <tr>
                        <td>{dataDetail.regdate}</td>
                    </tr>
                </table>

                    <td> <Link to ={`/BoardUpdate/${dataDetail.id}`}><button>수정</button></Link></td>

                    {/* <button onClick = { () => { history.push({
                                pathname : `/BoardUpdate/${dataDetail.id}`,
                                props : dataDetail
                    })
                    } } >수정</button> */}
                    <td><button onClick = {testt}>테스트테스트테스트테스트</button></td>

                    <td> <Link to ={`/BoardDelete/${dataDetail.id}`}><button>삭제</button></Link></td>
        </div>
      )

 }
export default BoardDetail
