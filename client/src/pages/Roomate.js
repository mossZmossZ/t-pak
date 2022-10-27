import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import logo from '../pictures/logo.png'
import logo2 from '../pictures/logo2.png'


const Roomate=(props)=>{
    const [Roomates,setRoomates] = useState([])
    
    const [imageChoice,setImageChoice] = useState([])

    const place = props.location.state.userChoice2.toUpperCase()
    
    
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/roomate/${place}`)
        .then(response=>{
            setRoomates(response.data)
        })
        .catch(err=>alert(err));
        
        
        
        
    }
    useEffect(()=>{
        fetchData()
    },[])

    /*for (let i = 0; i < Roomates.length; i++){
        console.log(i)
        if(Roomates[i].already=='NO'){
            
            console.log('no')
            if(Roomates[i].gender=="MALE"){
                return(setImageChoice(logo));
                
                
            }
            else{
                return(setImageChoice(logo2));
           
        }
        else{
            setImageChoice(logo).then()
            //return(setImageChoice(`./uploads/${Roomates[i].Image}`));
            console.log(Roomates[i].already)
            break;
            
        }
        break;
    }*/
    console.log(imageChoice)
   
    return(
        <div className="post-container">
            <h1>รูมเมท {place}</h1>
            <hr/>
            {Roomates.map((Roomate,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${Roomate.Image}`} alt="..."/>
                    <div className="info">
                        <p>ชื่อ : {Roomate.name}</p>
                        <p>มหาวิทยาลัย : {Roomate.UNI}</p>
                        <p>เพศ : {Roomate.gender}</p>
                        <p>ชั้นปี : {Roomate.year}</p>
                        <p className="text-muted">ราคาต่อคน : {Roomate.price} บาท/คน </p>
                        <p>รายละเอียด : {Roomate.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {Roomate.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/roomate/${Roomate.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
)
}
export default Roomate;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
