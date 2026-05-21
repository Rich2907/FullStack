import { create } from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    console.log(employee);
  } 
  
  
  return (
    <div className='container mb-5' >
        <div className='row mt-5'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
<h2 className='text-center'>Add Employee</h2>
<div className='card-body'>
    <form >
        <div className='form-group mb-2'>
            <label htmlFor='firstName'>First Name</label>
            <input
                type='text'
                className='form-control'
                id='firstName'
                placeholder='Enter First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        <div className='form-group mb-2'>
            <label htmlFor='lastName'>Last Name</label>
            <input
                type='text'
                className='form-control'
                id='lastName'
                placeholder='Enter Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div className='form-group mb-2'>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <button type="button" className="btn btn-success" onClick={saveEmployee}>submit</button>
    </form>
</div>
        </div>
        </div>
        </div>
  )
}

export default EmployeeComponent