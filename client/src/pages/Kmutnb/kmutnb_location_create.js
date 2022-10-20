import {useState,} from "react";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import { getUser,authenticate,getToken} from "../../services/authorize"


const KmutnbLocationCreate=()=>{
    /*const [name,setName] = useState("");
    const [detail,setDetail] = useState("");
    const [telephone,setTelephone] = useState("");
    const [price,setPrice] = useState("");
    const [fileName,setFileName] = useState("");
*/
    const [state,setState] = useState({
    name:"",
    detail:"",
    telephone:"",
    price:"",
    
    })
    const [fileName,setFileName] = useState("");
    const {name,detail,telephone,price} = state
    
    const ID = String(getUser())
    const onChangeFile = e =>{
        setFileName(e.target.files[0]);
    };

    const inputValue =name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value});
    }
    const changeOnClick = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("ID",ID);
        formData.append("name",name);
        formData.append("detail",detail);
        formData.append("telephone",telephone);
        formData.append("price",price);
        formData.append("Image",fileName);

        
        
        axios
            .post(`${process.env.REACT_APP_API}/kmutnblocation/create`,formData)
            .then((res)=> alert(res.data))
            .catch((err)=>{
                console.log(err)
            });
    };
   


    /*const submitForm=(e)=>{
        e.preventDefault();
        //console.table({title,content,author})
        //console.log("API URL = ",process.env.REACT_APP_API)

        const formData = new FormData();
        formData.append('photo',file);
        axios
        .post(`${process.env.REACT_APP_API}/kmutnblocation/create`,
        {formData},
        {name,detail,telephone,price},
        {
            headers:{
                'content-type':'multipart/form-data',
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน','บันทึกสำเร็จ!','success')
                setState({...state,name:"",detail:"",telephone:"",price:""})
                props.history.push("/kmutnblocation")
        }).catch(err=>{
            Swal.fire({icon: 'error',title: 'Oops...',text: err.response.data.error,footer: '<a href="">Why do I have this issue?</a>'})
            //alert(err.response.data.error)
        })
    }*/
    return(
        <div className="form_container">
            <div>
                <h1>ประกาศขายหอพัก ใกล้ พระนครเหนือ</h1>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label>ชื่อหอพัก</label>
                        <div className="input">
                            <input type="text" classname="form-control" value={name} onChange={inputValue("name")}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>รายละเอียด </label>
                        <div className="input">
                            <input type="text" classname="form-control" value={detail} onChange={inputValue("detail")}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>ราคา</label>
                        <div className="input">
                            <input type="numberic" classname="form-control" value={price} onChange={inputValue("price")}/>
                       </div>
                    </div>
                    <div className="form-group">
                        <label>เบอร์โทร ติดต่อ</label>
                        <div className="input">
                            <input type="tel" pattern="[0-9]{10}" value={telephone} onChange={inputValue("telephone")}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Choose Image</label>
                        <div className="input">
                            <input 
                                type="file" 
                                filename="Image"
                                id="imgInp"
                                classname="form-control-file" 
                                onChange={onChangeFile}
                            />
                            
                        </div>
                        
                    </div>
                    <div className="submit">
                        <input type="submit" value="          Submit         " className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default KmutnbLocationCreate;