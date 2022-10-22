import axios from "axios";
import { useState,useEffect } from "react";


const SingleLocation=(props)=>{
    const [locations,setlocations] = useState('')
    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        //api/kmutnblocation/update/U-life
        .get(`${process.env.REACT_APP_API}/location/update/${props.match.params.slug}`)
        .then(response=>{
            //console.log(response.data)
            setlocations(response.data)
        })
        .catch(err=>alert(err))
        
    }
    useEffect(()=>{
        fetchData()
        //eslint-disable-next-line
    },[])
    return(
        <div className="post-container">
                <div className="newcolumn" >
                    <div className="img-border">
                        <img src={`../uploads/${locations.Image}`} alt="..."/>
                    </div>
                    <div className="info">
                        <h1>{locations.name}</h1>
                        <p className="text-muted">มหาวิทยาลัย: {locations.UNI}</p>
                        <p className="text-muted">ราคา : {locations.price} บาท/เดือน </p>
                        <p>รายละเอียด : {locations.detail}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {locations.telephone}</p>
                    </div>
                </div>      
        </div>
    )
}
export default SingleLocation;