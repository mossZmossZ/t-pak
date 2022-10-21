import axios from "axios";
import { useState,useEffect } from "react";


const Singlekmutnblocation=(props)=>{
    const [kmutnblocations,setKmutnblocations] = useState('')
    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        //api/kmutnblocation/update/U-life
        .get(`${process.env.REACT_APP_API}/kmutnblocation/update/${props.match.params.slug}`)
        .then(response=>{
            console.log(response.data)
            setKmutnblocations(response.data)
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
                    <img src={`../uploads/${kmutnblocations.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{kmutnblocations.name}</h1>
                        <p className="text-muted">ราคา : {kmutnblocations.price} บาท/เดือน </p>
                        <p>รายละเอียด : {kmutnblocations.detail}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {kmutnblocations.telephone}</p>
                    </div>
                </div>      
        </div>
    )
}
export default Singlekmutnblocation;