import { create } from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../Services/EmployeeService';



const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    firstName: " ",
    lastName: " ",
    email: " "
  });


  
  const navigate = useNavigate();


  function saveEmployee(e) {
    e.preventDefault();
    if(!validateForm()) {
      return;
    } 
    else {
    const employee = { firstName, lastName, email };
    console.log(employee);
    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigate('/employees');
    }).catch((error) => {
      console.log(error);
    });     }
}

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (!firstName.trim()) {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    } else {
      errorsCopy.firstName = " ";
    }           
    if (!lastName.trim()) {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    } else {
      errorsCopy.lastName = " ";
    }               
    if (!email.trim()) {        
        errorsCopy.email = "Email is required"; 
        valid = false;
    }   else if (!/\S+@\S+\.\S+/.test(email)) {     
        errorsCopy.email = "Email is invalid";
        valid = false;
    }   else {  
        errorsCopy.email = " ";
    }

    setErrors(errorsCopy);
    return valid;
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
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
        </div>
        <div className='form-group mb-2'>
            <label htmlFor='lastName'>Last Name</label>
            <input
                type='text'
                className='form-control'
                id='lastName'
                placeholder='Enter Last Name'
                value={lastName}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}           
                onChange={(e) => setLastName(e.target.value)}
            />
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
        </div>
        <div className='form-group mb-2'>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Enter Email'
                value={email}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
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