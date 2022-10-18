import {useState} from "react";
import"./Formcomponents.css";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import { getToken, getUser } from "../../services/authorize";


const FormComponents=()=>{
    const [state,setState] = useState({
        title:"",
        content:"",
        author:""
    })
    const {title,content,author} = state



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
        .post(`${process.env.REACT_APP_API}/create`,
        {title,content,author},
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน','บันทึกสำเร็จ!','success')
                setState({...state,title:"",author:""})
        }).catch(err=>{
            Swal.fire({icon: 'error',title: 'Oops...',text: err.response.data.error,footer: '<a href="">Why do I have this issue?</a>'})
            //alert(err.response.data.error)
        })
    }
    return(
        <div className="form_container">
            <div>
                <h1>เขียนข้อความ</h1>
                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label>ชื่อบทความ </label>
                        <input type="text" classname="form-control" value={title} onChange={inputValue("title")}/>
                    </div>
                    <div className="form-group">
                        <label>รายละเอียด </label>
                        <input type="text" classname="form-control" value={content} onChange={inputValue("content")}/>
                    </div>
                    <div className="form-group">
                        <label>ผู้แต่ง </label>
                        <input type="text" classname="form-control" value={author} onChange={inputValue("author")}/>
                    </div>
                    <input type="submit" value="บันทึก" className="btn btn-primary"></input>
                </form>
            </div>
        </div>
    );
}
export default FormComponents;