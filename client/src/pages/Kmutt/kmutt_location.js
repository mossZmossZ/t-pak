import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser } from "../../services/authorize";
import './kmutt_location.css'
const Kmuttlocation=()=>{
    const [kmuttlocations,setKmuttlocations] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/location/kmutt`)
        .then(response=>{
            setKmuttlocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="post-container">
            <h1>หอพักใกล้พระจอมเกล้าธนบุรี</h1>
            <hr/>
            {kmuttlocations.map((kmuttlocation,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${kmuttlocation.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{kmuttlocation.name}</h1>
                        <p className="text-muted">ราคา : {kmuttlocation.price} บาท/เดือน </p>
                        <p>รายละเอียด : {kmuttlocation.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {kmuttlocation.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/kmuttlocation/${kmuttlocation.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
)
}
export default Kmuttlocation;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
