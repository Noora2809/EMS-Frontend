import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link } from "react-router-dom";

function Admin() {
  const base_url = "http://localhost:8000";
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(`${base_url}/get-all-employees`);
    console.log(result.data.employees); //object->array
    setEmployees(result.data.employees);
  };
  console.log(employees);

  const DeleteEmployee = async (id) => {
    const result = await axios.delete(`${base_url}/delete-employee/${id}`); //delete employee
    alert(result.data.message);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center m-4">Employee Management System</h1>
      <div className="container">
        <p className="mb-5">
          An employee management system is technology designed to streamline
          core HR services and improve workforce productivity. Employee
          management that uses coaching to motivate and build trust with workers
          can unlock enormous human potential. Yet, communication tactics alone
          may fall short in the face of multi-generational workforces, rising
          numbers of freelance workers and complex regulations. Technology,
          whether it’s workforce management software or a human capital
          management solution, can often help business leaders maintain
          productivity more effectively in rapidly changing environments.
        </p>
      </div>

      <Link to={"/add"}>
        <a style={{ float: "right" }} className="btn btn-warning" href="">
          Add
        </a>
      </Link>

      <div className="container mb-5">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {employees.map((employee) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>
                  <div className="d-flex justify-content-evenly">
                    <Link to={`view/${employee.id}`}>
                      <i class="fa-solid fa-eye text-info"></i>
                    </Link>
                    <Link to={`edit/${employee.id}`}>
                      <i className="fa-solid fa-pen text-success"> </i>
                    </Link>
                    <i
                      onClick={() => DeleteEmployee(employee.id)}
                      className="fa-solid fa-trash text-danger"
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default Admin;

