import Navbar from './components/navbar.js';
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom"
import Signup from './pages/Signup.jsx';
<<<<<<< Updated upstream
import Kmutnb from './pages/kmutnb_page';
=======
import Formcomponents from './pages/Formcomponents/Formcomponents.js';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
          <Route path='/kmutnb'element={<Kmutnb/>}/>
=======
          <Route path='/Form'element={<Formcomponents/>}/>
>>>>>>> Stashed changes
        </Routes>
      
      </div>
    </> 
  )
}

export default App;
