import { useState,useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import {withRouter} from "react-router-dom"
import { getUser,authenticate  } from "../services/authorize"



const RegisterComponent=(props)=>{
    const [state,setState] = useState({
        ID:"",
        password:"",
        confirmpassword:""
    })
    const {ID,password,confirmpassword} = state

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
       axios.post(`${process.env.REACT_APP_API}/register`,{ID,password,confirmpassword})
       .then(response=>{
        //login สำเร็จ
          authenticate(response,()=>window.location.reload(false),props.history.push("/"))
            
        //console.log(response.data)
        setState({...state,ID:"",password:"",confirmpassword:""})
       }).catch(err=>{
        console.log(err.response.data.error)
        Swal.fire({icon: 'error',title: 'Failed',text: err.response.data.error,footer: '<a href="">Why do I have this issue?</a>'})
       })
    }
    useEffect(()=>{
        getUser() && props.history.push("/")
    },[])
    return(
        <div>
            <div className="head-container">
                <div className="head">
                    <h1>Register</h1>
                </div>
            </div>
                <div className="form_container">
                    <form onSubmit={submitForm}>
                        <div className="form-group-signup">
                            <label>USERNAME :</label>
                            <div className="input">
                                <input type="text" placeholder='USERNAME'classname="form-control" value={ID} onChange={inputValue("ID")}/>
                            </div>
                        </div>
                        <div className="form-group-signup">
                            <label>PASSWORD :</label>
                            <div className="input">
                                <input type="PASSWORD" placeholder='PASSWORD'classname="form-control" value={password} onChange={inputValue("password")}/>
                            </div>
                        </div>
                        <div className="form-group-signup">
                            <label>CONFIRM PASSWORD :</label>
                            <div className="input">
                                <input type="password" placeholder='CONFIRM PASSWORD'classname="form-control"  value={confirmpassword} onChange={inputValue("confirmpassword")}/>
                            </div>
                        </div>
                        <div className="submit">
                         <input type="submit" value="         Register          " className="btn btn-primary-signup"></input>
                        </div>
                     </form>
                </div> 
        
    </div>
);
}
export default withRouter(RegisterComponent);