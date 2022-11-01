import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NavBar = () => {
const navigate = useNavigate()

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

    return (
        <div className='bg-dark col-12 fluid d-flex justify-content-around align-items-center'>
            <h1 className='text-success'>StrEats</h1>
            <div>
            <button onClick={logout} className="btn btn-danger">Logout</button>
            <NavLink to="/home" className="m-3 btn btn-success">Home</NavLink>
            <NavLink to="/post/new" className="m-3 btn btn-light">Post</NavLink>
            </div>
        </div>
    )
}

export default NavBar