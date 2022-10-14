import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleComponent=(props)=>{
    /*let { slug } = useParams(); 
    useEffect(() => {
        console.log(`/something/${slug}`);
    },[]);*/

    const [blog,setBlog] = useState('')

    const fetchData=()=>{
        axios
        //props.match.params.slug}`)
        .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
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
            {JSON.stringify(blog)}
        </div>
    )
}
export default SingleComponent;
//{JSON.stringify(blog)}
//MERN คลิป 33