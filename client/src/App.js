import "./App.css";
import Navbar from './components/navbar.js';
import Contact from "./pages/Contact"
import Home from './pages/Home';
import {Route, Switch} from "react-router-dom"
import Signup from './pages/Signup.js';
import Formcomponents from './pages/Formcomponents/Formcomponents.js';
import Formshow from './pages/Formcomponents/Formshow.js';
import SingleComponent from "./pages/Formcomponents/SingleComponents";
import Formshowadmin from "./pages/Formcomponents/Formshowadmin";
import EditComponent from "./pages/Formcomponents/EditComponent";
import LoginComponent from "./pages/Formcomponents/LoginComponent";
import UserRoute from "./UserRoute";
import Userprofile from "./pages/Formcomponents/Userprofile";
import Editlocation from "./pages/Formcomponents/Editlocation";
import SingleLocation from "./pages/Formcomponents/SingleLocation";
import LocationCreate from "./pages/Formcomponents/LocationCreate";
import Notfoundpage from "./pages/notfoundpage";
import RoomateCreate from "./pages/Formcomponents/RoomateCreate"
import Home2 from './pages/home2';
import location from './pages/Location';
import Roomate from './pages/Roomate';
import SingleRoomate from "./pages/Formcomponents/SingleRoomate";
import EditRoomate from "./pages/Formcomponents/EditRoomate";
import Home3 from './pages/home3';
import Location2 from './pages/location2';
function App() {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/home2'exact component={Home2}/>
          <Route path='/home3'exact component={Home3}/>
          <Route path='/Location'exact component={location}/>
          <Route path='/Roomate'exact component={Roomate}/>
          <Route path='/contact'exact component={Contact}/>
          <Route path='/login'exact component={LoginComponent}/>
          <Route path='/signup'exact component={Signup}/>
          <UserRoute path='/location/create'exact component={LocationCreate}/>
          <UserRoute path='/roomate/create'exact component={RoomateCreate}/>
          <UserRoute path='/Formcreate'exact component={Formcomponents}/>
          <Route path='/Formshow'exact component={Formshow}/>
          <Route path='/blog/:slug'exact component={SingleComponent}/>
          <UserRoute path='/Formshowadmin'exact component={Formshowadmin}/>
          <UserRoute path='/blog/edit/:slug'exact component={EditComponent}/>
          <UserRoute path='/Userprofile'exact component={Userprofile}/>
          <UserRoute path='/location/update/:slug'exact component={Editlocation}/>
          <Route path='/location/:slug'exact component={SingleLocation}/>
          <Route path='/roomate/:slug' exact component={SingleRoomate}/>
          <Route path='/roomate/update/:slug' exact component={EditRoomate}/>
          <Route path="/" component={Notfoundpage}/>
          <Route path="/location2" component={Location2}/>
          
        </Switch>
      </div>
    </> 
  )
}

export default App;
