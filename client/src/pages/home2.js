import './home.css'
import {Link} from "react-router-dom" 
import Select from "react-select";
import {useState} from "react"


const Home=(props)=>{

    const [userChoice, setUserChoice] = useState("Location")
    const [userChoice2, setUserChoice2] = useState("")
    const selectOptions = [
        { value: "Location", label: "สถานที่" ,color:"black" },
        { value: "Roomate", label: "รูมเมท",color:"black" },
    ];  
    const placeOptions = [
        { value: 'kmutnb', label: 'KMUTNB' },
        { value: 'kmitl', label: 'KMITL' },
        { value: 'kmutt', label: 'KMUTT' },
        { value: 'tu', label: 'TU' }
    ];                
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return { ...styles, color: data.color };
        }
    };
    return (
        <div className="Home_container">
            {console.log({userChoice})}
            {console.log({userChoice2})}
            <div className="slogan">
                <p>T-pak เป็นได้มากกว่าที่พัก ในเว็ปนี้ .</p>
                <p>หา หอพัก , คอนโด, และ รูมเมท !</p>
            </div>
            <div className="headcontainer">
                <h1>ค้นหาจาก</h1>  
                <Select className="dropdown" isSearchable={false}  defaultValue={{label:'สถานที่',value:'Location'}} options={selectOptions} onChange={(choice) => setUserChoice(choice.value)} styles={colorStyles}/>
                <Select className="dropdown" isSearchable={false} options={placeOptions} onChange={(choice2) => setUserChoice2(choice2.value)} styles={colorStyles}/>
                <Link to={{
                    pathname: `/${userChoice}`,
                    state: {userChoice,userChoice2} }}>
                    <button>
                        submit
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Home;
