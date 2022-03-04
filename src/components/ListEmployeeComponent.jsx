import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const ListemployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    const addEmployee = () => {
        //   navigate('/add-employee')
        navigate('/manage-employee/_add')
    }

    const editEmployee = (id) => {
        //   navigate('/update-employee/'+id)
        navigate('/manage-employee/' + id)
    }

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(res =>
            setEmployees(employees.filter(e => e.id !== id))
        )
    }

    const viewEmployee = (id) => {
        navigate('/view-employee/' + id)
    }

    useEffect(() => {
        EmployeeService.getEmployees().then(
            (res) => {
                setEmployees(res.data)
            }
        )
    }, []);

    return (
        <div>
            <h2 className='text-center'>Employees List</h2>
            <div className='row'>
                <button className='btn btn-primary btn-block' onClick={addEmployee}>Add Employee</button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(
                            emp =>
                                <tr key={emp.id}>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>
                                        <button onClick={() => editEmployee(emp.id)} className='btn btn-info'>Update</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => deleteEmployee(emp.id)} className='btn btn-danger'>Delete</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(emp.id)} className='btn btn-info'>View</button>

                                    </td>
                                </tr>
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default ListemployeeComponent