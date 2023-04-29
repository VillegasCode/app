import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //Procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        console.log("El valor de título es " + title);
        console.log("El valor de contenido es " + content);
        await axios.post(URI, {
            title: title,
            content: content})
        navigate('/')
    }

    return (
        <div>
            <h3>Create a new post</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value) }
                        type="text"
                        className='form-control'
                        required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Content</label>
                    <input
                        value={content}
                        onChange={ (e)=> setContent(e.target.value) }
                        type="text"
                        className='form-control'
                        required
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateBlog