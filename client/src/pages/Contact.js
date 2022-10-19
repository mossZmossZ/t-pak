import"./contact.css"
import {Link} from "react-router-dom" 
import Line from "../pictures/LINE_icon.png"
import facebook from"../pictures/facebook.png"
import { HiPhone } from "react-icons/hi";
export default function Contact(){
    return (
    <div>
        <div className="header" >
                CONTACT US    
        </div>
        <div className="background">
            
            <div className="facebook">
                <img src={facebook}/>Facebook : T-pak
                  
                  
            </div>
            <div className="line">
                
                 <img src={Line}></img>Line : T-pak
            </div>
            <div className="call">
               <HiPhone className="phone" />Call : 088-753-0291
            </div>
            
        </div>
    </div>
    )
    
}