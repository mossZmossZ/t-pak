import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div class = 'navcontainer'>
            <div>
                <h2>logo</h2>
            </div>
            <nav className ="nav">  
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
