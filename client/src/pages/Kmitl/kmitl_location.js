import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser } from "../../services/authorize";
import './kmitl_location.css'
const Kmitllocation=()=>{
    const [kmitllocations,setKmitllocations] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/location/kmitl`)
        .then(response=>{
            setKmitllocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="post-container">
            <h1>หอพักใกล้พระจอมเกล้าลาดกระบัง</h1>
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
            {kmitllocations.map((kmitllocation,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${kmitllocation.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{kmitllocation.name}</h1>
                        <p className="text-muted">ราคา : {kmitllocation.price} บาท/เดือน </p>
                        <p>รายละเอียด : {kmitllocation.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {kmitllocation.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/kmutnblocation/${kmitllocation.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
)
}
export default Kmitllocation;