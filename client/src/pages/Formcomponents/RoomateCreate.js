import {useState,} from "react";
import"../fonts/Baloo2-Regular.ttf";
import axios from "axios";
import Swal from "sweetalert2";
import { getUser,authenticate,getToken} from "../../services/authorize"
import Resizer from "react-image-file-resizer";
import Select from "react-select";
import logo from "../../pictures/logo.png"
import logo2 from "../../pictures/logo2.png"

const RoomateCreate=(props)=>{
    /*const [name,setName] = useState("");
    const [detail,setDetail] = useState("");
    const [telephone,setTelephone] = useState("");
    const [price,setPrice] = useState("");
    const [fileName,setFileName] = useState("");
    */
    const [state,setState] = useState({
    age:"",
    year:"",
    detail:"",
    telephone:"",
    price:""
    })
    const [fileName,setFileName] = useState("");
    const [nameChoice,setNameChoice] = useState("");
    {console.log(fileName)}
    
    
    const handleChange = event => {
        setNameChoice(event.target.value);
    }
    
    const {age,year,detail,telephone,price} = state

    function yesnoCheck(yes) {
        if (yes.value == "YES") {
            document.getElementById("ifYes").style.display = "block";
            setNameChoice('')
        } 
        else {
            document.getElementById("ifYes").style.display = "none";
            setNameChoice('none')
        }
    }
    

    const ID = String(getUser())

    const onChangeFile=e=>{
        setFileName(e.target.files[0]);
    }
    const genderOptions = [
        { value: 'MALE', label: 'ชาย' },
        { value: 'FEMALE', label: 'หญิง' },
    ]
    const uniOptions = [
        { value: 'KMUTNB', label: 'KMUTNB' },
        { value: 'KMITL', label: 'KMITL' },
        { value: 'KMUTT', label: 'KMUTT' },
        { value: 'TU', label: 'TU' }
    ] 
    const Yes_No_Options = [
        { value: 'YES', label: 'มีหอพักอยู่แล้ว' },
        { value: 'NO', label: 'ยังไม่มีหอพัก' },
    ]
    const [genderChoice, setGenderChoice] = useState("")
    const [userChoice, setUserChoice] = useState("")
    const [alreadyChoice, setAlreadyChoice] = useState("")
    //Resize Image moss
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
    */

    const inputValue =name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value});
    }
    const changeOnClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        //formData.append("UNI",userChoice)
        formData.append("ID",ID);
        formData.append("UNI",userChoice)
        formData.append("already",alreadyChoice);
        formData.append("name",nameChoice);
        formData.append("gender",genderChoice);
        formData.append("age",age);
        formData.append("year",year);
        formData.append("detail",detail);
        formData.append("telephone",telephone);
        formData.append("price",price);
        formData.append("Image",fileName);

        
        
        axios
            .post(`${process.env.REACT_APP_API}/roomate/create`,formData)
            .then((response)=> {
                console.log(formData)
                Swal.fire(
                    'แจ้งเตือน','สร้างโพสต์สำเร็จ','success')
                //props.history.push("/")
                //alert(response.data))
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
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
    <div>
        <div className="head-container">
                <div className="head">
                    <h1>ประกาศหารูมเมท</h1>
                </div>
            </div>
        <div className="container">
            <div className="form_container">
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label>มีหอพักแล้ว หรือยัง</label>
                        <Select isClearable={false} className='react-select'options={Yes_No_Options}  onChange={choice => {setAlreadyChoice(choice.value);yesnoCheck(choice)}}/>
                    </div>
                    <div id="ifYes">
                        <div className="form-group">
                            <label>ชื่อหอพัก</label>
                            <div className="input">
                                <input type="text" classname="form-control"  onChange={handleChange} value={nameChoice} />
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
                        <img src={fileName.newImage} alt="" /> 
                    </div>
                    <div className="form-group">
                        <label>มหาวิทยาลัย</label>
                        <Select isClearable={false} className='react-select'options={uniOptions}  onChange={(choice) => setUserChoice(choice.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>เพศ</label>
                        <Select isClearable={false} className='react-select'options={genderOptions}  onChange={(choice) => setGenderChoice(choice.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>อายุ</label>
                        <div className="input">
                            <input type="text" classname="form-control" value={age} onChange={inputValue("age")} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>ชั้นปี</label>
                        <div className="input">
                            <input type="text" classname="form-control" value={year} onChange={inputValue("year")} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>รายละเอียด </label>
                        <div className="input">
                        <textarea classname="form-control" value={detail} onChange={inputValue("detail")} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>ราคา ต่อเดือน</label>
                        <div className="input">
                            <input type="numberic" classname="form-control" value={price} onChange={inputValue("price")} required/>
                    </div>
                    </div>
                    <div className="form-group">
                        <label>เบอร์โทร ติดต่อ</label>
                        <div className="input">
                            <input type="tel" pattern="[0-9]{10}" value={telephone} onChange={inputValue("telephone")} required/>
                        </div>
                    </div>
                    <div className="submit">
                        <input type="submit" value="          Submit         " className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
export default RoomateCreate;


