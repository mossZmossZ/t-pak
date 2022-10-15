import axios from "axios";
import { useState,useEffect } from "react";

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
            setBlog(response.data)
        })
        .catch(err=>alert(err))
        
    }
    useEffect(()=>{
        fetchData()
        //eslint-disable-next-line
    },[])
    return(
        <div className="container p-5">
            <h1>{blog.title}</h1>
            <p>เนื้อหา : {blog.content}</p>
            <p className="text-muted">ผู้เขียน : {blog.author} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
        </div>
    )
}
export default SingleComponent;
//{JSON.stringify(blog)}
//MERN คลิป 33