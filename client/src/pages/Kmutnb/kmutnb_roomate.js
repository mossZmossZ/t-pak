import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser } from "../../services/authorize";
import './kmutnb_location.css'
const Kmutnbroomate=()=>{
    const [Roomates,setRoomates] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/roomate/kmutnb`)
        .then(response=>{
            setRoomates(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="post-container">
            <h1>รูมเมทใกล้พระจอมเกล้าพระนครเหนือ</h1>
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
                        <Link to ="/roomate/create" className="here">ลงประกาศประกาศฟรีได้ที่นี่!</Link>
                    </button>
                </div>) 
                    }
            <hr/>
            {Roomates.map((Roomate,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${Roomate.Image}`} alt="..."/>
                    <div className="info">
                        <p>ชื่อ : {Roomate.name}</p>
                        <p>เพศ : {Roomate.gender}</p>
                        <p>ชั้นปี : {Roomate.year}</p>
                        <p className="text-muted">ราคาต่อคน : {Roomate.price} บาท/คน </p>
                        <p>รายละเอียด : {Roomate.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {Roomate.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/location/${Roomate.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
)
}
export default Kmutnbroomate;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
