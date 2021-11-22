import React, {useState , useEffect} from "react";
import Axios from 'axios';
import { useParams, useLocation } from "react-router"

const BoardDetail = () => {


    // console.log(data);

     const params = useParams().id;
    // const dataa = useLocation();

    // console.log(dataa);


    const [dataDetail, setDataDetail] = useState([]);
  
    useEffect( () => {
        console.log('ggg');

        Axios.get(`http://localhost:3001/BoardDetail/${params}`).then( (response) => {
        console.log('실행 됌?');
        console.log(response.data);
        setDataDetail(response.data[0])
        } )
        
        console.log(dataDetail);
    },[setDataDetail])
    //위에 [] 이부분의 대한 해석 필요할듯..
  

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
                </table>
                
        </div>
      )

 }
export default BoardDetail
