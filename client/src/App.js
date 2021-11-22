import './App.css';
import Header from './component/Header';
import BoardList from './component/BoardList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contents from './pages/Contents'
import BoardDetail from './component/BoardDetail';



function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>
          <Route path ="/" exact={true} element ={<Contents />}/>
        </Routes>
        
        <Routes>
          <Route path ="/a" element ={<BoardList />}/>
        </Routes>

        <Routes>
          <Route path ="/BoardDetail/:id"  element ={<BoardDetail />}/>
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
