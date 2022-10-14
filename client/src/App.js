import "./App.css";
import Navbar from './components/navbar.js';
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Home from './pages/Home';
import {Route, Switch} from "react-router-dom"
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
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/contact'exact componentt={Contact}/>
          <Route path='/login'exact component={Login}/>
          <Route path='/signup'exact component={Signup}/>
          <Route path='/kmutnb'exact component={Kmutnb}/>
          <Route path='/Formcreate'exact component={Formcomponents}/>
          <Route path='/Formshow'exact component={Formshow}/>
          <Route path='/blog/:slug'exact component={SingleComponent}/>
        </Switch>
      
      </div>
    </> 
  )
}

export default App;
