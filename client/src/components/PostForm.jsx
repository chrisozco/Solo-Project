import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'

const PostForm = () => {
    const [dishName, setDishName] = useState('')
    const [location, setLocation] = useState ('')
    const [foodType, setFoodType] = useState ('')
    const [raiting, setRaiting] = useState ('')
    const [image, setImage] = useState ('')
    const [description, setDescription] = useState ('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/posts', {
            dishName,
            location,
            foodType,
            raiting,
            image,
            description
        },{withCredentials:true})
        .then(res => {
            console.log(res)
            console.log(res.data)
            navigate('/home')
        })
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
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

    return(
        <div>
            <div className='bg-dark fluid d-flex justify-content-around align-items-center mb-4'>
                <h1 className='text-success col-5'>StrEats</h1>
                <div className='col-5'>
                    <button onClick={logout} className="btn btn-danger">Logout</button>
                    <NavLink to="/home" className="m-3 btn btn-success">Home</NavLink>
                    <NavLink to="/post/new" className="m-3 btn btn-light">Post</NavLink>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-row justify-content-around'>
                    <div className='col-5'>
                        <h2 className='text-light'>The Deets!</h2>
                        <div>
                            <label className='form-label text-light'>Dish Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={dishName} 
                                onChange={(e) => setDishName(e.target.value)} 
                            />
                            {errors.dishName ? <p className='alert alert-danger'>{errors.dishName.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label text-light'>Location:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} 
                            />
                            {errors.location ? <p className='alert alert-danger'>{errors.location.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label text-light'>Food Type:</label>
                            <select className='form-control' value={foodType} onChange={(e) => setFoodType(e.target.value)}>
                                <option >Select a Food Type!</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Indian">Indian</option>
                                <option value="Italian">Italian</option>
                                <option value="American">American</option>
                            </select>
                            {errors.foodType ? <p className='alert alert-danger'>{errors.foodType.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label text-light'>Raiting:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={raiting} 
                                onChange={(e) => setRaiting(e.target.value)} 
                            />
                            {errors.raiting ? <p className='alert alert-danger'>{errors.raiting.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label text-light'>Image:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={image} 
                                onChange={(e) => setImage(e.target.value)} 
                            />
                            {errors.image ? <p className='alert alert-danger'>{errors.image.message}</p> : null}
                        </div>
                    </div>
                    <div className='col-5'>
                        <h2 className='text-light'>Spill the Beans!</h2>
                        <div>
                            <label className='form-label text-light'>Description:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                            />
                            {errors.description ? <p className='alert alert-danger'>{errors.description.message}</p> : null}
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary mt-5'>Feed!</button>
            </form>
        </div>
    )
}

export default PostForm