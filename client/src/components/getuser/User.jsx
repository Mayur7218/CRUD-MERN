import React, { useEffect,useState } from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const User = () => {
  const [users, setusers] = useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      let response=await axios.get("http://localhost:8000/api/get")
      setusers(response.data.msg)
      console.log(response);
    } 
    fetchData()
  },[]);

  const handledelete=async(id)=>{
    console.log(id);
    await axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then((response)=>{
      setusers((prevuser)=>prevuser.filter((user)=>user._id !== id))
      toast.success(response.data.msg,{position:"top-right"})
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className='userTable'>
      <Link to='/add' className='addButton'>Add users</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=>{
              return (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td className='actionButtons'>
                  <button onClick={()=>handledelete(user._id)}><i className="fa-solid fa-trash"></i></button>
                  <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                </td>
              </tr>
              )
            })
          }
         
        </tbody>
      </table>
    </div>
  )
}

export default User