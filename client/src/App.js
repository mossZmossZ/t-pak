import "./App.css";
import Navbar from './components/navbar.js';
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Home from './pages/Home';
import {Route, Switch} from "react-router-dom"
import Signup from './pages/Signup.jsx';
import KmutnbLocation from './pages/kmutnb_location.js';
import KmutnbRoomate from './pages/kmutnb_roomate.js';
import KmitlLocation from './pages/kmitl_location.js';
import KmitlRoomate from './pages/kmitl_roomate.js';
import KmuttLocation from './pages/kmutt_location.js';
import KmuttRoomate from './pages/kmutt_roomate.js';
import tuLocation from './pages/tu_location.js';
import tuRoomate from './pages/tu_roomate.js';
import Formcomponents from './pages/Formcomponents/Formcomponents.js';
import Formshow from './pages/Formcomponents/Formshow.js';
import SingleComponent from "./pages/Formcomponents/SingleComponents";
import Formshowadmin from "./pages/Formcomponents/Formshowadmin";
import EditComponent from "./pages/Formcomponents/EditComponent";

function App() {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/contact'exact component={Contact}/>
          <Route path='/login'exact component={Login}/>
          <Route path='/signup'exact component={Signup}/>
          <Route path='/kmutnblocation'exact component={KmutnbLocation}/>
          <Route path='/kmutnbroomate'exact component={KmutnbRoomate}/>
          <Route path='/kmitllocation'exact component={KmitlLocation}/>
          <Route path='/kmitlRoomate'exact component={KmitlRoomate}/>
          <Route path='/kmuttlocation'exact component={KmuttLocation}/>
          <Route path='/kmuttRoomate'exact component={KmuttRoomate}/>
          <Route path='/tuLocation'exact component={tuLocation}/>
          <Route path='/tuRoomate'exact component={tuRoomate}/>
          <Route path='/Formcreate'exact component={Formcomponents}/>
          <Route path='/Formshow'exact component={Formshow}/>
          <Route path='/blog/:slug'exact component={SingleComponent}/>
          <Route path='/Formshowadmin'exact component={Formshowadmin}/>
          <Route path='/blog/edit/:slug'exact component={EditComponent}/>
        </Switch>
      
      </div>
    </> 
  )
}

export default App;
