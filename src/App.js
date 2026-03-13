import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
function App() {
  return (
    <BrowserRouter>   
        <div className="App">
      <header className="App-header">
       <h1 className='text-dark'>Welcome to soko garden</h1>       
      </header>
      <nav>
        <Link to="/" className='btn btn-success text-dark m-1' >Get products</Link>
        <Link to="/signup" className='btn btn-success text-dark m-1'>Signup</Link>
        <Link to="/signin" className='btn btn-success text-dark m-1'>Signin</Link>
        <Link to="/addproduct" className='btn btn-success text-dark m-1'>Addproduct</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Getproduct />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/makepayment' element={<Mpesapayment />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
