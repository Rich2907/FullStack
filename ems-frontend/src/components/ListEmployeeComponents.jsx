import React,{useEffect, useState} from 'react'
import { listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const ListEmployeeComponents = () => {
    const navigate = useNavigate();
   const [employees, setEmployees] = useState([])
    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
            
        }).catch(error => {
            console.log(error);
        })
    }, []) 

    function addNewEmployee(){
        navigate("/add-employee");
    }
    return (

    <div className='container'>
        
          <h2 className='text-center'>List of Emmployees</h2>
         <button type="button" class="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
          <table className='table table-bordered table-striped'>
            <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee first Name</th>
                <th>Employee last Name</th>
                <th>Employee Email</th>
            </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))

                }



            </tbody>
                </table>        
    </div>
  )
}
