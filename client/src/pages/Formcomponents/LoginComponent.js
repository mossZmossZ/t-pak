import { useState } from "react"



const LoginComponent=()=>{
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
        alert(JSON.stringify({username,password}))
       
    }
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
export default LoginComponent;