import './App.css';
import Header from './component/Header';
import BoardList from './component/BoardList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contents from './pages/Contents'
import BoardDetail from './component/BoardDetail';
import BoardUpdate from './component/BoardUpdate';
import BoardDelete from './component/BoardDelete';



function App() {




  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>
          <Route path ="/" exact={true} element ={<Contents />}/>
        </Routes>
        
        <Routes>
          <Route path ="/BoardDetail/:id"  element ={<BoardDetail />}/>
        </Routes>
        
        <Routes>
          <Route path ="/BoardUpdate/:id"  element ={<BoardUpdate />}/>
        </Routes>
        
        <Routes>
          <Route path ="/BoardDelete/:id"  element ={<BoardDelete />}/>
        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
