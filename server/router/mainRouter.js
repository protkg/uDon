import express from 'express';
import { getBoardList , getBoardDetail, deleteBoardData ,updateBoardData, newBoardData, getLocalNum } from './../controllers/mainControllers.js'

//import를 쓰면 package.json에 module추가 해야함~!~!

const router = express.Router();

//body값을 위해, 아래 2개를 사용한다.put, post를 위해!
router.use(express.json())
router.use(express.urlencoded({extended:false}));

router.get('/:id', getBoardList)
router.get('/localNum/:localId', getLocalNum)
router.get('/BoardDetail/:id', getBoardDetail)
router.delete('/BoardDeleteData/:id', deleteBoardData)
router.put('/updateBoardData/:id', updateBoardData)
router.post('/newBoardData', newBoardData)

export default router;

