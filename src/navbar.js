import { Link, useLinkClickHandler } from "react-router-dom"  
export default function Navbar(){
    return(
        <div class = 'navcontainer'>
            <div>
                <h2>logo</h2>
                <div className="nav-toggle" id="navToggle">
              
                    <img className="navIcon" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger menu" />
                    
                </div>
            </div>
            <nav >  
                <ul>
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
