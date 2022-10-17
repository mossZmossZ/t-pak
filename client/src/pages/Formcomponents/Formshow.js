import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import "./Formshow.css"

const Formshow=()=>{
    const [blogs,setBlogs] = useState([])

    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/blogs`)
        .then(response=>{
            setBlogs(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            <h1>Form show</h1>
            <hr></hr>
            {blogs.map((blog,index)=>(
                <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
                    <div className="col pt-3 pb-2" key={index} id="formcontainer">
                        <div className="headcontent">
                            <Link to={`/blog/${blog.slug}`}>
                                <h2>{blog.title}</h2>
                            </Link>
                        </div>
                        <p>เนื้อหา : {blog.content.substring(0,180)}</p>
                        <p className="text-muted">ผู้เขียน : {blog.author} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Formshow;