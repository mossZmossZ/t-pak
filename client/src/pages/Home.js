import kmutnb from "../pictures/kmutnb.jpg"
import './home.css'
import { Link, useLinkClickHandler } from "react-router-dom"  
export default function Home(){
    return (
         <div className="container">
            <h1>ซื้อขายสัญญาหอพัก หารูมเมท</h1>
            <botton className="btn-kmutnb">
                <ul>พระจอมเกล้าพระนครเหนือ</ul>
                <img src={kmutnb} className="kmutnb"></img> 
                <Link to ></Link>   
            </botton>
           
            <botton className="btn-kmitl">
                <ul>พระจอมเกล้าลาดกระบัง</ul>
                <img src={kmutnb} className="kmuitl"></img>    
            </botton>
           
            <botton className="btn-kmutt">
                <ul>พระจอมเกล้าธนบุรี</ul>
                <img src={kmutnb} className="kmutt"></img>    
            </botton>
            
         </div>
    )
    
}
