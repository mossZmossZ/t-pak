import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser } from "../../services/authorize";
import './tu_location.css'

const Tulocation=()=>{
    const [tulocations,settulocations] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/location/tu`)
        .then(response=>{
            settulocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="post-container">
            <h1>หอพักใกล้ธรรมศาสตร์ (ศูนย์รังสิต)</h1>
            {!getUser() &&(
                <div className="interest">
                   <button>
                        <Link to ="/login" className="login">ลงประกาศได้ที่นี่!</Link>
                    </button>
                </div>) 
                    }
            {getUser() &&(
                <div className="interest">
                    <button>
                        <Link to ="/location/create" className="here">ลงประกาศประกาศฟรีได้ที่นี่!</Link>
                    </button>
                </div>) 
                    }
            <hr/>
            {tulocations.map((tulocation,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${tulocation.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{tulocation.name}</h1>
                        <p className="text-muted">ราคา : {tulocation.price} บาท/เดือน </p>
                        <p>รายละเอียด : {tulocation.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {tulocation.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/location/${tulocation.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
)
}
export default Tulocation;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
