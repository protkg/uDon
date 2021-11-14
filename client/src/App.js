import './App.css';
import Axios from 'axios';
import { useState } from 'react';



function App() {
  
  const [dataList, setDataList] = useState([]);
  
  const loadDataExample = () => {
  Axios.get('http://localhost:3001/total').then( (response) => {
    console.log(response.data);
    setDataList(response.data)
    
  } )
  }
  
  return (
    <div className="App">
      <button onClick={loadDataExample}>start</button>

            
              <div align = "center">

                <h1>프로젝트 프론트 화면 test</h1>

              <table border = "1px" >
                <th>제목</th>
                <th>내용</th>
                <th>날짜</th>

                {dataList.map( (data) => {
                  return(
                  <tr>
                    <td>{data.title}</td>
                    <td>{data.content}</td>
                    <td>{data.regdate}</td>
                  </tr>)
                  } )}
              </table>
              </div>
            
            


    </div>
  );
}

export default App;
