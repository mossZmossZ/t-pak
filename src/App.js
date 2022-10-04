import './navbar.css';
import Navbar from './navbar.js';
import Contact_us from "./pages/Contact _us"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom"

function App() {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/contactus'element={<Contact_us/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup'element={<Signup/>}/>
        </Routes>
      
      </div>
    </> 
  )
}

export default App;
