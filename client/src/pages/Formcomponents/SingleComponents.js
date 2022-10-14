import axios from "axios";
import { useState,useEffect } from "react";


const SingleComponent=(props)=>{
    const [blog,setBlog] = useState('')

    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        .get(`${process.env.REACT_APP_API}/blogs`)
        .then(response=>{
            setBlog(response)
        })
        .catch(err=>alert(err))
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            <h1>SingleComponents show</h1>
            <hr></hr>
            {JSON.stringify(props)}
        </div>
    )
}
export default SingleComponent;
//{JSON.stringify(blog)}