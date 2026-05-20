import React,{useEffect, useState} from 'react'
import { listEmployees } from '../Services/EmployeeService'

export const ListEmployeeComponents = () => {
   const [employees, setEmployees] = useState([])
    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
            
        }).catch(error => {
            console.log(error);
        })
    }, []) 

    return (

    <div className='container'>
          <h2 className='text-center'>List of Emmployees</h2>
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
