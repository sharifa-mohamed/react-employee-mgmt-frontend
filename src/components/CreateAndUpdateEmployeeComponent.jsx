import React, {  useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateAndUpdateEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        console.log("id>>>" + id)

        if (id !== "_add")
            EmployeeService.getEmployeeById(id).then(
                (res) => {
                    let emp = res.data;
                    setFirstName(emp.firstName);
                    setLastName(emp.lastName);
                    setEmail(emp.email);
                }
            )

    }, [id]);

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value)
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value)
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value)
    }

    const createOrUpdateEmployee = (event) => {
        event.preventDefault();
        let employee = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        if (id === '_add') {
            console.log('add employee => ' + JSON.stringify(employee))
            EmployeeService.createEmployee(employee).then(res => {
                navigate('/employees')
            })
        }

        else {
            console.log('updated employee => ' + JSON.stringify(employee))
            EmployeeService.updateEmployee(id, employee).then(res => {
                navigate('/employees')
            })
        }
    }

    const cancel = () => {
        navigate('/employees')
    }

    const getTitle = () => {
        if (id === '_add')
            return <h3 className='text-center'>Add Employee</h3>

        else return <h3 className='text-center'>Update Employee</h3>
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {getTitle()}
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

                                <button className='btn btn-success' onClick={createOrUpdateEmployee} >{(id === '_add') ? 'Save' : 'Update'}</button>
                                <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );

}

export default CreateAndUpdateEmployeeComponent;
