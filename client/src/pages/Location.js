import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import './Location_and_Roomate.css'
const Kmutnblocation=(props)=>{
    const place = props.location.state.userChoice2
    const [kmutnblocations,setKmutnblocations] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/location/${place}`)
        .then(response=>{
            setKmutnblocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    
        
    return(
        <div className="post-container">
            <h1>หอพักใกล้{place}</h1>
            <hr/>
            {kmutnblocations.map((kmutnblocation,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${kmutnblocation.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{kmutnblocation.name}</h1>
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
export default Kmutnblocation;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
