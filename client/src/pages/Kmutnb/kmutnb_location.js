import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser } from "../../services/authorize";
import './kmutnb_location.css'
const Kmutnblocation=()=>{
    const [kmutnblocations,setKmutnblocations] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/kmutnblocations`)
        .then(response=>{
            setKmutnblocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            <h1>หอพักใกล้พระนครเหนือ</h1>
            {!getUser() &&(
                            <li>
                                <Link to ="/login" className="login">สนใจลงประกาศได้ที่นี่!</Link>
                            </li>) 
                    }
            {getUser() &&(
                            <li>
                                <Link to ="/kmutnblocation/create" className="login">ลงประกาศประกาศฟรีได้ที่นี่!</Link>
                            </li>) 
                    }
            <hr></hr>
            {kmutnblocations.map((kmutnblocation,index)=>(
            <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
                <div className="col pt-3 pb-2" key={index} id="formcontainer">
                    <div className="headcontent">
                        <h2>{kmutnblocation.Name}</h2>
                    </div>
                    <p>รายละเอียด : {kmutnblocation.detail.substring(0,180)}</p>
                    <p className="text-muted">ราคา : {kmutnblocation.price} , เบอร์โทรศัพท์: {kmutnblocation.telephone}</p>
                    </div>
                </div>
                ))}
            </div>
)
}
export default Kmutnblocation;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
