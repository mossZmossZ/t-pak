import {useState,} from "react";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import { getUser,authenticate,getToken} from "../../services/authorize"
import Resizer from "react-image-file-resizer";
import {Link,withRouter} from "react-router-dom"

const KmutnbRoomatecreate=(props)=>{
    /*const [name,setName] = useState("");
    const [detail,setDetail] = useState("");
    const [telephone,setTelephone] = useState("");
    const [price,setPrice] = useState("");
    const [fileName,setFileName] = useState("");
*/
    const [state,setState] = useState({
    place:"",
    name:"",
    gender:"",
    age:"",
    detail:"",
    telephone:"",
    price:"",
    
    })
    const [fileName,setFileName] = useState("");
    const {place,name,gender,age,detail,telephone,price} = state
    
    const ID = String(getUser())

    const onChangeFile=e=>{
        setFileName(e.target.files[0]);
    }
       /* var fileInput = false;
        if (e.target.files[0]) {
            fileInput = true;
    }
    if (fileInput) {
        try {
          Resizer.imageFileResizer(
            e.target.files[0],
            390,
            290,
            "JPEG",
            100,
            0,
            (uri) => {
              console.log(uri);
              setFileName(uri);
            },
            "base64",
            200,
            290
          );
        } catch (err) {
          alert.log(err);
        }
      }
    }
        //setFileName(e.target.files[0]);
    */

    const inputValue =name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value});
    }
    const changeOnClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("ID",ID);
        formData.append("place",place);
        formData.append("name",name);
        formData.append("gender",gender)
        formData.append("age",age);
        formData.append("detail",detail);
        formData.append("telephone",telephone);
        formData.append("price",price);
        formData.append("Image",fileName);

        
        
        axios
            .post(`${process.env.REACT_APP_API}/kmutnblocation/create`,formData)
            .then((response)=> {
                Swal.fire(
                    'แจ้งเตือน','สร้างโพสต์สำเร็จ','success')
                props.history.push("/kmutnbroomate")
                //alert(response.data))
            })
            .catch((err)=>{
                alert(err)
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
                <h1>ประกาศหารูมเมท ใกล้พระนครเหนือ</h1>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label>ชื่อหอพัก</label>
                        <div className="input">
                            <input type="text" classname="form-control" value={place} onChange={inputValue("place")}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>ชื่อผู้ใช้</label>
                        <div className="input">
                            <input type="text" classname="form-control" value={name} onChange={inputValue("name")}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>เพศ</label>
                        <div className="input">
                            <input type="text" classname="form-control" value={gender} onChange={inputValue("gender")}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>อายุ</label>
                        <div className="input">
                            <input type="text" classname="form-control" value={age} onChange={inputValue("age")}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>รายละเอียด </label>
                        <div className="input">
                        <textarea classname="form-control" value={detail} onChange={inputValue("detail")}/>
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
                                classname="form-control-file" 
                                onChange={onChangeFile}
                            />
                        </div>
                    </div>
                    <h1>File name</h1>
                    <img src={fileName} alt="" />
                    <div className="submit">
                        <input type="submit" value="          Submit         " className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default KmutnbRoomatecreate;

