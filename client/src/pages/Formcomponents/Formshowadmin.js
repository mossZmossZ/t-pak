import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";
import { getToken } from "../../services/authorize";

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

    const confirmDelete=(slug)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteBlog(slug) 
            }
          })
    }

    const deleteBlog=(slug)=>{
        //ส่งrequest ไปที่ api เพื่อลบข้อมูล
        axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`,
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(respone=>{
            Swal.fire('Deleted!',respone.data.message,'success')
            fetchData()
        })
        .catch(err=>alert(err))
        

        
    }
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
                        <Link to={`/blog/edit/${blog.slug}`}>
                            <button>Edit Blog</button>
                        </Link>
                        &nbsp;
                        <button className="btn-outline-danger" onClick={()=>confirmDelete(blog.slug)}>Delete Blog</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Formshowadmin;
