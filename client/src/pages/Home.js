import kmutnb from "../pictures/LOGO-KMUTNB.png"
import kmitl from "../pictures/kmitl-logo.png"
import kmutt from "../pictures/Kmutt-logo.png"
import Tu from "../pictures/TU_logo.png"
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
                            <img src={kmutnb} className="kmutnb" alt=""></img>
                            <p>KMUTNB</p>
                            <p>พระจอมเกล้าพระนครเหนือ</p>
                        </Link>
                    </div>
                    <div className="btn-kmitl">
                        <Link to ="/kmitl">
                            <img src={kmitl} className="kmitl" alt=""></img>
                            <p>KMITL</p>
                            <p>พระจอมเกล้าลาดกระบัง</p>
                        </Link>
                    </div>
                </div>
            
                <div className="btn-container2">
                    <div className="btn-kmutt">
                        <Link to ="/kmutt">
                            <img src={kmutt} className="kmutt" alt=""></img>
                            <p>KMUTT</p>
                            <p>พระจอมเกล้าธนบุรี</p>
                        </Link>
                    </div>
                    <div className="btn-tu">
                        <Link to ="/tu">
                            <img src={Tu} className="tu" alt=""></img>
                            <p>TU</p>
                            <p>ธรรมศาสตร์</p>
                        </Link>
                    </div>

                </div>
            </div>
            
            
           
            
         </div>
    )
    
}
