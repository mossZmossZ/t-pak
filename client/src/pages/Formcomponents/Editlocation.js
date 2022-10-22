import"./Formcomponents.css";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import React,{ useState,useEffect } from "react";
import { getToken ,authenticate} from "../../services/authorize";

const Editlocation=(props)=>{
    const [state,setState] = useState({
        UNI:"",
        name:"",
        detail:"",
        telephone:"",
        price:"",
        slug:"",
        Image:""
    })
    const {UNI,name,detail,telephone,price,slug} = state

    //ดึงข้อมูลบทความที่ต้องการแก้ไขโดยใช้ useEffect
    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        .get(`${process.env.REACT_APP_API}/location/update/${props.match.params.slug}`)
        .then(response=>{
            const {UNI,name,detail,telephone,price,slug,Image} = response.data
            setState({...state,UNI,name,detail,telephone,price,slug,Image})
        })
        .catch(err=>alert(err))
        
    }
    useEffect(()=>{
        fetchData()
        //eslint-disable-next-line
    },[])
    
    const showUpdateForm=()=>(
        <div >
            <form onSubmit={submitForm}>
            <div className="form-group">
                    <label>มหาวิทยาลัย    (KMUTNB,KMITL,KMUTT,TU)</label>
                     <div className="input">
                        <input type="text" classname="form-control" value={UNI} onChange={inputValue("UNI")}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>ชื่อ</label>
                     <div className="input">
                        <input type="text" classname="form-control" value={name} onChange={inputValue("name")}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <div className="input">
                        <textarea classname="form-control" value={detail} onChange={inputValue("detail")}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>ราคา</label>
                    <div className="input">
                        <input type="text" classname="form-control" value={price} onChange={inputValue("price")}/>
                    </div>
                 </div>
                <div className="form-group">
                    <label>เบอร์โทรติดต่อ</label>
                    <div className="input">
                        <input type="text" classname="form-control" value={telephone} onChange={inputValue("telephone")}/>
                    </div>
                </div>
                 <div className="submit">
                     <input type="submit" value="          Submit         " className="btn btn-primary"></input>
                </div>
                </form>
            </div>
    )
    //กำหนดค่าให้กับ state
    const inputValue =name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();
        //console.table({title,content,author})
        //console.log("API URL = ",process.env.REACT_APP_API)
        axios
        .put(`${process.env.REACT_APP_API}/location/update/${slug}`,{UNI,name,detail,telephone,price},
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน','อัพเดทเรียบร้อย','success')
                const {name,detail,telephone,price,slug} = response.data
                setState({...state,name,detail,telephone,price,slug})
                props.history.push("/")
                
        }).catch(err=>{
            Swal.fire({icon: 'error',title: 'Oops...',text:"ERROR",footer: '<a href="">Why do I have this issue?</a>'})
            //alert(err.response.data.error)
        })
    }
    return(
        <div>
             <div className="head-container" id="form-edit">
                <div className="head">
                    <h1>แก้ไขโพสต์ของคุณ</h1>
                </div>
            </div>
            <div className="form_container">
            <div className="edit">
                <img className="imagedit" src={`../../uploads/${state.Image}`} alt="..."/>
            </div>
                {showUpdateForm()}
            </div>
        </div>
    );
}
export default Editlocation;