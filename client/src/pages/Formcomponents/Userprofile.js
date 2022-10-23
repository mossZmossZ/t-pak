import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser,authenticate,getToken} from "../../services/authorize"
import Swal from "sweetalert2";


const Userprofile=()=>{
    const userid = String(getUser())
    const [kmutnblocations,setKmutnblocations] = useState([])
    const fetchData=()=>{
        axios
        .post(`${process.env.REACT_APP_API}/locations/user`,{userid})
        .then(response=>{
            setKmutnblocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])

    const confirmDelete=(slug)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                DeleteForm(slug) 
            }
          })
    }

    const DeleteForm=(slug)=>{
        //ส่งrequest ไปที่ api เพื่อลบข้อมูล
        ///kmutnblocation/delete/:slug
        axios.delete(`${process.env.REACT_APP_API}/location/delete/${slug}`,
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(respone=>{
            Swal.fire('Deleted!',respone.data.message,'success')
            fetchData()
        })
        .catch(err=>alert(err))
        

        
    }

    return(
        <div className="post-container">
            <h1>MY POST</h1>
            <hr/>
            
            {kmutnblocations.map((kmutnblocation,index)=>(
            
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${kmutnblocation.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{kmutnblocation.name}</h1>
                        <p className="text-muted">มหาวิทยาลัย : {kmutnblocation.UNI}</p>
                        <p className="text-muted">ราคา : {kmutnblocation.price} บาท/เดือน </p>
                        <p>รายละเอียด : {kmutnblocation.detail.substring(0,180)}</p>
                        <p className="text-muted">เบอร์โทรศัพท์: {kmutnblocation.telephone}</p>
                        <div className="but">
                            <Link to={`/location/update/${kmutnblocation.slug}`}>
                                <button>แก้ไขข้อมูล</button>
                            </Link>
                             &nbsp;
                             &nbsp;
                             &nbsp;
                            <button className="btn-outline-danger" onClick={()=>confirmDelete(kmutnblocation.slug)}>Delete Form</button>
                        </div>
                    </div>
                </div>
            </div>
                ))}
        </div>
)
}
export default Userprofile;