import React,{useEffect, useState} from 'react'
import { listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { deleteEmployee} from '../Services/EmployeeService'





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
    function updateEmployee(id) {
        navigate(`/update-employee/${id}`);
    }
    function addNewEmployee(){
        navigate("/add-employee");
    }
    function Delete(id) {
        console.log("reachiing");
    deleteEmployee(id)
        .then((response) => {
            console.log(response.data);

            setEmployees(employees.filter(employee => employee.id !== id));
        })
        .catch((error) => {
            console.log(error);
        });
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
                <th>Actions</th>
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
                            <td>
                                <button className="btn btn-info mt-2 mb-2 me-2" onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className="btn btn-danger ml-2 me-2" onClick={() => Delete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))

                }



            </tbody>
                </table>        
    </div>
  )
}
