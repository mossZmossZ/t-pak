import kmutnb from "../pictures/LOGO-KMUTNB.png"
import './home.css'
import {Link} from "react-router-dom"  
export default function Home(){
    return (
         <div className="Home_container">
            <p>T-pakเป็นได้มากกว่าที่พัก ในเว็ปนี้ .</p>
            <p>หา หอพัก , คอนโด, และ รูมเมท !</p>
            <div className="main">
                <div className="btn-container1">
                
                    <div className="btn-kmutnb">
                        <Link to ="/kmutnb">
                            <img src={kmutnb} className="kmutnb"></img>
                            <p>KMUTNB</p>
                            <p>พระจอมเกล้าพระนครเหนือ</p>
                        </Link>
                    </div>
                    <div className="btn-kmutnb">
                        <Link to ="/kmutnb">
                            <img src={kmutnb} className="kmutnb"></img>
                            <ul>KMUTNB</ul>
                            <p>พระจอมเกล้าพระนครเหนือ</p>
                        </Link>
                    </div>
                </div>
            
                <div className="btn-container2">
                    <div className="btn-kmutnb">
                        <Link to ="/kmutnb">
                            <img src={kmutnb} className="kmutnb"></img>
                            <p>KMUTNB</p>
                            <p>พระจอมเกล้าพระนครเหนือ</p>
                        </Link>
                    </div>
                    <div className="btn-kmutnb">
                        <Link to ="/kmutnb">
                            <img src={kmutnb} className="kmutnb"></img>
                            <p>KMUTNB</p>
                            <p>พระจอมเกล้าพระนครเหนือ</p>
                        </Link>
                    </div>

                </div>
            </div>
            
            
           
            
         </div>
    )
    
}
