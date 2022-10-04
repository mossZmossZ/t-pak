import './navbar.css';
import Navbar from './navbar.js';
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom"
import Signupmoss from './pages/Signupmoss';

function App() {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup'element={<Signupmoss/>}/>
        </Routes>
      
      </div>
    </> 
  )
}

export default App;
