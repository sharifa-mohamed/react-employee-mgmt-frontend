import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            setEmployee(res.data)
        })
    }, [id]);

    const styles = {
        display: 'flex',
        flexDirection: 'row',

    }

    return (
        <div className='container'>
            <h1>View Employee</h1>
            {employee && <div className='card col-md-7 offset-3'>
                <div className='card-body'>
                    <div className='row' style={styles}>
                        <label style={{ flex: '1' }}>Employee First Name </label>
                        : <div style={{ flex: '1' }}>{employee.firstName}</div>
                    </div>
                    <div className='row' style={styles}>
                        <label style={{ flex: '1' }}>Employee Last Name </label>
                        :<div style={{ flex: '1' }}>{employee.lastName}</div>
                    </div>
                    <div className='row' style={styles}>
                        <label style={{ flex: '1' }}>Employee Email </label>
                        :<div style={{ flex: '1' }}>{employee.email}</div>
                    </div>
                </div>
            </div>
            }
        </div >

    )
}

export default ViewEmployeeComponent