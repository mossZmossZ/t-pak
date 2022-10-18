import { useState,useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { authenticate } from "../../services/authorize"
import {withRouter} from "react-router-dom"
import { getUser } from "../../services/authorize"


const LoginComponent=(props)=>{
    const [state,setState] = useState({
        username:"",
        password:""
    })
    const {username,password} = state

    //กำหนดค่าให้กับ state
    const inputValue =name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();
        //console.table({title,content,author})
        //console.log("API URL = ",process.env.REACT_APP_API)
        //alert(JSON.stringify({username,password}))
       axios.post(`${process.env.REACT_APP_API}/login`,{username,password})
       .then(response=>{
        //login สำเร็จ
            authenticate(response,()=>window.location.reload(false),props.history.push("/formcreate"))
        //console.log(response)
       }).catch(err=>{
        //console.log(err.response.data.error)
        Swal.fire({icon: 'error',title: 'Failed',text: err.response.data.error,footer: '<a href="">Why do I have this issue?</a>'})
       })
    }
    useEffect(()=>{
        getUser() && props.history.push("/")
    },[])
    return(
        <div className="form_container">
        <div>
            <h1>เข้าสู่ระบบ | Admin</h1>
    
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Username </label>
                    <input type="text" classname="form-control" 
                        value={username} 
                        onChange={inputValue("username")}/>
                </div>
                <div className="form-group">
                    <label>Password </label>
                    <input type="password" classname="form-control" 
                        value={password} 
                        onChange={inputValue("password")}/>
                </div>
                <input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary"></input>
            </form>
        </div>
    </div>
);
}
export default withRouter(LoginComponent);