import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser,authenticate} from "../../services/authorize"
import './Userprofile.css'

const Userprofile=()=>{
    const userid = String(getUser())
    const [kmutnblocations,setKmutnblocations] = useState([])
    const fetchData=()=>{
        axios
        .post(`${process.env.REACT_APP_API}/kmutnblocations/user`,{userid})
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
                    <div>
                            <li className="interest">
                                <Link to ="/login" className="login">สนใจลงประกาศได้ที่นี่!</Link>
                            </li>
                            </div>) 
                    }
            {getUser() &&(
                            <li>
                                <Link to ="/kmutnblocation/create" className="login">ลงประกาศประกาศฟรีได้ที่นี่!</Link>
                            </li>) 
                    }
            <hr/>
            {kmutnblocations.map((kmutnblocation,index)=>(
            <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
                <div className="column" key={index} id="formcontainer">
                    <img src={`./uploads/${kmutnblocation.Image}`} alt="..."/>
                    <div className="headcontent">
                        <h2>{kmutnblocation.name}</h2>
                        <h2>{kmutnblocation.Image}</h2>
                    </div>
                    <p>รายละเอียด : {kmutnblocation.detail.substring(0,180)}</p>
                    <p className="text-muted">ราคา : {kmutnblocation.price} , เบอร์โทรศัพท์: {kmutnblocation.telephone}</p>
                </div>
            </div>
                ))}
        </div>
)
}
export default Userprofile;