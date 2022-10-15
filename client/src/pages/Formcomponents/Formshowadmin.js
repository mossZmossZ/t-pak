import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';

const Formshowadmin=()=>{
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
            <h1>Form show Admin</h1>
            <hr></hr>
            {blogs.map((blog,index)=>(
                <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
                    <div className="col pt-3 pb-2" key={index}>
                        <Link to={`/blog/${blog.slug}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>เนื้อหา : {blog.content.substring(0,180)}</p>
                        <p className="text-muted">ผู้เขียน : {blog.author} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Formshowadmin;