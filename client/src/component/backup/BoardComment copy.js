import { Table, Card } from 'react-bootstrap'
import { useState, useEffect }  from 'react';

//test
import Testdata from '../testdata'

const BoardComment = (Testdata) => {


    const [ rowdata, setRowdata ] = useState(Testdata)
    const [ commentShowData, setCommentShowData ] = useState([])
    const [ commentInputData, setCommentInputData ] = useState({})
    
    const [ commentInput, setCommentInput ]  = useState({
        pid : null,
        doc_id : 3, 
        content : '', 
        writer : 5, 
        status : 1,
    })


    const onChange = (event) => {

        event.preventDefault();
        console.log(event.target.value);

        const keyName = event.target.getAttribute("name")
        const keyValue = event.target.value;
        
        const commentInputData = { ...commentInput}
        commentInputData[keyName] = keyValue;

        setCommentInputData(commentInputData)
        console.log(commentInputData)
        
    }

    
    const inputComment = () => {
        console.log('sdfsdf')
        
        //배열에 추가하려면 아래처럼 하면 안댐  
        //    setCommentShowData( ...commentShowData, commentInputData )
        setCommentShowData( commentShowData => [...commentShowData, commentInputData] )
        
        console.log(commentShowData);
    }
    

    // 댓글 부분

    const [replyflag, setReplyflag] = useState(false)

    const replyClick = () =>{
        setReplyflag(true)

    }




        return (
            <>
                <h3>댓글</h3>


                        {commentShowData.map( (ShowData) => {
                            return(
                                <>
                                        <div>{ShowData.writer}</div>
                                        <div>{ShowData.content}<br/>
                                        {/* <span onClick={replyClick}>답글</span> */}
                                        {(replyflag) == false ? (<span onClick={replyClick}>답글</span>) : ( <><input type = "text"/> <button >입력</button> </>)}
                                        
                                        </div>
                                        

                                </>
                                   )
                            }
                        )}

                
                    <input type = "text" name = "content" onChange={onChange} ></input> <button onClick = {inputComment} >입력</button>

            </>
        )


}
export default BoardComment