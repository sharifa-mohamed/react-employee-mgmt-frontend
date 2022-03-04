import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "https://a6cdbun7te.execute-api.ap-south-1.amazonaws.com/api/v1/employees"
//"http://employeesspringbootapp-env-1.eba-kebpe4ta.ap-south-1.elasticbeanstalk.com/api/v1/employees"
//"http://localhost:8080/api/v1/employees"
class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id)
    }

    updateEmployee(id, emp) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, emp)
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id)
    }


}

export default new EmployeeService()