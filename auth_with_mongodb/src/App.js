import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Component/Signin';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SIgnup } from './Component/SIgnup';
import Home from './Component/Home';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route  path='/' element = {<Home/>}/>
    <Route path='signin' element = {<Signin/>}/>
    <Route  path='signup' element = {<SIgnup/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
