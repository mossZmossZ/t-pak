import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import './Location_and_Roomate.css'
import Select from "react-select";
const Kmutnblocation=(props)=>{
    const place = props.location.state.userChoice2.toUpperCase()
    const mode = props.location.state.userChoice
    const uniOptions = [
        { value: 'kmutnb', label: 'KMUTNB' },
        { value: 'kmitl', label: 'KMITL' },
        { value: 'kmutt', label: 'KMUTT' },
        { value: 'tu', label: 'TU' },
        { value: '', label: 'ทั้งหมด' }
    ]; 
    const modeOptions = [
        { value: "location", label: "หอพัก" },
        { value: "roomate", label: "รูมเมท" },
    ];         
    const [uniSelect,setUniSelect]= useState(place)
    const [modeSelect,setModeSelect]= useState(mode)
    const [kmutnblocations,setKmutnblocations] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/${modeSelect}/${uniSelect}`)
        .then(response=>{
            setKmutnblocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[uniSelect])
    useEffect(()=>{
        fetchData()
    },[modeSelect])
    
    if (modeSelect=='location'){
        return(
            <div className="post-container">
                <h1>{uniSelect.toUpperCase()} Location2</h1>
                <div className="select-container">
                    <Select  defaultValue={{label:'เลือกมหาลัย..'}}isSearchable={false} options={uniOptions} onChange={(choice) => setUniSelect(choice.value)}/>
                    <Select   defaultValue={{label:`รูปแบบ...`}} isSearchable={false} options={modeOptions} onChange={(choice) => setModeSelect(choice.value)}/></div>
                <hr/>
                {kmutnblocations.map((kmutnblocation,index)=>(
                <div className="row" key={index} style={{border:'3px solid grey'}}>
                    <div className="column" key={index} >
                        <img src={`./uploads/${kmutnblocation.Image}`} alt="..."/>
                        <div className="info">
                            <h1>{kmutnblocation.name}</h1>
                            <p>ประเภทหอพัก :{kmutnblocation.type}</p>
                            <p className="text-muted">ราคา : {kmutnblocation.price} บาท/เดือน </p>
                            <p>รายละเอียด : {kmutnblocation.detail.substring(0,180)}</p>
                            <p className="text-muted3">เบอร์โทรศัพท์: {kmutnblocation.telephone}</p>
                        </div>
                        <button className="select"> 
                            <Link to={`/location/${kmutnblocation.slug}`}>
                                select
                            </Link>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        )
    }
    else{
        return(
            <div className="post-container">
                <h1>{uniSelect.toUpperCase()} Location2</h1>
                <div className="select-container">
                    <Select   defaultValue={{label:'เลือกมหาลัย..',value:'Location'}} isSearchable={false} options={uniOptions} onChange={(choice) => setUniSelect(choice.value)}/>
                    <Select  defaultValue={{label:`รูปแบบ...`}}  isSearchable={false} options={modeOptions} onChange={(choice) => setModeSelect(choice.value)}/>
                </div>
                <hr/>
                {kmutnblocations.map((Roomate,index)=>(
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
export default Kmutnblocation;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
