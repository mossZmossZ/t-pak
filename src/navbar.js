import { Link } from "react-router-dom"
export default function Navbar(){
    return(
    <nav className ="nav">  
    <blank></blank> 
        <ul>
            <li>
                <Link to ="/" className="home">HOME</Link>
            </li>
            <li>
                <Link to ="/contactus" className="contactus">CONTACT US</Link>
            </li>
            <li>
                <Link to ="/login" className="login">LOGIN</Link>
            </li>
            <li>
                <Link to ="/signup" className="signup">SIGNUP</Link>
            </li>
            
        </ul>
    </nav>
    )
}