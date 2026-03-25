import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Mpesapayment from './components/Mpesapayment';
import Test from './components/Test';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here  */}
      <Navbar/>
      <header className="App-header">
        
       <h1  >Welcome to CraveCart🍫🌯🍕</h1>
      </header>
        {/* nav links goes here  */}
        <nav>
          <Link to = "/signup" className='btn btn-info btn-sm m-1'  >Signup🔒 </Link>
          <Link to = "/signin" className='btn btn-danger btn-sm m-1'  >Signin🔓 </Link>
          <Link to = "/Addproducts" className='btn btn-info btn-sm m-1'>Addproducts 🍫🤩</Link>
          <Link to = "/" className='btn btn-danger btn-sm m-1'>Getproducts 😋🤤</Link>
          
        </nav>
        {/* routes goes here   */}
        <Routes>
      <Route  path = "/" element= {<Getproducts/>}/>
      <Route path = "/Signup" element = {<Signup/>}/>
      <Route path = "/Signin" element= {<Signin/>}/>
      <Route path = "/Addproducts" element= {<Addproduct/>}/>
      <Route path = "/makepayment" element= {<Mpesapayment/>}/>
      



        </Routes>
    </div>
    </BrowserRouter>
  














  );
}

export default App;
