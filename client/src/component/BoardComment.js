import { Table, Card } from 'react-bootstrap'
import { useState, useEffect, useMemo }  from 'react';
import axios from 'axios';

import Testdata from './testdata'


//현재 댓글 추가를 하고 대댓글 입력하면, 동시에 2개됨 >> 이유는 기본 commentInput 값의 id가 동일해서 그런거임 >> sql연결 하면 해결
//

const BoardComment = () => {

    //데이터 셋팅
    useEffect( ()=> {
        setCommentShowData(Testdata())
    },[] )

    

    const [ commentShowData, setCommentShowData ] = useState([])

    //아래는 입력값 기본 셋팅
    const [ commentInputData, setCommentInputData ] = useState({})
    
    const [ commentInput, setCommentInput ]  = useState({
        id : null,
        pid : null,
        doc_id : 3, 
        content : '', 
        writer : 5, 
        status : 1,
    })



    //아래부분은 대댓글이 없는부분만 빼냄

    const commentoriginal = commentShowData.filter(
        (showdata) => showdata.pid === null
    )

    console.log('aaaaa')    
    console.log(commentoriginal)    


    //아래부분은 대댓글만

    const getReplies  = (id) => {
        console.log(id)
        
        return commentShowData.filter( (replyData) =>  replyData.pid == id  )
        // return commentShowData.filter( (replyData) =>  {replyData.id = id } )
        
        // 위에 2개 차이

    }

    //일반 댓글용
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


    
    const inputComment =  () => {

        //배열에 추가하려면 아래처럼 하면 안댐  
        //    setCommentShowData( ...commentShowData, commentInputData )
        setCommentShowData( commentShowData => [...commentShowData, commentInputData] )
        
        console.log(commentShowData);
    }
    


    const [ commentInputDataRe, setCommentInputDataRE ] = useState({})

    const onChangeRe = (event) => {

        event.preventDefault();
        console.log(event.target.value);

        const keyName = event.target.getAttribute("name")
        const keyValue = event.target.value;
        
        const commentInputData = { ...commentInput}
        commentInputData[keyName] = keyValue;

        setCommentInputDataRE(commentInputData)
        console.log(commentInputData)
        
    }


    //대댓글 추가
    const inputReply =  (inputPid)  =>{

        
        const addPid = {...commentInputDataRe}
        addPid['pid'] = inputPid;
        setCommentInputDataRE(addPid)
        console.log('aaaaaaaaaaaaaaaaaaa');
        console.log(commentInputDataRe);

         setCommentShowData( setCommentShowData =>[...setCommentShowData, addPid] )


    }


    // 댓글 부분

    const [replyflag, setReplyflag] = useState(null)


    const handleReply =  (event, data) => {
        event.preventDefault();
        setReplyflag(data);
    }




        return (
            <>
                <br/>
                <br/>
                <Card  style = {{ width : '50%' }}>
                <h3>댓글 쓰기</h3>
                    <label>
                <input type = "text" name = "content" onChange={onChange} ></input> 
                    <button onClick = {inputComment} >입력</button></label>
                    </Card>   
                        {commentoriginal.map( (data) => {
                            return(
                                <>
                                
                                        <Card  style = {{ width : '50%' }}>
                                        <div key = {data.id} align = "left">아이디 : {data.writer}</div>
                                        
                                        <span> 내용 :  {data.content}</span>
                                        </Card>         
                                        <br/>
                                        <Card  style = {{ width : '40%' }}>
                                        <div>{ ( getReplies(data.id) ).map ( (replydata) => {
                                                   
                                                return( <><h6> 댓글 내용 : {replydata.content} </h6></>)
                                            }
                                            
                                        )}
                                        </div>   
                                         {/* <span onClick={(event) => handleReply(event, data.id)  }>답글</span>  */}
                                        <br/>
                                    {/* {(replyflag) == false ? (<span onClick={replyClick}>   // 답글</span>) : ( <><input type = "text"/> <button >입력</button> </>)} */}
                                        <div align = "right">
                                        { replyflag === data.id ? 
                                        (<><input type = "text" name = "content" onChange={onChangeRe}/>
                                             <button onClick = { ()=> inputReply(data.id)}>입력</button> </>) 

                                         : <button onClick={ (event) => handleReply(event, data.id)  }> 댓글달기</button> }
                                         </div>
                                         </Card>
                                </>
                                
                                   )
                            }
                        )}
                        
                    <br/>
                        
                    

            </>
        )


}
export default BoardComment