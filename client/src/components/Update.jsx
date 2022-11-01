import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const [dishName, setDishName] = useState('')
    const [location, setLocation] = useState ('')
    const [foodType, setFoodType] = useState ('')
    const [raiting, setRaiting] = useState ('')
    const [image, setImage] = useState ('')
    const [description, setDescription] = useState ('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`, {withCredentials:true})
        .then((res) => {
            setDishName(res.data.dishName)
            setLocation(res.data.location)
            setFoodType(res.data.foodType)
            setRaiting(res.data.raiting)
            setImage(res.data.image)
            setDescription(res.data.description)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const updatePost = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/posts/${id}`, {
            dishName,
            location,
            foodType,
            raiting,
            image,
            description,
        }, {withCredentials:true})
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

    return(
        <div>
            <form onSubmit={updatePost}>
                <div className='d-flex flex-row justify-content-around'>
                    <div className='col-5'>
                        <h2>The Deets</h2>
                        <div>
                            <label className='form-label'>Dish Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={dishName} 
                                onChange={(e) => setDishName(e.target.value)} 
                            />
                            {errors.dishName ? <p className='alert alert-danger'>{errors.dishName.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label'>Location:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} 
                            />
                            {errors.location ? <p className='alert alert-danger'>{errors.location.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label'>Food Type:</label>
                            <select className='form-control' value={foodType} onChange={(e) => setFoodType(e.target.value)}>
                                <option value="Mexican">Mexican</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Indian">Indian</option>
                                <option value="Italian">Italian</option>
                                <option value="American">American</option>
                            </select>
                            {errors.foodType ? <p className='alert alert-danger'>{errors.foodType.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label'>Raiting:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={raiting} 
                                onChange={(e) => setRaiting(e.target.value)} 
                            />
                            {errors.raiting ? <p className='alert alert-danger'>{errors.raiting.message}</p> : null}
                        </div>
                        <div>
                            <label className='form-label'>Image:</label>
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
                        <h2>Spill the Beans!</h2>
                        <div>
                            <label className='form-label'>Description:</label>
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
                <button className='btn btn-primary mt-5'>Edit Post!</button>
            </form>
        </div>
    )
}

export default Update