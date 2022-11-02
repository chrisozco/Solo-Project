import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const LogReg = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const registerHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register',{
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        },{withCredentials:true,credentials:'include'})
            .then((res)=>{
                console.log(res)
                navigate('/home')
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{
            email,
            password,
        },{withCredentials:true,credentials:'include'})
            .then((res)=>{
                console.log(res)
                navigate('/home')
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div className='bg-dark'>
            <div>
                <h1 className='text-success'>Welcome to StrEats!</h1>
            </div>
            <div className='d-flex flex-row justify-content-around'>
                <div className='col-5 my-5'>
                    <h2 className='text-light my-2'>Register!</h2>
                    <form onSubmit={registerHandler}>
                        <div>
                            <label className='form-label text-light'>First Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className='form-label text-light'>Last Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className='form-label text-light'>Email:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className='form-label text-light'>Password:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className='form-label text-light'>Confirm Password:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                        </div>
                        <button className='btn btn-success my-5'>Join!</button>
                    </form>
                </div>
                <div className='col-5 my-5'>
                    <h2 className='text-light my-2'>Log-in!</h2>
                    <form onSubmit={loginHandler}>
                        <div>
                            <label className='form-label text-light'>Email:</label>
                            <input 
                                type="text"
                                className="form-control"
                                onChange={(e)=>setEmail(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className='form-label text-light'>Password:</label>
                            <input 
                                type="text"
                                className="form-control"
                                onChange={(e)=>setPassword(e.target.value)} 
                            />
                        </div>
                    <button className="btn btn-success my-5">Login!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogReg