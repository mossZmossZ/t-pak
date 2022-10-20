import "./navbar.css"
import { Link, useLinkClickHandler ,withRouter} from "react-router-dom"  
import { HiX } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import React,{useState} from 'react';
import logo from "../pictures/logo.png"
import { getUser,logout } from "../services/authorize";
import { FaUserAlt} from "react-icons/fa";
import {IoLogOut} from "react-icons/io5";





const Navbar=({history})=>{
    const handleClick = () => setClick(!click);
    const [click, setClick] = useState(false);
    const closeMobileMenu =() => setClick(false);

    function logoutbutton(){
        logout(()=>history.push('/'));
        //closeMobileMenu();
    }
    const userid = String(getUser()).toUpperCase()

    return(
        <div className = 'navcontainer'>
            <div>
                <img src={logo}></img>
                <div className='nav-toggle'onClick={handleClick}>
                    {click ? (<HiX/>):(<HiMenu/>)}
                </div> 
            </div>
            <nav >  
                <ul className={click ? "nav":"close"}>
                    <li>
                        <Link to ="/" className="home"  onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li>
                         <Link to ="/contact" className="contact" onClick={closeMobileMenu}>CONTACT</Link>
                    </li>   
                    {!getUser() &&(
                        <div className="login-tab1">
                            <li>
                                <FaUserAlt id="user-icon"/>
                                <Link to ="/login" className="login" onClick={closeMobileMenu}>LOGIN</Link>
                            </li>
                            <p>|</p>
                            <li>
                                <Link to ="/signup" id="signup" onClick={closeMobileMenu}>SIGNUP</Link>
                            </li>
                        </div>
                    )}
                    {getUser() &&(
                        <div className="login-tab">
                            <div className="userprofile">
                                <FaUserAlt id="user-icon"/>
                                <Link to ="/Userprofile" className="User" onClick={closeMobileMenu}> : {userid}</Link>
                            </div>
                            <div className="userprofile">
                                <IoLogOut />
                                <button className="logout" onClick={()=>{logoutbutton();}}> LOGOUT</button>
                            </div>
                        </div>
                    )}
                            
                </ul>
            </nav>
         </div>
   )
}
export default withRouter(Navbar)
/*<li>
    <Link to ="/login" className="login" onClick={closeMobileMenu}>LOGIN</Link>
</li>
<li>
    <Link to ="/signup" className="signup" onClick={closeMobileMenu}>SIGNUP</Link>
</li>

 {getUser() &&(
                            <li>
                                <Link to ="/" className="logout" onClick={logout()}>logout</Link>
                            </li>
                    )}
                    <button onClick={()=>logout(()=>history.push("/"))}>ออกจากระบบ</button>
                    <button onClick={()=>{logoutbutton();}}></button>
                    */

