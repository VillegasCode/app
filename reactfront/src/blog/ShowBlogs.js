import axios from 'axios'
import {useState, useEffect} from react
import {link} from 'react-router-dom'

const URI = 'http://localhost/8000/blogs/'

const CompShowBlogs = () => {
     const [blogs, setBlog] = useState ([])
     useEffect( ()=>{
        getBlogs()
     },[])

     //Procedimiento para mostrar todos los blogs
     const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
     }

     //Procedimiento para eliminar un blog 
     const deleteBlog = async (id) => {
        axios.delete(`${URI}${id}`)
        getBlogs()
     }

     return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) => (
                                <tr key={ blog.id}>
                                    <td> {blog.title }</td>
                                    <td> { blog.content }</td>
                                    <td>
                                        <link to={`/edit/${blog.id}`} className="btn btn-info" > Editar </link>
                                        <button onClick={ ()=>deleteBlog(blog.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ) )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     )
}


export default CompShowBlogs