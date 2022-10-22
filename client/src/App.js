import "./App.css";
import Navbar from './components/navbar.js';
import Contact from "./pages/Contact"
import Home from './pages/Home';
import {Route, Switch} from "react-router-dom"
import Signup from './pages/Signup.js';
import KmutnbLocation from './pages/Kmutnb/kmutnb_location';
import Kmutnbroomate from './pages/Kmutnb/kmutnb_roomate.js';
import KmitlLocation from './pages/Kmitl/kmitl_location.js';
import KmitlRoomate from './pages/Kmitl/kmitl_location.js';
import KmuttLocation from './pages/Kmutt/kmutt_location.js';
import KmuttRoomate from './pages/Kmutt/kmutt_roomate.js';
import tuLocation from './pages/TU/tu_location.js';
import tuRoomate from './pages/TU/tu_roomate.js';
import Formcomponents from './pages/Formcomponents/Formcomponents.js';
import Formshow from './pages/Formcomponents/Formshow.js';
import SingleComponent from "./pages/Formcomponents/SingleComponents";
import Formshowadmin from "./pages/Formcomponents/Formshowadmin";
import EditComponent from "./pages/Formcomponents/EditComponent";
import LoginComponent from "./pages/Formcomponents/LoginComponent";
import UserRoute from "./UserRoute";
import Userprofile from "./pages/Formcomponents/Userprofile";
import Editlocation from "./pages/Formcomponents/Editlocation";
import Singlekmutnblocation from "./pages/Formcomponents/Singlekmutnblocation";
import KmutnbRoomatecreate from "./pages/Kmutnb/kmutnb_roomate_create";
import LocationCreate from "./pages/Formcomponents/LocationCreate";
function App() {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/contact'exact component={Contact}/>
          <Route path='/login'exact component={LoginComponent}/>
          <Route path='/signup'exact component={Signup}/>
          <Route path='/kmutnblocation'exact component={KmutnbLocation}/>
          <Route path='/kmutnbroomate'exact component={Kmutnbroomate}/>
          <UserRoute path='/kmutnbroomate/create'exact component={KmutnbRoomatecreate}/>
          <UserRoute path='/location/create'exact component={LocationCreate}/>
          <Route path='/kmitllocation'exact component={KmitlLocation}/>
          <Route path='/kmitlRoomate'exact component={KmitlRoomate}/>
          <Route path='/kmuttlocation'exact component={KmuttLocation}/>
          <Route path='/kmuttRoomate'exact component={KmuttRoomate}/>
          <Route path='/tuLocation'exact component={tuLocation}/>
          <Route path='/tuRoomate'exact component={tuRoomate}/>
          <UserRoute path='/Formcreate'exact component={Formcomponents}/>
          <Route path='/Formshow'exact component={Formshow}/>
          <Route path='/blog/:slug'exact component={SingleComponent}/>
          <UserRoute path='/Formshowadmin'exact component={Formshowadmin}/>
          <UserRoute path='/blog/edit/:slug'exact component={EditComponent}/>
          <UserRoute path='/Userprofile'exact component={Userprofile}/>
          <UserRoute path='/location/update/:slug'exact component={Editlocation}/>
          <Route path='/kmutnblocation/:slug'exact component={Singlekmutnblocation}/>
        </Switch>
      </div>
    </> 
  )
}

export default App;
