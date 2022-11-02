import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
    const [allPosts, setAllPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts',{withCredentials:true})
        .then((res) => {
            console.log(res)
            setAllPosts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

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

    return(
        <div className='bg-dark'>
            <div className='fluid d-flex justify-content-around align-items-center'>
                <h1 className='text-success'>StrEats</h1>
                <div>
                    <button onClick={logout} className="btn btn-danger">Logout</button>
                    <NavLink to="/post/new" className="m-3 btn btn-light">Post</NavLink>
                </div>
            </div>
            <div className='flex-wrap bg-dark'>
                <h1>The Feed!</h1>
                <div className="d-flex flex-wrap justify-content-around">
                {allPosts.map((post, index) => {
                    return(
                        <div className='card col-3 mb-5 mx-2' key={index}>
                            <img src={post.image} className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title'>{post.dishName}</h5>
                                <h6 className='card-text'>{post.location}</h6>
                                <div>
                                    <Link className='btn btn-success mx-1' to={`/post/${post._id}`}>Info</Link>
                                    <Link className='btn btn-secondary mx-1' to={`/post/edit/${post._id}`}>Update</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Home