import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='bg-dark col-12 fluid d-flex justify-content-around align-items-center'>
            <h1 className='text-success'>StrEats</h1>
            <div>
            <NavLink to="/home" className="m-3 btn btn-success">Home</NavLink>
            <NavLink to="/post/new" className="m-3 btn btn-light">Post</NavLink>
            </div>
        </div>
    )
}

export default NavBar