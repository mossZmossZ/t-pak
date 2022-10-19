import {useState,} from "react";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import { getUser,authenticate,getToken} from "../../services/authorize"


const KmutnbLocationCreate=(props)=>{
    const [state,setState] = useState({
        name:"",
        detail:"",
        telephone:"",
        price:""
    })
    const {name,detail,telephone,price} = state
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
        .post(`${process.env.REACT_APP_API}/kmutnblocation/create`,
        {name,detail,telephone,price},
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน','บันทึกสำเร็จ!','success')
                setState({...state,title:"",author:""})
                props.history.push("/kmutnblocation")
        }).catch(err=>{
            Swal.fire({icon: 'error',title: 'Oops...',text: err.response.data.error,footer: '<a href="">Why do I have this issue?</a>'})
            //alert(err.response.data.error)
        })
    }
    return(
        <div className="form_container">
            <div>
                <h1>ประกาศขายหอพัก ใกล้ พระนครเหนือ</h1>
                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label>ชื่อหอพัก</label>
                        <input type="text" classname="form-control" value={name} onChange={inputValue("name")}/>
                    </div>
                    <div className="form-group">
                        <label>รายละเอียด </label>
                        <input type="text" classname="form-control" value={detail} onChange={inputValue("detail")}/>
                    </div>
                    <div className="form-group">
                        <label>ราคา</label>
                        <input type="numberic"  value={price} onChange={inputValue("price")}/>
                    </div>
                    <div className="form-group">
                        <label>ติดต่อ</label>
                        <input type="text" pattern="[0-9]{10}" value={telephone} onChange={inputValue("telephone")}/>
                    </div>
                    <input type="submit" value="บันทึก" className="btn btn-primary"></input>
                </form>
            </div>
        </div>
    );
}
export default KmutnbLocationCreate;