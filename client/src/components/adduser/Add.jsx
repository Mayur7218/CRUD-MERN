import React, { useState } from 'react'
import './Add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from'axios'
import toast from 'react-hot-toast'

const Add = () => {

  const [user, setuser] = useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  });
  const navigate=useNavigate()

  const inputHandler=(event)=>{
    const {name,value}=event.target
    setuser({...user,[name]:value})
  }
  const submitform=async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:8000/api/create',user)
    .then((response)=>{
      toast.success(response.data.msg,{position:"top-right"})
      console.log(response);
      navigate('/')
    }).catch((error)=>{
      console.log(error);
    })
  }
    return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Add new user</h3>
      <form className='addUserForm' onSubmit={submitform}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input type="text" onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='First name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input type="text" onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Email address' />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input type="password"  onChange={inputHandler} id='password' name='password' autoComplete='off' placeholder='Password' />
        </div>
        <div className="inputGroup">
          <button type='submit'>Add user</button>
        </div>
      </form>
    </div>
  )
}

export default Add