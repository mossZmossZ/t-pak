import {useState} from "react";
import"./Formcomponents.css";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";


const EditComponent=(props)=>{
    const [state,setState] = useState({
        title:"",
        content:"",   
        author:"",
        slug:""
    })
    const {title,author,content,slug} = state




    //ดึงข้อมูลบทความที่ต้องการแก้ไขโดยใช้ useEffect
    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
        .then(response=>{
            const {title,content,author,slug} = response.data
            setState({...state,title,content,author,slug})
        })
        .catch(err=>alert(err))
        
    }
    useEffect(()=>{
        fetchData()
        //eslint-disable-next-line
    },[])

    const showUpdateForm=()=>(
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
                    <input type="submit" value="แก้ไข" className="btn btn-primary"></input>
                </form>
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
        .put(`${process.env.REACT_APP_API}/blog/${slug}`,{title,content,author})
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน','อัพเดทบทความเรียบร้อย','success')
                const {title,content,author,slug} = response.data
                setState({...state,title,content,author,slug})
        }).catch(err=>{
            Swal.fire({icon: 'error',title: 'Oops...',text:"ERROR",footer: '<a href="">Why do I have this issue?</a>'})
            //alert(err.response.data.error)
        })
    }
    return(
        <div className="form_container">
            <div>
                <h1>แก้ไขบทความ</h1>
                {showUpdateForm()}
    
            </div>
        </div>
    );
}
export default EditComponent;