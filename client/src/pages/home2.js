import './home.css'
import {Link} from "react-router-dom" 
import Select from "react-select";
import {useState,useEffect} from "react"
import axios from "axios";


const Home=(props)=>{
    const [locations,setLocations] = useState([])
    const [userChoice, setUserChoice] = useState("location")
    const [userChoice2, setUserChoice2] = useState("")
    const selectOptions = [
        { value: "location", label: "สถานที่" ,color:"black" },
        { value: "roomate", label: "รูมเมท",color:"black" },
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
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/${userChoice}/${userChoice2}`)
        .then(response=>{
            setLocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[userChoice])
    useEffect(()=>{
        fetchData()
    },[userChoice2])
    if (userChoice=='location'){
        return (
            <div className="Home_container">
                {console.log({locations})}
                <div className="headcontainer">
                    <Select className="dropdown2" isSearchable={false}  defaultValue={{label:'สถานที่',value:'Location'}} options={selectOptions} onChange={(choice) => setUserChoice(choice.value)} styles={colorStyles}/>
                    <Select className="dropdown2" isSearchable={false} options={placeOptions} onChange={(choice2) => setUserChoice2(choice2.value)} styles={colorStyles}/>
                </div>
                <div className="post-container">
            <h1>หอพักใกล้ {userChoice2}</h1>
            <hr/>
            {locations.map((location,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                <img src={`./uploads/${location.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{location.name}</h1>
                        <p>ประเภทหอพัก :{location.type}</p>
                        <p className="text-muted">ราคา : {location.price} บาท/เดือน </p>
                        <p>รายละเอียด : {location.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {location.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/location/${location.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
        </div>
    )}
    else{
        return(
            <div className="post-container">
                <h1>รูมเมท {userChoice2}</h1>
                <div className="Home_container">
                    <Select className="dropdown2" isSearchable={false}  defaultValue={{label:'สถานที่',value:'Location'}} options={selectOptions} onChange={(choice) => setUserChoice(choice.value)} styles={colorStyles}/>
                    <Select className="dropdown2" isSearchable={false} options={placeOptions} onChange={(choice2) => setUserChoice2(choice2.value)} styles={colorStyles}/>
                </div>
                <hr/>
                {locations.map((Roomate,index)=>(
                <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${Roomate.Image}`} alt="..."/>
                    <div className="info">
                        <p>ชื่อ : {Roomate.name}</p>
                        <p>มหาวิทยาลัย : {Roomate.UNI}</p>
                        <p>เพศ : {Roomate.gender}</p>
                        <p>ชั้นปี : {Roomate.year}</p>
                        <p className="text-muted">ราคาต่อคน : {Roomate.price} บาท/คน </p>
                        <p>รายละเอียด : {Roomate.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {Roomate.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/roomate/${Roomate.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
        )

    }
}
export default Home;
