import React, { useEffect, useState } from 'react'
import EmpFunctions from '../Funcitonalites/EmpFunctions'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Listing() {

    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const userResp = await axios.get("http://localhost:8080/getUser")
        setUsers(userResp.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    useEffect(() => {
        loadUsers();
    }, [])


    return (
        <div style={{display:"flex"}}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                <EmpFunctions deleteUser={() => {deleteUser(user.id)}} id={user.id} />
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Link to={"/adduser"} className='btn btn-primary btn-lg py-1' style={{height: "40px"}}>+</Link>
        </div>
    )
}

export default Listing