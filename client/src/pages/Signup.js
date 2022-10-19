import { useState,useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
//import { authenticate } from "../../services/authorize"
import {withRouter} from "react-router-dom"
//import { getUser } from "../../services/authorize"


const RegisterComponent=(props)=>{
    const [state,setState] = useState({
        ID:"",
        username:"",
        password:"",
        confirmpassword:""
    })
    const {ID,  username,password,confirmpassword} = state

    //กำหนดค่าให้กับ state
    const inputValue =name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();
        //console.table({title,content,author})
        //console.log("API URL = ",process.env.REACT_APP_API)
       // alert(JSON.stringify({username,password,confirmpassword}))
       axios.post(`${process.env.REACT_APP_API}/register`,{ID,username,password,confirmpassword})
       .then(response=>{
        //login สำเร็จ
            //authenticate(response,()=>window.location.reload(false),props.history.push("/formcreate"))
        console.log(response.data)
        setState({...state,ID:"",username:"",password:"",confirmpassword:""})
       }).catch(err=>{
        console.log(err.response.data.error)
        Swal.fire({icon: 'error',title: 'Failed',text: err.response.data.error,footer: '<a href="">Why do I have this issue?</a>'})
       })
    }
    /*useEffect(()=>{
        getUser() && props.history.push("/")
    },[])*/
    return(
        <div className="form_container-signup">
        <div>
            <h1>Register</h1>
    
            <form onSubmit={submitForm}>
                <div className="form-group-signup">
                    <label>ID </label>
                    <input type="text" classname="form-control" 
                        value={ID} 
                        onChange={inputValue("ID")}/>
                </div>
                <div className="form-group-signup">
                    <label>Username </label>
                    <input type="text" classname="form-control" 
                        value={username} 
                        onChange={inputValue("username")}/>
                </div>
                <div className="form-group-signup">
                    <label>Password </label>
                    <input type="password" classname="form-control" 
                        value={password} 
                        onChange={inputValue("password")}/>
                </div>
                <div className="form-group-signup">
                    <label>confirmpassword </label>
                    <input type="password" classname="form-control" 
                        value={confirmpassword} 
                        onChange={inputValue("confirmpassword")}/>
                </div>
                <input type="submit" value="สมัครเข้าใช้งาน" className="btn btn-primary-signup"></input>
            </form>
        </div>
    </div>
);
}
export default withRouter(RegisterComponent);