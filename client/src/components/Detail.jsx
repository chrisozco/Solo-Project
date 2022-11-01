import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Detail = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`,{withCredentials:true})
        .then((res) => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/posts/${id}`,{withCredentials:true})
        .then((res) => {
            console.log('Delete successful')
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className='bg-dark d-flex flex-wrap justify-content-around'>
            <div className='col-5'>
                <div className='card mb-5'>
                    <h2 className='card-title'>{post.dishName}</h2>
                    <img src={post.image} className='card-img-middle' />
                    <div className='card-body'>
                        <div>
                            <p>{post.location}</p>
                            <p>{post.foodType}</p>
                            <p>{post.raiting}</p>
                        </div>
                        <p>{post.description}</p>
                        <div>
                            <Link className='btn btn-success mx-1' to={`/post/edit/${post._id}`}>Update</Link>
                            <button className='btn btn-secondary mx-1' onClick={(e) => deleteHandler(post._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-5'>
                <p className='text-light'>Future Google Maps API</p>
            </div>
        </div>
    )
}

export default Detail