import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserForm(){

const[users,setUsers]=useState([]);

//writing a promise catching the data from our server
useEffect(() => {
    fetch('http://localhost:8000/user')
        .then((res) => res.json())   // ← aquí estaba el error
        .then((data) => 
            setUsers(data)).catch((err)=>
                console.log(err.message))
    },[])

    return(  
        <div className="container-xl">
    <div className="table-responsive">
            
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <Link to="/user/create" className="text-light btn btn-primary">Add new User </Link>
            
        </div>

        <br></br>

        <div className="table-wrapper">

            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fist Name <i className="fa fa-sort"></i></th>
                        <th>Last Name <i className="fa fa-sort"></i></th>
                        <th>Email</th>
                        <th>Password <i className="fa fa-sort"></i></th>
                        <th>Role</th>
                        <th>Creation Date<i className="fa fa-sort"></i></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      users &&  users.map((item)=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.role}</td>
                        <td>{item.creation}</td>
                        <td>
                            <a href="/user/view/1" className="btn btn-info btn-sm">View</a>
                            <a href="/user/edit/1" className="btn btn-warning btn-sm">Edit</a>
                            <a href="/user" className="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    </div>  
</div>   

     )
}