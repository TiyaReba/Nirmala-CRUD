import logo from './logo.svg';
import './App.css';
import ViewStudents from './components/ViewStudents';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudents from './components/AddStudents';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<ViewStudents/>} />
        <Route path='/add' element={<AddStudents data={{id:'',name:'',grade:''}} method="post"/>} />
      </Routes>
      
    </div>
  );
}

export default App;
