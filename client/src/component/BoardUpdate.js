import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useLocation } from "react-router"

const BoardUpdate = () => {

    // const params = useParams().id
        const upDateTarget = useLocation().state
        const [upDateData, setUpdateDate] = useState([])
        const [upDateTitle, setUpDateTitle] = useState(upDateTarget.title);
        
        useEffect ( () => {
            
            setUpdateDate(upDateTarget)
            console.log(upDateData);

        }, [upDateData])

        
        const onChange =  (event) => {
            setUpDateTitle(event.target.value)
            console.log(upDateTitle);
        }

        

    return (
        <div>
            <h2>BoardDetail</h2>    

            <table border = "1" align = "center">
                    <tr>
                        <td>{upDateData.nickname}</td>
                    </tr>
                    <tr>
                        <td><input type ="text" value={upDateTitle} requried autoFocus onChange = {onChange}/> </td>
                    </tr>
                    <tr>
                        <td><input type ="text" value = {upDateData.content}/></td>
                    </tr>
                    <tr>
                        <td>{upDateData.regdate}</td>
                    </tr>
                </table>

                    <td> <button>수정</button></td>

        </div>
    )
}


export default BoardUpdate
