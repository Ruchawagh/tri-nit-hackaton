import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar2 from './Navbar2'
import BlogItem from './BlogItem'
const baseUrl = "http://localhost:8000"

function Blogs() {
    
    const [blogstate, setBlogstate] = useState([])
    

    const navigate = useNavigate()
    useEffect(() => {
        const getBlogs = async ()=>{
            const resp = await fetch(`${baseUrl}/api/blogs/getblogs`,{
                method:'GET',
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const json = await resp.json()
            setBlogstate(json)
        }
        if (!localStorage.getItem("token")) {
            navigate("/login")
            getBlogs()
        }
    }, [navigate,blogstate])

    return (
        <>
            <Navbar2 />
            <div className="container">
                <h1 className='bg-light m-5 p-2 text-center rounded'>BLOGS</h1>
                <div className="container d-flex flex-row-reverse">

                    <button type="button"  className="btn btn-warning border-dark mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Create a New Blog
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New Blog</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="tit" className="form-label">Title for New Blog</label>
                                        <input type="text" className="form-control" id="tit" placeholder="Title"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tags</label>
                                        <input type="text" className="form-control" id="tag" placeholder="Tags"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description for Blog</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Description' rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container m-5 p-3">
                {/* {blogstate} */}
                console.log(blogstate);
                {blogstate.map((e)=>{
                    return e.title
                    // return <BlogItem title="Name" desc="Dseads lorem23 lfdsalkfalksdjhflak" author="ShivaRK" date="23:90"/>
                })}
                {/* <BlogItem title="Name" desc="Dseads lorem23 lfdsalkfalksdjhflak" author="ShivaRK" date="23:90"/> */}
                </div>
        </>
    )
}

export default Blogs