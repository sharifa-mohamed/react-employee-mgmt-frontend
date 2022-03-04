import React, { Component, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        console.log("id>>>" + id)
        EmployeeService.getEmployeeById(id).then(
            (res) => {
                let emp = res.data;
                setFirstName(emp.firstName);
                setLastName(emp.lastName);
                setEmail(emp.email);
            }
        )

    }, id);

    const changeFirstNameHandler = (event) => {
        console.log("name change")
        setFirstName(event.target.value)
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value)
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value)
    }

    const updateEmployee = (event) => {
        event.preventDefault();

        let employee = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        console.log('updated employee => ' + JSON.stringify(employee))
        EmployeeService.updateEmployee(id, employee).then(res => {
            navigate('/employees')
        })
    }

    const cancel = () => {
        navigate('/employees')
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className='text-center'>Update Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder='First Name' name='firstName' className='form-control'
                                        value={firstName} onChange={changeFirstNameHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder='Last Name' name='lastName' className='form-control'
                                        value={lastName} onChange={changeLastNameHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Email: </label>
                                    <input placeholder='Email' name='email' className='form-control'
                                        value={email} onChange={changeEmailHandler}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={updateEmployee} >Update</button>
                                <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );

}

export default UpdateEmployeeComponent