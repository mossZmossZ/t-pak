import "./App.css";
import Navbar from './components/navbar.js';
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom"
import Signup from './pages/Signup.jsx';
import Kmutnb from './pages/kmutnb_page';
import Formcomponents from './pages/Formcomponents/Formcomponents.js';
import Formshow from './pages/Formcomponents/Formshow';
import SingleComponent from "./pages/Formcomponents/SingleComponents";

function App() {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup'element={<Signup/>}/>
          <Route path='/kmutnb'element={<Kmutnb/>}/>
          <Route path='/Formcreate'element={<Formcomponents/>}/>
          <Route path='/Formshow'element={<Formshow/>}/>
          <Route path='/blog/:slug'element={<SingleComponent/>}/>
        </Routes>
      
      </div>
    </> 
  )
}

export default App;
