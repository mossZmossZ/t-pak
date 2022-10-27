import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import './Location_and_Roomate.css'
import Select from "react-select";
const Kmutnblocation=(props)=>{
    const place = props.location.state.userChoice2.toUpperCase()
    const mode = props.location.state.userChoice
    const uniOptions = [
        { value: 'KMUTNB', label: 'KMUTNB' },
        { value: 'KMITL', label: 'KMITL' },
        { value: 'KMUTT', label: 'KMUTT' },
        { value: 'TU', label: 'TU' },
        { value: '', label: 'ทั้งหมด' }
    ]; 
    const modeOptions = [
        { value: "location", label: "หอพัก" },
        { value: "roomate", label: "รูมเมท" },
        { value: 'ALL', label: 'ทั้งหมด' }
    ];
    const priceOptions = [
        { value: "0", label: "ทั้งหมด" },
        { value: "4001", label: "4000 ขึ้นไป" },
        { value: "8002", label: "8000 ขึ้นไป" },
    ];
    const gendertypeOptions = [
        { value: 'หอพักชาย', label: 'หอพักชาย' },
        { value: 'หอพักหญิง', label: 'หอพักหญิง' },
        { value: 'หอพักรวม', label: 'หอพักรวม' },
        
    ]           
    const [uniSelect,setUniSelect]= useState(place)
    const [modeSelect,setModeSelect]= useState(mode)
    const [priceSelect,setPriceSelect]= useState('0')
    const [genderSelect, setGenderSelect] = useState("MALE")
    const [kmutnblocations,setKmutnblocations] = useState([])
    const [roomates,setRoomates] = useState([])
    
    const fetchData=()=>{
    if (modeSelect=='ALL'){
        axios.all([
            axios
            .post(`${process.env.REACT_APP_API}/location/UNI`,{uniSelect,genderSelect,priceSelect})
            .then(response=>{
                setKmutnblocations(response.data)
            })
            .catch(err=>alert(err)), 
            axios.post(`${process.env.REACT_APP_API}/roomate/UNI`,{uniSelect,genderSelect,priceSelect})
            .then(response=>{
                setRoomates(response.data)
            })
            .catch(err=>alert(err)), 
          ])
    }
    if (modeSelect=='location'){
        
        axios
        .post(`${process.env.REACT_APP_API}/location/UNI`,{uniSelect,genderSelect,priceSelect})
        .then(response=>{
            setKmutnblocations(response.data)
            console.log(kmutnblocations)
        })
        .catch(err=>alert(err));
    
    
    }
    else{
            axios
            .post(`${process.env.REACT_APP_API}/roomate/UNI`,{uniSelect,genderSelect,priceSelect})
            .then(response=>{
                setRoomates(response.data)
            })
            .catch(err=>alert(err));
    }
    }
    useEffect(()=>{
        fetchData()
    },[uniSelect])
    useEffect(()=>{
        fetchData()
    },[modeSelect])
    useEffect(()=>{
        fetchData()
    },[priceSelect])
    if (modeSelect=='ALL'){
        return(
            <div className="post-container">
                <h1>ค้นหาจากสถานที่  {uniSelect.toUpperCase()}</h1>
                <div className="select-container">
                    <Select  defaultValue={{label:'เลือกมหาลัย..'}}isSearchable={false} options={uniOptions} onChange={(choice) => setUniSelect(choice.value)}/>
                    <Select   defaultValue={{label:`รูปแบบ...`}} isSearchable={false} options={modeOptions} onChange={(choice) => setModeSelect(choice.value)}/>
                    <Select   defaultValue={{label:`ช่วงราคา...`,value:"0"}} isSearchable={false} options={priceOptions} onChange={(choice) =>setPriceSelect(choice.value)}/>
                    <Select   defaultValue={{label:`ปรเภท...`}} isSearchable={false} options={gendertypeOptions} onChange={(choice) =>setGenderSelect(choice.value)}/>
                </div>
                <hr/>
                {kmutnblocations.map((kmutnblocation,index)=>(
                <div className="row" key={index} style={{border:'3px solid grey'}}>
                    <div className="column" key={index} >
                        <img src={`./uploads/${kmutnblocation.Image}`} alt="..."/>
                        <div className="info">
                            <h1>{kmutnblocation.name}</h1>
                            <p>รูปแบบ :{kmutnblocation.type}</p>
                            <p>ประเภท : {kmutnblocation.gender}</p>
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
                <hr/>
                <h1>ค้นหาจากรูมเมท {uniSelect.toUpperCase()}</h1>
                {roomates.map((Roomate,index)=>(
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
    if (modeSelect=='location'){
        return(
            <div className="post-container">
                <h1>{uniSelect.toUpperCase()}</h1>
                <div className="select-container">
                    <Select  defaultValue={{label:'เลือกมหาลัย..'}}isSearchable={false} options={uniOptions} onChange={(choice) => setUniSelect(choice.value)}/>
                    <Select   defaultValue={{label:`รูปแบบ...`}} isSearchable={false} options={modeOptions} onChange={(choice) => setModeSelect(choice.value)}/>
                    <Select   defaultValue={{label:`ช่วงราคา...`,value:"0"}} isSearchable={false} options={priceOptions} onChange={(choice) =>setPriceSelect(choice.value)}/>
                </div>
                <hr/>
                {kmutnblocations.map((kmutnblocation,index)=>(
                <div className="row" key={index} style={{border:'3px solid grey'}}>
                    <div className="column" key={index} >
                        <img src={`./uploads/${kmutnblocation.Image}`} alt="..."/>
                        <div className="info">
                            <h1>{kmutnblocation.name}</h1>
                            <p>รูปแบบ :{kmutnblocation.type}</p>
                            <p>ประเภท : {kmutnblocation.gender}</p>
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
                <h1>{uniSelect.toUpperCase()}</h1>
                <div className="select-container">
                    <Select   defaultValue={{label:'เลือกมหาลัย..',value:'Location'}} isSearchable={false} options={uniOptions} onChange={(choice) => setUniSelect(choice.value)}/>
                    <Select  defaultValue={{label:`รูปแบบ...`}}  isSearchable={false} options={modeOptions} onChange={(choice) => setModeSelect(choice.value)}/>
                    <Select   defaultValue={{label:`ช่วงราคา...`}} isSearchable={false} options={priceOptions} onChange={(choice) =>setPriceSelect(choice.value)}/>
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




    

            
            
