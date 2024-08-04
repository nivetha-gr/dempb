import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditForm() {

    const editedName =  useRef();
    const editedUserName =  useRef();
    const editedEmail =  useRef();
    const navigate = useNavigate();
    const {id} = useParams();

    const [user, setUser] = useState({});

    const saveUser = async () => {
      if (!id) {
        await axios.post("http://localhost:8080/user",user);
      } else {
        await axios.put(`http://localhost:8080/user/${id}`,user);
      }
      navigate("/")
     
    }

    const loadUser = async () => {
      const userdata =  await axios.get(`http://localhost:8080/user/${id}`);
      setUser(userdata.data)
    }

    const editUser = (e) => {
      setUser((prev) =>({...prev,[ e.target.id]: e.target.value}))
    }

    useEffect(() => {
      if (id) {
        loadUser();
      }
    },[])

  return (
    <div className='form'>
        <input onChange={editUser} id={"name"} value={user.name} placeholder='Name'></input>
        <input onChange={editUser} id={"username"} value={user.username} placeholder='Username'></input>
        <input onChange={editUser} id={"email"} value={user.email} placeholder='Email'></input>
        <button onClick={saveUser}>{id ? "Edit" : "Add"}</button>
    </div>
  )
}

export default EditForm