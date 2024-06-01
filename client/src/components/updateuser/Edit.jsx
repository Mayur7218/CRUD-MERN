import React,{useEffect, useState} from 'react'
import '../adduser/Add.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Edit = () => {
  const {id}=useParams()
  const navigate=useNavigate();
  const [user, setuser] = useState({
    fname:"",
    lname:"",
    email:"",
  });

  const inputHandler=(event)=>{ 
    const {name,value}=event.target;
    setuser({...user,[name]:value});
    console.log(user);

  }
  useEffect(()=>{
    const fetchData=async()=>{
      let response=await axios.get(`http://localhost:8000/api/get/${id}`)
      setuser(response.data.msg)
      console.log(response);
    }
    fetchData()
  },[id])

  const submituser=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`,user)
    .then((response)=>{
      toast.success(response.data.msg,{position:"top-right"});
      navigate('/')
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }


  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Update user</h3>
      <form className='addUserForm' onSubmit={submituser}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input type="text" value={user.fname} onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='First name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input type="text" value={user.lname} onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" value={user.email} onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Email address' />
        </div>
        <div className="inputGroup">
          <button type='submit'>Update user</button>
        </div>
      </form>
    </div>
  )
}

export default Edit