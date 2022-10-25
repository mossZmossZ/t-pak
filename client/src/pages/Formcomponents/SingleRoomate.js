import axios from "axios";
import { useState,useEffect } from "react";

const SingleRoomate=(props)=>{
    const [roomates,setRoomates] = useState('')
    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        //api/kmutnblocation/update/U-life
        .get(`${process.env.REACT_APP_API}/roomate/update/${props.match.params.slug}`)
        .then(response=>{
            //console.log(response.data)
            setRoomates(response.data)
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
                        <img src={`../uploads/${roomates.Image}`} alt="..."/>
                    </div>
                    <div className="info">
                        <p>ชื่อ : {roomates.name}</p>
                        <p>มหาวิทยาลัย : {roomates.UNI}</p>
                        <p>เพศ : {roomates.gender}</p>
                        <p>ชั้นปี : {roomates.year}</p>
                        <p className="text-muted">ราคาต่อคน : {roomates.price} บาท/คน </p>
                        <p>รายละเอียด : {roomates.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {roomates.telephone}</p>
                    </div>
                </div>      
        </div>
    )

}
export default SingleRoomate;