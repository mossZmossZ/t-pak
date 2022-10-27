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
        gender:"",
        detail:"",
        telephone:"",
        price:"",
        slug:"",
        Image:""
    })
    const {name,type,gender,detail,telephone,price,slug} = state
    const [UNI,setUNI] = useState("เลือกมหาวิทยาลัย")
    const selectOptions = [
        { value: 'KMUTNB', label: 'KMUTNB' },
        { value: 'KMITL', label: 'KMITL' },
        { value: 'KMUTT', label: 'KMUTT' },
        { value: 'TU', label: 'TU' }
    ]
    const typeOptions = [
        { value: 'คอนโด', label: 'คอนโด' },
        { value: 'หอพัก', label: 'หอพัก' },
        { value: 'บ้านเช่า', label: 'บ้านเช่า' },
        { value: 'อื่นๆ', label: 'อื่นๆ' }
    ]
    const gendertypeOptions = [
        { value: 'หอพักชาย', label: 'หอพักชาย' },
        { value: 'หอพักหญิง', label: 'หอพักหญิง' },
        { value: 'หอพักรวม', label: 'หอพักรวม' },
        
    ]
    const [typeChoice, setTypeChoice] = useState("เลือกรูปแบบ")
    const [genderTypeChoice, setGenderTypeChoice] = useState("เลือกประเภท")
    function yesnoCheck(yes) {
        if (yes.value == "หอพัก") {
            document.getElementById("ifYes").style.display = "block";
            setGenderTypeChoice('')
        } 
        else {
            document.getElementById("ifYes").style.display = "none";
            setGenderTypeChoice('รวม')
        }
    }

    //ดึงข้อมูลบทความที่ต้องการแก้ไขโดยใช้ useEffect
    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        .get(`${process.env.REACT_APP_API}/location/update/${props.match.params.slug}`)
        .then(response=>{
            const {UNI,name,type,gender,detail,telephone,price,slug,Image} = response.data
            setState({...state,name,type,gender,detail,telephone,price,slug,Image})
            setUNI(UNI)
            setTypeChoice(type)
            setGenderTypeChoice(gender)
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
                     <Select className="dropdown" isSearchable={false} defaultValue={{label:UNI,value:String(UNI)}} options={selectOptions} onChange={(choice) => setUNI(choice.value)} />
                    </div>
                    
                </div>
                <div className="form-group">
                    <label>ชื่อหอพัก</label>
                     <div className="input">
                        <input type="text" classname="form-control" value={name} onChange={inputValue("name")}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>รูปแบบ</label>
                     <div className="input">
                        <Select isClearable={false} className='react-select'options={typeOptions} defaultValue={{label:typeChoice,value:String(typeChoice)}} onChange={(choice) => {setTypeChoice(choice.value);yesnoCheck(choice)}}/>
                    </div>
                </div>
                <div id="ifYes">
                    <div className="form-group">
                        <label>ประเภท</label>
                        <div className="input">
                            <Select isClearable={false} className='react-select'options={gendertypeOptions}defaultValue={{label:genderTypeChoice,value:String(genderTypeChoice)}}  onChange={(choice) => setGenderTypeChoice(choice.value)}/>

                        </div>
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
        .put(`${process.env.REACT_APP_API}/location/update/${slug}`,{UNI,name,type,gender,detail,telephone,price},
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน','อัพเดทเรียบร้อย','success')
                const {name,type,gender,detail,telephone,price,slug} = response.data
                setState({...state,name,type,gender,detail,telephone,price,slug})
                setUNI(UNI)
                setGenderTypeChoice(genderTypeChoice)
                setTypeChoice(typeChoice)
                
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