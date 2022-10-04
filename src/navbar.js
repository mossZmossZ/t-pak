import { Link, useLinkClickHandler } from "react-router-dom"  
import { HiX } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import React,{useState} from 'react';

export default function Navbar(){
    const handleClick = () => setClick(!click);
    const [click, setClick] = useState(false);
  
    return(
        <div class = 'navcontainer'>
            <div>
                <h2>logo</h2>
                
                <div className='nav-toggle'onClick={handleClick}>
                    {click ? (<HiX/>):(<HiMenu/>)}
                </div> 
              
                
            </div>
            <nav >  
                <ul className={click ? "nav":"close"}>
                    <li>
                        <Link to ="/" className="home">HOME</Link>
                    </li>
                    <li>
                         <Link to ="/contact" className="contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link to ="/login" className="login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to ="/signup" className="signup">SIGNUP</Link>
                    </li>
            
                </ul>
            </nav>
         </div>
   
   
   )
}

