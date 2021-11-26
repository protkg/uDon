import { Link } from "react-router-dom"
import BoardList from "../component/BoardList"




const Contents = ({LocationId}) => {

    
    return (
        <div>
                <h1>이미지 영역</h1>       

                <Link to ="/TownBoard">게시판 더보기</Link>
                            
                <BoardList LocationId={LocationId}/>  
        </div>
    )
}

export default Contents
