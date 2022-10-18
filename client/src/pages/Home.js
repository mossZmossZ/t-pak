import kmutnb from "../pictures/LOGO-KMUTNB.png"
import kmitl from "../pictures/kmitl-logo.png"
import kmutt from "../pictures/Kmutt-logo.png"
import Tu from "../pictures/TU_logo.png"
import './home.css'
import {Link} from "react-router-dom" 
import Select from "react-select";
import {useState} from "react"


const Home=()=>{
    const [state,setState] = useState('location')

    
const Selects = () => {
    const options = [
        { value: "Location", label: "สถานที่" ,color:"black" },
        { value: "Roomate", label: "รูมเมท",color:"black" },
        
    ];
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return { ...styles, color: data.color };
        },
    };
    return <Select className="dropdown" defaultValue={{label:'สถานที่',value:'Location'}} options={options} onChange={(Selects) => setState(Selects.value)} styles={colorStyles}/>
    };
    return (
         <div className="Home_container">
            <div className="slogan">
                <p>T-pak เป็นได้มากกว่าที่พัก ในเว็ปนี้ .</p>
                <p>หา หอพัก , คอนโด, และ รูมเมท !</p>
            </div>
            <div className="home-head">
                ค้นหาจาก<Selects/>
            </div>
            <div className="main">
                <div className="btn-container1">
                    <div className="btn-kmutnb">
                        <Link to ={`/kmutnb${state}`}>  
                            <img src={kmutnb} className="kmutnb" alt=""></img>
                            <p>KMUTNB</p>
                            <p>พระจอมเกล้าพระนครเหนือ</p>
                        </Link>
                    </div>
                    <div className="btn-kmitl">
                        <Link to ={`/kmitl${state}`}>
                            <img src={kmitl} className="kmitl" alt=""></img>
                            <p>KMITL</p>
                            <p>พระจอมเกล้าลาดกระบัง</p>
                        </Link>
                    </div>
                </div>
                <div className="btn-container2">
                    <div className="btn-kmutt">
                        <Link to ={`/kmutt${state}`}>
                            <img src={kmutt} className="kmutt" alt=""></img>
                            <p>KMUTT</p>
                            <p>พระจอมเกล้าธนบุรี</p>
                        </Link>
                    </div>
                    <div className="btn-tu">
                        <Link to ={`/tu${state}`}>
                            <img src={Tu} className="tu" alt=""></img>
                            <p>TU</p>
                            <p>ธรรมศาสตร์(ศูนย์รังสิต)</p>
                        </Link>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default Home;