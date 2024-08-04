import React, { useRef, useState } from 'react'
import EditForm from './EditForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EmpFunctions({ deleteUser, id }) {

    return (
        <div style={{ display: "flex" }} className='gap-3'>
            <Link to={`edituser/${id}`} className={`btn btn-outline-primary btn-sm`}
            >
                {"Edit"}
            </Link>
            <button onClick={deleteUser} className={`btn btn-danger btn-sm`}

            >
                {"Delete"}
            </button>
        </div>
    )
}

export default EmpFunctions