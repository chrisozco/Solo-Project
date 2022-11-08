import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, NavLink, Link } from 'react-router-dom'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
const API = process.env.GOOGLE_API_KEY 

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

    const logout = (e) => {
        axios.get('http://localhost:8000/api/logout',{withCredentials:true})
            .then((res)=>{
                console.log('logged out')
                navigate('/logreg')
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDQ9IdON3vpCcS9cb4W4hD4ciBH7OGXJ3E'
    })

    const center = { lat: 47.6062, lng: -122.3321 }

    if (!isLoaded) {
        return(<div><p>Maps Error</p></div>)
    }

    return(
        <div className='bg-dark'>
            <div className='bg-dark fluid d-flex justify-content-around align-items-center mb-4'>
                <h1 className='text-success col-5'>StrEats</h1>
                <div className='col-5'>
                    <button onClick={logout} className="btn btn-danger">Logout</button>
                    <NavLink to="/home" className="m-3 btn btn-success">Home</NavLink>
                    <NavLink to="/post/new" className="m-3 btn btn-light">Post</NavLink>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-around align-items-center'>
                <div className='col-5'>
                    <div className='card shadow-white mb-5'>
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
                    <GoogleMap
                        center={center}
                        zoom={15}
                        mapContainerStyle={{width: '600px', height: '600px'}}>
                        <Marker position={center} />
                    </GoogleMap>
                </div>
            </div>
        </div>
    )
}

export default Detail