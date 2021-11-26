import { useState } from "react";


const LocalList = ({localData, userSi}) => {


    return (
        <>
        <div>
         
        <h4>test님의 지역은 {userSi}</h4>
    

        <h7>소속 게시판</h7>
         {localData.map((ldata) => {

             return (
                 <>
                     <h6>{ldata.name}</h6>
                 </>
             )

         } )}   
 
    </div>
    </>
    )
}

export default LocalList
