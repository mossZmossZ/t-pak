import"./Formcomponents.css";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import React,{ useState,useEffect } from "react";
import { getToken ,authenticate} from "../../services/authorize";
import Select from "react-select";

const Editlocation=(props)=>{
    const [state,setState] = useState({
        name:"",
        type:"",
        detail:"",
        telephone:"",
        price:"",
        slug:"",
        Image:""
    })
    const {name,type,detail,telephone,price,slug} = state
    const [UNI,setUNI] = useState("เลือกมหาวิทยาลัย")
    const selectOptions = [
        { value: 'KMUTNB', label: 'KMUTNB' },
        { value: 'KMITL', label: 'KMITL' },
        { value: 'KMUTT', label: 'KMUTT' },
        { value: 'TU', label: 'TU' }
    ]
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return { ...styles, color: data.color };
        }
    };

    //ดึงข้อมูลบทความที่ต้องการแก้ไขโดยใช้ useEffect
    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        .get(`${process.env.REACT_APP_API}/location/update/${props.match.params.slug}`)
        .then(response=>{
            const {UNI,name,type,detail,telephone,price,slug,Image} = response.data
            setState({...state,name,type,detail,telephone,price,slug,Image})
            setUNI(UNI)
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
                    <label>มหาวิทยาลัย </label>
                     <div className="input">
                     <Select className="dropdown" isSearchable={false} defaultValue={{label:UNI,value:String(UNI)}} options={selectOptions} onChange={(choice) => setUNI(choice.value)} styles={colorStyles}/>
                    </div>
                    
                </div>
                <div className="form-group">
                    <label>ชื่อ</label>
                     <div className="input">
                        <input type="text" classname="form-control" value={name} onChange={inputValue("name")}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>ประเภทหอพัก</label>
                     <div className="input">
                        <input type="text" classname="form-control" value={type} onChange={inputValue("type")}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <div className="input">
                        <textarea classname="form-control" value={detail} onChange={inputValue("detail")}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>ราคา ต่อเดือน</label>
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
        console.log(UNI)
        console.log(name)
        axios
        .put(`${process.env.REACT_APP_API}/location/update/${slug}`,{UNI,name,type,detail,telephone,price},
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน','อัพเดทเรียบร้อย','success')
                const {name,type,detail,telephone,price,slug} = response.data
                setState({...state,name,type,detail,telephone,price,slug})
                setUNI(UNI)
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