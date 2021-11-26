import { useState } from "react";

const BoardTableRowsEdit = ({editDataForm, updateBoardDataSet,insertUpdateData}) => {

    // const [upDateTitle, setUpDateTitle] = useState(dataDetail.title);
    // const [upDateContent, setUpDateContent] = useState(dataDetail.content);
    
    
    // const onChange =  (event) => {
    //     setUpDateTitle(event.target.value)
    // }


    return (
        <>
                     <tr>
                        <td>{editDataForm.nickname}</td>
                    </tr>
                    <tr>
                        <td><input type ="text" value={editDataForm.title} name = "title" required onChange = {updateBoardDataSet}/> </td>
                    </tr>
                    <tr>
                        <td><input type ="text" required value = {editDataForm.content} name = "content"  required onChange = {updateBoardDataSet} /></td>
                    </tr>
                    <tr>
                        <td>{editDataForm.regdate}</td>
                    </tr>
                    <td><button onClick = {insertUpdateData}>저장</button></td>

        </>
    )
}

export default BoardTableRowsEdit
